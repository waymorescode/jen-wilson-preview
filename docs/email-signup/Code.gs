/**
 * Conscious Practice Therapy and Wellness — Mailing list signup handler
 *
 * Receives POSTs from the community-page email form (or any other
 * source — see SETUP.md), appends the subscriber to the "Subscribers"
 * tab of the bound Google Sheet, then sends a branded HTML welcome
 * email from hello@drjenniferwilson.com.
 *
 * Schema is header-driven: the script reads the first row of the
 * Subscribers tab and writes each POST field into whichever column
 * has a matching header name (case-insensitive, spaces/underscores
 * ignored). That means you can add new columns to the Sheet at any
 * time without touching this script — fields from the POST that
 * match a header land there, fields that don't are stored in the
 * "Notes" column as JSON, and columns the POST doesn't fill stay
 * empty.
 *
 * Recommended Sheet columns (see SETUP.md for the canonical list):
 *   Date | Name | Email | Source | Phone | City | Tags | Notes | Status
 *
 * To edit the welcome email content: open welcome-email.html in this
 * project (left sidebar in the Apps Script editor) and save. No code
 * change needed — the script reloads the template on every send.
 */

// === Configuration ====================================================

// Subject line shown to the new subscriber. Edit freely.
const WELCOME_SUBJECT = 'Welcome to the Conscious Practice community';

// "From" name displayed in the recipient's inbox. Sender address is
// always the email of the Google account that deployed this script,
// so deploy as Jen (hello@drjenniferwilson.com).
const FROM_NAME = 'Dr. Jennifer Wilson, Conscious Practice';

// Address that receives a BCC of every welcome email — Jen's notice
// that someone signed up. Set to "" to disable.
const BCC_ADDRESS = 'hello@drjenniferwilson.com';

// Name of the tab inside the bound Google Sheet that stores subscribers.
const SHEET_TAB_NAME = 'Subscribers';

// Anti-spam: silently drop any submission that includes a value in this
// field name. The frontend renders a hidden input with this name that
// real users never fill; bots filling every input will trip it.
const HONEYPOT_FIELD = 'company_website';

// Anti-spam: minimum seconds between welcome emails sent to the same
// address. A bot replaying the same email won't be sent multiple welcome
// messages.
const PER_EMAIL_COOLDOWN_SECONDS = 60 * 60 * 24; // 24 hours

// === HTTP entry point =================================================

function doPost(e) {
  try {
    let payload;
    if (e.postData && e.postData.type === 'application/json') {
      payload = JSON.parse(e.postData.contents);
    } else {
      payload = e.parameter || {};
    }

    // Honeypot — if a bot filled the trap field, return a success
    // response so it can't tell it was caught, and do nothing.
    if (payload[HONEYPOT_FIELD]) {
      return jsonResponse({ ok: true });
    }

    const email = (payload.email || '').toString().trim();
    if (!email || !isValidEmail(email)) {
      return jsonResponse({ ok: false, error: 'Please provide a valid email address.' });
    }

    // Default values for fields the website form doesn't send
    const enriched = Object.assign({
      source: 'website',
      status: 'active',
      date: new Date()
    }, payload, { email: email });
    delete enriched[HONEYPOT_FIELD];
    delete enriched.send_welcome;

    appendSubscriber(enriched);

    // Send the welcome email unless the caller opts out (e.g. when Jen
    // imports a conference roster — set send_welcome=false on the POST
    // and only the Sheet row is added) or this address was just sent one.
    const skipEmail = payload.send_welcome === false ||
                      payload.send_welcome === 'false';
    if (!skipEmail && !recentlyEmailed(email)) {
      sendWelcomeEmail({ name: enriched.name, email: enriched.email });
      markEmailed(email);
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    console.error(err);
    return jsonResponse({
      ok: false,
      error: 'Something went off-script. Please try again, or email hello@drjenniferwilson.com directly.'
    });
  }
}

// Simple GET probe (browser visits, no-op).
function doGet() {
  return ContentService.createTextOutput(
    'Conscious Practice mailing-list endpoint. POST only.'
  );
}

// === Sheet append (header-driven) =====================================

function appendSubscriber(payload) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_TAB_NAME);
  if (!sheet) {
    throw new Error(
      'Subscribers tab not found. Create a tab named "' + SHEET_TAB_NAME +
      '" with the recommended column headers (see SETUP.md).'
    );
  }

  const headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const headerKeys = headerRow.map(normalizeKey);

  // Build the row in the Sheet's column order.
  const row = headerKeys.map(function (key) {
    if (key === 'date' || key === 'timestamp' || key === 'created') {
      return payload.date || new Date();
    }
    if (payload[key] !== undefined) return payload[key];
    return '';
  });

  // Stash any payload fields the Sheet doesn't have a column for in the
  // Notes column (as JSON), so nothing the caller sent is lost.
  const knownKeys = new Set(headerKeys.concat(['email', 'date', 'send_welcome']));
  const extras = {};
  Object.keys(payload).forEach(function (k) {
    const nk = normalizeKey(k);
    if (!knownKeys.has(nk)) extras[k] = payload[k];
  });
  if (Object.keys(extras).length) {
    const notesIdx = headerKeys.indexOf('notes');
    if (notesIdx >= 0) {
      const existing = row[notesIdx] ? String(row[notesIdx]) + ' ' : '';
      row[notesIdx] = existing + JSON.stringify(extras);
    }
  }

  sheet.appendRow(row);
}

function normalizeKey(s) {
  return String(s || '').toLowerCase().replace(/\s|_/g, '').trim();
}

// === Welcome email ====================================================

function sendWelcomeEmail(params) {
  const name = params.name || '';
  const email = params.email;
  const firstName = name ? name.split(/\s+/)[0] : '';
  const greetingName = firstName || 'friend';

  const template = HtmlService.createTemplateFromFile('welcome-email');
  template.name = greetingName;
  const htmlBody = template.evaluate().getContent();

  const plainBody =
    'Hi ' + greetingName + ',\n\n' +
    'Thank you for joining the Conscious Practice community. ' +
    "You'll hear from me when there's a gathering, workshop, or piece of writing worth sharing — never more than that.\n\n" +
    'Warmly,\n' +
    'Dr. Jennifer Wilson, PhD, LCSW\n' +
    'Conscious Practice Therapy and Wellness\n' +
    'https://drjenniferwilson.com';

  const options = { name: FROM_NAME, htmlBody: htmlBody };
  if (BCC_ADDRESS) options.bcc = BCC_ADDRESS;

  GmailApp.sendEmail(email, WELCOME_SUBJECT, plainBody, options);
}

// === Anti-spam: per-email cooldown ====================================
//
// Apps Script Web Apps don't expose the client IP, so we rate-limit by
// email address instead. A repeated submission of the same address
// inside the cooldown window still appends a row (so Jen sees the
// duplicate attempt in the Sheet for review) but skips the welcome
// email. This blocks "make my form spam this person" abuse.

function recentlyEmailed(email) {
  const props = PropertiesService.getScriptProperties();
  const last = props.getProperty('emailed:' + email.toLowerCase());
  if (!last) return false;
  const ageSeconds = (Date.now() - Number(last)) / 1000;
  return ageSeconds < PER_EMAIL_COOLDOWN_SECONDS;
}

function markEmailed(email) {
  PropertiesService
    .getScriptProperties()
    .setProperty('emailed:' + email.toLowerCase(), String(Date.now()));
}

// === Helpers ==========================================================

function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
