# Analysis: Scout Content Studio Proposal

**For:** Jen &nbsp;·&nbsp; **From:** Rich &nbsp;·&nbsp; 2026-05-09
**Subject:** Craig Bissell, LCSW (Scout Content Studio) — Marketing Optimization Proposal dated 5/8/2026
**PDF on file:** `Jen Wilson Proposal .pdf` in this folder

This is a fair, honest read of Craig's proposal — what he gets right, what he leaves vague, what we're already planning anyway, and where we might want him.

The short version: **most of his recommendations are correct and overlap heavily with `seo-plan-v2-midlife-women.md`. The real question isn't "is he right?" — he largely is. The real question is "who runs the work?"** This document ends with a decision framework for that.

---

## Executive summary

Craig's proposal has three layers:

1. **Foundation Setup** — $1,000 one-time, 3–4 weeks of focused work. Eight specific deliverables.
2. **Optional monthly support** — four à la carte tiers ($150–$250/mo each, plus ad spend). No contract.
3. **A clear ask** — he wants Site Management included so the site and marketing live in one place; he's politely making the case to take the wheel from "your guy" (me).

He also asks one tactical question (Jacksonville office: recurring or virtual?) and offers logo work as a freebie.

**My take:** the Foundation Setup is fair, the recommendations are solid, the privacy-aware tracking instinct is excellent. The real decision is about who you want as your ongoing marketing partner — and that's a relationship + bandwidth question, not a "who's right" question.

---

## Point-by-point analysis of Craig's recommendations

Each item: what he says → what he probably means technically (where he's vague) → our take (✅ agree / ⚠️ valid but we'd do differently / 🟢 already planned in v2 / 💡 something we missed).

### "What I See" — current site issues he flags

#### 1. "No Google Business Profile"
- **What he says:** Searched name + St. Augustine + Jacksonville, couldn't find a profile. Calls it the biggest local visibility gap.
- **What he means:** Jen has no claimed Google Business Profile (the map-pack listing). For a private-pay local practice, this is the single highest-leverage SEO move.
- **Our take:** ✅ **He's 100% right.** Our own SEO research (see `seo-research-sources.md`) put this at #1 on the execution list — *"GBP is often more important than your website for local SEO."* Craig and our research agree completely. **This is the most important single move regardless of who does it.**

#### 2. "Site has the basics for AI search, but not the parts that really help you show up"
- **What he says:** Tools like ChatGPT/Claude/Perplexity/Google AI Overviews cite specific clinicians. To be one, you need clearer FAQ content, a structured credentials section, and focused specialty pages.
- **What he means (hypothesis):**
  - **"Clearer FAQ content"** = `FAQPage` JSON-LD schema markup with question/answer pairs Google and AI engines can read structurally
  - **"Structured credentials section"** = `Person` schema on the About page with properties like `hasCredential`, `alumniOf`, `hasOccupation`, plus a visible HTML credentials block (license number, NPI, PhD institution, professional memberships)
  - **"A few focused specialty pages"** = exactly the pillar pages we already specced in v2 (perimenopause, betrayal, anxiety, motherhood, caregiver, midlife identity)
- **Our take:** ✅ **Right diagnosis.** 🟢 **Pillar pages already in our v2 plan.** 💡 **He's explicit about FAQPage schema — we should bake that into every pillar page from day one.** That's a real addition we should add to v2. AI engines (especially ChatGPT and Perplexity) preferentially cite content with explicit Q&A structure.

#### 3. "Small homepage items are diluting the main message"
Three sub-items:

**a. "Other Services" block — move to its own page**
- **What he means:** The block listing Child Sexual Abuse, Teen Therapy, Adoption Home Studies, Clinical Supervision is on the homepage; it targets a different audience (parents, adoptive families, registered interns, attorneys) than the main visitor (midlife woman seeking individual therapy). Diluting the homepage's focus.
- **Our take:** ✅ **Agree completely.** This actually *strengthens* our v2 plan — those Other Services items each become specialty landing pages (which we already specced as `/adoption-home-study/`, `/clinical-supervision/`, `/forensic-clinical-services/`). The homepage block becomes a footer link or a single "Specialty Services" overview page.

