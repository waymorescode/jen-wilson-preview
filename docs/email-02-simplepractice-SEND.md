# READY-TO-SEND EMAIL — Copy everything below the first horizontal rule into Gmail

**Subject line to type into Gmail:**
`A quick but important booking platform question — worth 5 minutes`

**Attachments to add in Gmail:**
- `logo-exports/lotus-logo-512.png`

---

Hi Jenn,

I wanted to run something through with you that's a little bigger than I originally planned. When you asked about SimplePractice branding and URL customization options, I dug into SimplePractice's documentation carefully. The short version is that SimplePractice *can* solve the URL and branding problem — but only by upgrading your plan from Essential to Plus (around $30/month more). That upgrade unlocks an embedded booking widget that keeps everything at `drjenniferwilson.com` without any URL change, which is genuinely the clean solution for what you're trying to achieve.

**However** — and this is why I'm writing a longer email than planned — the fact that you're still on your SimplePractice trial is actually a huge opportunity. Once you start booking real clients on SimplePractice, switching platforms becomes a painful migration project. Right now, while your SP account is essentially empty, switching is free. And there's a competitor called **Jane App** that I think is worth looking at seriously before you commit to SimplePractice. Jane supports custom subdomains (like `book.drjenniferwilson.com`) for client portals out of the box, with a real SSL certificate, and it's typically less expensive than SimplePractice Essential — let alone Plus. It's used by thousands of US therapists, it's HIPAA compliant, and the client-facing design is noticeably more modern.

I've written up the full comparison and three clear paths forward — (A) evaluate Jane App for 1 week before committing, (B) stay on SimplePractice and upgrade to Plus for the embedded widget, or (C) stay on SimplePractice Essential and apply a set of free branding quick-wins. All three are legitimate; it depends on how much time you have, how important URL branding is to you, and how attached you already are to SimplePractice's way of doing things. My honest recommendation is Path A (evaluate Jane first), because this is the only moment in your practice's life when switching is free.

I've also included the free Quick Wins Checklist at the end of this email — 7 small settings changes inside SimplePractice that will noticeably improve the current branding experience. **Please do this step today regardless of which path you choose**, because it takes only 15 minutes, it's free, and even if you end up switching to Jane, you can recreate the same branding on Jane's portal in the same amount of time. I've also attached your lotus logo as a PNG you can upload in step 1 of that checklist.

Read through everything below, take whatever time you need, and reply with your path choice. My summary of what I need from you is at the very bottom.

Warmly,
Rich

---

# Part 1 — Booking Platform Integration: Options and Proposal

You asked what options we have for integrating booking into your website with your branding, so it feels like one seamless experience instead of "click a button, land on someone else's platform." I dug into SimplePractice's official documentation, thought hard about the URL question, and also want to flag a second platform worth evaluating before you commit — especially since you mentioned you're still on your SimplePractice trial.

This proposal covers:

- What's happening on your site right now
- Why the URL can't easily stay at `drjenniferwilson.com` without an upgrade or switch
- A time-sensitive question: **is SimplePractice actually the right platform?** (Jane App alternative)
- Five SimplePractice-specific integration options if you stay
- A clear three-path decision framework
- What I need from you to move forward

---

## What's happening right now

Every "Schedule a Consultation" button on your site currently opens a new browser tab to `jennifer-wilson6099.clientsecure.me` — your SimplePractice client portal. It works and it's the standard approach, but there are three things worth improving:

1. **Visual handoff.** Visitors go from your cream-and-sage branded site to SimplePractice's generic booking UI. It's a short trip but the visual break is noticeable.
2. **The URL changes.** Visitors see `jennifer-wilson6099.clientsecure.me` in their browser address bar instead of `drjenniferwilson.com`. For some people this is a subtle trust signal that they've left your practice and landed somewhere else.
3. **You can't style the booking page itself** using your website's styles, so you lose visual continuity.

SimplePractice actually offers a better path: their **Appointment Request Widget**, which embeds the booking flow directly into your site with your URL and your branding. Here's how it works and what it would take.

---

## A quick note on the URL question

You might be wondering: *"Can we just make SimplePractice show up at `drjenniferwilson.com` instead of `clientsecure.me`?"*

Short answer: **not without upgrading SimplePractice to the Plus plan.** Here's why:

