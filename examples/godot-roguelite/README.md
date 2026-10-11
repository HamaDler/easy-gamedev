# Mosslight reference

Open `project.godot` with Godot **4.7.2 standard edition**, then press F5.

Move with WASD/arrows, aim with the mouse, fire with left click or Space. Collect amber XP drops, choose upgrades, and defeat 20 enemies. Escape pauses; R rebuilds the run.

This is a deliberately compact comparison project. It demonstrates independent health components, reusable scenes, typed movement, projectile cleanup, telegraphed enemy states, capped spawning, seeded choices, XP, upgrades, pause, defeat, completion, and restart. Shapes provide all art, so no external assets are required.

It is **not the full solution to every course milestone**: authored room sequences, inventory, persistent progress, sprite animation, audio, and release packaging remain learner exercises. Attempt those milestones before revealing reference code. The 3D reference demonstrates durable objective/checkpoint state.

Start reading `scripts/run.gd`, then follow the scene contracts into `player.gd`, `enemy.gd`, and `health.gd`. Add one feature at a time and preserve the acceptance checks from the website.

Original reference code and geometry: MIT; see the repository LICENSE.