**b. "Hidden descriptions tied to your photos are generic and aren't helping you get found"**
- **What he means (hypothesis):** Either image `alt` attributes that read generically ("woman smiling," "office space"), or hidden HTML elements (visually-hidden headings, aria-labels with placeholder text) that don't carry real keyword value. We should audit and either rewrite or remove.
- **Our take:** ⚠️ **Valid but needs a quick audit to confirm.** I should grep the site's HTML for image `alt` attributes and any visually-hidden text right now to see what he's referring to. This is a real on-page SEO issue if he's right.

**c. "Community page looks like a placeholder — build it out or remove from navigation"**
- **What he says:** It's not pulling weight. Either commit to it or pull it.
- **Our take:** ✅ **He's right.** It's a placeholder for "Upcoming Event" + "What We're Planning" with no real events listed. Two options: (1) build it into a real Wellness Community + Workshops page (per v2 pillar 6 thinking), (2) drop it from nav and revisit when she has events to publish. **Recommend: drop from nav for now, restore when there's content. Empty pages hurt SEO and trust.**

---

### Foundation Setup — eight deliverables ($1,000 flat)

#### 1. "Set up and optimize your Google Business Profile (categories, services, description, photos, pre-seeded Q&A)"
- **What he means:** Claim the GBP, set primary category (Psychotherapist), secondary (Counselor / Mental Health Service), list services, write the description, upload photos, and **pre-seed the Q&A section** (GBP lets the owner add their own FAQs that show in the map listing).
- **Our take:** ✅ **High-value, real work.** We can do this ourselves. Total time: 1–2 hours of execution + 15 minutes of Jen's time to verify under her Google Workspace login. **Cost if we do it: free (it's in the existing engagement). Cost via Craig: bundled into his $1,000.**

#### 2. "Add FAQ content to your homepage and contact page with the structured formatting AI tools rely on"
- **What he means:** `FAQPage` JSON-LD schema. Probably 5–10 Q&A pairs per page, written in plain language, marked up so Google's AI Overviews and ChatGPT/Perplexity can ingest them structurally.
- **Our take:** ✅ **Strong addition we missed in v2.** 💡 **We should add `FAQPage` schema to every pillar page AND the contact page.** Example FAQ for the contact page: *"Do you accept insurance?"* / *"How long is a session?"* / *"Where are your offices?"* / *"How does telehealth work in Florida?"*

#### 3. "Add a clean, machine-readable credentials block to your About page"
- **What he means:** `Person` schema in JSON-LD with properties for `hasCredential` (PhD, LCSW), `alumniOf` (her PhD institution), `hasOccupation`, `memberOf` (NASW, AAMFT?). Plus a visible HTML block with license number, NPI, professional memberships, peer-reviewed publications. The combination tells both humans and AI exactly who she is and that she's verifiable.
- **Our take:** ✅ **Easy and worth doing.** We have most of this content in `CLAUDE.md`. About 1 hour of work to write the schema + visible block.

#### 4. "Connect Google Analytics and Search Console with privacy-aware tracking"
- **What he means:** GA4 with IP anonymization, no demographics signals, no UserID, no remarketing audiences. Page-level events only, not user-path tracing through clinical content. Search Console connected for query data. Possibly Google Tag Manager for clean event firing.
- **Our take:** ⚠️ **He's right that standard GA4 is sketchy for therapy sites.** But there's a sharper option he didn't mention: **Plausible** (which we already proposed for QR tracking — see `qr-tracking-proposal.md`). Plausible is HIPAA-friendlier by design (no cookies, no IPs, no PII), $9/mo, and gives the same page-level visibility he's describing. **Recommend: skip GA4 entirely; use Plausible + Search Console.** This is actually a better stack than what Craig proposes.

#### 5. "Submit your sitemap and confirm Google can find every page"
- **Our take:** ✅ **Already done.** `sitemap.xml` exists, `robots.txt` exists, `llms.txt` exists. Just needs to be submitted to GSC once (5 min).

#### 6. "Improve image alt text across the site for both accessibility and search"
- **What he means:** Every `<img>` should have descriptive `alt` text that describes the image AND naturally includes a keyword where appropriate. Decorative images get `alt=""`.
- **Our take:** ✅ **Real work.** Needs an audit pass. Probably 1–2 hours.

#### 7. "Relocate the Other Services block to its own page"
- **Our take:** ✅ **Agree, see above.** This dovetails with our v2 specialty pages.

