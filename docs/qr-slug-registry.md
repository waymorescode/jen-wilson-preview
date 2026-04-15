# QR Slug Registry

Single source of truth for every tracked short URL on `drjenniferwilson.com/go/*`.
Update this file every time a new slug is created, retired, or repointed.

**Implementation reference:** `qr-tracking-implementation.md`
**Client-facing proposal:** `qr-tracking-proposal.md`

---

## Active slugs

| Slug | Full URL | Destination | Used on | Created | Status notes |
|---|---|---|---|---|---|
| _(none yet — awaiting client sign-off)_ | | | | | |

## Retired slugs

| Slug | Retired on | Reason | Replaced by |
|---|---|---|---|
| _(none)_ | | | |

---

## How to add a new slug

1. Confirm slug name follows the naming rules in `qr-tracking-implementation.md`
2. Create `go/<slug>/index.html` from the template in the implementation spec
3. Commit and push, wait for GitHub Pages deploy
4. Run the testing checklist
5. Add a row to the **Active slugs** table above with:
   - Slug
   - Full URL (`https://drjenniferwilson.com/go/<slug>/`)
   - Destination URL
   - Where it's being used (business card, window sign, spring mailer, etc.)
   - Created date (YYYY-MM-DD)
   - Any notes
6. Reply to Jen with the short URL

## How to retire a slug

1. Decide: delete entirely (dead link) or leave the redirect in place (old print materials might still be in circulation)
2. For most cases: **leave the redirect file in place** — the cost is zero and it preserves continuity for any already-printed material
3. Move the row from Active to Retired
4. Fill in retired date and reason
5. If a replacement exists, note the replacement slug
