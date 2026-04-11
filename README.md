# Dr. Jennifer Wilson — Conscious Practice

Static HTML website for Dr. Jennifer Wilson, PhD, LCSW (Conscious Practice), a private-pay psychotherapy practice in Florida.

- **Live site:** [drjenniferwilson.com](https://drjenniferwilson.com)
- **Hosting:** GitHub Pages
- **Domain:** GoDaddy (DNS only — all A records point at GitHub Pages)
- **SSL:** Let's Encrypt (auto-provisioned by GitHub Pages)

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, credentials card, services overview, testimonials, final CTA |
| `about.html` | Dr. Wilson's bio, approach, credentials, community |
| `expect.html` | What to expect from the therapy process |
| `intensives.html` | Detailed information on the five named intensive programs |
| `fees.html` | Rates, private-pay approach, superbills |
| `community.html` | Workshops, events, local connection |
| `contact.html` | Booking, consultation call details, FAQ |
| `privacy.html` | HIPAA-compliant privacy policy |
| `terms.html` | Terms of service and treatment agreement |
| `good-faith-estimate.html` | Federal No Surprises Act disclosure |

## Assets

- `css/styles.css` — all styles (single stylesheet)
- `js/main.js` — tagline rotation, mobile menu toggle, smooth scroll, intersection observer animations
- `images/` — photos and the lotus logo (SVG)
- `logo-exports/` — PNG versions of the lotus logo for upload to third-party services (SimplePractice, Google Workspace, etc.)

## Brand

- **Primary sage green:** `#2D3D2D`
- **Light sage:** `#E8EDE4`
- **Accent sage:** `#7A8B6F`
- **Cream:** `#F4F3F0`
- **Heading font:** Cormorant Garamond (serif)
- **Body font:** Lato (sans-serif)

## Booking

Every "Schedule a Consultation" button points to Dr. Wilson's SimplePractice client portal at `jennifer-wilson6099.clientsecure.me`, opening in a new tab. See `docs/email-02-simplepractice-SEND.md` for the current decision about whether to upgrade SP to Plus for the embedded widget experience.

## Key files for future work

- `CLAUDE.md` — client voice rules, approved copy, intensive names, credentials language. Read before making any copy changes.
- `llms.txt` — public-facing AI-agent-readable description of the practice (served at `drjenniferwilson.com/llms.txt`)
- `CNAME` — custom domain config for GitHub Pages
- `docs/email-02-simplepractice-SEND.md` — ready-to-send email with full booking platform decision (SP vs Jane App)
- `docs/google-workspace-hipaa-recommendation.md` — notes for future email setup
- `docs/2026-04-11-*.md` — archived SimplePractice support docs for reference

## Dev notes

- No build step. Pure HTML/CSS/JS.
- To preview locally: `python3 -m http.server 8765` from the repo root, then visit `http://localhost:8765`.
- Deploys automatically on push to `main` via GitHub Pages.
