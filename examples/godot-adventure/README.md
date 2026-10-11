# Wayfinder reference

Open `project.godot` with Godot **4.7.2 standard edition**, then F5.

WASD/arrows move relative to the camera. Mouse turns the view; Space jumps; E interacts; F or left click attacks in a forward cone. Escape opens a menu and releases the mouse. Look toward a beacon or gate and approach within reach before using E.

Collect three green beacons, then interact with the amber gate. The cream camp restores health and records a checkpoint. Defeat respawns at that checkpoint while preserving objectives. The menu can save/load versioned progress in `user://wayfinder.json`. A new game starts a fresh run; saved progress remains available through Load.

The reduced comparison project includes a collision-aware spring-arm camera, physics movement, actual raycasts, a small manually authored navigation mesh, path-following enemies with telegraphed attacks, a completion flow, pause, checkpoint respawn, and validated saves. All geometry and materials are generated from primitive definitions at launch; no external art is required.

The course goes further: rigged characters, AnimationTree blends, imported GLTF art, settings/rebinding, richer levels, production profiling, and export workflows remain learner milestones. The manual navmesh here demonstrates an explicit route; the course teaches baking from actual geometry with proper clearance.

Read `scripts/world.gd` as the composition root, then `player.gd`, `enemy.gd`, and `interactable.gd`. Original reference code/geometry is MIT; see LICENSE.