- SimplePractice does have a "custom domain" feature, but it's designed for their separate *Professional Website* product (a landing page SP hosts for you). It only allows one custom domain per account, and critically, it **does not support subdomains** (like `schedule.drjenniferwilson.com`).
- Your `drjenniferwilson.com` domain is already serving your real website, so we can't point the same domain at SimplePractice — that would take your website offline.
- DIY workarounds (pointing a subdomain CNAME at `clientsecure.me`) don't work because SimplePractice's SSL certificate isn't valid for your domain. Visitors would get a browser security warning.
- GoDaddy "URL masking" (wrapping SP in an invisible iframe) sounds like a solution but SimplePractice blocks iframe embedding for security reasons. It breaks.

**Within SimplePractice, the one real solution is the embedded booking widget in Option 2 below** — which keeps everything at `drjenniferwilson.com`, never leaves your site, and never shows a different URL. That's exactly what the widget does. But it requires upgrading to the Plus plan.

If staying on Essential is important, Option 1 (free branding tweaks inside SP) plus Option 5 (a branded landing page on your site that softens the transition) are the best fallbacks.

**But before we commit to any SimplePractice path, there's a better question worth asking first.**

---

## Before committing to SimplePractice — please read this section

**You're still on a SimplePractice trial**, which means you haven't yet built up a year of client records, billing history, custom documentation templates, or muscle memory inside their system. That's a hugely valuable window of flexibility — and it closes quickly once you start booking real clients and processing real sessions.

**While you're still in this empty-slate window, it's genuinely worth 1 week of evaluation to decide whether SimplePractice is even the right platform**, or whether a competitor like **Jane App** is a better fit for what you actually need.

### Why I'm bringing up Jane App specifically

I looked at this honestly, from the perspective of "what does Jenn's practice actually need?", and Jane is the one alternative that solves the exact problem you're asking about (URL branding) without requiring you to pay for a tier upgrade.

**What Jane App is:** a full HIPAA-compliant practice management platform that handles everything SimplePractice handles — scheduling, client portal, notes, billing, telehealth, superbills — with some genuinely different design choices. It's used by thousands of mental health practices in the US and Canada, and has a reputation for being significantly more modern and design-forward than SimplePractice.

**Why it's interesting for your specific situation:**

1. **Custom subdomain support out of the box.** Jane lets you point something like `book.drjenniferwilson.com` directly at your client portal, with a real SSL certificate that Jane provisions and maintains. Visitors clicking "Schedule a Consultation" on your main site would land at `book.drjenniferwilson.com` — still your domain, still your brand — not at a third-party URL. **This is the exact feature SimplePractice explicitly does not offer.**

2. **Embedded booking widgets** included in the base plan, not locked behind an upgrade. (This needs verification with Jane sales for the current pricing tier, but historically this has been the case.)

3. **Stronger branding controls** — logo, colors, fonts, welcome text, client-facing email templates, appointment type naming. More knobs to turn than SimplePractice offers.

4. **Cleaner, more modern client-facing design.** Jane's client portal looks and feels less like "medical software" and more like a boutique service. For a private-pay practice where premium feel matters, this is a meaningful difference.

5. **Pricing comparable to or lower than SimplePractice.** Jane's solo-practitioner tier is typically around $54/month — already less than SP Essential at $69/month, and way less than SP Plus at ~$99/month. So you'd potentially get *more* flexibility for *less* money.

6. **Fewer feature gates.** SimplePractice charges for features like the appointment widget and contact form widget by locking them to the Plus tier. Jane's pricing model historically bundles more into the base plan.

### What Jane App might NOT do as well

Being honest about the downsides:

- **Jane was originally built for multi-disciplinary health practices** (physical therapy, massage, chiropractic) and later grew into mental health. Some therapy-specific documentation templates and workflows are less mature than SimplePractice's.
- **Insurance billing** is less mature than SimplePractice — but you're private pay, so this isn't a factor for you.
- **Migration from SimplePractice would involve data export/import** — but since you're on trial and haven't built anything meaningful yet, there's essentially nothing to migrate. This is the whole reason to do this evaluation *now* instead of later.
- **You'd have a learning curve on a new platform.** Also trivial right now since you haven't committed to SimplePractice's workflows yet.

### How to evaluate this in 3–7 days (no cost)

This doesn't need to be a long project. Here's a concrete evaluation plan:

1. **Don't cancel your SimplePractice trial yet.** Trials can run in parallel; there's no conflict.

