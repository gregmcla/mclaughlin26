# PROJECT_STATE — MCLAUGHLIN '26

## Current phase
v5 "No Ceiling Edition" complete (2026-06-12). Verified via headless-Chrome
screenshots + live API check, pushed to GitHub.

## v5 additions ("take a limitless pill and GO CRAZZY")
- LIVE STADIUM CONDITIONS: real Tampa weather via open-meteo (no key) —
  topbar shows live temp/conditions/night moon; real rain spawns canvas
  rain particles + a RAIN DELAY ticker headline + booth commentary.
  Graceful .catch fallback offline.
- ASK THE GM: front-office chatbot (floating 🎙 button, `?gm=1`, `gm` in
  terminal) — 18-pattern regex brain w/ personality, typing indicator,
  linkified contact answers, live-weather answers, 4 fallbacks.
  Trophy: Press Box.
- PHOTO MODE: canvas-generated 1200×630 trading-card PNG download —
  player card (terminal `card`) or derby result card (📸 Save Card button
  on derby end screen). Trophy: Cover Athlete.
- COMMENTARY BOOTH: Jim & Chip color-commentary bubbles (bottom-left)
  reacting to screen visits, derby HRs/whiffs, GOAT mode, legendary
  pulls, live rain, and idling. 12s rate limit.
- CRT MODE: `crt` in terminal — scanlines, vignette, flicker, saturation.
- LIVE SPECTATORS: drifting 👁 attendance counter in topbar (click it).
- sw.js v2: navigations now network-first (stale-page bug fixed) —
  REMEMBER: bump CACHE version on every future deploy.
- 17 visitor trophies total.

## v4 additions ("GO EVEN HARDER")
- CARD PACKS: full pack-opening system — foil pack shake/rip animation,
  3 cards dealt face-down, 3D flip reveals with rarity outlines/sounds
  (legendary = fanfare + fireworks), 21-card set (3 LEG / 5 EPIC / 7 RARE /
  6 COM), pity rule (guaranteed rare+ per pack), collection persisted
  (`mcl_cards`), NEW/DUPLICATE tags. `?packs=1`. Trophies: Wax Ripper,
  Master Set.
- HIGHLIGHT REEL: 9-slide broadcast cinematic of the career with gold
  flash cuts, whoosh/thump transitions, announcer narration per slide,
  progress dots, click-to-advance, ends on Free Agency. `?reel=1`.
  Trophy: Showtime.
- Derby HALL OF FAME: arcade 3-initial entry (click/arrows/typing),
  seeded top-5 leaderboard (GSM/AI/PE/LOI/NDA), persisted `mcl_derby_lb`,
  qualifying-score detection. Trophy: Hall of Famer.
- FIREWORKS engine in the FX canvas (rockets + bursts with pop sounds) —
  fires on GOAT mode, MVP+ derby, legendary pulls, reel finale, master set.
- PWA: manifest.json + icon.svg + sw.js (cache-first, offline-capable,
  installable fullscreen landscape).
- Menu now 9 items (font scaled down to fit); 15 visitor trophies total.

## v3 additions ("cracked out AI engineer typeshit")
- HOME RUN DERBY: fully playable canvas mini-game in the menu — timing-based
  swings at pitches labeled with deal terms (LOI, EARNOUT, RE-TRADE…),
  10 pitches, distance physics, ranks (BENCH WARMER→GOAT), bat-crack +
  crowd-roar synthesis, persisted high score, 2 trophies (Dinger, Derby
  Champ). Launch: menu item, `derby` in terminal, or `?derby=1`.
- Procedural chiptune soundtrack: 16-step WebAudio sequencer @112 BPM —
  kick/snare/hat synthesis, square bass line, triangle arp through a
  feedback delay. BGM toggle in topbar, persisted.
- WebGL GLSL shader backdrop: volumetric stadium light beams (cyan/gold),
  bottom glow, vignette, scanlines; half-res render, CSS fallback.
- mcl-os terminal: backtick opens a dropdown dev console — help, whoami,
  stats, ls, cat resume.txt, trophies, derby, goat, gscott, clouds, hire,
  sudo (denied), clear, exit. Trophy: Terminal Velocity. `?term=1` works.
- Attract mode: 60s idle → arcade demo loop cycles screens with a
  blinking DEMO MODE banner; any input exits.
- AudioContext gesture-resume; ticker hints for derby + terminal.

## v2 additions ("BRING IT TO THE NEXT LEVEL")
- Studio splash ("McL INTERACTIVE presents") → loading bar with joke
  status lines ("BACKTESTING GSCOTT…") → PRESS START title
- SpeechSynthesis stadium announcer on start ("Now entering The Show…")
- Holographic player card: 3D mouse tilt + foil shine (pointer:fine only)
- Canvas FX layer: ambient stadium dust + confetti bursts
- Diagonal 3-bar wipe transition between screens + noise whoosh sound
- Animated radar hex chart on Attributes (canvas)
- Visitor meta-achievements (8 trophies, localStorage, toast popups,
  counter in topbar): First Pitch, Stat Nerd, Read The File,
  Completionist, Audiophile, Up Up Down Down, Joystick Jockey, The Closer
- Konami code → GOAT MODE (OVR 100, crown, gold hue shift, confetti,
  fanfare, announcer) — toggleable
- Gamepad API: Start/A to boot, d-pad/stick navigation, B = home
- Swinging stadium spotlight beams, ticker pause-on-hover, favicon,
  OG meta tags, prefers-reduced-motion support

## Done
- Boot screen ("PRESS START", keyboard + click, boot sound riser)
- Main menu shell: skewed game-menu nav, topbar, arena atmosphere
  (glows, diagonal stripes, light sweep, grain overlay)
- Home: player spotlight hero + player card (photo, OVR 99 badge,
  bio grid, career stat line, CTAs)
- Career Mode: 6 seasons (Life.io → Curalate → HGS Digital → Laskie →
  Kharon → Align BA) with acquisition badges + career totals
- Attributes: 10 animated rating bars w/ count-up numbers, elite tier
- Achievements: 8 unlocked project trophies + 2 hidden (hobby) cards
- Scouting Report: narrative + strengths/development areas
- Free Agency: contact rows (email, LinkedIn, GitHub, Tampa FL)
- Sports-wire ticker (10 headlines, seamless loop)
- WebAudio menu blips (hover/select), mute toggle persisted in localStorage
- Deep links (#career etc.) skip boot; hashchange handling; keyboard nav
- Responsive layout for <1100px

## Open bugs
- None known.

## Backlog
- Deploy to GitHub Pages / custom domain
- OG image + social meta tags for link previews
- Possible: controller (Gamepad API) navigation for full console feel
