# SimplePractice Website Integration — Options and Proposal

Hi Jenn,

You asked what options SimplePractice gives us for integrating booking into your website with your branding, so it feels like one seamless experience instead of "click a button, land on someone else's platform." I dug into SimplePractice's official documentation and have a clear recommendation.

---

## What's happening right now

Every "Schedule a Consultation" button on your site currently opens a new browser tab to `jennifer-wilson6099.clientsecure.me` — your SimplePractice client portal. It works and it's the standard approach, but there are two things worth improving:

1. **Visual handoff.** Visitors go from your cream-and-sage branded site to SimplePractice's generic booking UI. It's a short trip but the visual break is noticeable.
2. **They leave your site.** You can't style the booking experience itself, and you lose the sense of continuity.

SimplePractice actually offers a better path: their **Appointment Request Widget**, which embeds the booking flow directly into your site with styling that matches your brand. Here's how it works and what it would take.

---

## Option 1 — Quick branding wins inside SimplePractice (free, 15 minutes)

Before we touch the website at all, there are settings inside SimplePractice that make the booking page feel more like you. These cost nothing and take about 15 minutes:

- **Upload your logo** (appears at the top-left of the portal)
- **Set your brand color** (primary button/accent color — sage green from your site)
- **Write a custom welcome message** that greets people when they arrive (in your voice)
- **Customize appointment type labels** (e.g., "Consultation Call" instead of SP's generic labels)
- **Verify your contact info and office locations** show correctly

I can write you a short checklist of exactly which settings to update and suggested text, if you want to go this route as a quick win. This alone would noticeably tighten the current experience.

**Cost: $0.** **Required plan: any plan, including Starter.**

---

## Option 2 — Embedded Appointment Request Widget ⭐ (recommended)

**What it is:** SimplePractice's official **Appointment Request Widget**. Instead of linking out to the SP booking page, we embed their widget directly into your site. When a visitor clicks "Schedule a Consultation," a booking flow appears **right on your page** — full-screen modal over the top of your content, styled with your button and colors, wired to your SP calendar.

This is where the real "one seamless experience" happens.

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
- **The button styling.** We replace SimplePractice's default button class with your site's existing button classes (`btn-primary`, `cta-button`, etc.). Same cream/sage colors, same border radius, same font, same hover behavior as every other button on your site. The visitor cannot tell it's an embedded widget vs. a regular site button.
- **Where it appears.** We can place it on any or all pages — homepage, Intensives, Contact, About — all sharing the same underlying widget logic.

### What we cannot customize

The **inside of the modal** (the actual calendar grid, time pickers, intake form fields) is SimplePractice's UI. We can't restyle that part. Your control extends to about 80% of the experience — everything up to and including the button, plus the frame around the modal. The calendar itself stays SimplePractice's design.

Honestly, that 80% is where it counts. Once someone is in the booking flow, they're focused on picking a time, not admiring the visual design.

### How it gets built

SimplePractice generates a code snippet for you in your account:

**Settings → Scheduling and inquiries → Widgets → Copy code**

That snippet is three pieces: a small CSS block, an HTML button with data attributes wiring it to your SP account, and a JavaScript loader. I then take that snippet, strip out SimplePractice's default styling, and replace the button class with your site's existing button classes — so the widget appears as a perfectly-branded button inline with your site.

It's about a 1–2 hour task on the development side, most of which is careful testing.

### One thing the SimplePractice documentation warns about (and why it doesn't affect us)

SimplePractice's support docs include this note about GoDaddy:

> *"We've received feedback from customers that the widget isn't able to fully expand on sites hosted through GoDaddy, but you can try working with one of their representatives to embed the code successfully."*

**This warning does not apply to us.** SimplePractice is talking about sites built with GoDaddy's **Websites + Marketing Website Builder** — the drag-and-drop tool that strips out or sandboxes custom JavaScript. Your site is pure HTML hosted on GitHub Pages, which has no such restrictions. The widget will work perfectly.

I wanted to surface this in case you see that warning yourself while researching and worry about it. The warning is about a different product.

### Plan requirement ⚠️

**The Appointment Request Widget is only available on the SimplePractice Plus plan.**

From the SP docs (verbatim):

> *"The appointment request widget is only available on the Plus plan."*

You may already be on Plus. Please check by going to **Settings → Plan** in your SimplePractice account and confirming the tier. Tell me which plan you're on and I can move forward from there:

- **If you're on Plus already** → we can build this as soon as the main website launch is complete. Zero additional cost.
- **If you're on Essential or Starter** → you'd need to upgrade to Plus to use this feature. Plus costs more per month, but you also get other features like the integrated contact form widget and a few scheduling enhancements. The monthly upgrade is typically in the $15–35/mo range, but please verify current pricing in your SP account.

My honest take: for a therapist with a strong brand, Plus is worth it. But it's your call — we can also stay with Option 1 (in-SP branding only) and keep the current link-out approach, which works fine on any plan.

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

## My recommendation, in order

1. **Do Option 1 immediately** — it's free, takes 15 minutes, and cleans up the current experience noticeably. Send me a yes and I'll send you the exact checklist to paste into your SP settings.

2. **Confirm your SimplePractice plan** — check Settings → Plan and tell me what tier you're on. This determines whether Option 2 is available now or requires an upgrade.

3. **Do Option 2 after the main website launch** — the embedded widget. This is the real integration win. I'll handle the code; you just need to copy the widget code from your SP account and paste it into an email to me when it's time to build.

4. **Revisit Option 3 later** as a phase two if needed.

5. **Skip Option 4** — it's not worth the engineering hours.

---

## Cost summary

| Option | Ongoing cost | Setup | Required plan |
|---|---|---|---|
| **1. Quick SP branding wins** | $0 | 15 min (you) | Any |
| **2. Embedded widget ⭐** | Plus plan required | 1–2 hours (me) | Plus |
| **3. Contact form embed** | Included with Plus | 1 hour (me) | Plus |
| **4. Custom API build** | High dev cost | Significant | — |

---

## What I need from you to start

1. **Your current SimplePractice plan** — check Settings → Plan and reply with the tier name (Starter, Essential, or Plus).

2. **A yes to Option 1** and I'll send the free quick-wins checklist for inside your SP account.

3. **A yes to Option 2** (if you're on Plus, or willing to upgrade). Once you confirm, I'll ask you to grab the widget code from **Settings → Scheduling and inquiries → Widgets → Copy code** and send it my way.

That's it. From the moment you send me the widget code and confirm Plus plan, the embedded booking experience can be live on your site within a couple of days.

— Rich

---

### Reference links (SimplePractice official docs)

- [Adding the appointment request widget to your website](https://support.simplepractice.com/hc/en-us/articles/115004734123-Adding-the-appointment-request-widget-to-your-website)
- [Customizing your appointment request widget](https://support.simplepractice.com/hc/en-us/articles/41956916333325-Customizing-your-appointment-request-widget)
- [Previewing the appointment request widget](https://support.simplepractice.com/hc/en-us/articles/41956868349581-Previewing-the-appointment-request-widget)
- [SimplePractice pricing comparison](https://www.simplepractice.com/pricing/)
