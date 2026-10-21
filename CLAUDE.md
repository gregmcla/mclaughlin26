# McLAUGHLIN '26 · MVP Edition

## What it is
Greg McLaughlin's personal site as a 2005-era baseball video game main menu (MVP Baseball
2005 is the reference, never named on the site; "McL Sports", "It's in the résumé").
One idea underneath the jokes: "the model is not the system." Audience: hiring managers for
Deployment Strategist, AI Strategist, and AI partnerships roles.

## Structure
- `index.html` the game. Single self-contained file: splash, boot, main menu, screens
  (Home, Dynasty Mode, Owner Mode, Attributes, Farm System, Scouting Report, Free Agency),
  HR Derby, card packs, highlight reel, terminal, GM chatbot, Kruk & Kuip booth, live weather.
  Deep links `#owner`, `#career` etc. skip the boot.
- `builds/` Owner Mode case files (four full case studies) plus the Farm System index.
  Styled by `assets/case.css` in the same palette and type as the game.
- `about.html` long-form scouting file. `404.html`, `robots.txt`, `sitemap.xml`.
- `facts.json` single source of truth for numbers on the case pages; `assets/facts.js` syncs
  `[data-fact]` spans. The game carries its numbers inline; keep them matching.
- `sw.js` network-first service worker. Bump `CACHE` on every deploy.
- `manifest.json`, `icon.svg`, `player.jpeg` are the game's PWA assets.

## Design
Navy `#050b17` ground, MVP red `#e8321e` / `#ff6a3d` accent, ice `#cfe1ff` secondary.
Chakra Petch 700 for display (skewed -8deg), Barlow Condensed for UI, Barlow for case-page
body, IBM Plex Mono for labels. The CSS variables are still named `--gold` and `--cyan`
from the old theme; they hold red and ice now.

## Rules
- Nothing on the site states current employment or dates for any role.
- No client names from the deal firm. Describe the work, not the client.
- MCR is a simulation. Never "trading system," never "real money," never returns.
- Sections marked "Greg's note, coming" are placeholders for Greg's own words. Do not invent them.

## Rules, continued
- Kharon "+60% pipeline", HGS 55%/45%, Curalate $4M book: Greg confirmed these are supportable.
  If that changes, they live in Dynasty Mode, the highlight reel, and the card set.
- Mainwork, Common Engine, Systemheld do not appear on the site.

## Run
```bash
python3 -m http.server 7905
```
Playwright with `/opt/pw-browsers/chromium` renders `og.png` (a boot-screen screenshot) and QA shots.