#### 8. "A pass for any small technical fixes from a thorough site review (broken links, hidden headings, schema gaps)"
- **What he means:** Lighthouse audit + manual review. Fix broken internal/external links, remove orphan hidden headings, add missing schema (BreadcrumbList, Article, etc.).
- **Our take:** ✅ **Standard hygiene work.** 1–2 hours.

**Foundation Setup total honest scope:** ~10–15 hours of focused work. Craig's $1,000 fee = ~$70–100/hr, which is fair-to-cheap for skilled marketing work.

---

### Optional monthly support — analysis

| Tier | Price | What he's selling | Our take |
|---|---|---|---|
| **Core Maintenance** | $250/mo | GBP fresh posts + monthly tech check + local visibility tracking + monthly written update. 2–3 hrs/mo. | Real work, fair price. The recurring GBP posts are the highest-value part — that's what keeps the local pack ranking warm. |
| **Content Add-On** | $150/mo | 2 long-form pieces/month (alternating blog posts and new service/location pages). | Cheap for what it is. **But:** the value depends entirely on quality. Generic blog posts hurt; clinical-perspective pieces in Jen's voice help. Craig is an LCSW, so he could plausibly ghostwrite well. |
| **Google Ads Management** | $225/mo + $200–600 ad spend | Local Florida campaign, scaled to budget. | Premature for now — earlier ads got 0 conversions. Should fix conversion tracking + landing pages first, then revisit. **Don't do this yet.** |
| **Site Management** | $150/mo | Day-to-day site edits, monthly tech check, domain/hosting kept current, single point of contact. | This is the line that explicitly competes with the existing arrangement (me/Rich). |

---

### Privacy-aware tracking — give him credit

Craig's framing here is excellent and clinically responsible:

> *"Standard Google Analytics can quietly link identifying details like location, device, and browsing patterns to specific pages someone visited, including clinical pages like trauma therapy or couples work. That's not the kind of data I want floating around for a therapy practice."*

He's right. This matches what we've said about Plausible for QR tracking. **The only thing I'd push back on:** he's still going with GA4 (configured carefully) when **Plausible is a cleaner answer** — purpose-built for the privacy stance he's describing. We can do better on this dimension than his stack, not worse.

---

### His Jacksonville office question

> *"Is your Jacksonville office a regular recurring location, or more of a virtual or flexible arrangement? It changes whether one Google Business Profile or two makes more sense for you."*

This is a sharp, correct question. The answer determines the entire local SEO architecture:

- **If recurring physical Jacksonville office:** two separate GBPs (one per location), each with its own address, hours, photos, and review base. Maximum local-pack reach.
- **If virtual/flexible (e.g., she takes appointments at a borrowed office occasionally):** one GBP for St. Augustine Beach with Jacksonville listed as a service area. Doesn't qualify for a separate listing under Google's policies.

**This needs a real answer from Jen before the GBP work begins** — whoever does it.

---

## What Craig doesn't address (where our v2 plan goes deeper)

His proposal is strong on **technical foundation** but light on **strategic positioning**. Things he doesn't touch that our v2 plan covers:

| Area | Craig's proposal | Our v2 plan |
|---|---|---|
| Voice rules | Not mentioned | Comprehensive — affirmative phrasing, no negatives, healing words, banned terms |
| Audience positioning | Generic "private-pay practice" | Specific: midlife women, six emotional pillars |
| Keyword research | Not provided | Detailed — primary keywords (service + location) + supporting H2s (real-language) per pillar |
| Pillar page architecture | "A few focused specialty pages" | Six fully-specced pillar pages with URLs, titles, metas, H1s, H2s, intensive routing |
| Product gap (Caregiver intensive) | Not mentioned | Identified — recommends Jen add a sixth named intensive |
| Cuts list (luxury, concierge, EMDR, narcissistic) | Not addressed | Explicit list of what NOT to do and why |
| Brand-language vocabulary | Not addressed | 10 voice-checked phrases with usage guidance |
| Specialty pages (different audience) | Mentioned in passing | Three fully-specced pages (adoption home study, clinical supervision, forensic) |

Conversely, things Craig adds that our v2 didn't:

| Area | What Craig adds |
|---|---|
| FAQPage schema | Explicit recommendation; we should integrate this |
| Person schema with credentials | Explicit recommendation; we should integrate this |
| Image alt text audit | Sharper than our v2 (we glossed it) |
| GBP pre-seeded Q&A | We hadn't specified this technique |
| Privacy-aware analytics | Real concern; we already have a better answer (Plausible) |
| Image alt audit | Sharper focus than v2 had |
| Hidden HTML audit | We didn't think to check this |

