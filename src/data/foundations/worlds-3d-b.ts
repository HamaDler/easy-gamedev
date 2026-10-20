import type { ChapterSeed } from '../lesson-builder';
import { chart, clip, image } from './media';

export const worlds3dSeedsB: ChapterSeed[] = [
{
 id:'f3-level-design',
 goal:'Design 3D levels with blockouts, metrics, landmarks, sightlines, light, and verticality so players always know where they are and where to go.',
 story:[
  'Walt Disney designed his parks around what he called “weenies”: tall, eye-catching landmarks, like the castle at the end of Main Street, that pull visitors forward from far away. You see the castle, you walk toward it, and along the way you pass every shop.',
  '3D level designers borrowed the idea. In a well-made level you rarely need a map or an arrow. A tower on the horizon, a glow at the end of a street, or an open door with light spilling out quietly tells you where to go next.',
 ],
 hero:image('f3-08-hero','A player character at the start of a winding valley road, with a tall glowing castle on a distant hill drawing the eye, and lanterns lining the path toward it.','A road leading toward a tall glowing castle landmark in the distance.','A small original hero at the start of a winding valley road, lanterns lining the way, a tall softly glowing castle spire on a distant hill drawing the eye, a stylized low-poly landscape at dusk'),
 sections:[
  {title:'Start with a blockout',paragraphs:[
   'Every professional 3D level starts as a blockout, also called a graybox: simple boxes, ramps, and cylinders arranged to test space and flow. Designers walk through it with the real character controller and camera, adjusting distances, heights, and sightlines until it plays well. Only then do artists replace the grey boxes with finished environment art.',
   'Build to metrics: your character’s height, jump height and distance, corridor widths for the camera, and door sizes. A third-person camera needs wider corridors than first person, or it will bump into walls constantly.',
  ],media:image('f3-08-graybox','A 3D level made entirely of grey boxes, ramps, and cylinders, with a small capsule character standing in it and a few colored markers showing the intended path.','A grey blockout level with a capsule character and colored path markers.','An all-grey 3D blockout level of simple boxes, ramps, platforms, and cylinders, a small white capsule character at the start, a few bright orange markers showing the intended path, soft studio lighting')},
  {title:'Landmarks and sightlines',paragraphs:[
   'A landmark is a large, distinctive object visible from far away: a tower, a giant tree, a mountain, a glowing beacon. Landmarks help players orient themselves and give them goals. A sightline is a clear view from one point to another; designers plan where players will first see an important place, often framing it through an archway or at the top of a hill.',
   'Players naturally explore toward what they can see. Reveal the goal early, hide the route a little, and let them discover the way.',
  ],diagram:{title:'GUIDING IN 3D',nodes:['Landmark on the horizon','Framed first view','Leading lines (roads, rivers, rails)','Light at the destination','Breadcrumbs (pickups, footprints)']}},
  {title:'Leading players without arrows',paragraphs:[
   'Leading lines, such as roads, rivers, rails, cables, and rows of lamps, pull the eye. Light draws attention, as you saw in the lighting chapter. Color can too: some games mark climbable edges or important paths with a consistent color, sometimes nicknamed “yellow paint.” Players are divided on it; done subtly it helps, done heavily it can feel patronizing.',
   'Breadcrumbs, such as a trail of coins, footprints in snow, or a bird flying ahead, invite players along. Gates and blockers, such as locked doors, rubble, and drops too high to climb, shape the route while keeping it feeling natural.',
  ]},
  {title:'Verticality, loops, and arenas',paragraphs:[
   'Height adds richness to 3D spaces: overlooks reveal the area ahead, high ground gives tactical advantage, and dropping down creates one-way routes. Looping paths that return to earlier spaces, often through a shortcut that opens from one side, create a satisfying sense of mastery over the map.',
   'Combat spaces, often called arenas, need cover, room to move, and several routes so fights do not become a single line. Rest areas between them, with low threat and something beautiful to look at, give players breathing room.',
  ]},
 ],
 games:[
  {title:'Half-Life 2',year:2004,platform:'PC, then consoles',note:'Guides players with light, architecture, and landmarks through a linear but natural journey.'},
  {title:'Dark Souls',year:2011,platform:'PS3, Xbox 360, PC',note:'Interconnected levels with shortcuts that loop back to safe bonfires.'},
  {title:'Doom',year:2016,platform:'PC, PS4, Xbox One',note:'Arenas built for constant movement, with health and ammo placed to keep players moving.'},
  {title:'Journey',year:2012,platform:'PS3, then PC',note:'A glowing mountain peak visible from almost everywhere is the ultimate landmark.'},
 ],
 activity:{title:'Spot it: how did you know where to go?',task:'Play or watch a 3D level and list every technique that guided you.',steps:['Note the first landmark you saw.','Find two leading lines.','Find one shortcut or loop back to an earlier space.'],hints:['Look up: towers and peaks often sit on the horizon.','Notice where light falls brighter.'],checks:['You found a landmark, two leading lines, and a loop.','You can explain how the level avoided needing arrows.']},
 ai:{text:'Coding agents can build a graybox level from a written description quickly, especially with an engine MCP server that lets them run the scene. Give them your metrics and the beats of the level, then walk through it yourself with the real controller and camera before adding any art.',toolIds:['claude-code','godot-mcp','blender-mcp'],prompt:'Build a graybox 3D level using only boxes, ramps, and cylinders. My character is 1.8 m tall, jumps 1.2 m high and 3 m across; corridors must be at least 3 m wide for the third-person camera. Beats: start on a hill with a view of a tall tower landmark, descend into a valley, an arena with three cover pieces, a climb, and a shortcut back to the start. Mark the main path with a slightly brighter floor color.'},
 deeper:{text:'For 3D level design in depth:',items:[
  {label:'The Level Design Book',detail:'Free guide covering blockouts, flow, and guiding players.',url:'https://book.leveldesignbook.com/'},
  {label:'An Architectural Approach to Level Design (Christopher Totten)',detail:'How architecture shapes play in 3D spaces.'},
 ]},
 questions:[
  ['Why do designers build blockouts before adding art?',['To test space, metrics, and flow quickly with real controls','To decide the final art style early','Because collision only works on simple boxes'],0,'Grey boxes are fast to change; finished art is not.'],
  ['What is a landmark in level design?',['A large, distinctive object visible from far away that orients players','A checkpoint where the game saves progress','An icon on the map that marks the next objective'],0,'Landmarks give players orientation and a goal to walk toward, without needing a map or markers.'],
  ['Corridors in a third-person game feel cramped and the camera hits walls. What should change?',['Make corridors wider to suit the camera','Move the camera further behind the player','Make every wall permanently transparent'],0,'Third-person cameras need more room than first person.'],
 ],
 summary:['Start with a blockout built to your metrics, and test with the real controller and camera.','Landmarks, sightlines, leading lines, light, and breadcrumbs guide players.','Use verticality, loops, and arenas with rest areas for rich, readable spaces.'],
 teaser:'Next: the shape of a whole 3D world. Linear, hub, open, or interconnected?',
 mechanics:['waypoints','secrets','interconnected-map'],
},
{
 id:'f3-structure',
 goal:'Compare 3D world structures (linear, wide-linear, hub, interconnected, open world) and choose one that fits your game and your team.',
 story:[
  'In 2017, players dropped onto a plateau in a new Zelda game, walked to the edge of a cliff, and saw an entire kingdom spread out below: volcano, forests, castle, distant towers. The game’s message was simple: if you can see it, you can go there.',
  'Other great 3D games do the opposite, guiding you down a carefully crafted path, every moment placed precisely. Neither approach is better. They are different promises to the player, with very different costs to the developer.',
 ],
 hero:image('f3-09-hero','A traveler standing at a cliff edge looking out over a vast open kingdom: a volcano, a forest, a castle, and many towers dotting the landscape under a wide sky.','A traveler overlooking a vast open kingdom with a volcano, forest, and castle.','A lone traveler at a high cliff edge looking out over a vast stylized kingdom: a smoking volcano, rolling forests, a central castle, scattered towers, a wide sky with drifting clouds'),
 sections:[
  {title:'Linear and wide-linear',paragraphs:[
   'Linear games move the player along a path designed moment by moment. Half-Life 2 and Uncharted are carefully paced journeys where every encounter, view, and story beat is placed. Linear structures give designers precise control over pacing and spectacle, and are the most predictable to produce.',
   'Wide-linear levels widen the path into larger areas with optional side paths and multiple routes, while still flowing toward one goal. God of War (2018) and many modern adventures use this middle ground to combine exploration with directed storytelling.',
  ]},
  {title:'Hubs and interconnected worlds',paragraphs:[
   'A hub world is a central space connecting to separate levels. Super Mario 64’s castle connected to painting worlds; players returned to the hub between adventures, and the hub itself opened up as they progressed. Hubs give structure, a sense of home, and natural difficulty ordering.',
   'Interconnected worlds join everything into one continuous map with shortcuts, as in Dark Souls. Areas loop back on each other, and opening a door to discover you are next to a place you visited hours ago is one of gaming’s great surprises.',
  ],compare:{title:'3D world structures',columns:['Structure','Feels like','Strength','Effort'],rows:[['Linear','A guided journey','Pacing and spectacle','Medium'],['Wide-linear','A guided journey with room to roam','Exploration plus story','Medium to high'],['Hub world','A home with many doors','Clear structure','Medium'],['Interconnected','A place you learn by heart','Shortcuts and discovery','High'],['Open world','Freedom','Player-driven exploration','Very high']]}},
  {title:'Open worlds',paragraphs:[
   'Open worlds let players go almost anywhere in any order. They demand strong landmarks, systems that create activity, such as weather, wildlife, and characters with routines, and enough interesting things to discover. Breath of the Wild’s designers described using hills and mountains shaped like triangles to hide what lies beyond, so players kept climbing to see more.',
   'Open worlds are the most expensive structure to make well. Space is cheap; interesting space is not. Many failed open worlds are large and empty.',
  ],media:chart('f3-09-triangles','A landscape diagram of triangular hills in silhouette layers, each hiding a small point of interest behind it, with a traveler at the front about to climb the first hill.','Triangular hills hiding points of interest behind each other.','A layered landscape diagram of triangular hill silhouettes receding into the distance, each hiding a small glowing point of interest behind it (shrine, tower, camp), a tiny traveler at the foot of the first hill','21:9')},
  {title:'Choosing for your game',paragraphs:[
   'For a first 3D game, small is beautiful: a single linear level, a tiny hub with three short levels, or a compact open area the size of a few city blocks. Strong design in a small space teaches far more than an empty kingdom.',
   'Procedural 3D worlds, as in Minecraft, are another route to scale, but they need careful rules to stay interesting. Whatever you choose, plan landmarks and rest points first, then fill the space.',
  ]},
 ],
 games:[
  {title:'Super Mario 64',year:1996,platform:'Nintendo 64',note:'A castle hub with painting worlds that open as you progress.'},
  {title:'Half-Life 2',year:2004,platform:'PC, then consoles',note:'A carefully paced linear journey.'},
  {title:'Dark Souls',year:2011,platform:'PS3, Xbox 360, PC',note:'An interconnected world full of surprising shortcuts.'},
  {title:'The Legend of Zelda: Breath of the Wild',year:2017,platform:'Wii U, Switch',note:'An open world shaped to keep curiosity pulling players forward.'},
 ],
 activity:{title:'Try it: shrink a world',task:'Take a huge game idea and redesign it as a small structure.',steps:['Write the big idea in one sentence.','Choose a small structure: one linear level, a tiny hub, or a compact open area.','List three landmarks and one rest point.'],hints:['A “world” can be a single valley.','Three great points of interest beat thirty empty ones.'],checks:['Your structure could be built in a few weeks.','You planned landmarks and a rest point.']},
 ai:{text:'AI tools make it easy to fill space with terrain and props, which makes the open-world trap more tempting than ever. Use your agent and generators to build a small, dense space first. Ask the agent to help you list points of interest and how they connect before generating anything.',toolIds:['claude-code','meshy','quaternius','polyhaven'],prompt:'My game idea: [idea]. Propose a small 3D world structure I can build in three weeks: choose linear, hub, or compact open area, list three landmarks, five points of interest with what the player does at each, and the routes between them. Flag anything that would be expensive.'},
 deeper:{text:'For world structure:',items:[
  {label:'Breath of the Wild GDC talks',detail:'Nintendo’s talks on the game’s open-air design, available on GDC Vault.',url:'https://gdcvault.com/'},
  {label:'Game Maker’s Toolkit on world design',detail:'Video essays on Dark Souls, Zelda, and more.',url:'https://www.youtube.com/@GMTK'},
 ]},
 questions:[
  ['What is the biggest risk of an open world for a small team?',['It cannot have a story','Large, empty space that is not interesting','Players dislike exploring'],1,'Space is easy to make; interesting space is expensive.'],
  ['What defines a hub world?',['A central space connecting to separate levels','A world generated randomly each time you play','One long level with no branches'],0,'Hubs give structure, a natural order for levels, and a sense of home to return to.'],
 ],
 summary:['3D worlds can be linear, wide-linear, hubs, interconnected, or open.','Each structure trades control, freedom, and production cost.','Start small and dense; plan landmarks and rest points first.'],
 teaser:'Worlds need inhabitants that move convincingly. Next: 3D animation.',
 mechanics:['open-world','hub-world','fast-travel'],genres:['open-world','action-adventure','souls-like'],
},
{
 id:'f3-animation',
 goal:'Understand how 3D characters move: rigs, skinning, keyframes, motion capture, retargeting, blending, and inverse kinematics.',
 story:[
  'Inside every 3D character is something you never see: a skeleton. Not of bone, but of invisible joints, a hip, a knee, an ankle, each one able to turn. Move the skeleton, and the character’s skin bends with it like a glove around a hand.',
  'Animators pose those skeletons thousands of times. Actors in tight suits covered in dots perform movements that are recorded and transferred onto them. And the game blends all of it, in real time, as you push the stick.',
 ],
 hero:image('f3-10-hero','A friendly 3D character shown half solid and half transparent, revealing a glowing skeleton of joints and bones inside, mid-stride.','A character half transparent to reveal its glowing skeleton rig.','A friendly original stylized character mid-stride, the left half solid and the right half translucent revealing a glowing skeleton of simple joints and bones inside, soft studio light'),
 sections:[
  {title:'Rigs and skinning',paragraphs:[
   'A rig is the skeleton of joints, often called bones, placed inside a model. Skinning connects the model’s surface to those bones, and weight painting decides how much each bone affects each part of the skin. Good weights make elbows and knees bend smoothly; bad weights make shoulders crumple or clothes tear apart in motion.',
   'Humanoid characters usually share a standard skeleton layout, which lets animations be shared between them. Creatures such as spiders, dragons, or blobs need custom rigs.',
  ]},
  {title:'Where animations come from',paragraphs:[
   'Animators can pose the rig by hand at key moments, called keyframes, and let software fill the motion between them. Motion capture records real performers wearing markers or suits, then transfers their motion onto the rig. Libraries such as Mixamo offer free, ready-made animations for humanoid characters, and can even rig a character automatically.',
   'Retargeting transfers animations from one skeleton to another. Matching bone names is not enough: rest poses, proportions, and orientations also matter. Always check retargeted animations for sliding feet, twisted wrists, and clipping.',
  ],compare:{title:'Sources of 3D animation',columns:['Source','Strength','Watch for'],rows:[['Hand keyframing','Full control, stylized motion','Time and skill'],['Motion capture','Realistic human motion','Equipment, cleanup'],['Animation libraries (e.g. Mixamo)','Fast and free for humanoids','Generic look, retargeting issues'],['AI auto-rigging and motion','Very fast prototypes','Check deformation and foot contact']]}},
  {title:'Blending and state machines',paragraphs:[
   'Games do not simply play one animation after another. They blend: as the stick tilts further, a blend tree mixes idle into walk into run, so speed changes smoothly. Animation state machines switch between groups such as on the ground, jumping, attacking, and hurt, with short transitions between them.',
   'Root motion means the animation itself moves the character, as in many realistic games; in-place animation means the game’s movement code moves the character while the animation only plays on the spot. In-place is simpler and more responsive, and usually the right choice for beginners and action games.',
  ],diagram:{title:'A LOCOMOTION BLEND',nodes:['Idle','Walk','Run'],note:'The stick’s tilt slides smoothly between the three.'},media:clip('f3-10-blend','A character smoothly transitioning from standing idle to walking to running as a slider underneath moves from left to right.','A character blending from idle to walk to run as a slider moves.','A friendly original 3D character smoothly blending from idle sway to a walk to a run in place, a slider bar below moving from left to right in sync, looping back')},
  {title:'Inverse kinematics and physics',paragraphs:[
   'Inverse kinematics (IK) works backward: you choose where a hand or foot should be, and the software bends the arm or leg to reach it. Games use IK to plant feet on uneven ground and stairs, make hands grip ledges, and turn a character’s head to look at things.',
   'Ragdoll physics hands a character’s skeleton over to the physics engine, letting it fall limply, often when defeated. Physics can also drive capes, hair, and tails. As always, gameplay rules, such as when damage happens, should be decided by game logic, not by whichever frame an animation reaches.',
  ]},
 ],
 games:[
  {title:'Prince of Persia: The Sands of Time',year:2003,platform:'PS2, Xbox, GameCube, PC',note:'Fluid acrobatic animation blended with responsive controls.'},
  {title:'Uncharted 2',year:2009,platform:'PS3',note:'Motion-captured performances and careful blending.'},
  {title:'Shadow of the Colossus',year:2005,platform:'PS2',note:'The hero clings to moving giants using procedural animation.'},
  {title:'Red Dead Redemption 2',year:2018,platform:'PS4, Xbox One, then PC',note:'Extremely detailed animation, with notable trade-offs in responsiveness.'},
 ],
 activity:{title:'Spot it: the transitions',task:'Watch a 3D character in a game change from idle to running to jumping, and look closely at the transitions.',steps:['Watch the change from standing to running.','Watch how the feet meet slopes or stairs.','Note whether controls ever wait for an animation to finish.'],hints:['Slow the video down.','Feet floating above stairs mean no IK; feet planted on each step suggest IK.'],checks:['You described one transition in detail.','You noted whether feet adapt to the ground.']},
 ai:{text:'AI tools can auto-rig models and generate motion, and Mixamo can apply ready-made animations to humanoids. Inspect every result at gameplay distance: deformations at elbows and shoulders, foot sliding, and loop seams. Ask your coding agent for in-place animation with a blend tree, and to keep gameplay timing separate from animation.',toolIds:['mixamo','meshy','blender','claude-code'],prompt:'My humanoid character has idle, walk, run, jump, attack, and hurt animations (in place). Set up a locomotion blend from idle to walk to run based on speed, and a state machine for ground, air, attack, and hurt with short transitions. Movement code moves the character, not the animation. Add foot IK on slopes if the engine supports it.'},
 deeper:{text:'To rig and animate yourself:',items:[
  {label:'Blender',detail:'Rigging, weight painting, and keyframe animation for free.',toolId:'blender'},
  {label:'Mixamo',detail:'Free auto-rigging and animation library for humanoids.',toolId:'mixamo'},
  {label:'The Animator’s Survival Kit (Richard Williams)',detail:'Principles that apply to 3D as much as 2D.'},
 ]},
 questions:[
  ['What does weight painting control?',['How much each bone affects each part of the model’s surface','The colors painted onto the model’s texture','How heavy the character is in the physics simulation'],0,'Weights decide how the skin deforms as bones move.'],
  ['What does inverse kinematics let you do?',['Choose where a hand or foot should be, and bend the limb to reach it','Record an actor’s movement and copy it to a character','Blend smoothly between walking and running'],0,'IK plants feet on uneven ground and places hands on ledges.'],
  ['Why is in-place animation often recommended for action games?',['It is simpler and keeps movement code in control, so controls stay responsive','It always looks more realistic than root motion','It removes the need for a skeleton'],0,'Movement code stays in charge, making controls predictable.'],
 ],
 summary:['Rigs and skinning let a skeleton bend a model’s surface.','Animations come from keyframes, motion capture, libraries, and AI tools; check retargeting.','Blend trees, state machines, IK, and physics combine into responsive, believable motion.'],
 teaser:'Next: 3D mechanics. Physics, line of sight, and how enemies find their way.',
 mechanics:['climbing'],
},
{
 id:'f3-mechanics',
 goal:'Understand core 3D mechanics: physics bodies, raycasts, line of sight, triggers, and navigation, the tools behind shooting, stealth, and enemy movement.',
 story:[
  'A guard stands in a courtyard. You crouch behind a pillar. The guard turns, and for a moment, invisible lines shoot from its eyes toward you, checking whether anything blocks them. The pillar does. You stay hidden.',
  'Then you throw a bottle. It arcs through the air, bounces off a crate, and shatters. The guard walks toward the noise, choosing a route around the fountain, between the benches, and away from you. Every part of that moment uses a different 3D mechanic.',
 ],
 hero:image('f3-11-hero','A moonlit courtyard seen from above at an angle: a guard with a faint vision cone, a hero hiding behind a pillar, a thrown bottle mid-arc, and a dotted path showing the guard’s route around a fountain.','A guard’s vision cone, a hiding hero, a thrown bottle, and the guard’s route in a courtyard.','A moonlit stylized courtyard from a high angle: a guard with a soft translucent vision cone, a small hero crouched behind a pillar, a bottle mid-arc, a dotted line showing the guard’s winding route around a central fountain'),
 sections:[
  {title:'Physics bodies',paragraphs:[
   'Engines sort objects by how physics treats them. Static bodies never move: walls, floors, terrain. Rigid bodies are fully simulated: crates that tumble, balls that roll, bottles that bounce. Kinematic bodies and character controllers are moved by code, ignoring forces, like moving platforms and the player. Areas or triggers detect when something enters a space without blocking it.',
   'Choosing the right type prevents many bugs. A door that should never be knocked over is not a rigid body; a pressure plate is a trigger, not a wall.',
  ],compare:{title:'Physics body types',columns:['Type','Moves by','Examples'],rows:[['Static','Never moves','Walls, floors, terrain'],['Rigid','Physics simulation','Crates, balls, debris'],['Kinematic / character','Your code','Player, moving platforms'],['Area / trigger','Does not block; detects','Pickups, checkpoints, doors that sense you']]}},
  {title:'Raycasts and line of sight',paragraphs:[
   'A raycast fires an invisible line from a point in a direction and reports the first thing it hits. Games use raycasts constantly: instant-hit weapons, checking what the player is looking at for interaction prompts, detecting the ground under a character, and placing objects on surfaces.',
   'Line of sight is a raycast from an enemy’s eyes to the player: if the first thing hit is a wall, the player is hidden. Stealth games add a vision cone (an angle and distance), light levels, and noise to decide whether an enemy notices you. Try aiming in the raycast lab below.',
  ],demo:'raycast'},
  {title:'Navigation',paragraphs:[
   'Enemies in 3D need to find routes around obstacles. Engines bake a navigation mesh: a simplified map of the walkable surfaces, accounting for the size of the characters that will walk on it. When an enemy wants to reach a target, the navigation system finds a path across that mesh, and the enemy’s movement code follows it point by point.',
   'Navigation finds the route; your code still moves the character and decides when to attack, flee, or give up. Recalculating paths every frame for many enemies is expensive, so games usually update them a few times per second. Explore pathfinding in the navigation lab.',
  ],demo:'navigation'},
  {title:'Mechanics built from these pieces',paragraphs:[
   'Most 3D mechanics combine these building blocks. A grappling hook is a raycast to find a target, then movement toward it. Climbing checks surfaces in front of the character with short raycasts. A physics puzzle uses rigid bodies and triggers. Portal combined raycasts, cameras, and careful physics to let you see and walk through holes in space.',
   'When describing a mechanic to an agent, name the pieces: “a raycast from the camera, 3 metres long, ignoring the player, that highlights the first interactable object it hits.”',
  ],media:image('f3-11-grapple','A character firing a grappling hook from a cliff toward a wooden beam, with a dotted ray showing the aim and a rope pulling them across the gap.','A character using a grappling hook across a gap, with a dotted aim line.','A small original adventurer on a cliff edge firing a grappling hook toward a wooden beam across a misty gap, a dotted aiming line showing the ray, a rope pulling them through the air')},
 ],
 games:[
  {title:'Half-Life 2',year:2004,platform:'PC, then consoles',note:'The gravity gun made physics objects the center of play.'},
  {title:'Metal Gear Solid',year:1998,platform:'PlayStation',note:'Vision cones and noise turned guards into readable puzzles.'},
  {title:'Portal',year:2007,platform:'PC, Xbox 360, PS3',note:'Portals combined physics, raycasts, and cameras into a new kind of puzzle.'},
  {title:'Hitman',year:2016,platform:'PC, PS4, Xbox One',note:'Characters navigate complex levels with routines the player can learn and exploit.'},
 ],
 activity:{title:'Spot it: name the pieces',task:'Pick a 3D mechanic you like and break it into physics bodies, raycasts, triggers, and navigation.',steps:['Choose a mechanic: grappling, stealth detection, a physics puzzle, an enemy chase.','List which building blocks it uses.','Describe one rule that keeps it fair.'],hints:['Interaction prompts are almost always raycasts.','Pickups and checkpoints are usually triggers.'],checks:['You listed at least two building blocks.','You described a fairness rule.']},
 ai:{text:'These building blocks map directly to engine features, so precise requests work well: body types, ray lengths, collision layers to include or ignore, vision cone angles, and how often navigation updates. Ask for a debug view that draws rays, vision cones, and paths.',toolIds:['claude-code','godot-mcp','godot','threejs'],prompt:'Add a guard enemy to my 3D game: vision cone [90°], range [12 m], line-of-sight raycast from eye height that ignores other enemies; Patrol between points, Investigate a noise position, Chase when the player is seen. Use the engine’s navigation mesh and update the path [4] times per second. Add a debug toggle that draws the cone, rays, and current path.'},
 deeper:{text:'For 3D mechanics in depth:',items:[
  {label:'Godot docs: Ray-casting',detail:'How to use raycasts and physics queries.',url:'https://docs.godotengine.org/en/stable/tutorials/physics/ray-casting.html'},
  {label:'Godot docs: Navigation',detail:'Navigation meshes and agents in Godot.',url:'https://docs.godotengine.org/en/stable/tutorials/navigation/index.html'},
  {label:'Red Blob Games: pathfinding',detail:'An interactive explanation of how pathfinding works.',url:'https://www.redblobgames.com/pathfinding/a-star/introduction.html'},
 ]},
 questions:[
  ['Which physics type fits a pickup that should be collected when the player walks into it?',['Rigid body','Area / trigger','Static body'],1,'Triggers detect entry without blocking movement.'],
  ['What does a navigation system give an enemy?',['A route across walkable space; the enemy’s code still moves it','Complete behavior, including when to attack','A way to pass through walls when stuck'],0,'Navigation provides the path, not the decisions or movement.'],
 ],
 summary:['Static, rigid, kinematic, and trigger bodies each have a job.','Raycasts power shooting, interaction, ground checks, and line of sight.','Navigation meshes give enemies routes; combine building blocks to build mechanics.'],
 teaser:'All of this has to run smoothly. Next: making 3D games perform.',
 mechanics:['line-of-sight','noise','grappling-hook','physics-objects','teleport'],genres:['stealth','immersive-sim'],
},
{
 id:'f3-performance',
 goal:'Understand frame budgets and the main causes of slow 3D games, including draw calls, polygons, textures, lights, and physics, and why you measure before optimizing.',
 story:[
  'A game running at sixty frames per second has about sixteen milliseconds to do everything for each frame: read input, move every character, run physics, decide what enemies do, and draw a whole 3D world. Sixteen milliseconds. A blink of an eye takes roughly ten times longer.',
  'When a game stutters, something has blown that budget. Finding out what, rather than guessing, is one of the most useful skills in game development.',
 ],
 hero:image('f3-12-hero','A whimsical stopwatch at the center of a busy workshop where tiny workers rush to finish drawing, physics, AI, and sound tasks before the stopwatch hand completes its sweep.','Tiny workers racing to finish frame tasks before a stopwatch completes.','A whimsical oversized stopwatch in a busy miniature workshop, tiny workers rushing between stations labeled with icons for paintbrush, bouncing ball, brain, and speaker, racing the sweeping hand'),
 sections:[
  {title:'Frame rate and frame budget',paragraphs:[
   'Frame rate is how many images per second the game shows. Sixty is a common target for smooth action; thirty is acceptable for many slower games; virtual reality needs ninety or more to stay comfortable. The frame budget is the time available per frame: about 16.7 milliseconds at 60 frames per second, 33.3 at 30.',
   'Work is split between the processor (CPU), which runs game logic, physics, and preparing what to draw, and the graphics card (GPU), which draws pixels. A game can be slow because either one is overloaded, and the fixes are different.',
  ],diagram:{title:'ONE FRAME AT 60 FPS (~16.7 ms)',nodes:['Input','Game logic','Physics','Prepare drawing (CPU)','Draw (GPU)','Show frame']}},
  {title:'Common culprits',paragraphs:[
   'Draw calls: each separate object or material can require its own instruction to the graphics card. Thousands of small separate objects can be slower than a few large ones; engines combine or instance repeated objects to help. Polygons: very dense models, especially many of them, strain the GPU. Textures: huge textures fill memory, especially on phones and in browsers.',
   'Lights and shadows: every real-time shadow-casting light adds work. Transparent effects and full-screen shaders cost a lot per pixel. On the CPU side, too many physics objects, constant pathfinding, and creating and destroying many objects every frame are classic problems.',
  ],compare:{title:'Common performance problems',columns:['Problem','Usually strains','Typical fix'],rows:[['Too many separate objects','CPU (draw calls)','Combine or instance them'],['Very dense models','GPU','Simpler models, level of detail'],['Huge textures','Memory','Smaller or compressed textures'],['Many shadow-casting lights','GPU','Fewer lights, baked lighting'],['Heavy screen effects','GPU','Lighter effects, quality settings'],['Physics and pathfinding everywhere','CPU','Fewer active objects, less frequent updates']]}},
  {title:'Level of detail and culling',paragraphs:[
   'Level of detail (LOD) swaps a model for simpler versions as it gets further away; nobody can see the fingers on a character a hundred metres away. Culling skips drawing what cannot be seen: frustum culling ignores objects outside the camera’s view, and occlusion culling ignores objects hidden behind walls.',
   'Level design helps too. Winding corridors and hills that block long views limit how much must be drawn at once. Fog hides the distance where detail would otherwise be needed.',
  ],media:chart('f3-12-lod','The same tree shown four times at increasing distance from a camera, each version using fewer triangles, with small wireframe insets showing the simplification.','A tree shown at four distances with progressively simpler models.','Four copies of the same stylized tree receding from a camera icon, each further one simpler, with small inset wireframes showing fewer and fewer triangles','21:9')},
  {title:'Measure, then change one thing',paragraphs:[
   'Engines include profilers that show where time goes each frame. The golden rule: measure first, change one thing, and measure again. Many “optimizations” suggested by intuition, or by an eager AI agent, add complexity without helping, because they target the wrong problem.',
   'Test on the weakest device you want to support, especially for web and mobile. A game that runs smoothly on a powerful desktop can crawl on a phone or in a browser tab.',
  ]},
 ],
 games:[
  {title:'Super Mario 64',year:1996,platform:'Nintendo 64',note:'Careful level design and fog helped fit 3D worlds onto limited hardware.'},
  {title:'Doom',year:2016,platform:'PC, PS4, Xbox One',note:'Known for running smoothly at high frame rates across many machines.'},
  {title:'The Legend of Zelda: Breath of the Wild',year:2017,platform:'Wii U, Switch',note:'A huge open world shaped by the limits of portable hardware.'},
 ],
 activity:{title:'Try it: read a frame counter',task:'Turn on a frame-rate display in a game or engine and watch how it changes.',steps:['Enable an FPS counter (many games and engines have one).','Find a calm moment and a busy moment, and note the numbers.','Guess what made the busy moment more expensive.'],hints:['Look at explosions, many enemies, or wide views.','Steam and many engines have built-in FPS displays.'],checks:['You recorded frame rates for calm and busy moments.','You made a reasonable guess about the cause.']},
 ai:{text:'Agents can suggest many optimizations, but ask them to measure first. With an engine MCP server, an agent can run the game and read profiler output or frame timings, then propose one targeted change. Be wary of large rewrites in the name of performance without evidence.',toolIds:['claude-code','godot-mcp','godot'],prompt:'My 3D game drops to [30] FPS in [situation] on [device]. Do not change anything yet. Tell me how to measure where the frame time goes using the engine’s profiler, what numbers to look for, and the three most likely causes given my scene: [description]. Then propose one change at a time.'},
 deeper:{text:'For performance in depth:',items:[
  {label:'Godot docs: Performance',detail:'Official guide to profiling and optimizing Godot games.',url:'https://docs.godotengine.org/en/stable/tutorials/performance/index.html'},
  {label:'Real-Time Rendering (Akenine-Möller, Haines, Hoffman)',detail:'The standard reference on how real-time graphics work.'},
 ]},
 questions:[
  ['At 60 frames per second, roughly how long is each frame’s budget?',['About 16.7 milliseconds','One second','About 100 milliseconds'],0,'One second is 1000 milliseconds; divided across 60 frames, each frame gets about 16.7 ms.'],
  ['What is the golden rule of optimization?',['Optimize everything before the game is fun','Measure first, change one thing, measure again','Always reduce polygons first'],1,'Measurement prevents wasted effort on the wrong problem.'],
  ['What does level of detail (LOD) do?',['Swaps distant models for simpler versions','Skips drawing objects hidden behind walls','Lowers the resolution of the whole screen'],0,'Far-away objects cover only a few pixels, so simpler versions look the same and cost much less.'],
 ],
 summary:['Frame budgets are tight: about 16.7 ms at 60 FPS.','Draw calls, polygons, textures, lights, effects, physics, and pathfinding are common costs.','Use LOD and culling, design with views in mind, and always measure before optimizing.'],
 teaser:'Final chapter: six landmark 3D games, taken apart.',
},
{
 id:'f3-case-studies',
 goal:'Analyse six landmark 3D games to see how cameras, controls, worlds, light, mechanics, and structure combine.',
 story:[
  'Every 3D game today stands on the shoulders of a handful that solved hard problems for the first time: how to move freely, how to guide without arrows, how to teach complex ideas, how to make a world feel like a place.',
  'This final chapter revisits six of them, with everything you have learned in this course as your toolkit for taking them apart.',
 ],
 hero:image('f3-13-hero','Six small 3D dioramas on a museum shelf, each representing a different landmark game world: a castle garden, a ruined city, a white test chamber, a dark cathedral, a vast green plateau, and a blocky landscape.','Six museum dioramas of landmark 3D game worlds.','A museum shelf displaying six small glowing dioramas: a sunny castle garden, a ruined industrial city, a clean white test chamber, a gothic cathedral at dusk, a vast green plateau, and a blocky cube landscape, each with a tiny brass plaque'),
 sections:[
  {title:'Super Mario 64 and Half-Life 2',paragraphs:[
   'Super Mario 64 (1996) solved free 3D movement with an analog stick and a controllable camera. Its castle hub connected painting worlds with several objectives each, so players revisited spaces with new goals. Lesson: make movement joyful in an empty field before building levels, and use a hub to structure a world.',
   'Half-Life 2 (2004) told its story without leaving the player’s eyes and guided players through a linear journey using light, landmarks, and architecture. Its gravity gun turned physics objects into weapons and puzzles. Lesson: a single new mechanic, explored thoroughly, can carry an entire game.',
  ]},
  {title:'Portal and Dark Souls',paragraphs:[
   'Portal (2007) taught a mind-bending idea, connected holes in space, through a sequence of test chambers, each introducing one twist. Clean, readable spaces kept attention on the puzzle. It was short, and that was a strength. Lesson: teach one idea step by step, and stop before it wears thin.',
   'Dark Souls (2011) built an interconnected world where opening a shortcut reveals how places fit together. Enemies telegraph attacks clearly, so difficulty feels fair. Story is hidden in item descriptions and architecture. Lesson: respect players’ intelligence, and make challenge readable.',
  ],media:image('f3-13-shortcut','A knight opening a heavy door from the inside to reveal a familiar sunlit courtyard with a resting bonfire they visited earlier, the moment of realization shown by a small spark above their helmet.','A knight opening a shortcut door and recognizing a familiar courtyard.','A small armored knight pushing open a heavy wooden door from a dark corridor, revealing a familiar sunlit courtyard with a resting campfire, a small spark of realization above their helmet')},
  {title:'Breath of the Wild and Minecraft',paragraphs:[
   'The Legend of Zelda: Breath of the Wild (2017) gave players a vast open world with a simple promise: if you can see it, you can climb it. Consistent physics and chemistry, with fire, wind, metal, and electricity, let players invent solutions. Landmarks and triangular hills kept curiosity pulling them forward. Lesson: consistent systems create freedom.',
   'Minecraft (2011) built endless worlds from one-metre blocks generated from a seed. Its systems, such as mining, crafting, building, and day and night, gave players tools rather than goals. Its simple look was easy to read and cheap to run. Lesson: a simple style and strong systems can create infinite stories.',
  ],compare:{title:'Six 3D games, six lessons',columns:['Game','Camera','Structure','Lesson'],rows:[['Super Mario 64','Third person','Hub','Joyful movement first'],['Half-Life 2','First person','Linear','One mechanic, fully explored'],['Portal','First person','Linear chambers','Teach one idea step by step'],['Dark Souls','Third person','Interconnected','Readable, respectful challenge'],['Breath of the Wild','Third person','Open world','Consistent systems create freedom'],['Minecraft','First person','Procedural open world','Simple style, strong systems']]}},
  {title:'What they share',paragraphs:[
   'Each of these games did a few things exceptionally well and accepted limits elsewhere. Each solved its problems with clarity: clear movement, clear goals, clear rules. And each built on what came before.',
   'You will too. Your first 3D game will be small and simple. Choose one lesson from this chapter, apply it well, and you will be part of the same long conversation.',
  ]},
 ],
 games:[
  {title:'Super Mario 64',year:1996,platform:'Nintendo 64',note:'Free 3D movement and a hub world.'},
  {title:'Half-Life 2',year:2004,platform:'PC, then consoles',note:'Physics as a mechanic, and a journey guided by light and architecture.'},
  {title:'Portal',year:2007,platform:'PC, Xbox 360, PS3',note:'A single idea taught step by step.'},
  {title:'Dark Souls',year:2011,platform:'PS3, Xbox 360, PC',note:'Interconnected design and readable challenge.'},
  {title:'The Legend of Zelda: Breath of the Wild',year:2017,platform:'Wii U, Switch',note:'Consistent systems in an open world.'},
  {title:'Minecraft',year:2011,platform:'PC, then everywhere',note:'Simple blocks and systems that create endless stories.'},
 ],
 activity:{title:'Try it: your own case study',task:'Write a case study of a 3D game you love using the table above.',steps:['Name its camera, structure, and one lesson.','List two techniques from this course it uses well.','Write how you would apply the lesson in a small game of your own.'],hints:['Think about cameras, light, level design, animation, or mechanics.','Keep the lesson to one sentence.'],checks:['Your case study fits the table’s format.','You wrote a concrete way to apply the lesson.']},
 ai:{text:'Use reference games as precise briefs for your AI crew: name the lesson, not the whole game. “A test chamber that teaches one idea, like Portal: introduce, test, twist” is a much better starting point for an agent than “make a game like Portal.”',toolIds:['claude-code','godot-mcp','meshy','quaternius'],prompt:'I want my small 3D game to borrow one lesson from [game]: [lesson]. Describe the specific techniques behind it in plain words, and propose a graybox prototype I could build in a weekend that applies it to my idea: [idea].'},
 deeper:{text:'For more 3D game analysis:',items:[
  {label:'Game Maker’s Toolkit',detail:'Video case studies of many landmark 3D games.',url:'https://www.youtube.com/@GMTK'},
  {label:'The hands-on ladder',detail:'Browser 3D and Godot 3D courses will put these lessons to work.'},
 ]},
 questions:[
  ['What lesson does Portal teach about pacing?',['Add as many mechanics as possible to keep it fresh','Teach one idea step by step and stop before it wears thin','Explain everything in a tutorial before play begins'],1,'Portal’s short, focused structure is part of its brilliance.'],
  ['What made Breath of the Wild’s open world feel free?',['Consistent systems that let players invent solutions','Markers showing exactly where to go next','Having the largest map of any game ever made'],0,'Physics and chemistry rules behaved consistently everywhere.'],
 ],
 summary:['Landmark 3D games each solved a hard problem with clarity.','Their lessons: joyful movement, one great mechanic, step-by-step teaching, readable challenge, consistent systems, simple strong style.','Pick one lesson and apply it well in your own small game.'],
 teaser:'You’ve finished the foundations. Next, the hands-on ladder will turn these ideas into games you build with your AI crew.',
 genres:['platformer','shooter','puzzle','souls-like','open-world','sandbox'],
},
];
