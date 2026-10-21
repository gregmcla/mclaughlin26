# Greg McLaughlin, personal site

## What it is
A case-study site built around one idea: "the model is not the system."
Greg builds the part around the model: the rules, the approval step, and the
record. Audience: hiring managers for Deployment Strategist, AI Strategist, and
AI partnerships roles. The previous site, a sports video game career-mode menu,
lives on at `arcade/` and is linked from the footer.

## Structure
- `index.html` home: headline, four builds as ledger entries, how I work, writing, about, contact
- `builds/` index of everything, plus four full case studies
- `about.html`, `404.html`, `robots.txt`, `sitemap.xml`
- `facts.json` the single source of truth for every number and claim. Pages carry
  values inline inside `[data-fact]` spans; `assets/facts.js` re-syncs them.
  Change a number here, not in the pages. Every value must match the résumé.
- `assets/site.css` one stylesheet. Light and dark. No build step.
- `arcade/` the old site, self-contained, with its own service worker scoped to `./`
- `sw.js` at the root is a kill switch that clears the old site's cache for returning visitors

## Design
Ledger on green paper. Paper `#E7EBE4`, ink `#15201B`, one accent `#B2302C` (stamp red) that
marks the human gate. Bricolage Grotesque for display, Source Serif 4 for body. No auto-motion,
no all-caps labels, no mono eyebrows. Reading column under 70 characters.

## Rules
- Nothing on the site states current employment or dates for any role.
- No client names from the deal firm. Describe the work, not the client.
- MCR is a simulation. Never "trading system," never "real money," never returns.
- Sections marked "Greg's note, coming" are placeholders for Greg's own words. Do not invent them.

## Run
```bash
python3 -m http.server 7905
```
Playwright with `/opt/pw-browsers/chromium` renders `og.png` and the QA screenshots.
