# PROJECT_STATE — MCLAUGHLIN '26

## Current phase
v2 "Deluxe Edition" complete (2026-06-11). Verified via headless-Chrome
screenshots, pushed to GitHub.

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
