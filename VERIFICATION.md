# Verification — 8 October 2026

- `npm run check`: passed.
- `npm run build`: passed; production files in `dist/`.
- `npm run test`: 10 checks passed, including content IDs/references, all 55 authored Godot lessons, honest previews, local persistence, corrupt data, import validation, review scheduling, and pathfinding.
- `npm run test:e2e`: 16 checks passed against the static production build with Chromium 156. Includes all 61 published lessons, completion/resume, quizzes/hints, project persistence, search/raycast, expanding reviews, valid and invalid import, export/reset, advisory prerequisites/fast track, keyboard and touch labs, both themes, mobile overflow, reduced motion, focus/skip navigation, missing routes, and reference downloads.
- Both Godot reference games passed their headless smoke checks using the official Godot 4.7.2 Windows binary. The download was checked against the official release asset SHA-256.
- `npm audit --omit=optional`: 0 vulnerabilities reported.

The homepage, roadmap, lesson, code example, and project screenshots were visually reviewed. The illustration loads locally and was generated with the built-in imagegen tool; see ASSETS.md.

The Codex in-app browser could not connect to the sandbox's local HTTP server. Browser checks and screenshots were produced by Playwright against the actual static build. On the user's computer, run `npm run preview` from this project and open http://127.0.0.1:5189/.

Limits: introductory courses intentionally have three full lessons each plus marked previews. Reference games are compact comparison projects; expanded course milestones remain learner work. The reference scripts were executed in Godot; every individual lesson integration fragment was not executed separately. No remote hosting/deployment was performed.