---

## What we can do ourselves — and what would justify hiring Craig

Honest table. **"Us"** = me/Rich. **"Craig"** = the proposed engagement.

| Task | Our ability | Craig's ability | Honest recommendation |
|---|---|---|---|
| Claim & set up GBP | ✅ Can do | ✅ Will do | **Us.** No specialty knowledge needed. |
| Pre-seed GBP Q&A | ✅ Can do (with Jen's input on answers) | ✅ Will do | **Us.** |
| Write FAQPage schema | ✅ Can do | ✅ Will do | **Us.** Standard JSON-LD. |
| Write Person schema for credentials | ✅ Can do | ✅ Will do | **Us.** |
| Connect GA4 / Search Console | ⚠️ Can do but recommend Plausible instead | ✅ Will do GA4 carefully | **Us with Plausible** — better privacy stance than what Craig is selling. |
| Submit sitemap | ✅ Done already, just confirm | — | **Us.** |
| Image alt text audit | ✅ Can do | ✅ Will do | **Us.** |
| Move Other Services off homepage | ✅ Can do | ✅ Will do | **Us.** |
| Lighthouse pass + small fixes | ✅ Can do | ✅ Will do | **Us.** |
| Build pillar pages (per v2) | ✅ Can do | ✅ Could do | **Us — better.** We have the voice rules, audience research, and existing relationship context. Craig is an LCSW so could write clinically credible content, but doesn't have Jen's voice library. |
| Ongoing GBP weekly posts | ⚠️ Possible but consistency requires discipline | ✅ Will do, $250/mo | **Hybrid candidate.** This is a bandwidth question. The work is simple but needs to happen *consistently*. If Jen doesn't want to remember to post, paying Craig $250/mo for it is reasonable. |
| Quarterly content (1 post/quarter) | ✅ Can do (per v2 plan) | ✅ Will do, $150/mo (2 posts/mo) | **Us — but slower cadence.** Craig's twice-monthly cadence is more aggressive. Real question: will Jen sustain the energy to review content drafts twice a month? If not, our quarterly cadence is more honest. |
| Google Ads management | ⚠️ Can do but not specialty | ✅ Real specialty, $225/mo + spend | **Hold.** Don't do ads now. Revisit only after Foundation work + first 90 days of organic data. |
| Day-to-day site edits | ✅ Already doing | ✅ Will do, $150/mo | **Us.** This is what we already do. |

---

## Where Craig is uniquely valuable (be honest)

Three things Craig brings that I genuinely don't:

1. **LCSW credibility.** When he writes clinical content, he can do it *as a peer* in the same profession. That gives the content a specific authority I can't fully match. For the **Content Add-On**, this is a real advantage — therapy blog posts written by a licensed clinician beat posts written by an outside marketer.

2. **Bandwidth for relentless consistency.** GBP posts every week, monthly tech checks, quarterly local rank tracking — this stuff is simple but it dies on the vine if it's not somebody's *job*. If Jen doesn't want to think about it, paying Craig $250/mo to make it somebody's job is rational.

3. **Specialty in this niche.** He runs Scout Content Studio and presumably has other therapy clients. He's seen what works across multiple practices, not just one. There's pattern-recognition value there.

---

## Where I'd push back on the proposal

Five quibbles, not deal-breakers:

1. **GA4 over Plausible** — Plausible is the better answer for a HIPAA-conscious therapy site. We should use it regardless of who does the work.
2. **Twice-monthly content cadence** — risky if Jen can't sustain it; realistically, one quality piece per month or quarter beats two rushed ones.
3. **$1,000 Foundation Setup** — fair price for the work, but ~80% of it is work we can do ourselves at no marginal cost to Jen.
4. **He's silent on positioning/voice** — his proposal would deliver *technically optimized* pages, but without our voice rules and midlife-women audience research, the pages risk landing as competent-but-generic.
5. **Site Management ($150/mo)** — this only makes sense if Jen wants to consolidate vendors. If she's happy with the current arrangement, the cost is duplicative.

---

## Our plan — what we do regardless of Craig

If Jen wants to move forward without Craig, or wants to do the foundation work ourselves first and only consider Craig for ongoing maintenance, here's our executable plan. **All work below is included in the existing engagement; no new fee.**

### Phase A — Foundation (1–2 weeks, mostly Rich's time)

1. **Claim and optimize Google Business Profile** (15 min of Jen + 1–2 hrs of Rich)
   - Primary category: Psychotherapist
   - Secondary: Counselor, Mental Health Service
   - Description (voice-checked, 750 chars)
   - 10 photos uploaded (use existing site imagery)
   - Pre-seeded Q&A: 8 questions covering booking, fees, telehealth, intensives, location, insurance
   - Service area: St. Augustine Beach + Jacksonville + Florida-wide telehealth (or two GBPs if Jacksonville is a real recurring office — pending Jen's answer)

2. **Add `FAQPage` schema to homepage and contact page** (1 hr)
   - 5–10 Q&A per page
   - Visible FAQ section + JSON-LD markup

3. **Add `Person` schema + visible credentials block to About page** (1 hr)
   - PhD, LCSW, license number, NPI, alma mater (if Jen approves), professional memberships

4. **Switch analytics to Plausible** (30 min + $9/mo)
   - Already proposed for QR tracking
   - Single decision serves both purposes

5. **Submit sitemap to GSC + connect Search Console** (15 min)

6. **Image alt text audit + rewrite** (2 hrs)
   - Grep all `<img>` tags
   - Rewrite generic alts to descriptive + keyword-natural

7. **Move Other Services off homepage** (1 hr)
   - Replace homepage block with single link to a new `/specialty-services/` overview page
   - That overview page links to the three specialty landing pages (adoption home study, clinical supervision, forensic) per v2

8. **Audit + fix hidden HTML elements** (1 hr)
   - Grep for `aria-label`, `visually-hidden`, `display: none` text
   - Rewrite or remove generic placeholders

9. **Community page decision** (5 min)
   - Recommend: remove from nav for now; restore when Jen has real upcoming events

10. **Lighthouse pass + small fixes** (1–2 hrs)

**Phase A total Rich time:** ~10–12 hours over 1–2 weeks. **Cost to Jen:** $0 (existing engagement) + $9/mo Plausible.

### Phase B — Pillar pages (per v2, 6 weeks)

Build the six pillar pages from `seo-plan-v2-midlife-women.md`, 1 per week, with `FAQPage` schema baked in from day one.

### Phase C — Specialty pages (3 weeks)

Build adoption home study, clinical supervision, forensic clinical services pages (per v2).

### Phase D — Decision point on ongoing maintenance

After Phases A, B, C are live (~10–12 weeks from now), decide:

- **Option 1:** Rich continues as-is, Jen self-manages GBP posts (5 min/week)
- **Option 2:** Rich continues, hire Craig for $250/mo Core Maintenance only (consistency without vendor consolidation)
- **Option 3:** Hand site + marketing to Craig as Site Management + Core Maintenance ($400/mo)

We don't have to decide now. The Phase A work is the same regardless.

---

## Recommendation

**Short version:** Do Phase A ourselves immediately. Most of Craig's Foundation Setup overlaps with work we can deliver inside the existing engagement. The one place I'd consider hiring Craig is **ongoing Core Maintenance** ($250/mo) — the consistency of weekly GBP posts is a real value-add and frees Jen from another to-do.

**The case to hire Craig for Foundation anyway:**
- You want it done in 3–4 weeks regardless of Rich's other commitments
- You value having an LCSW peer involved in the content
- You'd rather consolidate vendors

**The case to keep it with Rich:**
- It's already inside the existing relationship
- Voice rules, audience positioning, and the v2 plan are already done
- We can build the pillar pages with the brand consistency the rest of the site has

**The hybrid play (my honest recommendation):**
1. Rich runs Phase A + B + C
2. After Phase C ships, evaluate Craig for $250/mo Core Maintenance only
3. Skip Site Management duplication; skip Google Ads until conversion data warrants it
4. Send Craig a kind reply now, propose to revisit in 3 months

---

## What I need from Jen

Two things:

1. **Jacksonville office — recurring or virtual?** (Determines GBP architecture — one or two profiles.)
2. **Vendor preference.** Do you want to start Phase A with Rich now, hire Craig for Foundation, or have a 30-min call between the three of us to talk it through?

— Rich
