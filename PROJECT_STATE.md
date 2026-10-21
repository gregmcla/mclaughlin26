# PROJECT_STATE

## Current phase
v6 "MVP Edition" on branch `redesign/the-model-is-not-the-system` (2026-10-21). The game is the site
again, rethemed from The Show to MVP Baseball 2005, with the case-study content folded in as Owner
Mode. Not yet merged, not yet deployed.

## Done this pass
- Retheme: navy and MVP red, Chakra Petch display, McL Sports splash, "It's in the résumé",
  Dynasty Mode, Kruk & Kuip booth, Farm System
- New Owner Mode screen: four case files linking to `builds/*.html`, restyled to the game
- Content integrity: no calendar dates anywhere, card says Free Agent, no "real money" or
  "trading system", degree is Risk Management & Insurance, GM bot / terminal / ticker / reel /
  cards / photo card all updated to match
- Fixed a long-standing router bug (menu buttons without a screen threw on every navigation,
  which also made the Completionist trophy unreachable)
- Phone breakpoint at 700px; atmosphere layer clipped so nothing scrolls sideways
- OG image is a boot-screen screenshot; `sw.js` cache bumped to v4
- QA: no horizontal overflow at 390 and 1440 on every screen and page, no JS errors

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
