# QR Tracking — Implementation Spec

**Companion to:** `qr-tracking-proposal.md` (the client-facing version)
**Audience:** Rich / future Claude sessions
**Status:** Ready to implement pending client sign-off on Plausible

---

## Architecture overview

The site is static HTML hosted on GitHub Pages with DNS at GoDaddy. No server-side redirects available. The entire system is client-side:

```
QR code scanned
      ↓
Phone opens drjenniferwilson.com/go/<slug>/
      ↓
GitHub Pages serves /go/<slug>/index.html
      ↓
That page:
  1. Fires a Plausible custom event ("QR Scan" with prop: slug)
  2. Meta-refreshes (instant) to the destination URL
  3. JS fallback window.location.replace() in case meta-refresh fails
      ↓
User lands on destination (Jane App, an intensive page, etc.)
```

All scan data lives in Plausible, keyed by the `slug` custom property on a single `QR Scan` event. One event name, many props — keeps the dashboard clean.

---

## One-time setup (do this once)

### 1. Create Plausible account

- Sign up at plausible.io with the free 30-day trial (no card required)
- Add site: `drjenniferwilson.com`
- Copy the tracking snippet

### 2. Install Plausible on the site

Add to `<head>` of every HTML page. Easiest path: add to a shared include if we ever introduce one; for now, add it directly to each of the 10 HTML pages in the root.

```html
<script defer
  data-domain="drjenniferwilson.com"
  src="https://plausible.io/js/script.tagged-events.js"></script>
<script>
  window.plausible = window.plausible || function() {
    (window.plausible.q = window.plausible.q || []).push(arguments)
  }
</script>
```

The `script.tagged-events.js` variant is needed so we can fire custom events. The inline stub makes `plausible()` safe to call before the external script loads (important on the redirect page, which fires the event before the script may be fully ready).

Pages to add it to:
- `index.html`
- `about.html`
- `intensives.html`
- `fees.html`
- `expect.html`
- `community.html`
- `contact.html`
- `privacy.html`
- `terms.html`
- `good-faith-estimate.html`

### 3. Configure Plausible goals

In the Plausible dashboard → Site Settings → Goals → **Add Goal**:
- Goal type: **Custom Event**
- Event name: `QR Scan`

Plausible will auto-surface the `slug` custom prop as a breakdown once the first event fires. Confirm that prop appears in the goal's detail view after the first test scan.

---

## Per-slug setup (do this every time Jen requests a new QR code)

### Directory layout

All tracked redirects live under `/go/`. Each slug gets its own folder with an `index.html` file so the URL is clean (`/go/card/` rather than `/go/card.html`).

```
jennifer.wilson-site-redesign-main/
├── go/
│   ├── card/
│   │   └── index.html
│   ├── window/
│   │   └── index.html
│   └── spring-mailer/
│       └── index.html
```

### Redirect page template

Create `go/<slug>/index.html` with this exact template. Replace `SLUG_NAME` and `DESTINATION_URL`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <title>Redirecting…</title>
  <meta http-equiv="refresh" content="0;url=DESTINATION_URL">
  <link rel="canonical" href="DESTINATION_URL">
  <script defer
    data-domain="drjenniferwilson.com"
    src="https://plausible.io/js/script.tagged-events.js"></script>
  <script>
    window.plausible = window.plausible || function() {
      (window.plausible.q = window.plausible.q || []).push(arguments)
    };
    plausible('QR Scan', { props: { slug: 'SLUG_NAME' } });
    // Fallback in case meta-refresh is blocked
    setTimeout(function() {
      window.location.replace('DESTINATION_URL');
    }, 50);
  </script>
  <style>
    body { font-family: system-ui, sans-serif; text-align: center; padding: 3rem 1rem; color: #2D3D2D; background: #F4F3F0; }
    a { color: #2D3D2D; }
  </style>
</head>
<body>
  <p>Redirecting to Dr. Jennifer Wilson's site…</p>
  <p><a href="DESTINATION_URL">Continue &rarr;</a></p>
</body>
</html>
```

**Why meta-refresh AND JS?** Belt-and-suspenders. Meta-refresh works even when JS is disabled. JS `location.replace()` is slightly faster on modern phones and fires after the Plausible event queues, ensuring the tracking call makes it out before navigation.

**Why `noindex,nofollow`?** These redirect pages shouldn't show up in search results or dilute SEO.

**Why a 50ms setTimeout?** Gives the Plausible queue a beat to flush before the navigation interrupts it. Imperceptible to the user, reliable for the tracker.

### After creating the file

1. Commit and push to GitHub Pages. Deploy usually completes in 30–90 seconds.
2. Test the URL on your own phone: scan / visit, confirm you land on the destination, then check Plausible → Goals → QR Scan and confirm the slug appears.
3. Update `qr-slug-registry.md` with the new entry.
4. Reply to Jen with the short URL.

---

## Testing checklist (per slug)

- [ ] `https://drjenniferwilson.com/go/<slug>/` loads
- [ ] Redirects within 1 second on desktop Chrome
- [ ] Redirects within 1 second on mobile Safari
- [ ] Redirects within 1 second on mobile Chrome (Android)
- [ ] Destination URL is correct
- [ ] Plausible dashboard shows the scan under `QR Scan` goal with correct slug prop
- [ ] QR code image scans correctly from printed test (for print materials only)

---

## Slug naming rules

- Lowercase only
- Hyphens, not underscores: `spring-mailer` not `spring_mailer`
- No dates unless the code is explicitly date-bound: `card` not `card-2026`
- Use a dated slug for time-limited campaigns so the data is self-documenting: `spring-mailer-2026`
- Keep it short enough to be scannable by human eyes in the URL: `/go/card` beats `/go/business-cards-v1`
- If a QR code is replacing an old one for the same purpose, use a new slug (`card-v2`) rather than overwriting — that way the history stays clean in Plausible.

---

## What could go wrong (and how to handle it)

| Issue | Cause | Fix |
|---|---|---|
| Scan count lower than expected | Plausible script blocked by user's ad blocker | Known limitation; Plausible doesn't bypass blockers. Real but under-counted data is still directional. |
| Slug shows as `(none)` in Plausible | Redirect page missing the `props` on the event call | Edit the slug's `index.html`, confirm `plausible('QR Scan', { props: { slug: 'X' } })` is correct. |
| QR redirects but doesn't track | Plausible script didn't load before navigation | Increase the setTimeout from 50ms to 150ms. Rare — only seen on slow cellular. |
| Dashboard shows no data at all | Plausible snippet missing from site or wrong data-domain | Re-check install. `data-domain` must exactly match `drjenniferwilson.com`. |
| GitHub Pages 404 on `/go/card/` | Deploy hasn't propagated or the `index.html` has a typo | Wait 2 min, check Actions tab on GitHub for deploy status. |

---

## Cost and ownership

- **Plausible:** Jen's own account, billed to her card. Rich has admin access for setup and troubleshooting.
- **Per-slug work:** Included in the site engagement. No per-code fee to Jen.
- **GitHub Pages hosting:** Free tier, already in use. No change.

---

## Open questions (resolve with client)

1. Does Jen approve the $9/mo Plausible subscription?
2. First batch of slugs — names and destinations?
3. Self-generate QR images in Canva, or Rich delivers PNGs?
4. Does she want a monthly email summary of scan data, or will she check the dashboard on her own?

Answers get logged in `qr-slug-registry.md` under "Status notes" and in the project memory entry.
