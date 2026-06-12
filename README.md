# MCLAUGHLIN '26 — THE SHOW EDITION

Greg McLaughlin's personal website, themed as a AAA sports video game
career-mode main menu.

**Screens:** Press Start boot → Home (player spotlight + player card) ·
Career Mode (10 seasons, 6 teams, 3 acquisitions) · Attributes (animated
rating bars) · Achievements (side projects as unlockables) · Scouting
Report · Free Agency (contact). Plus a sports-wire ticker and WebAudio
menu sounds (mute toggle, persisted).

**Run it:**

```bash
python3 -m http.server 7905
# open http://localhost:7905
```

Single self-contained `index.html` — no build step, no dependencies.
Deep links work: `/#career`, `/#achievements`, etc. (skips the boot screen).
Keyboard nav: arrow keys + Enter, like a real menu.

No microtransactions.
