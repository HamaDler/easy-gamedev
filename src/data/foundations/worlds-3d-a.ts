import type { ChapterSeed } from '../lesson-builder';
import { chart, clip, image } from './media';

export const worlds3dSeedsA: ChapterSeed[] = [
{
 id:'f3-space-basics',
 goal:'Think in three dimensions: axes, units and scale, position, rotation, and scale, and the difference between local and world space.',
 story:[
  'Stand in the middle of a room. You can step left or right, forward or back, and you can jump up or crouch down. Three directions, three numbers. Everything in a 3D game, from the hero to a falling leaf to the camera itself, is described with those same three numbers, plus a few more for how it is turned and how big it is.',
  'Once you see the world that way, 3D stops being mysterious. It is just 2D with one more direction, and a lot more ways for things to get lost.',
 ],
 hero:image('f3-01-hero','A cozy 3D room drawn with three colored arrows rising from a point on the floor: red pointing right, green pointing up, blue pointing toward the viewer, a small character standing at the origin.','A small character at the origin of three colored axis arrows in a room.'),
 sections:[
  {title:'Three axes',paragraphs:[
   'A 3D position has x, y, and z values. Engines disagree about which way is up. Godot and Unity use y as up; Unreal Engine and Blender use z as up. That is why models sometimes import lying on their backs: the program that made them and the engine reading them disagree. Most tools color the axes the same way: x red, y green, z blue.',
   'Engines also measure distance in units, and by convention one unit usually means one metre. A human character about 1.8 units tall, doors about 2 units high, and a room about 3 units tall will make lighting, physics, and cameras behave naturally. Wildly wrong scales cause floaty physics and strange shadows.',
  ],compare:{title:'Which way is up?',columns:['Tool','Up axis','Typical unit'],rows:[['Godot','Y','1 unit = 1 metre'],['Unity','Y','1 unit = 1 metre'],['Unreal Engine','Z','1 unit = 1 centimetre'],['Blender','Z','1 unit = 1 metre (by default)'],['Three.js','Y','Your choice; metres are common']]}},
  {title:'Position, rotation, and scale',paragraphs:[
   'Every object in a 3D scene has a transform: its position (where it is), rotation (how it is turned), and scale (how big it is). Rotation is the trickiest. You can describe it as angles around each axis, but engines often store it in other forms internally to avoid odd problems when rotating freely. You rarely need to know the maths; you need to know which way the object is facing.',
   'Most engines treat one direction as an object’s forward. In Godot, forward is negative z; in Unity, positive z. Models that face the wrong way on import are another classic mismatch, fixed by rotating the model once inside a wrapper object.',
  ]},
  {title:'Local space and world space',paragraphs:[
   'Objects can be parented to other objects, forming a tree. A sword is a child of a hand, the hand of an arm, the arm of a character. A child’s transform is local: relative to its parent. When the character turns, the sword turns with it, even though the sword’s local position never changed. Its world position, its place in the whole scene, did.',
   'Many 3D bugs come from mixing these spaces: moving an object “forward” in world space when you meant its own forward, or reading a local position when you needed the world one. Play with the transform explorer below to see a child move when its parent rotates.',
  ],demo:'transforms',media:chart('f3-01-parenting','A robot arm made of three segments, each labelled with its own small axis gizmo, showing that rotating the shoulder carries the elbow and hand along.','A robot arm whose segments carry each other’s local axes when the shoulder rotates.','4:3')},
  {title:'Keeping your bearings',paragraphs:[
   'A few habits prevent most 3D confusion. Decide your scale early and put a 1.8-unit-tall reference figure in every scene. Wrap imported models inside an object you control, fixing rotation and scale there once. Name things clearly. And when something moves strangely, ask: local or world? Which way is forward? Which way is up?',
   'These are also the questions to ask a coding agent when 3D code misbehaves. They narrow down most problems quickly.',
  ]},
 ],
 games:[
  {title:'Super Mario 64',year:1996,platform:'Nintendo 64',note:'Taught millions of players to move freely in three dimensions.'},
  {title:'Minecraft',year:2011,platform:'PC, then everywhere',note:'A world of one-metre blocks: the scale of everything is obvious.'},
  {title:'Portal',year:2007,platform:'PC, Xbox 360, PS3',note:'Portals keep your momentum while changing your orientation in space.'},
 ],
 activity:{title:'Try it: measure a room',task:'Measure a real room and imagine it as a 3D game scene.',steps:['Estimate the room’s width, depth, and height in metres.','Pick a corner as the origin and choose which axis is up.','Write the position of three objects in the room as (x, y, z).'],hints:['A typical door is about 2 metres tall.','Use y as up if you plan to use Godot or Unity.'],checks:['You wrote three positions with consistent units.','You know which axis points up.']},
 ai:{text:'Tell your coding agent your engine, its up axis, and that one unit equals one metre. Ask it to wrap imported models in a parent object and fix their rotation and scale there. When 3D behavior is wrong, ask the agent to report positions in both local and world space.',toolIds:['claude-code','godot-mcp','godot','threejs'],prompt:'In my [Godot] 3D project, y is up and 1 unit = 1 metre. Add a 1.8 m reference capsule to my test scene. Wrap the imported model [name] in a parent node, rotate it so it faces the engine’s forward direction, and scale it to [height] metres. Print its local and world position when I press F1.'},
 deeper:{text:'To learn 3D space hands-on:',items:[
  {label:'Blender',detail:'Free 3D software where you can move, rotate, and parent objects yourself.',toolId:'blender'},
  {label:'Godot docs: Introduction to 3D',detail:'An official overview of 3D space and transforms.',url:'https://docs.godotengine.org/en/stable/tutorials/3d/introduction_to_3d.html'},
 ]},
 questions:[
  ['A model imports lying on its back. What is the most likely cause?',['The tools disagree about which axis is up','The model has too many polygons','The model’s pivot point is at its feet'],0,'Z-up and Y-up tools often disagree, so the model needs rotating on import.'],
  ['A sword is a child of a character’s hand. The character turns. What happens to the sword’s local position?',['It stays the same; its world position changes','It changes to match the character’s rotation','Both its local and world positions stay the same'],0,'Local transforms are relative to the parent; world position changes as the parent moves.'],
 ],
 summary:['3D positions use three axes; engines disagree about which is up.','Every object has a transform: position, rotation, and scale.','Parenting creates local and world spaces; mixing them causes many bugs.'],
 teaser:'Next: where to put the eye. First person, third person, and every camera in between.',
},
{
 id:'f3-cameras',
 goal:'Compare first-person, third-person, top-down, and fixed 3D cameras, and understand how cameras handle walls, field of view, and comfort.',
 story:[
  'In a horror game, a corridor stretches ahead. In first person, you see only what is in front of you, and every sound behind you makes you spin around. Now imagine the same corridor in third person: you see your character from behind, glancing at the doors on either side. The level is identical. The feeling is completely different.',
  'In 3D, the camera is not just a window. It decides what players see, what they cannot see, how they aim, and how they feel.',
 ],
 hero:image('f3-02-hero','The same stone corridor shown in two framed panels: one from a first-person view with hands holding a lantern, the other from a third-person view behind a cloaked character.','A corridor seen in first person with a lantern and in third person behind a character.'),
 sections:[
  {title:'First person',paragraphs:[
   'A first-person camera sits at the character’s eyes. It gives maximum immersion and natural aiming, which is why most shooters and many horror and exploration games use it. Players cannot see their own body much, so feedback comes through hands, weapons, sound, and screen effects.',
   'Field of view (FOV) is how wide the camera sees. Too narrow feels claustrophobic and can cause discomfort on large screens; too wide distorts the edges. PC players often expect an FOV slider. Head bob and camera sway can add life, but should be adjustable, because they can make some players feel motion sick.',
  ]},
  {title:'Third person',paragraphs:[
   'A third-person camera follows behind or above the character. Players see their character’s body and surroundings, which suits movement, melee combat, climbing, and characters with personality. Over-the-shoulder cameras, offset to one side, make aiming easier. Free cameras let players orbit with a stick or mouse.',
   'The hardest problem is walls. If something comes between the camera and the character, the camera must move closer, fade the obstacle, or both. Engines provide tools such as a spring arm, which pulls the camera in when it would hit a wall. Explore a camera around a target in the lab below.',
  ],demo:'camera'},
  {title:'Top-down, isometric, and fixed cameras',paragraphs:[
   'Some 3D games keep the camera high above, looking down or at an angle, like a 2D isometric game but with 3D lighting and animation. This view suits action RPGs, strategy, and games where seeing surroundings matters more than seeing the horizon.',
   'Fixed cameras place the camera at chosen spots, like a film director. Classic Resident Evil games used fixed angles to frame scenes dramatically and hide threats just out of view. Side-on 3D cameras keep a 2D plane of play with 3D visuals. Each choice trades control for framing.',
  ],compare:{title:'3D camera choices',columns:['Camera','Strength','Watch out for','Examples'],rows:[['First person','Immersion and aiming','Motion sickness, no body awareness','Half-Life, Portal'],['Third person','See the character and space','Walls between camera and player','Tomb Raider, God of War'],['Top-down / isometric 3D','Overview of the area','Less sense of scale','Diablo III, Tunic'],['Fixed / cinematic','Dramatic framing','Controls can feel disorienting','Resident Evil (1996)'],['Side-on 3D','Platforming clarity with 3D visuals','Limited depth use','Trine, Inside']]}},
  {title:'Cameras and comfort',paragraphs:[
   'Some players feel motion sick when the camera moves in ways their body does not expect: sudden rotations, heavy head bob, or acceleration they did not cause. Comfort options help: adjustable FOV, camera smoothing settings, disabling head bob, and in VR, teleport movement. Smooth, predictable cameras are kinder to everyone.',
   'Decide your camera before designing levels. A level built for first person, with tight corridors and things to look at up close, often feels cramped in third person, and vice versa.',
  ],media:image('f3-02-spring','A third-person camera on a stretchy spring attached to a character, shortening as it brushes against a stone wall, drawn like a friendly technical illustration.','A camera on a spring arm that shortens when it touches a wall.','4:3')},
 ],
 games:[
  {title:'Doom',year:1993,platform:'PC',note:'Popularized the fast first-person view.'},
  {title:'Super Mario 64',year:1996,platform:'Nintendo 64',note:'A controllable third-person camera, presented as a filming cameraman.'},
  {title:'Resident Evil',year:1996,platform:'PlayStation',note:'Fixed cinematic angles that hid threats and built tension.'},
  {title:'God of War',year:2018,platform:'PS4',note:'A close over-the-shoulder camera presented as one continuous shot.'},
 ],
 activity:{title:'Spot it: what the camera hides',task:'Play or watch a 3D game and note what its camera shows and hides.',steps:['Identify the camera type.','Find a moment when something was hidden from view on purpose.','Find a moment when the camera struggled, such as a wall or a tight space.'],hints:['Horror games hide on purpose; action games try not to.','Watch the camera in corners and narrow corridors.'],checks:['You identified the camera type.','You found one deliberate hide and one struggle.']},
 ai:{text:'Ask your agent for a specific camera type with comfort options from the start: FOV slider, sensitivity, smoothing, and the ability to turn off head bob. For third person, ask explicitly for wall handling with a spring arm or a similar method.',toolIds:['claude-code','godot-mcp','threejs'],prompt:'Add a third-person camera to my 3D game: over-the-shoulder offset [0.5 m] right, distance [4 m], mouse and right-stick orbit with adjustable sensitivity, a spring arm that pulls the camera closer when a wall is in the way (ignoring the player’s own collider), and an FOV setting in the options menu.'},
 deeper:{text:'For 3D camera design:',items:[
  {label:'50 Game Camera Mistakes (John Nesky)',detail:'A GDC talk by the camera designer of Journey.'},
  {label:'Godot docs: SpringArm3D',detail:'How a spring arm keeps the camera out of walls.',url:'https://docs.godotengine.org/en/stable/classes/class_springarm3d.html'},
 ]},
 questions:[
  ['What is the main purpose of a spring arm in a third-person camera?',['To follow the player smoothly with a slight delay','To pull the camera closer when a wall would block the view','To shake the camera on big impacts'],1,'It shortens the camera distance when something is in the way.'],
  ['Which comfort option helps players prone to motion sickness in first person?',['A narrower field of view and stronger head bob','Adjustable field of view and the option to disable head bob','Faster camera rotation'],1,'FOV and head-bob settings make camera motion more comfortable.'],
 ],
 summary:['First person gives immersion and aiming; third person shows the character and space.','Top-down, fixed, and side-on cameras trade control for overview or framing.','Handle walls and offer comfort options; choose your camera before designing levels.'],
 teaser:'Cameras show the world; controls move you through it. Next: moving in 3D.',
 mechanics:['first-person','third-person','lock-on'],
},
{
 id:'f3-controls',
 goal:'Understand how players move in 3D: camera-relative input, jumping with depth cues, slopes and steps, and character controllers versus physics.',
 story:[
  'Push the stick forward. Your character runs into the screen, away from you. Swing the camera around to face the character, push the stick forward again, and now they run toward you. Your hand did the same thing, but the result changed.',
  'That is camera-relative movement, and it is the first of several quiet decisions that make 3D characters feel natural. Get them right and players never think about them. Get them wrong and the controller feels like it is fighting back.',
 ],
 hero:image('f3-03-hero','A small hero running across a grassy 3D hillside with a soft round shadow beneath them, a camera floating behind, and a faint arrow on the ground showing the direction relative to the camera.','A hero running on a hillside with a drop shadow and a camera-relative direction arrow.'),
 sections:[
  {title:'Camera-relative movement',paragraphs:[
   'In most third-person games, “forward” on the stick means away from the camera, not the character’s own forward or the world’s north. The game takes the camera’s facing direction, flattens it so it ignores looking up or down, and moves the character that way. The character then turns smoothly to face the direction of travel.',
   'First-person games use the view direction directly: forward is where you look. Tank controls, where up always means the character’s forward, were common in early 3D games such as the original Resident Evil and are rare now outside deliberate retro designs.',
  ],diagram:{title:'CAMERA-RELATIVE MOVEMENT',nodes:['Stick input','Camera’s flat forward and right','Combine into a direction','Move the character','Turn to face movement']}},
  {title:'Jumping in 3D',paragraphs:[
   'Judging distance in 3D is hard, especially from a camera behind the character. Designers use depth cues: a drop shadow directly under the character, so players can see where they will land; ledges with clear edges; platforms that contrast with the background. Many 3D platformers add a little help, such as grabbing ledges automatically or snapping to platform edges.',
   'The same forgiveness tricks from 2D apply too: coyote time, jump buffering, and asymmetric gravity make 3D jumps feel better.',
  ],media:clip('f3-03-shadow','A small hero jumping between floating platforms with a round dark shadow on the ground directly below them, the shadow shrinking as the hero rises and growing as they fall.','A hero jumping with a drop shadow that shrinks and grows with height.')},
  {title:'Slopes, steps, and character controllers',paragraphs:[
   'Real worlds have slopes, stairs, and bumps. A character controller is the part of the game that moves the player through that geometry: it slides along walls, walks up gentle slopes, refuses slopes that are too steep, steps up small ledges, and sticks to the ground when walking downhill instead of bouncing into the air.',
   'Most games move the player with a character controller, not with full physics simulation. Physics makes crates and balls tumble realistically, but a fully simulated player tends to feel slippery and unpredictable. Engines provide character controllers for this reason: Godot’s CharacterBody3D, Unity’s CharacterController, and Unreal’s Character Movement Component.',
  ]},
  {title:'Mouse, sticks, and aim',paragraphs:[
   'A mouse is precise and fast; analog sticks are smooth but less precise. Games designed for both usually add aim assist for sticks, gently slowing the cursor near targets or pulling toward them. Sensitivity settings, inverted-axis options, and dead-zone settings for sticks are essential.',
   'Test movement in a simple graybox before building beautiful levels: a ramp, stairs, a gap, a narrow ledge, and a wall to slide along. If those feel good, the rest of the game has a solid foundation.',
  ]},
 ],
 games:[
  {title:'Super Mario 64',year:1996,platform:'Nintendo 64',note:'Analog, camera-relative movement and a drop shadow for judging jumps.'},
  {title:'Resident Evil',year:1996,platform:'PlayStation',note:'Tank controls paired with fixed cameras, now a deliberate retro style.'},
  {title:'A Hat in Time',year:2017,platform:'PC, then consoles',note:'A modern 3D platformer with forgiving, expressive movement.'},
  {title:'Halo: Combat Evolved',year:2001,platform:'Xbox',note:'Aim assist that made console shooting feel good.'},
 ],
 activity:{title:'Try it: a movement test course',task:'Design a graybox test course for a 3D character on paper.',steps:['Include a ramp, a steep slope, stairs, and a gap.','Add a narrow ledge and a wall to slide along.','Write what “feels good” means for each element.'],hints:['Example: “walks up the 30° ramp without slowing much; slides down the 60° slope.”','A drop shadow is your friend near the gap.'],checks:['Your course tests at least six movement situations.','Each has a clear success description.']},
 ai:{text:'Ask your agent to use the engine’s character controller, camera-relative input, and the forgiveness features you want by name. Then ask it to build the test course, and tune by playing. Keep all movement numbers together.',toolIds:['claude-code','godot-mcp','godot','threejs'],prompt:'Set up 3D player movement using the engine’s character controller: camera-relative input, turn to face movement, walk [4 m/s], run [7 m/s], jump [1.2 m], coyote time [0.12 s], max walkable slope [45°], step height [0.3 m], snap to ground when walking downhill, and a round drop shadow. Build a graybox test course with a ramp, steep slope, stairs, a gap, and a ledge.'},
 deeper:{text:'For 3D movement in depth:',items:[
  {label:'Godot docs: CharacterBody3D',detail:'How Godot’s character controller works.',url:'https://docs.godotengine.org/en/stable/classes/class_characterbody3d.html'},
  {label:'Game Feel (Steve Swink)',detail:'Includes analysis of 3D movement feel.'},
 ]},
 questions:[
  ['In camera-relative movement, what does pushing the stick forward do?',['Moves the character away from the camera','Moves the character in the direction it already faces','Moves the character toward the world’s north'],0,'Forward is based on the camera’s flattened facing direction.'],
  ['Why do most games move the player with a character controller rather than full physics?',['Physics engines cannot move characters at all','Simulated players tend to feel slippery and unpredictable','Every engine requires a character controller'],1,'Character controllers give precise, predictable movement.'],
 ],
 summary:['Most 3D games use camera-relative movement.','Depth cues and forgiveness make 3D jumping fair.','Character controllers handle slopes, steps, and walls predictably; test movement in a graybox.'],
 teaser:'Next: what 3D objects are actually made of. Models, meshes, and materials.',
 mechanics:['jump','climbing','aiming'],genres:['platformer','action-adventure'],
},
{
 id:'f3-models',
 goal:'Understand 3D models: meshes, polygons, UVs, textures, materials, file formats, and what to check before using any model in a game.',
 story:[
  'Pick up a paper origami crane. It is made of flat folds, yet it looks like a bird. 3D models work the same way: every curved cheek, sword, and tree trunk in a game is built from flat triangles, folded and joined so cleverly that you forget they are flat.',
  'Paint goes on top. A plain grey shape becomes rusty iron, polished wood, or soft fabric depending on its surface. In 3D, shape and surface are separate, and that separation is a superpower.',
 ],
 hero:image('f3-04-hero','A 3D treasure chest shown in three stages from left to right: a wireframe of triangles, a smooth grey clay model, and a fully textured chest with wood and gold metal.','A treasure chest shown as wireframe, grey clay, and fully textured.'),
 sections:[
  {title:'Meshes and polygons',paragraphs:[
   'A mesh is the 3D shape of an object: points called vertices, joined by edges into faces, usually triangles. More triangles mean more detail and more work for the computer. A stylized low-poly tree might have a few hundred triangles; a detailed character in a modern game, tens of thousands.',
   'Low-poly styles use few triangles on purpose, with flat colors or simple textures. They are quick to make, light to run, and easy to keep consistent, which makes them perfect for small teams and browser games.',
  ]},
  {title:'Textures, UVs, and materials',paragraphs:[
   'A texture is an image wrapped onto a mesh. To know where each part of the image goes, the mesh is unwrapped flat, like peeling an orange and flattening the skin. That flat layout is called a UV map. A material combines textures and settings that describe the surface.',
   'Most modern engines use physically based rendering (PBR), where materials describe real properties: base color (often called albedo), roughness (how shiny or matte), metallic (metal or not), and a normal map that fakes small bumps and grooves without extra triangles. Change the material and the same crate becomes wood, metal, or ice.',
  ],compare:{title:'Common material maps',columns:['Map','What it controls'],rows:[['Base color (albedo)','The surface color without lighting'],['Roughness','Shiny (low) to matte (high)'],['Metallic','Whether the surface behaves like metal'],['Normal map','Small bumps and grooves, faked by lighting'],['Emission','Parts that glow on their own']]},media:chart('f3-04-uv','A cartoon of a 3D cube being unfolded into a flat cross shape on a sheet of paper, with a painted texture on the flat paper, then refolded onto the cube.','A cube unfolded into a flat UV layout, painted, and folded back.','21:9')},
  {title:'Formats and importing',paragraphs:[
   'Models travel between programs in file formats. glTF (often .glb) is a modern, open format widely supported by Godot, Three.js, Blender, and others, and is a good default. FBX is common in older pipelines and with Unity and Unreal. OBJ is simple and old, with no animation.',
   'Every imported model needs checking: correct scale (is it 1.8 metres tall?), correct facing direction, materials that came through, sensible pivot point (feet for characters, base for props), and a reasonable triangle count. Fix these once in a wrapper scene, not in every place the model is used.',
  ]},
  {title:'Visual mesh versus collision',paragraphs:[
   'What you see and what the physics engine feels are usually different shapes. A detailed statue might use a simple box or capsule for collision. Characters often use a capsule. Using a detailed visual mesh for collision is slow and causes characters to snag on tiny details.',
   'This matters especially with AI-generated models, which often have messy geometry: holes, floating bits, and thousands of unnecessary triangles. Give them simple collision shapes and, if needed, clean them up in Blender.',
  ]},
 ],
 games:[
  {title:'Star Fox',year:1993,platform:'SNES',note:'Brought simple flat-shaded polygon models to home consoles.'},
  {title:'A Short Hike',year:2019,platform:'PC, then Switch',note:'Low-poly models with a crunchy pixelated look, made by a solo developer.'},
  {title:'The Legend of Zelda: The Wind Waker',year:2002,platform:'GameCube',note:'Simple models and cartoon materials that still look great.'},
 ],
 activity:{title:'Try it: inspect a free model',task:'Download a free model from Kenney, Quaternius, or Poly Haven and inspect it.',steps:['Open it in Blender or an online glTF viewer.','Check its height, facing direction, and triangle count.','Identify its material maps.'],hints:['Blender shows triangle counts in the status bar when enabled.','Search “glTF viewer” for browser-based viewers.'],checks:['You noted scale, facing, and triangle count.','You identified at least one material map.']},
 ai:{text:'AI 3D generators such as Meshy, Tripo, and Hunyuan3D turn text or images into textured models in minutes, which is great for props and prototypes. Always inspect the results: scale, facing, triangle count, holes, and material quality. Ask your coding agent to import models into wrapper scenes with simple collision shapes.',toolIds:['meshy','tripo','hunyuan3d','quaternius','kenney','polyhaven','blender-mcp'],prompt:'Generate a low-poly [object] for a stylized game: under [3,000] triangles, flat colors with a simple texture, single object, centered pivot at its base, facing forward, about [1] metre tall, no background, export as glTF.'},
 deeper:{text:'If generated or downloaded models are not enough:',items:[
  {label:'Blender',detail:'Model, unwrap, texture, and fix 3D assets for free.',toolId:'blender'},
  {label:'Blender Guru’s donut tutorial',detail:'A famous beginner series that teaches Blender basics by modelling a doughnut.'},
  {label:'Poly Haven and ambientCG',detail:'Free textures and materials for your own models.',toolId:'polyhaven'},
 ]},
 questions:[
  ['What does a roughness map control?',['The small bumps and grooves on the surface','How shiny or matte the surface looks','Whether the surface behaves like metal'],1,'Roughness describes how light scatters: low is shiny, high is matte.'],
  ['Why do games use simple shapes for collision instead of detailed meshes?',['Detailed collision is slow and makes characters snag','Simple collision makes objects look smoother','No engine can use a detailed mesh for collision'],0,'Simple collision is faster and gives smoother movement.'],
  ['Which format is a good modern default for exchanging models?',['glTF (.glb)','OBJ, which also stores animations','A high-resolution PNG render of the model'],0,'glTF is open and widely supported by engines and tools.'],
 ],
 summary:['Meshes are made of triangles; low-poly styles use few on purpose.','UVs map textures onto meshes; PBR materials describe real surface properties.','Check scale, facing, pivot, and triangle count on import, and use simple collision shapes.'],
 teaser:'A model in darkness is invisible. Next: light and atmosphere.',
},
{
 id:'f3-lighting',
 goal:'Understand light types, shadows, baked versus real-time lighting, atmosphere, and how light guides players and sets mood.',
 story:[
  'Take a simple grey room. Light it from above with cold white light and it becomes a hospital. Light it with a single flickering orange lamp in the corner and it becomes a hiding place. Open a window and let warm sunlight pour across the floor, and it becomes a home.',
  'In 3D games, lighting is the fastest way to change how a place feels, and one of the quietest ways to tell players where to go.',
 ],
 hero:image('f3-05-hero','The same simple 3D room shown three times: lit with cold overhead light, with a single warm lamp in darkness, and with golden sunlight streaming through a window.','One room lit three ways: cold, dim and warm, and sunny.','21:9'),
 sections:[
  {title:'Kinds of light',paragraphs:[
   'Directional light simulates the sun: parallel rays from one direction lighting the whole scene. Point lights shine in all directions from a spot, like a bulb or a torch. Spot lights shine in a cone, like a flashlight or stage light. Area lights come from a surface, like a window or a glowing panel, and give soft shadows.',
   'Environment or ambient light fills in the shadows, usually taken from the sky. Without it, shadowed areas turn completely black. Many engines use a sky image, called an environment map, to light scenes and give reflections.',
  ],compare:{title:'Light types',columns:['Light','Real-world example','Used for'],rows:[['Directional','The sun or moon','Outdoor scenes, time of day'],['Point','A bulb, torch, campfire','Indoor lamps, magic effects'],['Spot','A flashlight, stage light','Focus, horror, searchlights'],['Area','A window, a light panel','Soft indoor light'],['Environment','The sky','Fill light and reflections']]}},
  {title:'Shadows and baking',paragraphs:[
   'Shadows ground objects in the world and show depth, but they are expensive to calculate. Real-time lighting updates every frame, so lights and objects can move; baked lighting is calculated in advance and stored in textures called lightmaps, which looks rich and runs fast but cannot change.',
   'Many games mix both: baked lighting for static buildings and terrain, and real-time light and shadows for characters and moving objects. Global illumination, light bouncing between surfaces, makes scenes look natural. It can be baked, or approximated in real time on modern hardware.',
  ]},
  {title:'Atmosphere',paragraphs:[
   'Fog makes distant things fade, adding depth and mood and hiding the edge of the world. Volumetric light shows beams through dust or mist. Color temperature, warm orange versus cool blue, sets emotion. A day-night cycle can change the whole mood of a level.',
   'Post-processing adjusts the final image: bloom makes bright things glow, color grading tints the whole scene, and tone mapping keeps very bright and very dark areas readable. Small changes go a long way; heavy effects can hurt readability and performance.',
  ],media:image('f3-05-fog','A misty forest path at dawn with beams of light slanting through the trees, distant trees fading into soft blue fog, and a warm lantern glow on a cottage at the end of the path.','A misty forest path with light beams and a glowing cottage in the distance.')},
  {title:'Light as a guide',paragraphs:[
   'Players move toward light. A lit doorway in a dark corridor, a glowing item on a pedestal, or a sunbeam on a distant tower all pull attention without arrows. Many games light the main path slightly brighter than side areas, and give important objects a consistent glow.',
   'Contrast matters more than brightness. A dark scene with one bright spot guides better than a uniformly bright scene. When you plan a level, plan its light: where is the player meant to look?',
  ]},
 ],
 games:[
  {title:'Half-Life 2',year:2004,platform:'PC, then consoles',note:'Uses light and contrast to guide players through its world.'},
  {title:'Alan Wake',year:2010,platform:'Xbox 360, PC',note:'Light is both atmosphere and a weapon against the darkness.'},
  {title:'Journey',year:2012,platform:'PS3, then PC',note:'A glowing mountain peak acts as a constant guiding light.'},
  {title:'Inside',year:2016,platform:'Xbox One, then PC and consoles',note:'Moody, restrained lighting and fog tell a story without words.'},
 ],
 activity:{title:'Spot it: follow the light',task:'Play or watch a 3D game level and track how light guides you.',steps:['Note the brightest spots in each area.','Check whether the path forward is lit differently.','Find one place where darkness was used on purpose.'],hints:['Look at doorways, item pedestals, and distant landmarks.','Horror games use darkness deliberately.'],checks:['You found at least two places where light guided you.','You found one deliberate use of darkness.']},
 ai:{text:'Describe lighting as mood and guidance, then let your agent set it up: “a warm sunset directional light, blue ambient fill, light fog, and a bright lamp marking the exit.” Ask for every light value in one place, and check performance on your target platform.',toolIds:['claude-code','godot-mcp','polyhaven'],prompt:'Light my 3D level for a [mood] feeling: a directional sun at [angle] with [warm/cool] color, sky-based ambient light, soft distance fog starting at [20 m], and one bright point light marking the exit. Keep the main path slightly brighter than side areas. Put all light settings in one place.'},
 deeper:{text:'To light scenes yourself:',items:[
  {label:'Poly Haven HDRIs',detail:'Free sky images for lighting 3D scenes.',toolId:'polyhaven'},
  {label:'Blender lighting',detail:'Experiment with lights and renders in Blender.',toolId:'blender'},
  {label:'Godot docs: Lights and shadows',detail:'Official guide to lighting in Godot.',url:'https://docs.godotengine.org/en/stable/tutorials/3d/lights_and_shadows.html'},
 ]},
 questions:[
  ['What is the main advantage of baked lighting?',['It looks rich and runs fast','It reacts to moving lights every frame','It makes shadows unnecessary'],0,'Baked lighting is precomputed, so it is cheap at runtime but cannot move.'],
  ['How can lighting guide players?',['Making the path forward contrast with its surroundings','Making every area equally bright so nothing is hidden','Using the same color of light everywhere'],0,'Contrast pulls attention toward lit areas.'],
 ],
 summary:['Directional, point, spot, area, and environment lights each have a role.','Baked lighting is fast; real-time lighting is flexible; many games mix both.','Fog, color, and post-processing set mood; contrast guides players.'],
 teaser:'Light reveals surfaces. Shaders decide how they are drawn. Next: shaders, explained without code.',
 mechanics:['day-night','weather'],
},
{
 id:'f3-shaders',
 goal:'Understand what shaders are and what they make possible, from cartoon shading to water and dissolves, without writing shader code.',
 story:[
  'Two games can use the same 3D model of a tree. In one, it looks like a photograph. In another, it looks like a watercolour painting. In a third, it is outlined in black ink like a comic book. The model did not change. Something decided, pixel by pixel, how to color it.',
  'That something is a shader: a tiny program that runs on the graphics card for every vertex and every pixel, many millions of times per second. Shaders are how games get their signature look.',
 ],
 hero:image('f3-06-hero','The same stylized tree shown in four styles side by side: realistic, cel-shaded cartoon with bold outlines, soft watercolour, and glowing hologram wireframe.','One tree rendered in four styles: realistic, cartoon, watercolour, and hologram.'),
 sections:[
  {title:'What a shader does',paragraphs:[
   'A shader is a small set of instructions the graphics card follows to draw things. A vertex shader can move the corners of a mesh, for example making grass sway or water ripple. A fragment shader, often called a pixel shader, decides the final color of each pixel, using the material, the lights, and any effects.',
   'Every material uses a shader, even if you never see it. When you change roughness or color in a material, you are giving settings to a shader. Writing your own shader lets you create looks that standard materials cannot.',
  ],diagram:{title:'FROM MESH TO PIXELS',nodes:['Mesh vertices','Vertex shader (move, wave)','Triangles fill pixels','Fragment shader (color, light)','Image on screen']}},
  {title:'Shaders you have seen',paragraphs:[
   'Toon or cel shading divides light into a few flat bands instead of smooth gradients, giving a cartoon look; outlines are often added by drawing a slightly larger, inverted copy of the model in black. Water shaders combine moving waves, reflections, and foam. Dissolve effects make an object burn away with a glowing edge. Wind shaders make grass and leaves sway. Force fields, holograms, and glowing magic are almost always shaders.',
   'Post-processing shaders work on the whole screen after it is drawn: blur, bloom, color grading, pixelation, outline detection, and retro effects. Return of the Obra Dinn used a screen shader to make its 3D world look like a one-bit, dithered old computer image.',
  ],media:clip('f3-06-dissolve','A small stone statue dissolving away from bottom to top with a glowing orange edge, revealing nothing behind it, then reforming.','A statue dissolving with a glowing edge, then reforming.')},
  {title:'Making shaders without code',paragraphs:[
   'Most engines offer visual shader editors, where you connect boxes, called nodes, instead of writing code: take the time, feed it into a wave, use it to move vertices. Godot has a visual shader editor, Unity has Shader Graph, and Unreal has its Material Editor. Blender’s shader nodes work the same way for renders.',
   'Libraries such as Godot Shaders and Shadertoy share thousands of free shaders. Coding agents are also quite good at writing small shaders from a clear description, especially when you name the effect: “toon shading with three light bands and a black outline.”',
  ]},
  {title:'Cost and restraint',paragraphs:[
   'Shaders run for every pixel, so complex ones can slow a game down, especially on phones and in browsers. Effects that cover the whole screen are the most expensive. Test on your target device and keep a setting to turn heavy effects off.',
   'Shaders are also a style decision. A single consistent shader, such as toon shading on everything, can unify mismatched assets from different sources, which is a very useful trick when mixing generated and downloaded models.',
  ]},
 ],
 games:[
  {title:'The Legend of Zelda: The Wind Waker',year:2002,platform:'GameCube',note:'Cel shading that gave a timeless cartoon look.'},
  {title:'Ōkami',year:2006,platform:'PS2',note:'A brush-painted, ink-wash style created with shaders and art direction.'},
  {title:'Borderlands',year:2009,platform:'PC, Xbox 360, PS3',note:'Bold comic-book outlines over 3D worlds.'},
  {title:'Return of the Obra Dinn',year:2018,platform:'PC, then consoles',note:'A one-bit dithered screen shader that looks like an old Macintosh.'},
 ],
 activity:{title:'Spot it: find the shader',task:'Find three visual effects in games you know that are probably shaders.',steps:['Look for water, glowing magic, swaying grass, or outlines.','Describe what each effect does in plain words.','Guess whether it moves vertices, colors pixels, or affects the whole screen.'],hints:['If the whole screen changes, it is probably post-processing.','Swaying plants usually move vertices.'],checks:['You described three effects.','You classified each as vertex, pixel, or screen effect.']},
 ai:{text:'Shaders are a great task for coding agents when you describe the effect precisely: what it looks like, which objects use it, and any numbers such as speed or color. Ask for exposed parameters you can tweak in the editor. Shader libraries are a quick alternative.',toolIds:['claude-code','godot-mcp','godot'],prompt:'Write a [Godot] shader for a toon look: three flat light bands, a slightly darker shadow color instead of black, a rim light, and a separate black outline pass. Expose band count, shadow color, rim strength, and outline width as editable parameters. Explain how to apply it to all my models.'},
 deeper:{text:'To explore shaders yourself:',items:[
  {label:'The Book of Shaders',detail:'A gentle, interactive introduction to writing shaders.',url:'https://thebookofshaders.com/'},
  {label:'Godot Shaders',detail:'A free community library of shaders for Godot.',url:'https://godotshaders.com/'},
  {label:'Shadertoy',detail:'Thousands of shader experiments running in your browser.',url:'https://www.shadertoy.com/'},
 ]},
 questions:[
  ['What does a fragment (pixel) shader mainly decide?',['The final color of each pixel','Where each vertex of the mesh is placed','Which objects collide with each other'],0,'Fragment shaders compute pixel colors from materials, lights, and effects.'],
  ['How can a shader help when mixing assets from different sources?',['A consistent shader, such as toon shading, can unify their look','A shader converts every model to the same polygon count','A shader fixes models that face the wrong way'],0,'One shared rendering style makes varied assets feel like one set.'],
 ],
 summary:['Shaders are small programs that move vertices and color pixels.','Toon shading, water, dissolves, wind, and post-processing are shader effects.','Visual editors and libraries make shaders approachable; watch performance.'],
 teaser:'Next: putting models, light, and shaders together into whole environments.',
},
{
 id:'f3-environments',
 goal:'Learn how 3D environments are built: terrain, skies, modular kits, props, foliage, and set dressing that tells a story.',
 story:[
  'Walk into a forest in a well-made game. Tall trees frame the path. Moss covers the north side of rocks. A broken cart lies half-buried in ferns, its wheel cracked. Birds lift from a branch as you pass. Far away, a ruined tower catches the light.',
  'None of this is accidental. Environment artists build these places piece by piece, from huge shapes down to tiny details, deciding where your eye goes and what story the place tells.',
 ],
 hero:image('f3-07-hero','A lush 3D forest clearing with a winding path, mossy rocks, a broken cart in the ferns, and a ruined tower on a distant hill catching golden light.','A forest clearing with a broken cart and a distant ruined tower.'),
 sections:[
  {title:'Big shapes first',paragraphs:[
   'Environment artists work from large to small. First the big shapes: terrain, mountains, buildings, and the main paths. Terrain is often made from a heightmap, a greyscale image where brighter means higher, sculpted in the editor. A skybox or sky dome surrounds the scene with a distant sky, clouds, and sometimes mountains.',
   'If the big shapes are interesting from the player’s view, small details are a bonus. If the big shapes are dull, no amount of detail will save the scene.',
  ],diagram:{title:'BUILDING AN ENVIRONMENT',nodes:['Big shapes: terrain, buildings, paths','Medium: rocks, trees, walls','Small: props and clutter','Light and atmosphere','Story details']}},
  {title:'Modular kits',paragraphs:[
   'Building every wall and room as a unique model would take forever. Instead, artists create modular kits: wall pieces, floors, doorways, corners, stairs, and pillars that snap together on a grid. The team behind Skyrim described building many of its dungeons from shared kits, so a small set of pieces created hundreds of spaces.',
   'Kits need consistent sizes, often multiples of a base grid such as 2 or 4 metres, so pieces always line up. Many free kits from Kenney, Quaternius, and others follow this principle.',
  ],media:image('f3-07-kit','A tidy arrangement of modular dungeon pieces laid out like toy blocks: wall segments, a corner, a doorway arch, floor tiles, stairs, and a pillar, beside a small dungeon room assembled from them.','Modular dungeon pieces laid out beside a room built from them.')},
  {title:'Foliage, props, and set dressing',paragraphs:[
   'Foliage brings life: grass, bushes, flowers, and trees, usually painted across terrain with brush tools and swaying with a wind shader. Props are the objects that fill spaces: barrels, crates, furniture, signs. Set dressing is placing them deliberately so a place feels used and real.',
   'Good set dressing tells stories and guides players. A trail of scattered coins, a toppled chair beside an open door, a lamp left burning: each suggests what happened and where to go. Clutter should support the path, not hide it; keep walkable areas readable.',
  ]},
  {title:'Scale and consistency',paragraphs:[
   'Environments must match the character’s scale. Doors a little taller than the hero, steps a comfortable height, railings at hip level. Mismatched scale is one of the most common problems when mixing assets from different sources, along with mismatched art styles.',
   'Pick one style and stick to it: low-poly flat color, stylized hand-painted, or realistic. A consistent shader and a shared color palette can help unify assets from several places.',
  ]},
 ],
 games:[
  {title:'The Elder Scrolls V: Skyrim',year:2011,platform:'PC, PS3, Xbox 360',note:'Hundreds of dungeons built from shared modular kits.'},
  {title:'The Witcher 3: Wild Hunt',year:2015,platform:'PC, PS4, Xbox One',note:'Dense, lived-in environments full of story details.'},
  {title:'Firewatch',year:2016,platform:'PC, then consoles',note:'A strongly stylized, painterly wilderness with a limited palette.'},
  {title:'Gone Home',year:2013,platform:'PC, then consoles',note:'An entire story told through set dressing in a family home.'},
 ],
 activity:{title:'Try it: dress a room',task:'Sketch a single 3D room and decorate it to tell a story.',steps:['Decide what happened in the room.','Place big shapes: walls, windows, doorway.','Add five props that hint at the story.','Mark the path a player will walk.'],hints:['Leave the walking path clear.','Light one important object.'],checks:['A reader can guess the story.','The path through the room stays readable.']},
 ai:{text:'AI 3D generators are handy for one-off props, such as a strange statue or a particular cart, while free kits are better for walls, floors, and anything that must line up. Ask your agent to place props from a list and to keep walking paths clear, then adjust by hand.',toolIds:['meshy','tripo','kenney','quaternius','polyhaven','ambientcg','blender-mcp'],prompt:'Using my modular kit with a [2 m] grid, build a small dungeon room [8×8 m] with one doorway. Then place these props to suggest that [story]: [prop list]. Keep a 1.5 m wide clear path from the doorway to [goal]. Add soft fog and a warm light on [important object].'},
 deeper:{text:'If generated and downloaded pieces are not enough:',items:[
  {label:'Blender',detail:'Make your own modular kits and props.',toolId:'blender'},
  {label:'Skyrim’s Modular Approach to Level Design (Joel Burgess)',detail:'A widely shared GDC talk and article on modular kits.'},
  {label:'ambientCG',detail:'Free textures for floors, walls, and terrain.',toolId:'ambientcg'},
 ]},
 questions:[
  ['Why build environments from modular kits?',['To create many spaces from a small set of pieces that line up','Because unique models cannot be lit properly','Because kits make every room look different automatically'],0,'Kits multiply content while keeping consistency.'],
  ['What is set dressing for?',['Making places feel real, telling stories, and guiding players','Adding collision to the level','Filling every empty space so nothing looks bare'],0,'Deliberately placed props suggest stories and paths.'],
 ],
 summary:['Build environments from big shapes down to small details.','Modular kits on a consistent grid create many spaces efficiently.','Foliage, props, and set dressing add life and story; keep scale and style consistent.'],
 teaser:'Next: designing 3D spaces for play. Landmarks, sightlines, and blockouts.',
 mechanics:['environmental-storytelling'],
},
];
