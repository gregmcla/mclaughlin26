# MCLAUGHLIN '26 — THE SHOW EDITION

Greg McLaughlin's personal website, themed as a AAA sports video game
career-mode main menu.

**Flow:** studio splash → loading bar ("BACKTESTING GSCOTT…") →
PRESS START → stadium announcer calls your name → main menu.

**Screens:** Home (holographic 3D-tilt player card) · Career Mode
(10 seasons, 6 teams, 3 acquisitions) · Attributes (animated bars +
radar hex chart) · Achievements (side projects as unlockables) ·
Scouting Report · Free Agency (contact). Sports-wire ticker, diagonal
wipe transitions, particle atmosphere, WebAudio menu sounds.

**For the visitor:** 11 meta-achievements with trophy toasts (try
finding them all), Konami code → **GOAT MODE**, and full Gamepad API
support — yes, you can browse this website with a controller.

**Cracked tier:**
- **HOME RUN DERBY** — a playable mini-game. Swing at term sheets and
  earnouts. 10 pitches, real timing windows, persisted high score.
  (`?derby=1` to jump straight in)
- **Procedural chiptune soundtrack** — a 16-step sequencer written in
  raw WebAudio: synthesized kick/snare/hats, square bass, delay-fed arps.
- **GLSL shader backdrop** — volumetric stadium beams rendered in WebGL.
- **mcl-os** — press `` ` `` for the hidden terminal. Try `gscott`,
  `clouds`, `sudo`, `hire`. (`?term=1`)
- **Attract mode** — leave it idle 60s and it demos itself like an arcade
  cabinet.

**Final boss tier:**
- **CARD PACKS** — rip Series 26 wax. 21-card set, weighted rarity pulls
  with a pity rule, 3D flip reveals, fireworks on legendaries, persistent
  collection. (`?packs=1`)
- **HIGHLIGHT REEL** — a broadcast-style career cinematic, narrated live
  by the stadium announcer. (`?reel=1`)
- **HALL OF FAME** — beat the derby leaderboard and etch your initials,
  arcade style.
- **Fireworks engine** — rockets, bursts, synthesized pops.
- **Installable PWA** — service worker, offline play, fullscreen app.

**Limitless tier:**
- **Live stadium conditions** — the scoreboard pulls *actual Tampa
  weather*. If it's really raining in Tampa, it rains on the website
  and the ticker calls a rain delay.
- **ASK THE GM** — a front-office chatbot that answers questions about
  Greg, scouts the derby, and negotiates contracts. (`?gm=1`)
- **Photo Mode** — generates downloadable trading-card PNGs of the
  player card or your derby result, drawn on a canvas.
- **Commentary booth** — Jim & Chip call everything you do, live.
- **CRT mode** — type `crt` in the terminal. Enjoy 1994.
- **Live attendance** — 👁 spectator count in the top bar. You count too.

**Run it:**

```bash
python3 -m http.server 7905
# open http://localhost:7905
```

Single self-contained `index.html` — no build step, no dependencies.
Deep links work: `/#career`, `/#achievements`, etc. (skips the boot screen).
Keyboard nav: arrow keys + Enter, like a real menu.

No microtransactions.
