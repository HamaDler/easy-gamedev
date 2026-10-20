# Artwork provenance

Chapter illustrations use the built-in imagegen tool, original subjects, and the shared warm editorial palette. Optimized JPEGs live in `public/media/`; the exact final prompts and generation mode are recorded in `public/media/generation.json`. Chapter data retains accessible descriptions and alt text without generation instructions. The nine motion slots use explicitly captioned still illustrations.

The homepage illustration was generated using the **built-in imagegen tool**, following the imagegen skill. It is served locally as `public/assets/game-world.png` (1536 × 1024). The original is retained at `C:/Users/7amad/.codex/generated_images/01a11b73-2f5c-72d3-acde-832973815cd9/exec-923aba9a-ecfa-490f-954f-7eb7bc87616a.png`.

Final prompt:

> Create a restrained editorial illustration for the hero of Vibe Coding Games, a thoughtful game-development learning website with warm paper and terracotta product design. A small isometric game world being built: a simple clay-colored block tower, an olive tree, a tiny explorer, a few stepping-stone platforms, and a wireframe cube off to one side. The central idea is learning to assemble a playable world. Hand-drawn dark ink lines with imperfect but precise edges, sparse flat terracotta and muted olive fills, subtle colored-pencil texture. Sophisticated quiet print illustration, approachable and readable, no polished 3D render. Compact landscape composition, generous negative space around the objects, isolated on a transparent background. No text, logos, lettering, gradients, glow, decorative UI, interface screens or border. Limit to a handful of meaningful objects; render recognizable silhouettes at small web sizes.

Mode: new image generation, transparent background, no reference image. No external image requests or API keys are required at runtime.

Interactive teaching diagrams, the favicon, and simulations are authored in SVG, CSS, and Three.js so their structure stays precise and interactive. Chapter media also includes generated explanatory illustrations; these complement the interactive labs.

Visual references: [Anthropic](https://www.anthropic.com/) and [Claude product overview](https://claude.com/product/overview). The design borrows the warm editorial approach while retaining the Vibe Coding Games name and original mark.
