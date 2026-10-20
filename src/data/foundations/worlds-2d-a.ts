import type { ChapterSeed } from '../lesson-builder';
import { chart, clip, image } from './media';

export const worlds2dSeedsA: ChapterSeed[] = [
{
 id:'f2-sprites',
 goal:'Understand how 2D games are drawn: the screen as a coordinate grid, sprites, sprite sheets, layers, and the main 2D art approaches.',
 story:[
  'Lean very close to an old television and the picture falls apart into tiny glowing dots. Step back and they become a hero, a castle, a sky. Every 2D game is a trick of this kind: a flat grid of colored squares that your brain insists is a world.',
  'Making that trick work, so that a few hundred little squares become a character you care about, is one of the oldest crafts in games. This course begins with how those flat worlds are put on the screen.',
 ],
 hero:image('f2-01-hero','A giant magnifying glass held over a cheerful pixel-art hero, revealing the individual colored squares that make it up, while the rest of the scene stays smooth.','A magnifying glass revealing the pixels of a small game character.'),
 sections:[
  {title:'The screen is a grid',paragraphs:[
   'A 2D game places everything on a grid of coordinates. Each position has an x value (left and right) and a y value. In most 2D engines and on web canvases, the origin, the point (0, 0), sits at the top-left corner, x grows to the right, and y grows downward. That surprises many people, because in school maths y grows upward.',
   'Moving a character means changing its coordinates a little every frame. Collisions mean checking whether two shapes on that grid overlap. When you ask a coding agent to place something “a bit higher,” you are really asking it to reduce y. Try dragging the square in the explorer below and watch the numbers change.',
  ],demo:'coordinates'},
  {title:'Sprites and sprite sheets',paragraphs:[
   'A sprite is a 2D image that represents an object: a character, an enemy, a coin. Animated sprites are made of several frames shown in sequence. To keep them organized and fast to load, frames are often packed together into a single image called a sprite sheet, a grid of poses that the engine slices up.',
   'Sprites usually have transparent backgrounds so only the character is drawn. Every frame should be the same size, with the character anchored at the same point, often the feet, so animations do not wobble. These are easy rules to give an AI sprite generator or to check in a downloaded pack.',
  ],media:chart('f2-01-spritesheet','A neat sprite sheet: a grid of eight animation frames of a small fox character running, each in an identical square cell, with a faint dotted line marking the feet anchor point across all frames.','A sprite sheet grid showing eight running frames of a small fox.','21:9')},
  {title:'Layers and draw order',paragraphs:[
   'A 2D scene is drawn in layers, back to front, like stage scenery: sky, distant hills, the level, characters, effects, and finally the interface on top. What is drawn later appears in front. In top-down games, characters further down the screen are usually drawn in front of those higher up, so a character can walk behind a tree and then in front of it.',
   'When something appears behind the wall it should be in front of, the cause is almost always draw order. Naming it saves a lot of confused back-and-forth with an agent.',
  ]},
  {title:'Choosing a 2D art approach',paragraphs:[
   'Pixel art works at a low resolution, often characters of 16, 32, or 48 pixels tall, then scales up by whole numbers so every pixel stays crisp. Use nearest-neighbour filtering (often called “pixel perfect”) in your engine, or the art will look blurry. Hand-drawn or painted art uses high-resolution images and smooth filtering. Vector art uses clean shapes that scale to any size.',
   'Pick one resolution and stick to it. Mixing a 16-pixel character with a 64-pixel tree, or blurry scaled sprites with crisp ones, breaks the illusion faster than any other mistake.',
  ],compare:{title:'2D art approaches',columns:['Approach','Typical size','Filtering','Good sources'],rows:[['Pixel art','16–64 px characters','Nearest neighbour (crisp)','PixelLab, Kenney, itch.io, Aseprite'],['Hand-drawn / painted','High resolution','Smooth','Krita, itch.io packs'],['Vector / flat','Any size','Smooth','Inkscape, Kenney']]}},
 ],
 games:[
  {title:'Super Mario Bros.',year:1985,platform:'NES',note:'A tiny palette and 16-pixel tiles that remain instantly readable.'},
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'Low-resolution pixel art, scaled crisply, with a carefully chosen palette.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'Hand-drawn art in layers, from misty backgrounds to sharp foregrounds.'},
  {title:'Stardew Valley',year:2016,platform:'PC, then everywhere',note:'Top-down pixel art where draw order lets you walk behind and in front of objects.'},
 ],
 activity:{title:'Spot it: count the pixels',task:'Take a screenshot of a pixel-art game and estimate the size of its main character in pixels.',steps:['Zoom into the screenshot until you can see individual pixels.','Count the character’s height in pixels.','Check whether any sprites look blurry or mismatched in size.'],hints:['Many games use characters between 16 and 48 pixels tall.','Look for a consistent pixel size across the whole scene.'],checks:['You estimated the character’s height.','You can say whether the scene uses one consistent pixel scale.']},
 ai:{text:'Give AI tools and coding agents the same numbers: your base resolution, character size in pixels, tile size, and filtering. Sprite generators need size and view angle; agents need to set up crisp scaling and draw order correctly. Mismatched sizes are the most common problem when mixing generated and downloaded art.',toolIds:['pixellab','kenney','itch-assets','claude-code'],prompt:'Set up my 2D game for pixel art: base resolution [320×180], scaled up by whole numbers to fit the window, nearest-neighbour filtering on all sprites, and draw order so characters lower on screen appear in front. My characters are [32] px tall and tiles are [16] px.'},
 deeper:{text:'To make sprites yourself:',items:[
  {label:'Aseprite or LibreSprite',detail:'Draw sprites and export sprite sheets.',toolId:'aseprite'},
  {label:'Piskel',detail:'A free pixel editor in your browser.',toolId:'piskel'},
  {label:'Lospec tutorials',detail:'Free pixel-art tutorials and palettes.',url:'https://lospec.com/pixel-art-tutorials'},
 ]},
 questions:[
  ['In most 2D engines, what happens when a character’s y value increases?',['It moves down the screen','It moves up the screen','It moves to the right'],0,'With the origin at the top-left, y grows downward.'],
  ['Your pixel-art sprites look blurry when scaled up. What is the likely fix?',['Use smooth filtering','Use nearest-neighbour (pixel perfect) filtering and whole-number scaling','Make the sprites larger in a paint program'],1,'Nearest-neighbour filtering at whole-number scales keeps pixels crisp.'],
  ['A character appears behind a tree when standing in front of it in a top-down game. What should you look at?',['The collision shapes','The draw order','The camera’s dead zone'],1,'Draw order decides what appears in front.'],
 ],
 summary:['2D screens are coordinate grids, usually with y growing downward.','Sprites and sprite sheets hold characters and animations; keep sizes and anchors consistent.','Layers set draw order; pick one art approach and resolution and stick to it.'],
 teaser:'A world needs a window to view it through. Next: 2D cameras and parallax.',
},
{
 id:'f2-cameras',
 goal:'Compare 2D camera views and behaviors (side, top-down, fixed, scrolling) and use parallax to suggest depth.',
 story:[
  'A theatre stage has one window onto the world: the frame of the stage itself. Early games were the same. Pong, Space Invaders, and Pac-Man all fit their whole world on one fixed screen.',
  'Then games began to scroll. The world grew larger than the screen, and the screen became a window that travelled. Where that window points, how it moves, and what it reveals turned out to be one of the most important and least noticed parts of 2D design.',
 ],
 hero:image('f2-02-hero','A long side-view landscape scroll painted like a theatre backdrop, with a glowing rectangle (the camera) framing just one part of it around a small hero.','A wide 2D landscape with a framed window following a small hero.'),
 sections:[
  {title:'Choosing a view',paragraphs:[
   'Side view shows the world like a stage, perfect for jumping because heights and gaps are easy to read. It suits platformers, metroidvanias, and fighting games. Top-down shows the world from above, showing space in every direction, ideal for exploration, twin-stick shooters, and many roguelikes. Many top-down games actually use a three-quarter view, slightly tilted, so you see the fronts of characters and buildings as well as their tops.',
   'Your view decides your art. Side-view characters are drawn in profile; top-down characters often need four or eight facing directions, which multiplies animation work. That is worth knowing before you generate a single sprite.',
  ],compare:{title:'2D views',columns:['View','Shows best','Classic examples'],rows:[['Side view','Heights, gaps, jumps','Super Mario Bros., Hollow Knight'],['Top-down','Space in all directions','The Legend of Zelda, Hotline Miami'],['Three-quarter top-down','Fronts and tops of things','Stardew Valley, A Link to the Past'],['Isometric (2.5D)','Height and depth on a map','Diablo, Hades, Into the Breach']]}},
  {title:'How the camera moves',paragraphs:[
   'Fixed-screen games show one screen at a time; flip-screen games jump to the next screen when you reach an edge, as in the original Legend of Zelda. Scrolling games move the camera continuously. A camera locked exactly to the player feels jittery and shows too little ahead.',
   'Designers use a dead zone, a small box in the middle of the screen where the player can move without the camera following, and smoothing, so the camera eases toward its target. Look-ahead shifts the camera in the direction you are moving or facing, so you can see what is coming. Platformers often follow less tightly up and down, only moving vertically when the player lands on a new height.',
  ],media:chart('f2-02-deadzone','A screen diagram showing a small player inside a dashed inner rectangle (the dead zone), with an arrow showing the camera shifting ahead in the direction of movement (look-ahead).','Diagram of a camera dead zone with a look-ahead arrow.','16:9')},
  {title:'Parallax: depth from layers',paragraphs:[
   'When you look out of a moving train window, nearby fences rush past while distant mountains barely move. 2D games copy this with parallax scrolling: background layers move more slowly than the foreground. Three or four layers, such as sky, far mountains, near hills, and the playable level, create a strong sense of depth without any 3D.',
   'Keep the gameplay layer clearly separated from background layers by contrast or blur, so players never mistake decoration for a platform. Try moving the camera in the parallax lab below and watch each layer travel at its own speed.',
  ],demo:'parallax'},
  {title:'Cameras that tell players things',paragraphs:[
   'Cameras can communicate. Zooming out before a boss shows the size of the arena. Locking the camera inside a room signals “you cannot leave until this fight is over.” Panning to show a door that just opened tells the player where to go next. A gentle shake marks a big impact.',
   'Each of these is a small, precise request you can give a coding agent, and each makes a 2D game feel more deliberate.',
  ]},
 ],
 games:[
  {title:'The Legend of Zelda',year:1986,platform:'NES',note:'Flip-screen exploration: each screen is a small puzzle of its own.'},
  {title:'Sonic the Hedgehog',year:1991,platform:'Mega Drive / Genesis',note:'A camera that had to keep up with very fast movement.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'Rich parallax layers and room-locking cameras during boss fights.'},
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'Mostly single-screen rooms so every challenge is fully visible.'},
 ],
 activity:{title:'Spot it: watch the camera',task:'Play or watch a 2D game and describe exactly how its camera behaves.',steps:['Is the view side, top-down, three-quarter, or isometric?','Does the camera follow tightly, lag behind, or look ahead?','Find one moment where the camera tells you something.'],hints:['Watch what happens when the player reverses direction.','Boss arenas and doors are good places to watch.'],checks:['You identified the view and the following style.','You found one communicative camera moment.']},
 ai:{text:'Camera behavior is easy to describe precisely and easy to tune by feel. Ask your coding agent for a dead zone, smoothing, and look-ahead with adjustable numbers. For parallax, generate or download backgrounds as separate layers rather than one flat image.',toolIds:['claude-code','godot-mcp','kenney','scenario'],prompt:'Make my 2D camera follow the player with a dead zone of [64×48] px, smoothing of [5], and a look-ahead of [48] px in the direction the player faces. Add three parallax background layers moving at 0.2, 0.5, and 0.8 of the camera’s speed. Put every number in one settings block.'},
 deeper:{text:'For camera design in depth:',items:[
  {label:'Scroll Back: The Theory and Practice of Cameras in Side-Scrollers (Itay Keren)',detail:'A classic GDC talk and article cataloguing 2D camera techniques.'},
  {label:'Krita or any layered painting tool',detail:'Paint your own parallax layers.',toolId:'krita'},
 ]},
 questions:[
  ['What does a camera dead zone do?',['Lets the player move a little without the camera following','A part of the level that instantly defeats the player','An area the camera is never allowed to show'],0,'A dead zone reduces jitter by only moving the camera when the player leaves a central box.'],
  ['How does parallax create depth?',['By using 3D models for the background','By moving distant layers more slowly than near ones','By drawing distant layers larger'],1,'Different layer speeds mimic how distance affects apparent motion.'],
 ],
 summary:['Choose a view (side, top-down, three-quarter, isometric) based on what players need to read.','Dead zones, smoothing, and look-ahead make cameras comfortable.','Parallax layers add depth; cameras can also communicate.'],
 teaser:'Between flat 2D and full 3D lies a fascinating middle: 2.5D and isometric worlds. That’s next.',
 mechanics:['side-view','top-down','screen-shake'],
},
{
 id:'f2-isometric',
 goal:'Understand isometric and other 2.5D techniques: how they create depth, how depth sorting works, and when to choose them.',
 story:[
  'Picture a model railway on a table. You look at it from above and from an angle at once: you see the roofs of the houses, the fronts of the shops, the tracks curving between hills. You see the shape of everything, and the whole layout, all at once.',
  'Isometric games give players that tabletop view. For decades, they have let 2D hardware draw cities, dungeons, and battlefields that feel three-dimensional. Today, even fully 3D games often choose the same angle, because it is simply a wonderful way to see a world.',
 ],
 hero:image('f2-03-hero','A charming diorama-like isometric village on a tabletop, seen from a diagonal angle above: roofs, shopfronts, a winding road, trees, and tiny villagers.','An isometric village shown like a tabletop diorama.'),
 sections:[
  {title:'What isometric means',paragraphs:[
   'In a true isometric view, the three axes of 3D space appear at equal angles, and objects do not get smaller in the distance. Most games use a close cousin with a simple pixel-friendly slope: two pixels across for every one pixel up. The result is the familiar diamond-shaped tile. Strictly speaking that is “dimetric,” but everyone calls it isometric.',
   'Because nothing shrinks with distance, isometric views feel like maps or dioramas. Players can judge positions easily and see a large area at once, which is why the view is popular in strategy games, tactics games, city builders, and action RPGs.',
  ],demo:'isometric'},
  {title:'Diamonds and depth sorting',paragraphs:[
   'An isometric map is still a grid underneath. Each square cell is drawn as a diamond on screen: the grid is rotated by 45 degrees and squashed vertically. The game still thinks in rows and columns; only the drawing changes. That means movement, pathfinding, and collisions can stay simple even though the picture looks complex.',
   'The tricky part is draw order. Objects nearer to the viewer, lower on the screen, must be drawn after objects further away, or a character will appear to stand in front of a wall that should hide them. This is called depth sorting. Tall objects, objects spanning several tiles, and characters walking between them are the classic sources of sorting bugs.',
  ],media:chart('f2-03-grid','Two diagrams side by side: a simple square grid with a small character on one cell, and the same grid rotated 45 degrees and squashed into diamonds, with the character in the matching cell.','A square grid and the same grid turned into isometric diamonds.','21:9')},
  {title:'Other kinds of 2.5D',paragraphs:[
   '“2.5D” describes several tricks between 2D and 3D. Isometric is one. Another is the 3D side-scroller: the world is built from 3D models, but play happens on a 2D plane, as in Trine or Inside. A third is HD-2D, used by Octopath Traveler: 2D pixel-art sprites placed in a lit 3D environment with depth-of-field blur, like paper figures in a model set.',
   'Modern games such as Diablo III and Tunic are built in 3D but use a fixed isometric-style camera, combining the readability of the classic view with the convenience of 3D lighting and animation. For a new game, you can choose either path: draw diamond tiles in 2D, or build a 3D scene and point a fixed camera at it.',
  ],compare:{title:'Kinds of 2.5D',columns:['Technique','How it works','Examples'],rows:[['Isometric 2D','Diamond tiles and sprites drawn at an angle','Diablo, SimCity 2000, Into the Breach'],['3D isometric camera','3D world, fixed diagonal camera','Diablo III, Tunic'],['2.5D side-scroller','3D world, 2D movement plane','Trine, Inside'],['HD-2D','2D sprites in a lit 3D diorama','Octopath Traveler']]}},
  {title:'Choosing isometric',paragraphs:[
   'Isometric views shine when players need to see a lot of space and the relationships within it: armies, rooms, city blocks, enemies coming from every side. They are harder for precise jumping, because heights are difficult to judge, so platformers rarely use them.',
   'They also cost more art: characters often need four or eight directional views, and walls may need separate versions for different sides. Many free asset packs, such as Kenney’s isometric kits, provide matching sets to start with.',
  ]},
 ],
 games:[
  {title:'Zaxxon',year:1982,platform:'Arcade',note:'One of the first isometric games, with a scrolling diagonal fortress.'},
  {title:'Diablo',year:1996,platform:'PC',note:'An isometric dungeon crawl that defined the action RPG view.'},
  {title:'Monument Valley',year:2014,platform:'iOS, Android',note:'Uses the isometric illusion itself for impossible-geometry puzzles.'},
  {title:'Octopath Traveler',year:2018,platform:'Switch, then PC and consoles',note:'HD-2D: pixel sprites in a lit 3D diorama.'},
  {title:'Hades',year:2020,platform:'PC, Switch, then consoles',note:'An isometric-style camera on a fast action game.'},
 ],
 activity:{title:'Try it: draw an isometric room',task:'On paper, draw a 4 × 4 isometric floor with one wall, a table, and a character.',steps:['Draw a diamond grid of four by four tiles.','Add a wall along the two back edges.','Place a table and a character, deciding which one is drawn first.'],hints:['Use a two-across, one-up slope for your lines.','Things lower on the page are drawn last.'],checks:['The floor reads as a flat room seen from an angle.','Your draw order is correct.']},
 ai:{text:'Ask your coding agent to keep the game logic on a normal square grid and only convert positions when drawing; it keeps everything simpler. Ask explicitly for depth sorting by screen position. For art, generate or download sets that share the same angle; mixing angles is very noticeable.',toolIds:['claude-code','kenney','pixellab','godot'],prompt:'Build an isometric map for my game. Keep logic on a square grid of [10×10] cells; convert to screen positions with a 2:1 diamond projection only when drawing. Tiles are [64×32] px. Sort all objects by their screen y so nearer objects draw in front. Let me click a tile to move a character there.'},
 deeper:{text:'For isometric techniques in depth:',items:[
  {label:'Red Blob Games',detail:'Clear interactive articles about grids, coordinates, and maps.',url:'https://www.redblobgames.com/'},
  {label:'Kenney isometric packs',detail:'Matching free isometric tiles and props.',toolId:'kenney'},
  {label:'Blender for pre-rendered isometric art',detail:'Model in 3D, render with a fixed angle and orthographic camera, then use the renders as 2D sprites.',toolId:'blender'},
 ]},
 questions:[
  ['Why do isometric views feel like maps or dioramas?',['Objects do not shrink with distance','The camera always looks straight down','Everything is rendered in full 3D'],0,'Without perspective shrinking, sizes stay consistent across the scene.'],
  ['A character appears in front of a wall that should hide them in an isometric game. What is wrong?',['The collision shapes','Depth sorting','The tile size'],1,'Objects must be drawn in the correct order based on their position.'],
  ['Which genre rarely uses an isometric view, and why?',['Strategy, because it shows too much','Precision platformers, because heights are hard to judge','City builders, because they need a map view'],1,'Judging jump heights and gaps is difficult in isometric views.'],
 ],
 summary:['Isometric views draw a square grid as diamonds without perspective.','Depth sorting decides what appears in front.','2.5D also includes 3D side-scrollers, HD-2D, and 3D games with isometric cameras.'],
 teaser:'Whatever the view, most 2D worlds are built from small reusable pieces. Next: tiles and tilemaps.',
 mechanics:['isometric','fog-of-war'],genres:['action-rpg','tactics','city-builder'],
},
{
 id:'f2-tiles',
 goal:'Understand tilesets and tilemaps: how small reusable pieces build large levels, with layers, auto-tiling, and collision.',
 story:[
  'In the 1980s, memory was so precious that drawing a whole level as one big picture was impossible. So artists drew small squares, perhaps sixteen pixels across: a patch of grass, a brick, a corner of a cliff. Designers then arranged those squares like mosaic tiles, reusing each one hundreds of times.',
  'Memory is cheap now, but the idea stuck because it is brilliant. Tiles let you paint huge levels quickly, change them easily, and keep a consistent look. Most 2D games you love are mosaics.',
 ],
 hero:image('f2-04-hero','A craftsperson laying colorful square mosaic tiles on a table to form a game level: grass, water, cliffs, and a path, with a palette box of tiles beside them.','A craftsperson building a level from mosaic tiles.'),
 sections:[
  {title:'Tilesets and tilemaps',paragraphs:[
   'A tileset is a collection of tiles drawn at the same size, usually in one image: ground, walls, water edges, decorations. A tilemap is a grid that says which tile goes in each cell. Changing a level means changing the map, not redrawing art. Tile sizes such as 16, 32, or 48 pixels are common, and every tile in a set must use the same one.',
   'Good tilesets are designed so tiles join seamlessly. Edges and corners, such as a grass tile bordering water on the left, need their own versions. A complete terrain set can contain dozens of pieces for every way two surfaces can meet.',
  ],media:chart('f2-04-tileset','A neat tileset sheet showing grass, dirt, and water tiles with all their edge and corner variations arranged in a grid, beside a small map built from them.','A tileset with edge and corner variations beside a small map made from it.','21:9')},
  {title:'Auto-tiling',paragraphs:[
   'Placing every edge and corner by hand is slow. Auto-tiling, also called terrain painting, lets you paint with a material such as “water,” and the editor automatically chooses the right edge and corner tiles based on the neighbours. Godot, Tiled, LDtk, and most engines support it.',
   'If you generate or download a tileset, check that it includes a full set of edges and corners laid out in a way your editor can auto-tile. Many free packs are designed for this.',
  ]},
  {title:'Layers and collision',paragraphs:[
   'Tilemaps usually have several layers: a ground layer, a wall or solid layer, a decoration layer for flowers and cracks, and sometimes a layer drawn above characters, such as treetops and roof edges, so players can walk behind them. Keeping layers separate keeps editing simple.',
   'Tiles can also carry information. Wall tiles have collision shapes so characters cannot pass through them. Water tiles might slow you down; lava tiles might hurt. Treating tiles as data as well as pictures is what lets a painted map become a playable level.',
  ],diagram:{title:'TILEMAP LAYERS',nodes:['Ground','Walls (with collision)','Decoration','Characters','Above-player layer (treetops, roofs)']}},
  {title:'Level editors',paragraphs:[
   'You can paint tilemaps inside your engine, or use a dedicated level editor. Tiled is a long-standing free editor whose maps many engines can import. LDtk, created by the lead developer of Dead Cells, offers friendly auto-tiling and entity placement. Godot’s built-in TileMapLayer node handles painting, terrains, and collision in one place.',
   'A good habit: build one small room with your tileset before committing to it. If the edges look wrong or the collision feels odd, change the set now, not after fifty rooms.',
  ]},
 ],
 games:[
  {title:'The Legend of Zelda: A Link to the Past',year:1991,platform:'SNES',note:'Rich tile-based worlds with layers that let you walk behind objects.'},
  {title:'Terraria',year:2011,platform:'PC, then everywhere',note:'A world made entirely of tiles that players can dig, place, and reshape.'},
  {title:'Stardew Valley',year:2016,platform:'PC, then everywhere',note:'A tile-based farm where every crop and path sits on a grid.'},
  {title:'Dead Cells',year:2018,platform:'PC and consoles',note:'Hand-designed tile rooms assembled into varied levels.'},
 ],
 activity:{title:'Spot it: find the grid',task:'Look at a screenshot of a 2D game and find its tile grid.',steps:['Find repeating patterns in the ground or walls.','Estimate the tile size in pixels.','Find a place where an edge or corner tile joins two surfaces.'],hints:['Look along straight edges of walls or water.','Repetition is the giveaway: the same crack or flower appearing again.'],checks:['You estimated the tile size.','You found at least one edge or corner tile.']},
 ai:{text:'AI tools can generate tilesets, but complete, seamless edge sets are hard to get right; specialist pixel tools and free packs are often more reliable here. Coding agents are great at setting up tilemap layers, collision, and loading levels from editors such as Tiled or LDtk.',toolIds:['pixellab','kenney','tiled','ldtk','godot-mcp'],prompt:'Set up a tile-based level for my 2D game using [Godot TileMapLayer / Tiled import]. Tiles are [16] px. Create layers for ground, walls with collision, decoration, and an above-player layer. Make water tiles slow the player to half speed. Build one small test room so I can check edges and collision.'},
 deeper:{text:'If you want to make or edit tiles yourself:',items:[
  {label:'Tiled',detail:'A free, widely supported tile map editor.',toolId:'tiled'},
  {label:'LDtk',detail:'A modern level editor with friendly auto-tiling.',toolId:'ldtk'},
  {label:'Aseprite or LibreSprite',detail:'Draw your own tilesets with a tiled-mode preview.',toolId:'aseprite'},
 ]},
 questions:[
  ['What is the difference between a tileset and a tilemap?',['A tilemap holds the pictures; a tileset says where they go','A tileset holds the tile pictures; a tilemap says where each tile goes','They are two names for the same thing'],1,'The set is the palette of pieces; the map is the arrangement.'],
  ['Why put treetops on a separate layer drawn above characters?',['So players can walk behind them','So trees can have collision','So trees can sway in the wind'],0,'An above-player layer lets characters pass behind tall objects.'],
 ],
 summary:['Tilesets hold reusable pieces; tilemaps arrange them on a grid.','Auto-tiling chooses edge and corner tiles for you.','Layers organize maps, and tiles can carry collision and gameplay data.'],
 teaser:'Tiles give you building blocks. Next: arranging them into levels that teach.',
 mechanics:['terraforming'],genres:['sandbox','life-sim'],
},
{
 id:'f2-teaching',
 goal:'Design 2D levels that teach without words, using player metrics, safe introductions, and readable hazards.',
 story:[
  'The first screen of Super Mario Bros. has been called the most famous tutorial in games, yet it contains no text at all. The hero starts on the left with empty space to the right: go this way. A mushroom-shaped enemy walks toward you, and a block hangs overhead, nudging you to jump. If you hit the block, a mushroom slides out, bounces off a pipe, and comes back to you, almost impossible to miss.',
  'Every element is placed with intent. This chapter is about how to place yours the same way.',
 ],
 hero:image('f2-05-hero','A side-view game level drawn as a blueprint with handwritten annotations: an arrow saying “space to the right,” a circle around a floating block, and a dotted bounce path of a power-up.','An annotated level blueprint explaining how the first screen teaches the player.'),
 sections:[
  {title:'Know your metrics',paragraphs:[
   'Before designing levels, measure your character. How high can they jump, in tiles? How far can they jump while running? How long does a dash travel? These numbers are called metrics, and level designers build everything around them. A gap one tile wider than the maximum jump is impossible; a gap exactly at the maximum is a test of skill; a gap half that size is comfortable.',
   'Write your metrics down and build a test room containing the key distances. If you later change the jump height, every level built on the old number may break, so settle movement first.',
  ],diagram:{title:'MOVEMENT METRICS',nodes:['Jump height: 3 tiles','Running jump: 5 tiles','Dash: 4 tiles','Comfortable gap: 3 tiles','Skill gap: 5 tiles']}},
  {title:'Introduce safely, then test',paragraphs:[
   'Show each new idea where failure is cheap. The first spike pit might be shallow, or have a platform underneath; the first moving platform might move over solid ground. Then test the idea under mild pressure, then twist it by combining it with something the player already knows.',
   'Nintendo designers have described this rhythm in their own way: introduce an idea, develop it, give it a twist, and conclude. Celeste does this beautifully: almost every chapter introduces one new mechanic and explores it from every angle before moving on.',
  ],media:image('f2-05-safe-first','Three panels of the same simple mechanic, a bouncing spring, shown in a safe area over solid ground, then over a small gap, then combined with spikes and a moving platform.','A spring mechanic introduced safely, then tested, then combined with other hazards.','21:9')},
  {title:'Readable danger',paragraphs:[
   'Players should understand what will hurt them before they touch it. Use consistent visual rules: hazards share a color or shape language, often sharp and bright. Enemies telegraph attacks. Breakable floors look cracked. Anything that behaves differently should look different.',
   'When a player dies, they should immediately understand why, and believe they could have avoided it. If they blame the game instead of themselves, the level failed to teach, not the player.',
  ]},
  {title:'Guiding the eye',paragraphs:[
   'In 2D, players read the screen left to right in many side-scrollers, and from the center outward in top-down games. Use lines of coins, contrasting colors, light, and open space to suggest a path. Place rewards slightly off the main path to invite exploration, and secrets where curious players will look: suspicious gaps, walls that look slightly different, ledges just out of view.',
   'Finally, test levels with someone who has never played them, and watch silently. Every hesitation is a note about something your level did not communicate.',
  ]},
 ],
 games:[
  {title:'Super Mario Bros.',year:1985,platform:'NES',note:'World 1-1 teaches movement, enemies, and power-ups through placement alone.'},
  {title:'Mega Man X',year:1993,platform:'SNES',note:'Its opening stage teaches core moves through layout alone, and is widely studied by designers.'},
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'Each chapter introduces one mechanic and explores it thoroughly.'},
  {title:'Super Meat Boy',year:2010,platform:'Xbox 360, then PC',note:'Instant respawns make learning by failure fast and fair.'},
 ],
 activity:{title:'Try it: a three-screen lesson',task:'Sketch three screens that teach one mechanic without any text.',steps:['Choose one mechanic, such as a spring, a dash, or a moving platform.','Screen 1: introduce it safely.','Screen 2: test it with mild risk.','Screen 3: twist it by combining it with something else.'],hints:['Write your character’s jump height and length first.','Ask: what will the player most likely try first? Make that the right answer on screen 1.'],checks:['No screen needs text to understand.','Each screen is slightly harder than the last.']},
 ai:{text:'Agents can build graybox levels from a written plan, but only you can judge whether a level teaches well. Give the agent your metrics and a beat-by-beat plan, ask it to build with plain shapes, and play every version. Ask it to keep level layouts in an editable format so you can tweak distances yourself.',toolIds:['claude-code','ldtk','tiled','godot-mcp'],prompt:'My character jumps [3] tiles high and [5] tiles across while running. Build a graybox test room containing gaps of 3, 4, and 5 tiles and ledges of 2 and 3 tiles high. Then build a three-screen level that introduces [mechanic] safely, tests it, and twists it with [other mechanic]. Use plain rectangles only.'},
 deeper:{text:'For level design in 2D:',items:[
  {label:'The Level Design Book',detail:'Free online guide covering layout, flow, and testing.',url:'https://book.leveldesignbook.com/'},
  {label:'Game Maker’s Toolkit: level design videos',detail:'Breakdowns of how famous levels teach.',url:'https://www.youtube.com/@GMTK'},
 ]},
 questions:[
  ['Your character can jump 5 tiles. Where should the first gap in the game be?',['6 tiles wide, to be challenging','About 3 tiles wide, over a safe area','Exactly 5 tiles wide over spikes'],1,'Introduce ideas comfortably first; maximum-distance gaps belong later.'],
  ['A playtester dies on a hazard and says “that’s not fair, I didn’t know it would hurt.” What should you change?',['Make the hazard deal less damage','Make the hazard’s danger readable before contact','Show a text warning before every hazard'],1,'Danger should be communicated visually before the player touches it.'],
 ],
 summary:['Measure your character’s metrics and design levels around them.','Introduce ideas safely, test them, then twist them.','Make danger readable, guide the eye, and watch new players.'],
 teaser:'Levels connect into a bigger shape. Next: map structures, from single screens to metroidvanias.',
 mechanics:['jump','secrets','checkpoints'],genres:['platformer'],
},
{
 id:'f2-maps',
 goal:'Compare 2D map structures (single screen, linear, rooms, metroidvania, open) and choose one that fits your game.',
 story:[
  'Some games are a single room you never leave. Others are a road you travel once, from start to finish. Others are a sprawling labyrinth where every locked door is a promise you will return.',
  'The overall shape of a game’s world decides how players feel about exploring it: safe or lost, guided or free, rushing forward or carefully mapping every corner. Choosing that shape is one of the earliest and most important design decisions.',
 ],
 hero:image('f2-06-hero','Five small maps laid out on a desk like treasure maps: a single square room, a straight road, a grid of connected rooms, a tangled labyrinth with locked doors, and a wide open landscape.','Five different map shapes laid out like treasure maps on a desk.'),
 sections:[
  {title:'Single screen and linear levels',paragraphs:[
   'Single-screen games keep the whole world visible at once, as in Pac-Man, Bubble Bobble, or many arcade and puzzle games. Everything is in view, so the challenge is about mastery, not navigation. They are ideal first projects.',
   'Linear levels move the player from start to finish, usually left to right, as in Super Mario Bros. Designers control pacing precisely. Many games add branches, secret exits, or optional areas to give a sense of choice without losing control. A world map, as in Super Mario World, connects levels and lets players choose their order.',
  ]},
  {title:'Rooms and dungeons',paragraphs:[
   'Room-based maps are made of separate screens or chambers connected by doors, as in Zelda dungeons or The Binding of Isaac. Each room is a small, self-contained challenge: a fight, a puzzle, a treasure. Rooms are easy to design, test, and combine, which makes them popular for procedural generation too.',
   'Dungeons usually have structure: a key in one room opens a door in another, and a boss waits at the end. Even without randomness, this lock-and-key structure gives players clear goals.',
  ],media:chart('f2-06-dungeon','A dungeon map made of square rooms connected by doors, with a key icon in one room, a matching lock on a door elsewhere, and a skull-marked boss room at the end.','A room-based dungeon map with a key, a locked door, and a boss room.','4:3')},
  {title:'Metroidvanias and interconnected worlds',paragraphs:[
   'In a metroidvania, one large map is connected throughout, but many paths are blocked until you gain the right ability: a high ledge needs a double jump, a narrow gap needs a slide. Players see blocked paths early and remember them, so gaining an ability makes them think of everywhere they can now go.',
   'Shortcuts that loop back to safe areas, such as a door that opens only from one side, give a sense of mastery over the space. Maps and map markers matter enormously; Hollow Knight even makes you buy maps from a wandering cartographer, turning getting lost into part of the adventure.',
  ]},
  {title:'Open 2D worlds',paragraphs:[
   'Some 2D games give an open world: Terraria’s procedurally generated landscape, Stardew Valley’s town and farm, or the overworld of the original Legend of Zelda. Players set their own goals and paths. Open structures need strong landmarks, clear regions, and plenty of reasons to wander.',
   'For a first or second game, start small: a single screen, a short linear level, or five rooms. Interconnected worlds are rewarding but need careful planning of abilities, gates, and maps.',
  ],compare:{title:'Map structures',columns:['Structure','Feels like','Best for','Effort'],rows:[['Single screen','Mastery','Arcade, puzzle','Low'],['Linear levels','A guided journey','Platformers, shooters','Medium'],['Rooms / dungeons','Self-contained challenges','Adventure, roguelites','Medium'],['Metroidvania','A place you learn','Exploration, action','High'],['Open world','Freedom','Sandbox, life sims','High']]}},
 ],
 games:[
  {title:'Bubble Bobble',year:1986,platform:'Arcade',note:'One hundred single-screen stages, each a self-contained challenge.'},
  {title:'Super Mario World',year:1990,platform:'SNES',note:'Linear levels connected by a world map with secret exits.'},
  {title:'The Binding of Isaac',year:2011,platform:'PC, then consoles',note:'Room-based floors assembled randomly from hand-made rooms.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'An interconnected world where maps must be found and bought.'},
 ],
 activity:{title:'Try it: map a game',task:'Draw the map structure of a game you know as boxes and lines.',steps:['Draw each level, room, or region as a box.','Connect them with lines; mark locked connections.','Label which structure it is: linear, rooms, metroidvania, or open.'],hints:['Use a padlock for paths needing an ability or key.','Circle the places you return to most.'],checks:['Your map shows the overall shape.','You identified at least one gate or shortcut.']},
 ai:{text:'Before asking an agent to build a world, write its structure as a simple list of rooms and connections, with any locks and keys. Agents can turn that into a playable graybox quickly, and you can test the flow before any art exists.',toolIds:['claude-code','ldtk','godot-mcp'],prompt:'Build a graybox of this map structure: rooms [A, B, C, D, E]; connections [A–B, B–C, B–D (locked: needs key from C), D–E (boss)]. Each room is a simple rectangle with doors. Place the key in C. Show a small map in the corner that reveals rooms as I enter them.'},
 deeper:{text:'For map and world structure:',items:[
  {label:'Boss Keys (Game Maker’s Toolkit)',detail:'A video series analysing dungeon and world structures.',url:'https://www.youtube.com/@GMTK'},
  {label:'LDtk',detail:'A level editor that supports multi-room world layouts.',toolId:'ldtk'},
 ]},
 questions:[
  ['What defines a metroidvania structure?',['Every level is a single screen','One connected map where abilities open paths you saw earlier','Random levels every run'],1,'Ability gating in an interconnected world is the defining feature.'],
  ['Which structure is the best fit for a first small game?',['A huge interconnected world','A single screen or a few rooms','An open world with hundreds of regions'],1,'Small structures are easier to design, test, and finish.'],
 ],
 summary:['Map structures range from single screens to open worlds.','Rooms and dungeons use locks and keys for clear goals.','Metroidvanias gate paths with abilities; open worlds need strong landmarks.'],
 teaser:'Maps are where you go. Next: how it feels to move, the heart of every 2D action game.',
 mechanics:['level-select','interconnected-map','keys-locks','hub-world','minimap'],genres:['metroidvania','action-adventure'],
},
];
