# Mailing List Signup — Setup Runbook

**Goal:** turn the inert "Join the Conversation" form on `community.html` into a fully working signup that:

- Stores subscribers in a private Google Sheet Jen owns
- Sends a branded HTML welcome email from `hello@drjenniferwilson.com`
- BCCs Jen on every welcome (so she sees signups in her inbox)
- Accepts entries from the website form *and* from any other source (e.g. conference rosters Jen wants to add later)
- Filters spam via a hidden honeypot field + per-email cooldown

Total time to deploy: about **10 minutes**, all in Jen's Google Workspace account.

---

## What you need

- Sign in to Google as **`hello@drjenniferwilson.com`** (or whichever Workspace account should be the sender). The script's "from" address is whoever deploys it.
- This folder open: `site/docs/email-signup/`
  - `Code.gs` — the Apps Script source
  - `welcome-email.html` — the HTML email template Jen can edit anytime

---

## Step 1 — Create the subscribers Sheet

1. Open <https://sheets.google.com> and create a new Sheet.
2. Name it: **Conscious Practice — Mailing List**
3. Rename the first tab to **`Subscribers`** (exactly that — the script looks for it).
4. Add this header row in row 1, in this order:

   | A | B | C | D | E | F | G | H | I |
   |---|---|---|---|---|---|---|---|---|
   | Date | Name | Email | Source | Phone | City | Tags | Notes | Status |

   Bold the row, freeze it (View → Freeze → 1 row).

5. Optional: format column A as `Date time`, leave the rest as plain text.

> **Why these columns?** The script writes by matching column headers (case-insensitive, spaces/underscores ignored), so you can reorder them or add new ones (`Birthday`, `Last contact`, etc.) at any time without touching the script. Fields the form doesn't fill stay empty; manual additions can fill the rest.

---

## Step 2 — Open the bound Apps Script

1. With the Sheet open, choose **Extensions → Apps Script**. A blank Apps Script project opens, already bound to this Sheet.
2. Rename the project (top-left): **Conscious Practice — Mailing List**.

## Step 3 — Paste in the source files

1. In the left sidebar, the default file is `Code.gs`. Click it.
2. **Replace** its contents with the contents of [`Code.gs`](./Code.gs) from this folder.
3. Click the **+ → HTML** next to "Files" to add a new HTML file. Name it exactly **`welcome-email`** (Apps Script adds the `.html` automatically).
4. **Replace** its contents with the contents of [`welcome-email.html`](./welcome-email.html) from this folder.
5. Save (⌘ S / Ctrl S).

## Step 4 — Authorize the script

1. With `Code.gs` open, set the function dropdown (top toolbar) to **`doGet`** and click **Run**.
2. A permissions dialog appears. Choose the `hello@drjenniferwilson.com` account, click **Advanced → Go to Conscious Practice — Mailing List (unsafe)** (it's "unsafe" because Google warns about non-verified personal scripts; that's expected), then **Allow**.
3. You'll see "Conscious Practice mailing-list endpoint. POST only." in the execution log. Authorization is now stored.

## Step 5 — Deploy as a Web App

1. Top-right: **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Description:** `Mailing list signup endpoint`
   - **Execute as:** `Me (hello@drjenniferwilson.com)` ← important: this makes the welcome email come from Jen
   - **Who has access:** `Anyone` ← the website form is unauthenticated
4. Click **Deploy**, **Authorize access**, then **Done**.
5. Copy the **Web app URL** that appears. It looks like
   `https://script.google.com/macros/s/AKfyc.../exec`.

## Step 6 — Wire the website to the URL

Send the Web app URL to Rich. He'll paste it into `site/js/main.js`:

```js
const MAILING_LIST_ENDPOINT = 'https://script.google.com/macros/s/.../exec';
```

After that one-line change ships, the form on `community.html` is live. Test by submitting your own address — you should:

1. See the inline "You're in. Look for a welcome note in your inbox." message
2. Receive the welcome email at the address you submitted
3. See a BCC of the welcome email at `hello@drjenniferwilson.com`
4. See a new row appear at the bottom of the Subscribers Sheet

---

## Editing the welcome email later

Open <https://script.google.com/home>, find the **Conscious Practice — Mailing List** project, click into `welcome-email.html`. Edit and save. The next signup uses the new copy. No deploy needed for content edits.

> **Important:** if you redeploy the script (Deploy → New deployment), the URL **changes**. Use **Manage deployments → ✏️ → New version** instead to keep the same URL.

---

## Adding subscribers from other sources

The script accepts the same POST from anywhere. Useful patterns:

**A. Manually, from a conference list.** Open the Subscribers Sheet, paste rows in. Date column auto-fills if you use `=NOW()`; otherwise type the date. No welcome email is sent for manual additions.

**B. Programmatically, with a custom welcome email skipped.** Send a POST to the deployed URL with `send_welcome=false` in the body. Useful when you want the sheet to record an external signup but the person already received their welcome through another channel.

```bash
curl -X POST "https://script.google.com/macros/s/.../exec" \
  -d "name=Sarah Williams" \
  -d "[email protected]" \
  -d "source=conference_attendee" \
  -d "tags=midlife,events" \
  -d "send_welcome=false"
```

Available POST fields the script understands out of the box:

- `name` — full name
- `email` — required
- `source` — free-form label (`website`, `conference_attendee`, `referral`, etc.)
- `phone`, `city`, `tags`, `notes`, `status` — written to matching Sheet columns
- `send_welcome=false` — skip the welcome email
- Anything else — stashed as JSON in the `Notes` column so nothing the caller sent is lost

---

## Spam protection in place

- **Honeypot field** on the website form (`company_website`). Bots that fill every input trip it; real users can't see or focus the field. Submissions with the honeypot filled get a fake-success response and never touch the Sheet.
- **Per-email cooldown.** A submission for an email that was already sent a welcome inside the past 24 hours still appends a row to the Sheet (so Jen can see the duplicate attempt) but skips the welcome email — blocks the "use my form to spam someone" attack.

---

## What's NOT in scope here (good to know)

- **Double opt-in.** Subscribers are added immediately; no "confirm your subscription" step. Easy to add later if volume warrants it.
- **Automated unsubscribe.** Footer asks people to reply with "unsubscribe" and Jen removes them manually. Fine for low volume; revisit if the list passes a few hundred.
- **Drip campaigns / segmentation.** Apps Script handles signup + welcome only. For scheduled newsletters or automated sequences, graduate to MailerLite or Kit and import the Sheet.

---

## Files in this folder

| File | What it is |
|---|---|
| `Code.gs` | Apps Script source — paste into the Apps Script editor |
| `welcome-email.html` | HTML email template — paste into a new HTML file in the editor |
| `SETUP.md` | This runbook |
