# Jenn Wilson Site Redesign — Round 2 Implementation Plan

Based on client feedback received 2026-04-01.

## SOW Alignment Check
All 16 items verified against SOW (Wilson_V1_Statement_of_Work.docx). Items 1-11, 13-15 clearly in scope. Items 12 (Giving Back) and 16 (Testimonials) are minor additions within existing pages — kept as quick wins. No new pages or features beyond the 8-page SOW scope.

## Phase 1: Structural Changes (all 3 versions)

### 1. Rename "Packages" → "Intensives"
- Nav links, page titles, section headings, file names
- A2: rename `packages.html` → `intensives.html`, update all nav references
- F2: same rename
- G2: update section heading text (single-page)
- Gallery `index.html`: update card descriptions

### 2. Remove 4-week option, make it 6 or 12 weeks only
- Update all intensive card descriptions/durations
- A2: change "4, 6, or 12 weeks" → "6 or 12 weeks"
- F2: same, plus update specific durations on individual cards
- G2: update if durations are mentioned

### 3. Add intensive pricing
- 6 weeks = $1,800 / 12 weeks = $3,200
- Add to each intensive card across all versions
- Add to fees pages (A2, F2)

## Phase 2: Bio & Credentials

### 4. Replace bio copy (all 3 versions)
- Swap in Jenn's approved bio text (main bio, how I work, outside the office)
- See CLAUDE.md for exact approved copy
- Update about.html (A2, F2) and about section (G2)

### 5. Update credentials everywhere
- Remove "5,000+ clinical hours" references — replace with expertise statements
- Remove PhD focus area descriptions (was incorrect)
- Use approved credential language:
  - Hero/card: "Dr. Jennifer Wilson, PhD, LCSW — 20+ years. Clinical expertise, empathic listening, deep breaths, real transformation."
  - Trust bar/about: "Court-recognized forensic clinician specializing in clinical assessment and trauma treatment."
  - Supporting: "Recognized as an expert in forensic and clinical work." / "Extensive clinical training and expertise in treating trauma."
- Update Areas of Focus list: Life Transitions, Relationship Patterns, Identity & Purpose, Parenting, Couples, Anxiety & Overwhelm

## Phase 3: Copy & Voice

### 6. Update fees page copy (A2, F2)
- Add Jenn's approved "private pay" language
- Add the "what you're investing in" paragraph
- Add intensive pricing to fees table
- See CLAUDE.md for exact approved copy

### 7. Warm up intensive descriptions + add "what you get"
- Rewrite with more warmth, using approved word list (compassion, inspiration, healing, warmth, joy, kindness, wellness, happiness, relationships, hope, health)
- Add tangible deliverables to each card: twice-weekly sessions, between-session support, personalized tools, integration sessions, written reflections
- Voice in the affirmative only

### 8. Affirmative voice audit (ALL pages, ALL versions)
- Scan every page for "It's not..." / "I don't..." / "No pressure" / "No intake forms" / "not a..." patterns
- Rewrite each instance in the affirmative
- This is Jenn's #1 pet peeve with AI copy

## Phase 4: Enhancements

### 9. Add tagline rotation or hero subtitle
- Jenn gave us four strong taglines (see CLAUDE.md)
- Feature one as hero subtitle, place others strategically
- Section dividers, footer tagline, etc.

### 10. Replace stock photos with her real Aragon headshots
- 7 professional photos in `/Jenn Wilson/` parent folder
- Replace placeholder portrait on about sections
- Replace hero portrait where applicable
- Keep the stock women-on-cards imagery she likes

### 11. Add "What You Get" detail to each intensive card
- Beyond the description warmup in #7, add a structured list of tangible deliverables
- Model after G2's card format

### 12. Add "Giving Back" / Woman-In-Need element to A2 and F2
- G2 has: "A portion of every package goes toward supporting a Woman-In-Need Edit"
- Add similar callout near intensives section in A2 and F2

### 13. Consolidate services/intensives page structure
- A2 has both `services.html` AND `packages.html` (redundant)
- Remove `services.html`, let index cards link to intensives + expect pages
- Cleaner nav, fewer pages

### 14. Add SimplePractice booking embed placeholder
- Contact pages have placeholder text
- Add clear embed block with dimensions and fallback
- Ready for integration when she has SimplePractice set up

### 15. Fix contact FAQ to use affirmative voice
- FAQ sections are full of negative framing
- Dedicated pass since FAQs are high-visibility

### 16. Consider testimonial section for A2 and F2
- F2 has one quote already
- A2 and G2 have none
- Add placeholder quotes Jenn can replace with real ones

---

## Status

| # | Task | Status |
|---|------|--------|
| 1 | Rename Packages → Intensives | Done |
| 2 | Remove 4-week option | Done |
| 3 | Add intensive pricing | Done |
| 4 | Replace bio copy | Done |
| 5 | Update credentials | Done |
| 6 | Update fees copy | Done |
| 7 | Warm up intensives + what you get | Done |
| 8 | Affirmative voice audit | Done |
| 9 | Tagline placement | Done |
| 10 | Swap in real photos | Blocked — need to process her Aragon headshots |
| 11 | What You Get on cards | Done (merged with #7) |
| 12 | Giving Back section | Done |
| 13 | Consolidate services page | Done (A2 services.html removed in Phase 1) |
| 14 | SimplePractice placeholder | Done |
| 15 | Fix FAQ voice | Done |
| 16 | Testimonial section | Done |
