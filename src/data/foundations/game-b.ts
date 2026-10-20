import type { ChapterSeed } from '../lesson-builder';
import { chart, clip, image } from './media';

export const gameSeedsB: ChapterSeed[] = [
{
 id:'fg-ai-crew',
 goal:'Meet the AI tools that help build games: coding agents, MCP servers, and asset generators, and learn where each one fits and where it falls short.',
 story:[
  'For most of game history, a lone developer had to be programmer, artist, musician, and writer all at once, or find friends who were. Many great ideas died in notebooks because their owners could not draw, or could not code.',
  'Something new happened in the 2020s. Tools appeared that could write code from a description, generate a character from a sentence, or compose a sound effect from a few words. They are not magic, and they make plenty of mistakes. But for the first time, a single person with a clear idea could assemble a whole crew of helpers. This chapter introduces that crew, and your role as its director.',
 ],
 hero:image('fg-10-hero','A director in a folding chair holding a megaphone, guiding a friendly crew of small robots: one typing code, one painting a character, one recording sound with a microphone, one building a tiny 3D model.','A director guiding a crew of robot helpers who code, paint, record sound, and model.','A cheerful human director in a folding chair with a megaphone, guiding a small crew of friendly robots: one typing at a keyboard, one painting a canvas, one holding a microphone, one sculpting a tiny 3D figure'),
 sections:[
  {title:'Coding agents',paragraphs:[
   'A coding agent is an AI tool that reads your project, writes and edits code, and can often run commands to test what it built. Some live in your terminal, such as Claude Code, Gemini CLI, and OpenAI’s Codex. Others live inside a code editor, such as Cursor, GitHub Copilot, and Cline. They differ in price, models, and style, but they all work best the same way: with clear goals, small steps, and a human who tests the result.',
   'Treat an agent like a fast, talented builder who has never met you. Explain what you want, ask it to restate the plan, let it build one thing, then play the game and report what you saw. Keep saved versions with Git so a bad step is easy to undo.',
  ],diagram:{title:'WORKING WITH A CODING AGENT',nodes:['Describe one behavior','Agent restates the plan','Agent builds','You play and check','Save a working version']}},
  {title:'MCP: giving agents hands and eyes',paragraphs:[
   'On its own, an agent can only edit text files. The Model Context Protocol, or MCP, is an open standard that lets agents use other tools through small connectors called MCP servers. A Godot MCP server lets an agent launch your game and read its error messages. A browser MCP server lets it open your web game and click around. A Blender MCP server lets it create and arrange simple 3D objects.',
   'This matters because an agent that can see results can correct itself. Instead of you copying error messages back and forth, the agent runs the game, reads the error, and fixes the cause, while you watch and decide.',
  ],media:chart('fg-10-mcp','A central friendly robot (the agent) connected by plug-in cables to three devices: a game editor window, a web browser, and a 3D modelling window. Each cable passes through a small adapter box.','An AI agent connected through adapter boxes to a game editor, a browser, and a 3D program.','A friendly robot at the center with three cables running to a game-editor window, a web browser window, and a 3D sculpting window, each cable passing through a small labelled adapter box')},
  {title:'Asset generators',paragraphs:[
   'Image generators can produce concept art, backgrounds, and icons. Specialist tools such as PixelLab and Retro Diffusion focus on true pixel art and can create animated sprites and tilesets. 3D generators such as Meshy, Tripo, and the open-weight Hunyuan3D turn text or images into textured models, some with automatic rigging. Audio tools such as ElevenLabs Sound Effects generate effects, and music tools such as Suno compose tracks.',
   'Generated assets almost always need a human pass. Characters drift in style from one image to the next. Pixel art from general tools is often not on a true pixel grid. 3D models may have messy geometry, the wrong scale, or poor rigs. Sounds need trimming. Plan for cleanup, and keep a written style guide so every generation aims at the same look.',
  ]},
  {title:'The free-asset shortcut, and licenses',paragraphs:[
   'Before generating anything, check the free libraries. Kenney offers thousands of consistent public-domain assets. Poly Haven, Quaternius, and ambientCG provide free 3D models, textures, and skies. OpenGameArt, itch.io, and Freesound host huge community collections. A consistent free pack often looks better than a pile of mismatched generations.',
   'Always check the license. CC0 means you can use it freely. CC-BY means you must credit the creator. Some assets forbid commercial use. AI generators have their own terms, too: some free plans require attribution or forbid selling the results. Keep a simple credits file listing every asset, where it came from, and its license.',
  ],compare:{title:'Easy path first, options second',columns:['Need','Easiest','Free library','Do it yourself'],rows:[['Code','Coding agent','Example projects','Learn the engine’s language'],['2D art','PixelLab, Scenario','Kenney, itch.io, OpenGameArt','Aseprite, LibreSprite, Krita'],['3D models','Meshy, Tripo, Hunyuan3D','Quaternius, Poly Haven, Kenney','Blender'],['Sound effects','ElevenLabs Sound Effects','Freesound, Kenney','jsfxr, Audacity, recording'],['Music','Suno','OpenGameArt, free music packs','LMMS, any music app']],note:'Every tool is listed with cost and license notes on the Toolkit page.'}},
 ],
 games:[
  {title:'Vampire Survivors',year:2022,platform:'PC, then everywhere',note:'Early versions reportedly used ready-made, purchased art: proof that great games can start from existing assets.'},
  {title:'Stardew Valley',year:2016,platform:'PC, then everywhere',note:'The counterexample: one person created every asset by hand over years.'},
  {title:'Game jam entries',year:2002,platform:'Ludum Dare and itch.io jams',note:'Thousands of weekend games each year mix free assets, quick art, and fast code, a great place to practise with an AI crew.'},
 ],
 gamesTitle:'Seen in the real world',
 activity:{title:'Try it: assemble your crew',task:'Choose one tool for each job for a tiny imaginary game, preferring free options.',steps:['Pick a coding agent you can access.','Pick one source for 2D or 3D art: a free library or a generator.','Pick one source for sound effects.','Check and write down the license for each art and sound source.'],hints:['The Toolkit page lists cost and license notes for every tool.','Kenney’s assets are CC0, so they are the simplest to start with.'],checks:['Your crew covers code, art, and sound.','You wrote down a license for each asset source.']},
 ai:{text:'The single most useful habit with an AI crew is a shared “game bible”: one short document that describes your game, its style, and its rules. Paste it into the agent, use its style words in every art prompt, and update it as the game grows. The crew stays consistent because they all read the same page.',toolIds:['claude-code','mcp','godot-mcp','pixellab','meshy','elevenlabs-sfx','kenney'],prompt:'Using this game bible: [paste], write me (1) an art prompt template I can reuse for every character so they share one style, (2) a sound-effect prompt template, and (3) a checklist I should run on every generated asset before putting it in the game.'},
 deeper:{text:'Learn the tools directly from their makers.',items:[
  {label:'Model Context Protocol',detail:'The official introduction to MCP and its servers.',toolId:'mcp'},
  {label:'Creative Commons licenses explained',detail:'What CC0, CC-BY, and the other licenses allow.',url:'https://creativecommons.org/share-your-work/cclicenses/'},
  {label:'This site’s Toolkit page',detail:'Every engine, agent, MCP server, generator, library, and manual tool in one place.'},
 ]},
 questions:[
  ['What does an MCP server add to a coding agent?',['A faster, smarter AI model','A way to use outside tools, such as running the game or opening a browser','A built-in library of game assets'],1,'MCP servers connect agents to tools, so they can test and see results instead of only editing text.'],
  ['You downloaded a CC-BY sprite pack. What must you do?',['Nothing; CC-BY has no conditions','Credit the creator','Use it only in free, non-commercial games'],1,'CC-BY allows use, including commercial use, as long as you give credit.'],
  ['Why keep a written style guide when generating art?',['Generators refuse prompts without one','It keeps separate generations aiming at one consistent look','It makes the images higher resolution'],1,'Generated images drift in style; a shared description keeps them belonging together.'],
 ],
 summary:['Coding agents build from clear descriptions; you test and keep saved versions.','MCP servers let agents run games, browse, and use creative tools.','Generators and free libraries supply assets; always clean up, stay consistent, and check licenses.'],
 teaser:'With a crew assembled, the first creative decision is how your game will look. Next: visual direction.',
},
{
 id:'fg-art-direction',
 goal:'Choose a visual direction, including style, palette, and readability, that fits your game, your skills, and your tools.',
 story:[
  'In 1985 an artist designing a hero had a grid of 16 by 16 pixels and a handful of colors. So they gave him a cap, because hair was hard to draw, and a moustache, because a mouth would not read. Those limits created one of the most recognizable characters in the world.',
  'Visual direction is still about limits, now chosen rather than forced. Choosing a few rules and sticking to them is what makes a game look like itself.',
 ],
 hero:image('fg-11-hero','A mood board pinned to a wall: color swatches, rough sketches, texture samples, and small reference doodles, with a designer stepping back to look at it.','A designer studying a mood board of colors, sketches, and textures.','A designer stepping back to admire a cork mood board covered in color swatches, pencil sketches, fabric and stone texture samples, and small doodles, warm studio light'),
 sections:[
  {title:'Styles and what they cost',paragraphs:[
   'Pixel art uses a deliberately low resolution and limited palettes; it is charming and nostalgic, and it hides small imperfections, but good animation is still a lot of work. Hand-drawn 2D, as in Hollow Knight or Cuphead, is expressive but labour-intensive. Vector and flat styles are clean and easy to scale. Low-poly 3D uses simple shapes and flat colors, and is fast to make and light to run. Stylized 3D, such as cel-shaded or painterly, gives personality without realism. Realistic 3D is the most expensive to produce and run.',
   'For a small team or a solo vibe coder, the right style is one you can keep consistent across every asset. A simple style executed consistently beats an ambitious style that falls apart halfway through.',
  ],compare:{title:'Art styles at a glance',columns:['Style','Feels like','Effort','Fits AI and free assets?'],rows:[['Pixel art','Retro, charming','Medium','Yes: specialist generators and many free packs'],['Hand-drawn 2D','Expressive, storybook','High','Hard to keep consistent with generators'],['Flat / vector','Clean, modern','Low','Yes'],['Low-poly 3D','Toy-like, clear','Low to medium','Yes: many free kits, generators help'],['Stylized 3D','Painterly, cartoon','Medium to high','Partly; shaders help unify'],['Realistic 3D','Cinematic','Very high','Libraries help; consistency is hard']]}},
  {title:'Palette and contrast',paragraphs:[
   'A palette is the limited set of colors your game uses. A small palette instantly makes things feel related. Many artists borrow palettes from sites such as Lospec, or pick three to five main colors and a couple of accents. Warm colors advance and attract attention; cool colors recede.',
   'Contrast is how you guide the eye. Important things, such as the player, enemies, and pickups, should stand out from the background by brightness, saturation, or outline. A good test: turn your screenshot to greyscale. If you can still tell what matters, your values are working.',
  ],media:image('fg-11-greyscale','The same small game scene shown twice: in full color and in greyscale. In the greyscale version, the hero and a glowing pickup still stand out clearly from a darker background.','A colorful game scene and its greyscale version, where the important objects remain clear.','A small side-view forest game scene shown twice side by side, once in full warm color and once in pure greyscale; in both, the hero and a glowing gem clearly stand out from a darker, quieter background','21:9')},
  {title:'Readability first',paragraphs:[
   'Games are not paintings; they are information. In the middle of a fight, players must instantly tell friend from foe, danger from decoration, and ground from background. Many beautiful games add rules such as “only interactable objects glow” or “hazards are always red.”',
   'Write your readability rules down before generating or collecting assets. They become instructions for every AI prompt and every pack you choose.',
  ]},
  {title:'Writing a style guide',paragraphs:[
   'A style guide can be a single page: five words describing the mood, your palette, the camera angle, the outline style, the level of detail, and two or three reference images. For AI generators, turn it into a reusable prompt fragment you add to every request. For free packs, use it to reject assets that do not fit.',
   'This site’s own illustrations work the same way: every image placeholder includes the same style sentence, so whoever generates them, a person or a model, aims at one look.',
  ]},
 ],
 games:[
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'Muted blues and greys with bright highlights only where attention is needed.'},
  {title:'Cuphead',year:2017,platform:'PC, Xbox One, then more',note:'Hand-drawn 1930s cartoon style, painstakingly animated frame by frame.'},
  {title:'The Legend of Zelda: The Wind Waker',year:2002,platform:'GameCube',note:'Cel-shaded cartoon style that has aged far better than many realistic games of its time.'},
  {title:'Monument Valley',year:2014,platform:'iOS, Android',note:'Flat, architectural shapes and soft palettes inspired by impossible geometry.'},
 ],
 activity:{title:'Try it: a one-page style guide',task:'Write a style guide for an imaginary game in under ten minutes.',steps:['Write five mood words.','Choose a palette of three to five colors (try lospec.com).','Pick a style from the table above.','Write two readability rules.'],hints:['Mood words could be: cozy, eerie, bouncy, ancient, neon.','Readability rule example: “Enemies have a dark outline; scenery never does.”'],checks:['Someone else could pick matching assets using only your guide.','Your rules say how the player, enemies, and pickups stand out.']},
 ai:{text:'Image and sprite generators follow style words closely, so your style guide becomes a prompt fragment. Keep it identical across generations, generate several options, and pick those that match. Then compare them side by side in the actual game, not in isolation.',toolIds:['pixellab','scenario','retro-diffusion','kenney'],prompt:'Here is my style guide: [mood words, palette hex codes, style, outline rule]. Write a reusable prompt suffix for an image generator that enforces this style, plus three example prompts for: the player character, a basic enemy, and a collectible.'},
 deeper:{text:'Tools and references for building your own look:',items:[
  {label:'Lospec palette list',detail:'Hundreds of curated color palettes, especially for pixel art.',url:'https://lospec.com/palette-list'},
  {label:'Krita',detail:'Free painting software for concept art and hand-drawn assets.',toolId:'krita'},
  {label:'Aseprite or LibreSprite',detail:'Pixel-art editors for drawing and animating sprites yourself.',toolId:'aseprite'},
  {label:'Pixel Logic (Michael Azzi)',detail:'A visual guide to pixel-art fundamentals.'},
 ]},
 questions:[
  ['Your screenshot turned greyscale makes the enemies vanish into the background. What should you change?',['The hue of the enemies’ colors','The contrast between enemies and background','The resolution of the sprites'],1,'Value contrast is what makes important things readable, with or without color.'],
  ['For a solo developer using AI and free assets, which style is usually safest?',['A simple style that can stay consistent across every asset','Photorealistic 3D','A different style for every level'],0,'Consistency matters more than ambition; simple styles are easier to keep consistent.'],
 ],
 summary:['Each art style has a different cost; pick one you can keep consistent.','Palettes create unity; contrast guides the eye.','A short style guide keeps generated and downloaded assets looking like one game.'],
 teaser:'Every style needs a star. Next: designing characters people recognize at a glance.',
},
{
 id:'fg-characters',
 goal:'Design characters that read instantly, using silhouette, shape language, color, and personality.',
 story:[
  'Close your eyes and picture a famous game character. You probably saw a shape before details: a round pink blob, a hedgehog with spikes swept back, a tiny knight with a horned helmet. Characters live in our memory as silhouettes.',
  'That is no accident. Designers test characters by filling them in with solid black. If you can still tell who it is, the design works. If it becomes a shapeless smudge, no amount of detail will save it in the chaos of play.',
 ],
 hero:image('fg-12-hero','A row of solid black character silhouettes on a cream background, each instantly distinct: a round one, a tall spiky one, a small one with a long cape, and a bulky square one.','A lineup of distinct character silhouettes.','A lineup of five solid charcoal silhouettes of original characters on a cream background, clearly distinct: a round bouncy creature, a tall spiky figure, a tiny caped wanderer, a broad square guardian, a lanky long-eared runner'),
 sections:[
  {title:'Silhouette',paragraphs:[
   'A strong silhouette has a distinctive outline: a big hat, long ears, a cape, an oversized weapon, an unusual posture. In games, characters are often small on screen and constantly moving, so the outline does most of the work. Team-based games design every hero to be recognizable from far away by shape alone.',
   'When you generate or choose a character, fill a copy with black and shrink it to its in-game size. Can you still recognize it? Can you tell it from the enemies?',
  ]},
  {title:'Shape language',paragraphs:[
   'Shapes carry feelings. Circles feel friendly, soft, and safe. Squares feel stable, strong, and dependable. Triangles and sharp points feel dangerous, fast, or sneaky. Many designs combine them: a round, friendly hero with a pointed sword; a square, sturdy guardian; a spiky, triangular villain.',
   'Shape language applies to enemies and environments too. Rounded platforms invite you to stand; spikes warn you away. Players read these cues before any tutorial text.',
  ],media:chart('fg-12-shapes','Three simple characters built from a circle (friendly), a square (sturdy), and a triangle (menacing), each with a small label icon: a heart, a shield, and a lightning bolt.','Three characters built from a circle, a square, and a triangle showing friendly, sturdy, and menacing personalities.','Three simple original characters side by side, one built from circles (soft, smiling), one from squares (broad, steady), one from triangles (sharp, sly), with tiny heart, shield, and lightning icons above them','21:9')},
  {title:'Color and identity',paragraphs:[
   'Color makes a character pop and tells you who they are. Heroes often use saturated colors that stand out from the background; enemies may share a palette that marks them as a group. Limiting a character to two or three main colors keeps it readable at small sizes.',
   'Think about color-blind players, too: never rely on red versus green alone to separate friend and foe. Shape and brightness differences help everyone.',
  ]},
  {title:'Personality in motion',paragraphs:[
   'A character’s personality shows in how they stand, move, and react: an idle animation of tapping a foot, a hop when collecting something, a wince when hit. A small set of expressive animations communicates more than a detailed portrait.',
   'Write a one-line personality for every main character, such as “brave but clumsy” or “calm and ancient,” and let it guide pose, color, and animation. Give that line to every artist and every AI tool you use.',
  ],diagram:{title:'CHARACTER DESIGN CHECKLIST',nodes:['Personality line','Silhouette test','Shape language','2–3 main colors','Expressive animations']}},
  {title:'Designing a cast',paragraphs:[
   'Your hero needs company. Enemies should announce their role through design: a small fast enemy might be pointy and bright, a slow tank broad and heavy, a ranged attacker carry something that clearly shoots. When players can predict what an enemy will do from how it looks, combat becomes a skill rather than a guessing game.',
   'Non-player characters, such as shopkeepers, guides, and villagers, need just enough personality to be memorable: a hat, a habit, a catchphrase. And a classic trick for small teams is the palette swap. Recolor an enemy to make a tougher version, so players learn “red ones hit harder” without you drawing a new character.',
  ]},
 ],
 games:[
  {title:'Kirby’s Dream Land',year:1992,platform:'Game Boy',note:'A round, soft silhouette that says friendly even in black and white.'},
  {title:'Team Fortress 2',year:2007,platform:'PC, Xbox 360, PS3',note:'Nine classes designed to be recognizable from their silhouettes at a distance.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'A tiny knight whose horned mask reads instantly at small sizes.'},
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'Madeline’s hair color changes to show whether her dash is available: color as information.'},
 ],
 activity:{title:'Try it: the silhouette test',task:'Design (or pick) a hero and two enemies, then test their silhouettes.',steps:['Sketch, generate, or download three characters.','Fill each with solid black, by tracing or using an editor.','Shrink them to the size they will appear in the game.','Check that all three are easy to tell apart.'],hints:['Exaggerate one feature: ears, hat, weapon, or posture.','If enemies look like the hero, give them a different shape family.'],checks:['All three silhouettes are distinct at in-game size.','Each has a one-line personality.']},
 ai:{text:'Character generators work best with a clear spec: personality line, shape family, two or three colors, pose, view angle, and the size it will appear. Generate several, run the silhouette test, then generate the animation frames from the chosen design. Specialist pixel tools can rotate a character into four or eight directions and animate walk cycles.',toolIds:['pixellab','scenario','meshy','kenney','itch-assets'],prompt:'Character spec: personality “[line]”, shape family [round/square/triangular], colors [2–3 hex codes], [pixel art 32×32 / low-poly 3D], [side / top-down / isometric] view, neutral standing pose, plain background. Keep to my style guide: [style words].'},
 deeper:{text:'If generated or downloaded characters are not enough, design your own:',items:[
  {label:'Krita or any drawing app',detail:'Sketch silhouettes quickly with a solid black brush before adding detail.',toolId:'krita'},
  {label:'Aseprite or LibreSprite',detail:'Draw and animate pixel characters frame by frame.',toolId:'aseprite'},
  {label:'Blender',detail:'Model, texture, and rig your own 3D characters.',toolId:'blender'},
  {label:'Character design talks on GDC Vault',detail:'Many free talks from professional character artists.',url:'https://gdcvault.com/free'},
 ]},
 questions:[
  ['You want a villain to feel dangerous at a glance. Which shape family fits best?',['Circles','Squares','Triangles and sharp points'],2,'Sharp, angular shapes read as dangerous or sneaky before any detail is seen.'],
  ['Why test a character as a solid black silhouette?',['To check it is recognizable by outline, the way players see it in play','To check its colors are color-blind friendly','To prepare it for animation'],0,'Small, fast-moving characters are recognized mostly by outline.'],
 ],
 summary:['Strong characters have distinctive silhouettes.','Shape language and limited colors communicate personality and role.','A personality line guides pose, color, and animation across every tool.'],
 teaser:'A character on paper is a statue. Next, we make it breathe: animation.',
},
{
 id:'fg-animation',
 goal:'Understand how animation creates life and feedback in games, from sprite frames to skeletons, and which principles matter most.',
 story:[
  'In the 1930s, animators at Disney studied how real things move: a bouncing ball squashes when it lands, an arm swings back before a throw, hair keeps moving after a head stops. They wrote down twelve principles that made drawings feel alive.',
  'Game animators borrowed those principles and added a new challenge. Their characters must also respond instantly to a player’s button. In games, animation is not only art. It is how the game tells you what just happened and what is about to happen.',
 ],
 hero:clip('fg-13-hero','A ball bouncing across the frame, squashing flat as it hits the ground and stretching tall as it rises, leaving faint ghost frames behind it.','A bouncing ball that squashes on landing and stretches as it rises.','A soft terracotta ball bouncing across a cream floor, squashing flat on each impact and stretching tall as it rises, with faint ghost frames trailing behind'),
 sections:[
  {title:'How games animate',paragraphs:[
   '2D games often use sprite animation: a series of drawn frames shown quickly, like a flip-book. A walk cycle might be six or eight frames that loop. 2D skeletal animation instead cuts a character into parts, such as head, arms, and legs, and moves them like a puppet, which saves drawing time.',
   '3D characters are animated with a skeleton, called a rig, inside the model. Animators pose the bones at key moments, and the software fills in the motion between. Animations can also come from motion capture, where real actors’ movements are recorded, or from shared libraries such as Mixamo. Games also animate objects and interfaces with tweens: smooth changes of position, size, or color over time.',
  ],compare:{title:'Ways to animate',columns:['Method','How it works','Good for'],rows:[['Sprite frames','Drawn frames played in sequence','Pixel art and hand-drawn 2D'],['2D skeletal','Cut-out parts moved like a puppet','Smooth 2D with fewer drawings'],['3D rig + keyframes','Bones posed at key moments','3D characters'],['Motion capture / libraries','Recorded or shared movements','Realistic 3D humans'],['Tweens','Smooth change of a property over time','UI, pickups, doors, effects']]}},
  {title:'Principles that matter most in games',paragraphs:[
   'Anticipation: a short wind-up before an action, such as a crouch before a jump or a pulled-back sword before a swing. For enemies, this is the telegraph that lets players react. Squash and stretch: shapes compress on impact and stretch with speed, giving weight and energy. Follow-through: parts such as capes, hair, and tails keep moving after the body stops.',
   'Timing is everything. A sword swing with a long wind-up feels heavy and readable; a short one feels quick and dangerous. Games often split actions into three phases: anticipation (wind-up), active (the moment that can hit), and recovery (the vulnerable moment after). Designers tune those three numbers to balance fairness and feel.',
  ],diagram:{title:'THE THREE PHASES OF AN ATTACK',nodes:['Anticipation: wind-up, readable','Active: can hit','Recovery: vulnerable'],note:'Longer anticipation = fairer for the defender. Longer recovery = more punishable.'},media:clip('fg-13-attack','A small knight performs a sword attack in three clearly colored phases: a slow pull-back highlighted in yellow, a fast swing highlighted in red, and a slow return highlighted in blue.','A sword attack divided into wind-up, strike, and recovery phases.','A small original knight performing one sword swing in three tinted phases: a slow pull-back tinted soft yellow, a fast arc tinted red, a slow return tinted blue, looping')},
  {title:'Responsiveness versus realism',paragraphs:[
   'Realistic animation can make controls feel sluggish if the character must finish a long animation before responding. Most action games let important inputs, such as jump or dodge, interrupt animations, even if that is not physically realistic. Players forgive unrealistic motion far more easily than unresponsive controls.',
   'Animation also delivers feedback: a flash and flinch when hit, a bounce when collecting a coin, a stagger when an enemy is stunned. These small touches are a big part of what designers call game feel.',
  ],demo:'feel'},
  {title:'How much animation do you need?',paragraphs:[
   'Animation is expensive, so plan a budget. A small 2D character can feel alive with a handful of animations: idle, run, jump (rising and falling), attack, hurt, and defeat. Many pixel-art games use only four to eight frames per animation and play them at around ten to twelve frames per second, even though the game itself updates sixty times per second.',
   'Animators use tricks to make few frames feel smooth. A smear frame stretches a fast-moving limb into a blur for a single frame. Holding a strong pose for a moment before a fast action makes the action feel snappier. Start with the minimum set, play the game, and add frames only where the motion still feels stiff.',
  ]},
 ],
 games:[
  {title:'Prince of Persia',year:1989,platform:'Apple II',note:'Jordan Mechner filmed his brother running and climbing, then traced the footage frame by frame for lifelike motion.'},
  {title:'Cuphead',year:2017,platform:'PC, Xbox One, then more',note:'Hand-drawn frame-by-frame animation in the style of 1930s cartoons.'},
  {title:'Dark Souls',year:2011,platform:'PS3, Xbox 360, PC',note:'Long, readable enemy wind-ups make difficult fights feel fair.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'Snappy player animations that prioritize responsiveness.'},
 ],
 activity:{title:'Spot it: frame by frame',task:'Find a slow-motion or frame-by-frame video of an attack in any action game and identify its phases.',steps:['Find a clip and slow it down (many video players allow 0.25× speed).','Mark the anticipation, active, and recovery moments.','Look for squash, stretch, and follow-through.'],hints:['Search for “[game] attack frame data” or simply use slow playback.','Capes, hair, and weapon trails often show follow-through.'],checks:['You identified all three phases.','You found at least one classic animation principle in action.']},
 ai:{text:'AI can help in several ways: sprite tools can generate walk cycles and rotations from one character; 3D generators can auto-rig models; Mixamo can apply free animations to humanoid characters. Ask your coding agent to separate animation from game rules, so damage is decided by gameplay timing, not by whatever frame an animation reaches.',toolIds:['pixellab','meshy','mixamo','claude-code'],prompt:'My character has these animations: idle, run, jump, attack, hurt. Set up switching between them based on what the character is doing. Attack has three phases: wind-up [0.2 s], active [0.1 s], recovery [0.3 s]. Damage may only happen in the active phase, decided by game timing, not animation frames. Let jump interrupt the recovery phase.'},
 deeper:{text:'To animate by hand:',items:[
  {label:'The Animator’s Survival Kit (Richard Williams)',detail:'The classic hands-on guide to animation principles.'},
  {label:'The Illusion of Life (Frank Thomas & Ollie Johnston)',detail:'The Disney book that described the twelve principles.'},
  {label:'Aseprite or LibreSprite',detail:'Frame-by-frame pixel animation with onion skinning.',toolId:'aseprite'},
  {label:'Blender',detail:'Rigging, keyframing, and animating 3D characters.',toolId:'blender'},
 ]},
 questions:[
  ['An enemy’s attack feels unfair because players cannot react. Which phase should be longer?',['Anticipation (wind-up)','Recovery','Active (the hit itself)'],0,'A longer, clearer wind-up gives players time to read and react.'],
  ['Why do many action games let a dodge interrupt an attack animation?',['It looks more realistic','Responsiveness matters more to players than physically realistic motion','It makes attacks more powerful'],1,'Players feel unresponsive controls immediately; they rarely mind slightly unrealistic transitions.'],
  ['Which method fits a smooth 3D human run cycle with the least hand animation?',['Drawing every frame by hand','A rigged model with motion capture or a library such as Mixamo','A tween on the whole character'],1,'Rigs plus recorded or shared animations give realistic motion without keyframing every pose.'],
 ],
 summary:['Games animate with sprite frames, 2D skeletons, 3D rigs, motion capture, and tweens.','Anticipation, squash and stretch, follow-through, and timing make motion alive and readable.','Gameplay timing decides results; animation communicates them, responsively.'],
 teaser:'Animation speaks to the eyes. Sound speaks to everything else. That’s next.',
 mechanics:['telegraph','hitstop'],
},
{
 id:'fg-sound',
 goal:'Understand the roles of sound effects, ambience, and music, and how audio gives feedback and mood.',
 story:[
  'Try an experiment: play a favourite game with the sound muted. The coin feels less valuable. The sword hits feel weightless. The forest feels like a painting instead of a place. You probably also play a little worse, because you no longer hear the enemy behind you.',
  'Sound is often the last thing added and the first thing players feel. A single well-chosen sound can make a mechanic satisfying; a single shrill one played too often can make people put the game down.',
 ],
 hero:image('fg-14-hero','A forest scene from a game with visible sound shown as soft colored ripples: chirping birds, a babbling brook, footsteps, and a coin glinting with a bright chime ripple.','A game forest scene with sound visualized as colored ripples.','A side-view forest game scene where sounds are drawn as soft colored ripples: bird chirps in the trees, a brook’s gentle waves, footstep ripples under a small hero, and a bright sparkle ripple around a coin'),
 sections:[
  {title:'Three layers of sound',paragraphs:[
   'Sound effects (SFX) respond to actions: footsteps, jumps, hits, pickups, menu clicks. They are feedback, telling the player something happened, often faster than visuals can. Ambience is the background bed of a place: wind, rain, distant traffic, a humming spaceship. It makes a space feel real. Music sets emotion and pace, and can change with the situation, swelling in a boss fight or softening in a safe room.',
   'Voice is a fourth layer in some games, from full dialogue to simple grunts and gibberish voices, which give characters personality without recording real lines.',
  ],diagram:{title:'THE SOUND MIX',nodes:['Sound effects: feedback','Ambience: place','Music: emotion','Voice: character']}},
  {title:'Sound as information',paragraphs:[
   'Good game audio is designed like a language. Rewards rise in pitch and sound bright; damage is low, short, and punchy; warnings are distinctive and repeated consistently. Enemies can have attack sounds that act as audio telegraphs. Directional sound helps players locate threats in 3D.',
   'Variety prevents fatigue. A footstep that plays the exact same sample hundreds of times becomes grating. Games often have several versions of common sounds and vary pitch slightly every time.',
  ]},
  {title:'Adaptive music',paragraphs:[
   'Music in games can react. Some games layer instruments that fade in as danger grows. Others switch tracks between exploring and fighting. Rhythm games make the music itself the mechanic. Even simple games benefit from one rule: let music breathe. Constant music can tire players, and silence before a big moment makes the moment bigger.',
  ],media:chart('fg-14-layers','A stack of horizontal music tracks shown as colored waveforms: a calm base layer always on, a percussion layer fading in as an enemy approaches, and a brass layer that appears during a boss fight, with a small game scene above each stage.','Layered music tracks fading in as danger increases.','Three stacked horizontal waveform bands in sage, amber, and terracotta, the lower one constant, the middle fading in under a picture of an approaching enemy, the top appearing beneath a looming boss silhouette','21:9')},
  {title:'Mixing and accessibility',paragraphs:[
   'Mixing is balancing volumes so that important sounds are heard. Players expect separate volume sliders for music, effects, and voice. Subtitles and visual cues for important sounds help players who are deaf or hard of hearing, or who simply play muted on a bus.',
   'Before adding a sound, ask: what is it telling the player? If the answer is nothing, it might be noise.',
  ]},
  {title:'Finding and making sounds',paragraphs:[
   'Sound designers are famous for recording strange things. Breaking celery can become cracking bones; a creaking door slowed down can become a monster; shaking a bag of cornflour sounds like footsteps in snow. This craft is called foley, and a phone microphone is enough to begin.',
   'Whatever the source, prepare sounds the same way: trim the silence at the start so they play instantly, keep them short, make their volumes consistent, and save them in a format your engine likes, usually WAV for short effects and OGG for music. A sound that starts a tenth of a second late feels like lag.',
  ]},
 ],
 games:[
  {title:'Super Mario Bros.',year:1985,platform:'NES',note:'Koji Kondo’s music and the coin chime became some of the most recognizable sounds in the world.'},
  {title:'Journey',year:2012,platform:'PS3',note:'Its music adapts to the player and was the first video game score nominated for a Grammy.'},
  {title:'Animal Crossing',year:2001,platform:'Nintendo 64 (Japan), GameCube',note:'Hourly music changes and gibberish voices give the town a living rhythm.'},
  {title:'Hellblade: Senua’s Sacrifice',year:2017,platform:'PC, PS4',note:'Binaural audio places voices around the player’s head as part of the story.'},
 ],
 activity:{title:'Spot it: the mute test',task:'Play a game for three minutes with sound, then three minutes muted.',steps:['Note three sounds that gave you useful information.','Note what felt worse without sound.','Find one sound you think is overused or missing.'],hints:['Listen for enemy attack cues and pickup chimes.','Notice whether music changes when danger appears.'],checks:['You named three informative sounds.','You can describe one change in how the game felt muted.']},
 ai:{text:'Sound generators can produce effects from a sentence; music generators can compose loops. Describe the sound’s job, length, and mood, generate several, then trim and level them in an audio editor. Ask your coding agent to add volume sliders and random pitch variation from the start.',toolIds:['elevenlabs-sfx','suno','freesound','kenney','jsfxr'],prompt:'Generate a short sound effect for: [event]. Job: [what it tells the player]. Length: under [0.4] seconds, starting instantly with no silence. Mood: [bright / heavy / eerie]. Style: [8-bit / natural / cartoon]. No music, no voices.'},
 deeper:{text:'If generated sounds are not enough:',items:[
  {label:'jsfxr',detail:'Make retro sound effects in your browser with sliders.',toolId:'jsfxr'},
  {label:'Audacity',detail:'Record, trim, and clean up sounds for free.',toolId:'audacity'},
  {label:'LMMS',detail:'Compose your own music for free.',toolId:'lmms'},
  {label:'The Game Audio Tutorial (Richard Stevens & Dave Raybould)',detail:'A practical book on game sound and music design.'},
 ]},
 questions:[
  ['A pickup sound that rises in pitch mainly communicates…',['Danger','Reward','Time running out'],1,'Bright, rising sounds read as positive. Low, short sounds read as damage.'],
  ['Footsteps sound grating after ten minutes. A good fix is…',['Play the same sample at a lower volume','Use several variations and slightly randomize pitch','Play footsteps only while running'],1,'Variation prevents repetition fatigue while keeping the feedback.'],
 ],
 summary:['Games combine sound effects, ambience, music, and sometimes voice.','Sound is information: rewards, damage, warnings, and direction.','Vary common sounds, give players volume controls, and add visual cues for important sounds.'],
 teaser:'Sound and visuals meet the player at the interface. Next: menus, HUDs, and that hard-to-define thing called game feel.',
},
{
 id:'fg-interfaces',
 goal:'Design interfaces that inform without getting in the way, and understand the small effects that create game feel.',
 story:[
  'In 2012, two developers gave a talk with a very simple game: a block bouncing a ball into bricks. It worked, but it felt dead. Then, one by one, they added touches: the bricks wobbled when hit, the screen shook a little, particles burst, the paddle squashed, sounds played. The rules never changed. By the end, the room was laughing and cheering at the same game.',
  'That talk, “Juice it or lose it,” captured something every player feels and few can name. The interface and the tiny reactions around every action decide whether a game feels like a spreadsheet or a toy you never want to put down.',
 ],
 hero:image('fg-15-hero','Two versions of the same brick-breaker game side by side: the left one plain and grey, the right one bursting with particles, bouncing bricks, color, and a happy player.','A plain brick-breaker game beside a juicy version full of particles and color.','Two side-by-side screens of an original brick-breaker game: the left plain, grey, and static; the right exploding with confetti particles, wobbling bricks, warm color, and a delighted player silhouette in front'),
 sections:[
  {title:'UI and UX',paragraphs:[
   'The user interface (UI) is everything that presents information or accepts choices: health bars, score counters, maps, menus, inventory screens, buttons, and prompts. User experience (UX) is how easy, clear, and pleasant the whole game is to use: whether players understand what to do, can find what they need, and feel in control.',
   'A heads-up display (HUD) shows information during play. The best HUDs show only what the player needs right now, where their eyes already are. Some games hide the HUD entirely and put information into the world: Dead Space showed health as a glowing bar on the character’s spine.',
  ],compare:{title:'Where information can live',columns:['Type','Example','Strength'],rows:[['On-screen HUD','Health bar in a corner','Always visible'],['In the world (diegetic)','Health shown on the character’s suit','Immersive'],['Near the action','Damage numbers above enemies','Right where you look'],['Menus','Inventory screen','Detailed, but pauses play']]}},
  {title:'Teaching the player',paragraphs:[
   'The first minutes of a game are a conversation about how to play. Strong games teach by letting you do: a safe space to try jumping, a single enemy to practise on, a locked door that explains itself. Text tutorials are a last resort; when needed, show one instruction at a time, at the moment it matters.',
   'Watch new players. Every time they stop and look confused, the interface or level has failed to communicate. That is not their fault; it is a design note.',
  ]},
  {title:'Juice: game feel',paragraphs:[
   'Game feel, often called juice, is the layer of immediate, satisfying response to actions. Common ingredients: screen shake on big impacts, hitstop (a frame-long freeze when a hit lands), particles and flashes, squash and stretch, punchy sounds, rumble on gamepads, and numbers that pop.',
   'Juice should amplify information, not bury it. Too much shake makes games unreadable and can cause discomfort, so offer options to reduce it. Turn each effect on one at a time and keep only those that make the action clearer and more satisfying.',
  ],demo:'feel'},
  {title:'Menus and settings',paragraphs:[
   'Menus are part of the game’s personality. Make the first menu quick: “Play” should be one click away. Settings players expect include volume sliders, control remapping, text size, screen shake reduction, subtitles, and display options. Pausing should always be possible in single-player games.',
  ],media:image('fg-15-menu','A cozy, readable game settings menu shown on a TV: large clear text, sliders for music and effects volume, toggles for subtitles and screen shake, and a highlighted Back button.','A clear, friendly settings menu with volume sliders and accessibility toggles.','A friendly game settings screen on a living-room TV, large clear rounded typography, sliders for music and effects, toggles for subtitles and reduced screen shake, one highlighted button')},
  {title:'Text, fonts, and icons',paragraphs:[
   'Text in games is read quickly, often while something else is happening. Use clear fonts at generous sizes, strong contrast against the background, and short labels. Decorative fonts are lovely for titles but tiring in menus and dialogue.',
   'Icons can replace words, but only when they are unambiguous: a heart for health is universal, while an abstract rune for “stamina” may need a label the first time. If you hope to translate your game, leave extra room. German text is often noticeably longer than English, and a button that fits “Play” may not fit the translation.',
  ]},
 ],
 games:[
  {title:'Dead Space',year:2008,platform:'PC, Xbox 360, PS3',note:'Health and ammo displayed on the character and weapon instead of a HUD.'},
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'Small squashes, particles, and hair color changes make every dash feel crisp and readable.'},
  {title:'Nuclear Throne',year:2015,platform:'PC, PS4',note:'By Vlambeer, famous for strong screen shake, muzzle flashes, and punchy feedback.'},
  {title:'Portal',year:2007,platform:'PC, Xbox 360, PS3',note:'Teaches complex ideas through carefully ordered test chambers with almost no text.'},
 ],
 activity:{title:'Spot it: juice inventory',task:'Pick one action in a game, such as a hit, a jump, or a pickup, and list every piece of feedback that happens.',steps:['Record or slow down the moment.','List visual effects, sounds, camera moves, and pauses.','Imagine removing each one. Which matters most?'],hints:['Look for a tiny freeze at the moment of impact.','Particles often last only a fraction of a second.'],checks:['You found at least four pieces of feedback for one action.','You identified the most important one.']},
 ai:{text:'Juice is a perfect task for a coding agent because each effect is small, separate, and easy to test. Ask for effects one at a time, each with an on/off setting, and play after every addition. Also ask for an options menu with volume, screen shake, and subtitles from the start.',toolIds:['claude-code','cursor','kenney'],prompt:'Add game feel to [action] one effect at a time: (1) a 0.05 s hitstop, (2) small screen shake, (3) a particle burst, (4) a squash on the target. Give each a setting I can toggle and an intensity number. Add a “reduce screen shake” option to the settings menu.'},
 deeper:{text:'Classic talks and references on feel and interfaces:',items:[
  {label:'Juice it or lose it (Martin Jonasson & Petri Purho)',detail:'The 2012 talk that turned a dull brick-breaker into a joyful one.'},
  {label:'The Art of Screenshake (Jan Willem Nijman)',detail:'A talk listing dozens of small tricks for punchy action games.'},
  {label:'Game UI Database',detail:'Thousands of screenshots of real game menus and HUDs for reference.',url:'https://www.gameuidatabase.com/'},
 ]},
 questions:[
  ['What is the main purpose of juice such as hitstop and particles?',['To change how much damage hits deal','To make actions feel clear and satisfying without changing the rules','To slow the game down for beginners'],1,'Juice amplifies feedback; the rules stay the same.'],
  ['New players keep missing a door. What does this tell you?',['Players are not paying attention','The level or interface is not communicating clearly','The game needs a longer tutorial'],1,'Confusion during playtests is design feedback, not a player failure.'],
 ],
 summary:['UI presents information and choices; UX is how easy and pleasant the whole game feels.','Teach by doing; use text sparingly and at the right moment.','Juice amplifies actions; add effects one at a time and offer options to reduce them.'],
 teaser:'Interfaces tell players what is happening. Story tells them why it matters. That’s next.',
 mechanics:['screen-shake','hitstop','minimap'],
},
{
 id:'fg-story',
 goal:'See the many ways games tell stories, from cutscenes to environments to the player’s own choices.',
 story:[
  'Somewhere in a ruined castle in a dark fantasy game, you pick up a worn ring. Its description is three sentences long. It mentions a knight, a promise, and a betrayal. Nothing else in the game explains it. Hours later you meet that knight, and the three sentences suddenly matter enormously.',
  'Games tell stories in ways no film or book can: by letting you find them, piece them together, and sometimes change them. The player is not only an audience. They are a participant.',
 ],
 hero:image('fg-16-hero','An explorer kneeling in a ruined stone hall, holding up a glowing old ring; around them, faded banners, a broken statue, and a half-buried shield hint at a story.','An explorer finding a glowing ring among ruins that hint at a hidden story.','An explorer kneeling in a ruined moonlit stone hall, holding up a softly glowing ring; faded banners, a toppled statue, and a half-buried shield around them suggest a forgotten story'),
 sections:[
  {title:'Many ways to tell',paragraphs:[
   'Some games tell stories directly with cutscenes and dialogue, like films you play between scenes. Others use environmental storytelling: the world itself reveals what happened through objects, art, and layout. A child’s drawing on a wall, a barricaded door, and a skeleton reaching for a key tell a story without a word.',
   'Item descriptions, letters, audio logs, and lore entries reward curious players. Dialogue choices let players shape their character. And emergent stories come from systems: the time your crew survived a disaster by a single point of hull damage is a story the designers never wrote, but the game created.',
  ],compare:{title:'Storytelling tools',columns:['Tool','Example','Player role'],rows:[['Cutscenes & dialogue','A dramatic reveal','Watch and listen'],['Environmental storytelling','A ruined room telling what happened','Discover'],['Collectible lore','Notes, item descriptions','Piece together'],['Choices & branches','Deciding who to save','Shape'],['Emergent stories','A narrow escape created by systems','Create']]}},
  {title:'Story and play together',paragraphs:[
   'The strongest moments happen when story and mechanics say the same thing. In Brothers: A Tale of Two Sons, you control two brothers at once, one with each stick; late in the story, the game uses that control scheme for an emotional moment that only works because you played it. When the story says “you are powerful” but the mechanics make you weak, players feel the mismatch.',
   'You do not need a huge story. A clear premise (“a lighthouse keeper must relight every lamp before the storm”), a few characters with wants, and a world that hints at more are enough for most small games.',
  ]},
  {title:'Branching and choices',paragraphs:[
   'Branching stories multiply quickly: two choices with two outcomes each, three times, become eight endings. Writers manage this by letting branches rejoin, by tracking a few key flags rather than every decision, and by making choices change how characters feel rather than the entire plot.',
   'Tools such as Twine and ink were built for writing branching stories and can export to games. Visual novels are built almost entirely around this kind of structure.',
  ],media:chart('fg-16-branches','A branching tree of story paths drawn as a river delta: one source splitting into streams, some rejoining, ending in three pools labelled with simple icons for different endings.','Story branches drawn as a river that splits and rejoins into three endings.','A story-branch map drawn as a river delta seen from above, one spring splitting into streams that sometimes rejoin, flowing into three distinct pools marked with a sun, a moon, and a star icon','4:3')},
  {title:'Writing for games',paragraphs:[
   'Game text competes with action, so keep it short. Players skim. Put the most important line first, give characters distinct voices, and let the world show what dialogue would otherwise explain. Write barks, short reactive lines such as an enemy shouting “Over there!”, to make systems feel alive.',
  ]},
  {title:'Characters who want things',paragraphs:[
   'Stories move when characters want something and something stands in the way. Give each important character a want and an obstacle: the blacksmith wants to reforge her father’s sword but lacks a rare ore; the rival wants to prove himself and keeps racing you to every treasure. Suddenly quests, items, and encounters have reasons.',
   'Decide early whether your player character is a defined person with their own voice, or a quieter figure players project themselves onto. Both work. Defined heroes suit cinematic stories; quiet heroes suit games where the player’s choices are the story.',
  ]},
 ],
 games:[
  {title:'Dark Souls',year:2011,platform:'PS3, Xbox 360, PC',note:'Story told largely through item descriptions, architecture, and sparse dialogue.'},
  {title:'Brothers: A Tale of Two Sons',year:2013,platform:'Xbox 360, then more',note:'Controls and story merge in a moment that only works because you played it.'},
  {title:'Undertale',year:2015,platform:'PC, then consoles',note:'Remembers your choices, even across save files, and builds its story around mercy.'},
  {title:'Gone Home',year:2013,platform:'PC, then consoles',note:'A family story discovered entirely by exploring an empty house.'},
 ],
 activity:{title:'Try it: a room that tells a story',task:'Describe a single room that tells a story without any text.',steps:['Decide what happened in the room.','Choose five objects and their placement that hint at it.','Ask a friend to guess the story from your list.'],hints:['Objects out of place are powerful: a dropped toy, an open window, two cups but one chair.','Lighting and damage tell stories too.'],checks:['A reader can guess the main event.','No object needs a written explanation.']},
 ai:{text:'AI is useful for brainstorming names, item descriptions, barks, and branching outlines. Keep yourself as the author: decide the premise, the characters’ wants, and the tone, then ask for variations and pick the best. Keep a short world document so generated text stays consistent.',toolIds:['claude-code'],prompt:'My game’s premise: [premise]. Tone: [tone]. Characters: [name: want]. Write ten short item descriptions (max 25 words each) that hint at the world’s history without explaining it, and five enemy barks for when the player is spotted.'},
 deeper:{text:'If you want to write branching stories yourself:',items:[
  {label:'Twine',detail:'A free tool for writing interactive, branching stories.',url:'https://twinery.org/'},
  {label:'ink by inkle',detail:'A scripting language for branching game dialogue that works with major engines.',url:'https://www.inklestudios.com/ink/'},
  {label:'Hamlet on the Holodeck (Janet Murray)',detail:'A classic book on storytelling in interactive media.'},
 ]},
 questions:[
  ['A skeleton reaching for a key beside a locked door is an example of…',['A cutscene','Environmental storytelling','A dialogue choice'],1,'The scene tells a story through objects and placement without any words.'],
  ['What helps keep a branching story manageable?',['Letting branches rejoin and tracking a few key choices','Giving every choice a completely separate plot','Avoiding choices entirely'],0,'Rejoining branches and limited flags keep the number of paths under control.'],
 ],
 summary:['Games tell stories through cutscenes, environments, lore, choices, and emergent events.','The best moments align story and mechanics.','Keep text short, branches manageable, and let the world show.'],
 teaser:'The world tells the story, but someone has to build that world. Next: level design.',
 mechanics:['environmental-storytelling','dialogue-choices','branching-story','multiple-endings'],genres:['visual-novel','adventure'],
},
{
 id:'fg-level-design',
 goal:'Understand how level design teaches, paces, and guides players, so you can plan spaces in any game.',
 story:[
  'You start on the left of the screen. Ahead is open ground, then a block with a question mark, then a mushroom-shaped enemy walking toward you. There is no tutorial text. Within ten seconds, almost every first-time player learns to move right, jump, and avoid or stomp enemies.',
  'That opening level of Super Mario Bros. is studied in design schools around the world, not because it is complicated, but because it is a perfect teacher. Level design is the art of arranging space so players learn, feel tension and relief, and always know where to go next, mostly without noticing they are being guided at all.',
 ],
 hero:image('fg-17-hero','A side-view level drawn like an architect’s plan: a safe starting area, a first gentle challenge, a reward, then harder challenges, with dotted arrows showing the player’s path.','A side-view level drawn as an architectural plan with arrows showing the player’s path.','A side-view game level drawn like an architect’s blueprint on cream paper: a safe start, a gentle first gap, a floating reward block, and progressively trickier platforms, with dotted arrows tracing the path'),
 sections:[
  {title:'Teach, test, twist',paragraphs:[
   'Many designers introduce each new idea in three beats. Teach: show the mechanic in a safe place where failure costs little. Test: ask the player to use it under mild pressure. Twist: combine it with something else or change the context to surprise them. Nintendo designers have described a related four-step structure borrowed from Japanese storytelling: introduction, development, twist, and conclusion.',
   'This rhythm keeps levels from feeling repetitive. Each new section asks a familiar mechanic a new question.',
  ],diagram:{title:'INTRODUCING AN IDEA',nodes:['Teach: safe space','Test: mild pressure','Twist: new context','Master: combine everything']}},
  {title:'Guiding without arrows',paragraphs:[
   'Players follow light, color, and open space. A bright doorway in a dark room pulls them forward. A distant tower, called a landmark, gives a goal and helps them stay oriented. Lines in the architecture, such as roads, rivers, and rows of lamps, lead the eye. Pickups such as coins placed in a line show the intended path and even the arc of a jump.',
   'Designers also use gating: a locked door, a gap too wide to jump, or a ledge too high. Gates tell players “not yet,” and remembering them creates the satisfaction of returning later with a new ability.',
  ],media:image('fg-17-guiding','A dim corridor in a 3D game with a single warm light spilling from an open doorway at the end, a trail of glowing coins leading toward it.','A dark corridor with a lit doorway and a trail of coins guiding the player.','A dim stone corridor viewed from the player’s perspective, one warm glowing doorway at the far end, a gentle line of glowing coins leading toward it')},
  {title:'Pacing',paragraphs:[
   'Good levels breathe. Intense sections are followed by calm ones where players can recover, explore, or enjoy the view. Difficulty rises overall, but not in a straight line; a sawtooth pattern of rising challenge with occasional relief keeps players engaged without exhausting them.',
   'Rewards placed after challenges, such as a health pickup, a treasure, or a beautiful vista, make effort feel worthwhile. Secrets reward curiosity: a cracked wall, a suspicious gap, a ledge just out of sight.',
  ]},
  {title:'Start with a blockout',paragraphs:[
   'Professional level designers rarely start with art. They build a blockout, also called a graybox: the level made of simple boxes and placeholder shapes. They play it, adjust distances and timing, and only then add art. Changing a grey box takes seconds; changing a finished, decorated room takes hours.',
   'The 2D and 3D Worlds courses go deeper into level design for each kind of game. For now, remember: plan the experience, block it out, play it, then decorate.',
  ]},
 ],
 games:[
  {title:'Super Mario Bros.',year:1985,platform:'NES',note:'World 1-1 teaches movement, jumping, enemies, and power-ups without text.'},
  {title:'Half-Life 2',year:2004,platform:'PC, then consoles',note:'Uses light, sound, and architecture to guide players through linear but natural-feeling spaces.'},
  {title:'Dark Souls',year:2011,platform:'PS3, Xbox 360, PC',note:'Interconnected spaces with shortcuts that loop back to safe points, a masterclass in gating and relief.'},
  {title:'Portal',year:2007,platform:'PC, Xbox 360, PS3',note:'Each test chamber teaches one idea, then the next twists it.'},
 ],
 activity:{title:'Spot it: teach, test, twist',task:'Find one mechanic in a game you know and trace how levels introduce it.',steps:['Find where the mechanic first appears. Is it safe there?','Find its first real test.','Find the twist where it combines with something new.'],hints:['Early levels of platformers and puzzle games show this most clearly.','Look for the first enemy, the first gap, the first switch.'],checks:['You found all three beats.','You can explain how the game guided you to the first one.']},
 ai:{text:'AI can help you brainstorm level ideas, write a beat-by-beat plan, and build blockouts quickly. Describe the experience in beats (teach, test, twist, rest, reward) and ask your agent to build a graybox you can play immediately. Decorate only after the timing feels right.',toolIds:['claude-code','godot-mcp','tiled','ldtk'],prompt:'Plan a short level for my [genre] game that introduces [mechanic]. Use beats: safe teach area, first test, rest with a reward, twist combining it with [other mechanic], final test. Describe each beat in one or two sentences, then build it as a graybox using only simple shapes so I can playtest the layout.'},
 deeper:{text:'For level designers who want more:',items:[
  {label:'The Level Design Book',detail:'A free, practical, online book about level design.',url:'https://book.leveldesignbook.com/'},
  {label:'An Architectural Approach to Level Design (Christopher Totten)',detail:'How architecture ideas apply to game spaces.'},
  {label:'Tiled and LDtk',detail:'Free 2D level editors used by many indie games.',toolId:'ldtk'},
 ]},
 questions:[
  ['A new mechanic appears for the first time over a deadly pit. What principle does this break?',['Teach in a safe space first','Every level needs a checkpoint','Hazards must always be visible'],0,'Players should first try a new idea where failure costs little.'],
  ['Why do designers build blockouts before art?',['Art is the least important part of a game','Grey boxes are fast to change while testing layout and timing','Engines need simple shapes for a first build'],1,'Testing space and timing with simple shapes avoids wasted art work.'],
  ['Which is a classic way to guide players without arrows?',['A brightly lit doorway in a dark room','A pop-up text box every few seconds','A path darker than its surroundings'],0,'Light, color, and landmarks pull players naturally.'],
 ],
 summary:['Introduce ideas by teaching, testing, and twisting them.','Guide with light, landmarks, lines, pickups, and gates.','Pace with rising challenge and moments of relief; block out before decorating.'],
 teaser:'You have the pieces. The final chapter puts them in order, from a first idea to a released game.',
 mechanics:['secrets','checkpoints','ability-gating','interconnected-map'],
},
{
 id:'fg-idea-to-release',
 goal:'Follow a realistic path from idea to released game: scope, prototype, vertical slice, production, playtesting, and launch.',
 story:[
  'Every finished game you love was once a sentence in someone’s notebook. Most sentences in most notebooks never become games. The difference is rarely talent. It is usually scope: knowing how small to start, what to build first, and when to stop adding things.',
  'This last chapter is a map of that journey. Follow it with your first tiny game, and every game after it gets easier.',
 ],
 hero:image('fg-18-hero','A winding path on a map from a lightbulb (idea) through a sketchbook (prototype), a small house (vertical slice), a busy workshop (production), a group of testers, to a launch rocket.','A map path from an idea lightbulb through prototype, workshop, and testing to a launch rocket.','An illustrated treasure-map-style path winding from a glowing lightbulb, past a sketchbook, a tiny cottage, a busy workshop, a group of smiling testers, to a small rocket lifting off'),
 sections:[
  {title:'Scope: smaller than you think',paragraphs:[
   'Beginners almost always plan games that are too large. A good first game can be finished in a weekend to a few weeks: one screen, one mechanic, one goal. Write a one-page plan with the core loop, the target platform, a content list, and a list of non-goals: things you will not build, such as multiplayer, an open world, or crafting.',
   'AI tools make building faster, but they also make it tempting to keep adding features. Each feature touches many parts, needs testing, and can break something else. Finishing a small game teaches more than abandoning a large one.',
  ]},
  {title:'Prototype, then vertical slice',paragraphs:[
   'A prototype answers one question as quickly as possible: is this loop fun? Use plain shapes, no menus, and no polish. Throw prototypes away freely. When something feels good, build a vertical slice: a small part of the game at close to final quality, with art, sound, interface, and one complete loop. The slice shows whether the whole thing works together and how long everything takes.',
   'Then comes production: building the rest of the content, systems, and polish, with frequent saved versions.',
  ],diagram:{title:'THE PATH',nodes:['One-page plan','Prototype the loop','Vertical slice','Production','Playtests','Release'],note:'Playtest at every step, not only at the end.'}},
  {title:'Playtesting',paragraphs:[
   'You know your game too well to see its problems. Playtesting means watching other people play: ideally people who have never seen it. Don’t explain anything; just watch, take notes, and ask a few questions afterwards. Where did you get stuck? What did you want to do that you couldn’t? What was your favourite moment?',
   'Look for patterns. One player missing a door may be chance; three players missing it means the door needs a clue. Fix the biggest problems first, then test again.',
  ],media:image('fg-18-playtest','A developer sitting quietly behind a playtester, taking notes in a notebook while the tester leans in, puzzled, toward a screen.','A developer silently taking notes while a playtester plays.','A developer sitting quietly behind a playtester, scribbling in a notebook, while the playtester leans toward a monitor with a puzzled, curious expression, warm desk lamp light')},
  {title:'Release and after',paragraphs:[
   'Releasing a game means building it for your platform, testing the build outside your editor, writing a store page with screenshots and a short description, and choosing a price or making it free. For a first game, itch.io is a friendly place to start. Share it with friends, communities, and game jams.',
   'After release, listen to players, fix serious bugs, and write a short retrospective: what went well, what was harder than expected, what you would cut next time. Then start the next, slightly bigger game. That loop of make, finish, learn, and grow is how every game developer improves.',
  ]},
 ],
 games:[
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'Grew from a four-day game jam prototype into a full release.'},
  {title:'Minecraft',year:2011,platform:'PC, then everywhere',note:'Released early to players in 2009 and improved with their feedback for two years before the full release.'},
  {title:'Hades',year:2020,platform:'PC, Switch, then consoles',note:'Developed in Early Access with frequent updates shaped by player feedback.'},
 ],
 activity:{title:'Try it: your one-page plan',task:'Write a one-page plan for the smallest game you would be proud to finish.',steps:['Write the core loop in four to six steps.','Choose one platform.','List the content: number of levels, enemies, and items.','Write five non-goals.','Write the question your prototype must answer.'],hints:['If your content list has more than ten items, cut it in half.','Your prototype question might be: “Is dodging while collecting fun for two minutes?”'],checks:['The game could be finished in a few weeks.','The plan includes non-goals and a prototype question.']},
 ai:{text:'Give your one-page plan to your coding agent before anything else, and keep it updated. Ask the agent to help you break the work into small, testable tasks, and to warn you when a request expands the scope. Agents can also help write store descriptions and patch notes, which you should always review.',toolIds:['claude-code','cursor','itch','github-pages'],prompt:'Here is my one-page plan: [paste]. Break it into an ordered list of small tasks, each producing something I can play and check. Mark which tasks belong to the prototype, the vertical slice, and production. Flag anything in my plan that seems larger than it looks.'},
 deeper:{text:'For the journey ahead:',items:[
  {label:'Global Game Jam',detail:'An annual worldwide jam: make a game in a weekend with others.',url:'https://globalgamejam.org/'},
  {label:'Ludum Dare',detail:'One of the longest-running online game jams.',url:'https://ldjam.com/'},
  {label:'The hands-on ladder on this site',detail:'Level 1 courses in the browser and Godot turn these foundations into real games.'},
 ]},
 questions:[
  ['What is the main job of a prototype?',['To look as good as the final game','To answer quickly whether the core loop is fun','To test the final art style'],1,'Prototypes are fast, rough experiments; polish comes later.'],
  ['Three playtesters miss the same hidden door. What should you do?',['Assume those players were careless','Add a clearer clue or change the layout, then test again','Add a hint to the game’s manual'],1,'A pattern across testers is a design problem worth fixing.'],
  ['Which plan is best for a first game?',['An open-world multiplayer RPG','One screen, one mechanic, one goal, with a list of non-goals','A game with every feature you can imagine'],1,'Small, finished games teach the most and build momentum.'],
 ],
 summary:['Scope small and write non-goals.','Prototype the loop, build a vertical slice, then produce.','Playtest often, release, reflect, and start the next game.'],
 teaser:'You’ve finished What Makes a Game. Next, travel through gaming’s history, or dive into 2D or 3D worlds.',
},
];