2. **Sign up for a Jane App free trial** at [jane.app](https://jane.app). They offer a free trial period (typically 30 days) with no credit card required.

3. **Spend 30 minutes inside each product** doing the same setup tasks:
   - Configure your client portal (logo, colors, welcome message)
   - Create a test appointment type for a "Consultation Call"
   - Configure a basic intake form
   - Walk through the client-facing booking flow as if you were a prospective client

4. **Contact Jane's sales team directly** with this specific question:

   > *"I want to embed a booking widget on my custom HTML website and also point a subdomain like `book.drjenniferwilson.com` at my Jane client portal with a valid SSL certificate. Is this supported? What tier do I need? Does Jane provision the SSL certificate automatically, or do I need to manage it myself?"*

   Write down their answer.

5. **Compare directly:**
   - Which client-facing booking flow feels warmer and more professional?
   - Which setup experience was easier for you?
   - Which one has the features you need at the price you want?
   - Which one supports your URL branding goals without forcing a plan upgrade?

6. **Make the decision.** Commit to one, cancel the other's trial.

### My honest take

**If Jane's custom subdomain feature is real and works as advertised on their base plan**, and its client-facing UX feels good to you, then Jane is almost certainly the right answer — you'd get better branding, better URL handling, and potentially lower cost than SimplePractice Plus, all without the pain of switching later.

**If SimplePractice feels more therapy-specific and comfortable** for how you practice, and you're willing to pay $30/month extra to solve the URL problem via the Plus upgrade, then stay with SimplePractice.

**Either answer is legitimate** — the point is not to pick Jane *because it's new and shiny*, but to avoid locking into SimplePractice by default just because it's the first platform you signed up for. One week of evaluation now could save you a year of frustration later.

---

## Option 1 — Quick branding wins inside SimplePractice (free, 15 minutes)

Before we touch the website at all, there are settings inside SimplePractice that make the booking page feel more like you. These cost nothing and take about 15 minutes. The full checklist is in Part 2 of this email.

**Cost: $0.** **Required plan: any plan, including Starter.**

---

## Option 2 — Embedded Appointment Request Widget ⭐ (recommended if staying with SP)

**What it is:** SimplePractice's official **Appointment Request Widget**. Instead of linking out to the SP booking page, we embed their widget directly into your site. When a visitor clicks "Schedule a Consultation," a booking flow appears **right on your page** — full-screen modal over the top of your content, styled with your button and colors, wired to your SP calendar.

This is where the real "one seamless experience" happens inside the SimplePractice ecosystem.

### What the visitor experience looks like

1. Visitor is reading your homepage
2. They click your sage-colored **Schedule a Consultation** button — the same button style you have everywhere else on the site
3. A full-screen modal fades in over your page, showing your real SP availability calendar
4. They pick a time that works, fill in their name/email/phone, and submit
5. The request lands in your SimplePractice account as a new appointment request — you accept or decline it from your SP dashboard just like any other inquiry
6. They see a friendly "Thank you, Dr. Wilson will be in touch shortly" confirmation and close the modal
7. They're still on your site, still feeling like they had one warm, continuous interaction with you

### What we can customize (your brand feel)

Based on SimplePractice's official customization guide, here's what we control:

- **The button text.** Change "Request Appointment" to anything — "Schedule a Consultation," "Book Your Consultation Call," whatever fits.
- **The button styling.** We replace SimplePractice's default button class with your site's existing button classes. Same cream/sage colors, same border radius, same font, same hover behavior as every other button on your site. The visitor cannot tell it's an embedded widget vs. a regular site button.
- **Where it appears.** We can place it on any or all pages — homepage, Intensives, Contact, About — all sharing the same underlying widget logic.

### What we cannot customize

The **inside of the modal** (the actual calendar grid, time pickers, intake form fields) is SimplePractice's UI. We can't restyle that part. Your control extends to about 80% of the experience — everything up to and including the button, plus the frame around the modal. The calendar itself stays SimplePractice's design.

Honestly, that 80% is where it counts. Once someone is in the booking flow, they're focused on picking a time, not admiring the visual design.

### How it gets built

SimplePractice generates a code snippet for you in your account:

**Settings → Scheduling and inquiries → Widgets → Copy code**

That snippet is three pieces: a small CSS block, an HTML button with data attributes wiring it to your SP account, and a JavaScript loader. I then take that snippet, strip out SimplePractice's default styling, and replace the button class with your site's existing button classes — so the widget appears as a perfectly-branded button inline with your site.

It's about a 1–2 hour task on the development side, most of which is careful testing.

### Plan requirement ⚠️

**The Appointment Request Widget is only available on the SimplePractice Plus plan.**

You're currently on Essential, so using this option requires upgrading to Plus. The monthly difference is roughly $30 more per month (~$360 per year). Plus also unlocks the contact form widget (Option 3) and a few other scheduling features.

---

## Option 3 — Add the integrated contact form as a second touchpoint

SimplePractice has a separate feature called the **integrated contact form widget** — a lead-capture form (name, email, message) that embeds on your site. Visitors who aren't ready to commit to picking a time can instead send you a message, which lands directly in your SimplePractice inquiries inbox.

**My take:** Nice to have, not urgent. I'd suggest we revisit this after Option 2 is live and we see how clients are using it. If you notice a lot of people clicking "Schedule" and then bailing, the contact form gives them a softer alternative.

The contact form is also included in the Plus plan. Same requirement as Option 2.

---

## Option 4 — Fully custom booking form (not recommended)

I want to mention this for completeness so you know what's off the table.

**What it would be:** Build our own booking form in your site's exact style, and sync submissions into SimplePractice behind the scenes using their API.

**Why not:** SimplePractice's public API is limited and doesn't cleanly support public-facing appointment creation. You'd pay a lot in development hours to gain maybe 15% more visual polish than Option 2 gives you for free (after you're on Plus). The ceiling for "branded booking with SimplePractice" in the real world is Option 2, and that's already very good.

