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

The site is aimed at **vibe coders**: people who make games by directing AI. Every topic follows the same pattern: the easy AI path first, free assets second, and a do-it-yourself option for when learners want more control.

- **Foundations (start here, fully written):** four story-driven courses in a documentary-narrator voice, 55 chapters in total.
  - **F1 What Makes a Game** (18 chapters): loops, anatomy, genres, mechanics, controls, programming as a concept, engines, platforms, the AI crew (coding agents, MCP, generators), visual direction, characters, animation, sound, interfaces, story, level design, idea to release.
  - **F2 History of Video Games** (12 chapters): from Tennis for Two to live services and AI tools, with timelines.
  - **F3 2D & 2.5D Worlds** (12 chapters): sprites, cameras and parallax, isometric, tiles, level design, map structures, movement, combat, enemies, progression, procedural generation, case studies.
  - **F4 3D Worlds** (13 chapters): space and transforms, first/third-person cameras, controls, models and materials, lighting, shaders, environments, 3D level design, world structure, animation, 3D mechanics, performance, case studies.
- **Hands-on ladder (outlined, not yet written):** courses on one shared 1–5 difficulty scale. Level 1: Browser 2D and Godot 2D; Level 2: Browser 3D and a Godot platformer; Level 3: Godot roguelite; Level 4: Browser 3D exploration and Godot 3D adventure; Level 5: your own game. Unity and Unreal courses are listed as planned.
- **Classic Godot (code-first):** the original 55-lesson GDScript course, kept available until the new Godot levels replace it. Its lessons will become their "do it yourself" sections.
- **Libraries:** a mechanics library (135 mechanics in 13 families), a genre library (39 genres with origins and success stories), a toolkit of engines, agents, MCP servers, generators, free asset libraries and manual tools, and the concept library.
- Fourteen interactive labs, including new isometric-projection and parallax labs.

Each foundations chapter contains a narrated story opener, media slots, plain-language sections with diagrams, tables, timelines or labs, "Seen in real games" cards, a no-code activity, a "where AI fits" section with tool links and a copyable prompt, a collapsed "go deeper, without AI" section, two or three quick-check questions, and a recap with a teaser for the next chapter. Quiz options are shown in a stable shuffled order per question.

Progress from the old Foundations and Browser Games lessons does not carry over: those lesson IDs were retired and are filtered out on load. Classic Godot progress is unchanged.

The site has a learning dashboard, journey maps and chapter progress dots, course completion cards, advisory prerequisites, editable/copyable AI prompts, project checklists, resume links, theme preferences, progress export/import, and a confirmed reset. The default theme is warm paper with clay accents and serif headings, inspired by Anthropic's editorial product style; the site's identity remains Vibe Coding Games. See `ASSETS.md` for generated-art provenance.

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

1. Register stable lesson/module IDs and metadata in `src/data/catalog.ts`. IDs also identify completion and resume state; keep existing IDs stable when editing a published lesson. Each course has a `track` (`foundations`, `ladder`, or `classic`) and an `availability` (`available` or `planned`); ladder courses also set `engine`, `dimension`, and `level` (1–5).
2. Author the content. Foundations chapters live in `src/data/foundations/` and use `storyChapter()` from `lesson-builder.ts`, which turns a seed (story, hero media, sections, real games, activity, AI path, go-deeper items, questions, summary, teaser) into blocks in a fixed order. Classic Godot lessons use `authored()`. Old intro lessons and projects are kept in `src/data/archive/` (excluded from type-checking) as source material for the ladder.
3. Reference tools, mechanics, and genres by ID from `src/data/tools.ts`, `src/data/mechanics.ts`, and `src/data/genres.ts`. Tool entries record only a cost type (free, open source, free tier, paid) and a `checked` month, because prices change.

### Media slots

Chapters include `media` blocks with an ID, kind, aspect ratio, description, alt text, and a generation prompt. Without a `src`, the page shows a dashed placeholder describing what belongs there, with a copyable prompt. To fill a slot, save the file in `public/media/` and add `src: 'media/<file>'` to the slot in its chapter file (videos ending in `.mp4` or `.webm` render as looping video). Every prompt shares one style line in `src/data/foundations/media.ts`; edit it to restyle all prompts at once. Prompts describe original artwork, not screenshots of real games. The unlisted page `#/media` lists every slot as a production checklist.
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
