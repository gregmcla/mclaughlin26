# MCLAUGHLIN '26 — Personal Website

## What it is
Greg McLaughlin's personal website, themed as a AAA sports video game
career-mode main menu (MLB The Show style). Greg is the franchise player:
boot screen ("PRESS START"), player card with OVR rating, attribute bars,
career seasons (job history), achievements (side projects as unlockables),
scouting report, and free agency (contact).

## Tech stack
- Single self-contained `index.html` — vanilla HTML/CSS/JS, no build step
- WebAudio API for game-menu sound blips (mute toggle included)
- Google Fonts: Anton (display), Barlow Condensed (UI), IBM Plex Mono (stats)
- `player.jpeg` — headshot used on the player card

## How to run
```bash
cd /Users/gregmclaughlin/mclaughlin26
python3 -m http.server 7905
# open http://localhost:7905
```
Port 7905 (7901/7902 are taken by event-horizon/polycephalum).

## Content sources
Career facts come from Greg's resume (Life.io → Curalate → HGS Digital →
Laskie → Kharon → Align BA) and his project portfolio. Update the
ACHIEVEMENTS grid when new projects ship.