---

## Option 5 — Branded "preparing to book" landing page (new, works on Essential)

**What it is:** A new page on your site at `drjenniferwilson.com/book` that's warm, branded, and explains what to expect from the consultation call before visitors click through to SimplePractice.

**Example structure:**

> **Booking your consultation call**
>
> The first step is a complimentary 15-minute conversation. Here's what to expect:
>
> - *What we'll talk about* — what brings you in, what you're hoping for, whether we're aligned
> - *How long it takes* — 15 minutes, relaxed pace
> - *What happens next* — if we're a good fit, we schedule your first session
>
> When you're ready, pick a time that works:
>
> [ **Pick Your Time →** ] (big sage button to SimplePractice)

**Pros:**

- Visitors spend an extra 10 seconds on your branded domain before the handoff — feels less jarring
- Sets warm expectations so the SP booking page feels like a natural continuation
- Great UX regardless of plan
- Works on any SP plan (Essential included)
- I can build it in an hour

**Cons:**

- Does not fully solve the URL problem — after they click the final button, they still end up on `clientsecure.me`
- It's a softening, not a replacement for Option 2

**My take:** Worth doing whether or not you upgrade to Plus. It's a good booking flow either way.

---

## The decision you need to make (three paths)

Given the Jane App consideration above and your current Essential trial status on SimplePractice, there are now three realistic paths forward:

### Path A — Evaluate Jane App for 1 week (my top recommendation)

