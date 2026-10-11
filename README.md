# Vibe Coding Games

A static learning platform built with React, TypeScript, Vite, Tailwind CSS, React Router, and lazy-loaded Three.js. No backend, account, API key, or paid service is required. Learning progress stays in the browser.

## Run locally

Use Node.js 22.12+ or a supported newer version. Tested with Node 24.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173/. On restricted Windows environments, use a project-local npm cache: `npm install --cache ./work/npm-cache`.

```sh
npm run check
npm run test
npm run build
npm run preview
```

The production files are in `dist/`. Serve that folder with any static host. Routing uses hashes, so the host does not need URL rewrite rules. Do not open the HTML directly with `file://`; JavaScript modules require an HTTP server.

`npm run preview` starts the included static server at http://127.0.0.1:5189/. To choose another port, use `npm run preview -- 5200`.

The default Vite base is `./`, which supports deployment beneath a subdirectory. To choose an explicit path, set `VITE_BASE_PATH` before building. PowerShell example:

```powershell
$env:VITE_BASE_PATH = '/vibe-coding-games/'
npm run build
```

Deploy the contents of `dist/`, including the generated chunks, illustration, favicon, and `downloads/`. This project has not been published to a remote host.

## What is published

- **Game Development Foundations:** three complete lessons; the remainder is explicitly labeled as curriculum previews.
- **Vibe Coding Browser Games:** three complete lessons; the remainder is explicitly labeled as curriculum previews.
- **Vibe Coding Games with Godot and AI Assets:** 55 fully authored lessons, including an optional programming bridge, 2D action roguelite, shared production systems, AI workflows and assets, 3D third-person adventure, genre adaptations, release, and an independent final project.
- Seven project plans with verifiable milestones and progressive hints; 30 searchable concepts; lesson quizzes and an expanding-interval review queue.
- Eight 2D teaching simulations and four actual Three.js labs: transforms, cameras, raycasting, and navigation. All labs have accessible controls, and interactive canvas actions have button/slider alternatives.

The site has a learning dashboard, course roadmaps, advisory prerequisites, editable/copyable AI prompts, project checklists, resume links, theme preferences, progress export/import, and a confirmed reset. The default theme is warm paper with clay accents and serif headings, inspired by Anthropic's editorial product style; the site's identity remains Vibe Coding Games. See `ASSETS.md` for generated-art provenance.

Website demos are teaching simulations. Godot exercises run in the learner's own editor. Coding agents and asset generators are external tools, not connected services.

## Godot references and verification

The course pins **Godot 4.7.2 standard edition** and typed GDScript. Release reference: https://godotengine.org/download/windows/4.7.2/. API references are linked where relevant and are also available at https://docs.godotengine.org/en/stable/.

`examples/godot-roguelite/` and `examples/godot-adventure/` are compact runnable comparison projects. Open each `project.godot` in Godot 4.7.2 and press F5. Their READMEs describe controls and intentional scope limits. Both use original placeholder geometry and require no downloaded art.

These references demonstrate complete, small playable loops; they are **not complete solutions to every course production milestone**. The course teaches larger systems through guided implementation and checks. Inventory, authored rooms, rigged animation, richer levels, settings, and full asset pipelines are learner work.

Headless engine checks cover health, invulnerability, enemy caps, upgrades/pause/restart, objective idempotency, navigation synchronization, checkpoints, defeat/respawn, completion, save/load, and invalid save preservation. Lesson examples are explained integration fragments, not standalone projects. They were reviewed against Godot documentation; not every lesson fragment has been executed as its own project. No claim is made that generated third-party assets have been imported or tested.

To execute the reference checks with your own Godot executable:

```sh
godot --headless --editor --path examples/godot-roguelite --quit
godot --headless --path examples/godot-roguelite --script res://tests/smoke.gd
godot --headless --editor --path examples/godot-adventure --quit
godot --headless --path examples/godot-adventure --script res://tests/smoke.gd
```

Downloaded project ZIPs are included in `public/downloads/`. To regenerate them on Windows after changing reference code, run `powershell -File scripts/package-examples.ps1` before building.

## Automated browser checks

```sh
npm run build
npm run setup:browsers
npm run test:e2e
```

The Playwright configuration uses bundled Chromium and serves the production build on port 5191 through a global setup/teardown fixture. `setup:browsers` installs its runtime into the ignored `work/browsers/` folder. For an existing Chromium executable, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE`. Set `VCG_PREVIEW_PORT` to choose another test port. The suite checks published lesson rendering, quizzes, hints, persistence, review timing, import/export/reset, projects, search, fallbacks, responsive layouts, themes, keyboard/touch lab behavior, and reduced motion. The Vitest suite checks content integrity and the storage/scheduling/pathfinding logic.

## Content authoring

`src/types.ts` defines `Course`, `Module`, `Lesson`, `Concept`, `Project`, and the discriminated `LessonBlock` union. Shared page renderers are in `src/App.tsx`; reusable lesson components are in `src/components/Learning.tsx`. Curriculum content is loaded on demand; Three.js is a separate lazy chunk.

1. Register stable lesson/module IDs and metadata in `src/data/catalog.ts`. IDs also identify completion and resume state; keep existing IDs stable when editing a published lesson.
2. Author a seed in the appropriate `godot-*.ts` or `intro.ts` file. `authored()` in `lesson-builder.ts` creates structured blocks from the individually written teaching, model, worked example, question, practice steps, hints, checks, optional AI prompt, and summary.
3. Add or connect concepts in `src/data/concepts.ts`, and link project milestones in `src/data/projects.ts`.
4. Run the curriculum checks. Every published Godot lesson must contain substantive prose, a worked example, a model or simulation, practice, verification, explanatory feedback, and retrieval practice. Questions use zero-based answer indexes.

Keep unfinished material marked `preview`. Previews cannot be completed, do not enter reviews, and are excluded from completion totals. Optional modules can be skipped through the experienced-programmer fast track; core prerequisites remain advisory and never lock learning.

## Local data

`src/progress.ts` validates and migrates the versioned storage shape; `src/state.tsx` connects it to React. The current key is `vibe-coding-games:v1`. Persisted fields include completed lessons, quiz attempts, project milestones, concept review records, practiced dates, theme, resume lesson, and current project. Unknown retired IDs are filtered during import. Invalid or future schemas are rejected before changing current history. Corrupt/unavailable storage yields a recoverable warning and session-local progress.

New concepts return after one day. Successful reviews expand through 1, 3, 7, 14, and 30 days; a missed answer returns after five minutes. Import replaces local history; export first if you need both versions. Reset requires a confirmation dialog.

## Accessibility and boundaries

Keyboard focus, labeled controls, a functional skip link, responsive navigation, readable code scrolling, light/dark themes, and reduced motion are supported. Optional game-feel sound and shake start disabled. The course discusses readable feedback, contrast, remapping, and release accessibility in the learner's games.

This version focuses on English, local learning, and desktop/web game targets. Multiplayer, hosted execution of Godot, accounts/sync, and exhaustive store-publishing guides are outside scope. Progress can be moved between devices with a JSON export.

Original code and reference geometry are MIT licensed; see `LICENSE`.
