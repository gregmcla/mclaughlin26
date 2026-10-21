# PROJECT_STATE

## Current phase
Redesign on branch `redesign/the-model-is-not-the-system` (2026-10-21). Case-study site built around
"the model is not the system." Arcade moved to `arcade/`. Not yet merged, not yet deployed.

## Done this pass
- Home, builds index, four case studies (MicroCapRebuilder, Buyer Universe Generator, DealCloud
  connector and Debrief, AI operating system for a deal firm), about, 404
- `facts.json` plus `assets/facts.js` fact sync
- OG image 1200x630, SVG favicon, apple-touch-icon, robots, sitemap, `.nojekyll`
- Arcade service worker scoped to `arcade/`; root `sw.js` kill switch for old caches
- QA: no horizontal overflow at 390 and 1440 on all pages

## Waiting on Greg
- "What I'd do differently" for each of the four case studies, in his words
- Medium links for the Writing section
- The 2:24 applications explainer video, or we keep the MCR film link
- Domain purchase (6regory.com). Canonical and OG URLs already point there.
- Decide where the MCR film is hosted long term. Today it links to the Claude artifact page.

## Deploy checklist
1. Merge branch, enable GitHub Pages on `main`, add custom domain, enforce HTTPS
2. Confirm `sw.js` kill switch clears the old cache on a returning browser
3. Run Lighthouse once on the live URL