- **What it is:** Before committing to SimplePractice, spend 3–7 days evaluating Jane App in parallel. If Jane's custom subdomain feature works as advertised and its UX feels right to you, switch to Jane.
- **Cost:** $0 to evaluate (both trials are free)
- **Timeline:** 1 week of evaluation + 1 day of decision
- **Upside:** Potentially solves the URL branding problem without requiring a plan upgrade. Potentially lower monthly cost than SimplePractice. More modern UX.
- **Risk:** You might invest a week and decide Jane isn't right, and end up back on SimplePractice. Worst case: 1 week of your time, no money lost.
- **If Jane wins:** Migrate (easy since you're empty) and build the embedded widget on your site (Jane supports this)
- **If SimplePractice wins:** Go to Path B or C below

### Path B — Stay on SimplePractice, upgrade to Plus, build the embedded widget

- **What it is:** Upgrade SP to Plus plan, build Option 2 (embedded appointment request widget)
- **Cost:** ~$30/mo more on SP (~$360/year). Development time included in current engagement.
- **Timeline:** Widget can be live within 1–2 days of upgrade
- **Result:** Booking happens in a modal on `drjenniferwilson.com`. URL never changes. Fully seamless.
- **Best for:** "I love SimplePractice, I just want the URL/branding problem solved"

### Path C — Stay on SimplePractice Essential, do the free quick wins + soft landing page

- **What it is:** Apply Option 1 (free SP portal branding — see Part 2 of this email) and build Option 5 (branded landing page at `drjenniferwilson.com/book`)
- **Cost:** $0 ongoing. 15 minutes of your time for the SP settings. 1 hour of my time to build the landing page.
- **Timeline:** Live within 1–2 days
- **Result:** URL still changes when they click the final button, but the experience is warm on both sides. Good enough if URL branding isn't the top priority.
- **Best for:** "I want to minimize monthly costs and I don't want to re-evaluate platforms right now"

### How to choose

**Start with the timing question: how soon do you need this settled?**

- **Can you afford 1 week to evaluate?** → **Path A.** Jane might end up being the right long-term answer, and this is the only moment (while you're still on SP trial) that switching is free. Investing a week now could save you ~$360/year forever AND give you better branding AND give you a cleaner platform. The upside is significant and the downside is 1 week of your time.

- **Need this resolved in the next 48 hours and willing to pay for the best experience?** → **Path B.** Upgrade SP to Plus, build the widget, move on. You'll have a seamless same-domain booking experience and you can stop thinking about it.

- **Need this resolved in the next 48 hours and want to keep costs down?** → **Path C.** Free quick wins + soft landing page. Revisit the decision in 90 days after you see real booking data. You can always upgrade to Plus or migrate to Jane later (with more friction, but it's possible).

**My honest ranking for your specific situation:**

1. **Path A** (evaluate Jane first) — because you're in the rare window where switching is cheap, and the payoff could be substantial
2. **Path B** (SP Plus upgrade) — if you're confident SP is the right platform and just want the URL problem solved
3. **Path C** (Essential + free wins) — if budget or urgency rule out the others

---

## Cost summary

| Option | Ongoing cost | Setup | Required plan |
|---|---|---|---|
| **1. Quick SP branding wins** | $0 | 15 min (you) | Any SP |
| **2. Embedded SP widget ⭐** | Plus plan required | 1–2 hours (me) | SP Plus |
| **3. SP contact form embed** | Included with Plus | 1 hour (me) | SP Plus |
| **4. SP custom API build** | High dev cost | Significant | — |
| **5. Branded landing page** | $0 | 1 hour (me) | Any |
| **Path A — Jane App evaluation** | $0 to evaluate | ~3–7 days of your time | n/a |

### Monthly cost comparison (rough, verify current pricing)

| Platform / Tier | Approximate monthly cost | Key features for your use case |
|---|---|---|
| SimplePractice Starter | ~$29 | Basic — no widget, no branding controls |
| **SimplePractice Essential** (current) | ~$69 | What you have now — direct link-out, no widget |
| **SimplePractice Plus** | ~$99 | Unlocks embedded widget + contact form widget |
| **Jane App solo-practitioner** | ~$54 | Custom subdomain, embedded widget, strong branding |

*These are approximate and change frequently. Verify with each platform's pricing page before making a decision.*

---

# Part 2 — SimplePractice Portal: Free Branding Quick Wins (15 minutes)

Here's the short checklist of settings to update inside your SimplePractice account that will make the current booking experience feel more like *you* — same cream-and-sage warmth your site has. These are all free and work on your current Essential plan. **Do this step today regardless of which path you end up choosing.**

All steps happen inside SimplePractice at **https://secure.simplepractice.com** once you're logged in. None of them touch the website.

## 1. Upload your logo to the Client Portal

**Where:** Settings → Client Portal → Branding (or similar — the exact label may vary)

**What to upload:** The lotus logo attached to this email (`lotus-logo-512.png`), which I exported from the SVG on your site.

**Why it matters:** This is the first thing visitors see when they click any Schedule a Consultation button on your site. Without it, they land on a generic white SP page with no visual tie to your brand.

**Size recommendation:** The attached PNG is already 512×512 px, which is more than enough for crisp display on retina screens.

---

## 2. Set your brand accent color

**Where:** Settings → Client Portal → Appearance / Theme

**Color to use:** Your sage green: **#2D3D2D** (that's the same primary color from your website)

If SP offers multiple color inputs (primary, accent, button color), set all of them to **#2D3D2D** unless they specifically want a contrasting secondary — in which case use the lighter sage **#7A8B6F** for accents.

**Why it matters:** Buttons and highlights inside the booking flow become your sage instead of SP's default blue. Small change, significant polish.

---

## 3. Write a custom welcome message

**Where:** Settings → Client Portal → Welcome Message (or "Portal Message" / "Custom Greeting")

**Suggested text** (feel free to adjust in your voice):

> Welcome. Thank you for taking this first step. I'm Dr. Jennifer Wilson, and I'm glad you're here. On this page you can schedule a complimentary 15-minute consultation call — a real conversation about what's bringing you in and whether we're aligned. I look forward to meeting you.

This replaces whatever generic "Schedule your appointment" text SP shows by default. It makes the handoff feel warm and intentional.

---

## 4. Customize your appointment type labels

**Where:** Settings → Scheduling → Appointment Types (or "Services")

**What to do:** Look at how each appointment type is labeled. Generic SP names like "Initial Consultation" or "Individual Therapy - 50 min" are fine but can be warmer.

**Suggested edits:**

| Default SP label | Your version |
|---|---|
| Initial Consultation | Complimentary Consultation Call (15 min) |
| Individual Therapy | Individual Therapy (50 min) |
| Couples Therapy | Couples Therapy (60 min) |
| (Intensive sessions) | The Good Mama Boost / The Midlife Reset / etc. |

**Why it matters:** The visitor sees "Complimentary Consultation Call" which matches exactly what your site promised. Generic labels create friction.

If intensives aren't set up as appointment types in SP yet, leave that row alone for now — we can think through how to structure intensive booking in a later conversation.

---

## 5. Verify your practice details

**Where:** Settings → My Account → Practice Information

**Check these fields:**

- Practice name: **Conscious Practice**
- Clinician name: **Dr. Jennifer Wilson, PhD, LCSW**
- Phone number: (whatever you want public)
- Practice address: Should list **both St. Augustine Beach and Jacksonville offices**. If SP only accepts one primary address, use the St. Augustine one and mention Jacksonville in the welcome message instead.
- Timezone: **America/New_York** (Florida)

**Why it matters:** Visitors see this at the bottom of the booking page. Wrong info here breaks the illusion of a unified brand.

---

## 6. Email notification sender name

**Where:** Settings → Client Portal → Email Settings (or "Notifications")

**What to set:**

- **From name:** Dr. Jennifer Wilson (or "Dr. Jen" — your call, whichever feels right)
- **From email:** hello@drjenniferwilson.com (if SP lets you customize it — otherwise it'll come from a no-reply SP address, which is fine)

**Why it matters:** The confirmation email she sends after someone books is the second touchpoint. A confirmation email from "Dr. Jennifer Wilson" feels personal; one from "notifications@simplepractice.com" does not.

---

## 7. Appointment confirmation email copy

**Where:** Settings → Client Portal → Email Templates → Appointment Confirmation

**What to edit:** SP usually has a default like *"Your appointment is confirmed for [date]."* Customize it to something warmer.

**Suggested text:**

> Thank you for scheduling a consultation call with me. I'm looking forward to our conversation on [date] at [time]. You'll receive a reminder before our call. If anything changes or you need to reschedule, just reply to this email.
>
> Warmly,
> Dr. Jennifer Wilson, PhD, LCSW

This replaces a generic system email with something that sounds like you.

---

**That's it for the quick wins.** Total time: roughly 15 minutes, maybe 20 if you want to fiddle with the welcome message wording. Nothing here is irreversible — you can change any of it later.

Let me know if you hit any settings that aren't where I described them (SP occasionally moves things around in their UI), and I'll help you find the right place.

---

# Part 3 — What I need from you to start

**Pick one path and reply with your choice.**

1. **Path A (my recommendation):** Yes, I'll evaluate Jane App for a week before committing to SimplePractice.
2. **Path B:** I'm sticking with SimplePractice and upgrading to Plus — build the embedded widget.
3. **Path C:** I'm staying on SimplePractice Essential — build the branded landing page at `drjenniferwilson.com/book`.

**Regardless of path:**

4. Yes, I'll apply the Quick Wins Checklist inside SimplePractice this week. (Or: I'd rather you run it for me — here are my SimplePractice login credentials.) Or: Let's schedule a 15-minute screen-share and do it together.

5. Primary office address for SimplePractice portal: St. Augustine Beach or Jacksonville? (SP only allows one primary — we'll mention the other in the welcome message.)

**And one practical question if you pick Path A:**

6. Would you like a 30-minute call mid-week to compare what you're seeing in Jane vs SimplePractice?

Take your time with this — it's worth thinking through, but it isn't time-pressured beyond your SP trial expiration. Reply when you're ready.

Warmly,
Rich

---

## Reference links (SimplePractice official docs)

- [Adding the appointment request widget to your website](https://support.simplepractice.com/hc/en-us/articles/115004734123-Adding-the-appointment-request-widget-to-your-website)
- [Customizing your appointment request widget](https://support.simplepractice.com/hc/en-us/articles/41956916333325-Customizing-your-appointment-request-widget)
- [SimplePractice pricing comparison](https://www.simplepractice.com/pricing/)
- [Jane App homepage](https://jane.app/)
