import type { Course, Lesson, Module, Question } from '../types';
import { godotSeeds, type ModuleSeed } from './godot-seeds';

// Lesson and module IDs identify saved progress. Keep them stable when editing a published lesson.
const foundationsGame: ModuleSeed[] = [
 ['fg-spark','Part 1 · The spark','What a game is, and the loop at the heart of every one.',[
  ['fg-what-is-a-game','What is a game?',['mechanic','core-loop','state']],
  ['fg-core-loop','The loop at the heart of play',['core-loop','game-loop']],
  ['fg-anatomy','Anatomy of a game',['systems','game-engine']]]],
 ['fg-play','Part 2 · How games play','Genres, mechanics, controls, and the instructions underneath.',[
  ['fg-genres','A field guide to genres',['genre','core-loop']],
  ['fg-mechanics','Mechanics: the verbs of play',['mechanic','systems']],
  ['fg-controls','Controls: your hands inside the world',['input','game-feel']],
  ['fg-programming','Programming, without the code',['programming','state','game-loop']]]],
 ['fg-workshop','Part 3 · The workshop','Engines, platforms, and the AI crew that helps you build.',[
  ['fg-engines','Game engines: where games are built',['game-engine','platform']],
  ['fg-platforms','Platforms and stores',['platform','input']],
  ['fg-ai-crew','Your AI crew: agents, MCP, and generators',['coding-agent','mcp','asset-pipeline']]]],
 ['fg-senses','Part 4 · Look, sound, and feel','Visual direction, characters, animation, sound, and interfaces.',[
  ['fg-art-direction','Visual direction: choosing a look',['art-direction','asset-pipeline']],
  ['fg-characters','Character design',['character-design','art-direction']],
  ['fg-animation','Animation: the illusion of life',['animation','game-feel']],
  ['fg-sound','Sound and music',['sound-design','game-feel']],
  ['fg-interfaces','Interfaces and game feel',['ui-ux','game-feel']]]],
 ['fg-meaning','Part 5 · Meaning and making','Story, level design, and the path from idea to release.',[
  ['fg-story','Story in games',['narrative','character-design']],
  ['fg-level-design','Level design: the invisible teacher',['level-design','core-loop']],
  ['fg-idea-to-release','From idea to release',['vertical-slice','playtesting']]]],
];
const foundationsHistory: ModuleSeed[] = [
 ['fh-beginnings','Part 1 · Sparks and coins','From laboratory experiments to the arcade boom.',[
  ['fh-labs','Games in the laboratory',['game-engine','mechanic']],
  ['fh-pong','Pong and the birth of an industry',['core-loop','platform']],
  ['fh-golden-age','The golden age of arcades',['character-design','core-loop']]]],
 ['fh-home','Part 2 · Games come home','Crashes, comebacks, home computers, and console wars.',[
  ['fh-crash','The crash and the comeback',['platform','level-design']],
  ['fh-computers','Bedrooms, home computers, and the PC',['genre','game-engine']],
  ['fh-16bit','The 16-bit era',['genre','art-direction']]]],
 ['fh-dimensions','Part 3 · New dimensions','3D worlds, online play, and high definition.',[
  ['fh-3d','The leap into 3D',['camera','transforms']],
  ['fh-online','Getting connected',['genre','platform']],
  ['fh-hd','The HD era and open worlds',['level-design','narrative']]]],
 ['fh-everyone','Part 4 · Everyone plays','Phones, indies, creators, and the tools you have today.',[
  ['fh-mobile','Pockets and browsers',['platform','input']],
  ['fh-indie','The indie revolution',['game-engine','vertical-slice']],
  ['fh-today','Live worlds, creators, and AI',['coding-agent','platform']]]],
];
const foundations2d: ModuleSeed[] = [
 ['f2-flat','Part 1 · Flat worlds','Sprites, cameras, isometric views, and tiles.',[
  ['f2-sprites','Pixels, sprites, and the 2D stage',['coordinates','art-direction']],
  ['f2-cameras','Windows onto a 2D world',['camera','parallax']],
  ['f2-isometric','2.5D and isometric worlds',['isometric','camera']],
  ['f2-tiles','Tiles and tilemaps',['tile-map','level-design']]]],
 ['f2-levels','Part 2 · Building levels','Teaching through space, map structures, and movement.',[
  ['f2-teaching','Level design: teaching without words',['level-design','mechanic']],
  ['f2-maps','Map structures',['level-design','core-loop']],
  ['f2-movement','Movement that feels good',['velocity','game-feel']]]],
 ['f2-play','Part 3 · Play in two dimensions','Combat, enemies, progression, generation, and case studies.',[
  ['f2-combat','Combat in 2D',['hitbox','collision']],
  ['f2-enemies','Enemies and their minds',['state-machine','level-design']],
  ['f2-progression','Collectibles, progression, and economies',['core-loop','state']],
  ['f2-procedural','Procedural worlds and roguelikes',['procedural','level-design']],
  ['f2-case-studies','Six 2D games, taken apart',['genre','core-loop']]]],
];
const foundations3d: ModuleSeed[] = [
 ['f3-space','Part 1 · Entering the third dimension','Space, cameras, and moving through 3D.',[
  ['f3-space-basics','Thinking in three dimensions',['transforms','coordinates']],
  ['f3-cameras','First person, third person, and beyond',['camera','transforms']],
  ['f3-controls','Moving through 3D space',['input','physics']]]],
 ['f3-look','Part 2 · How 3D worlds look','Models, light, shaders, and environments.',[
  ['f3-models','Models, meshes, and materials',['mesh-material','asset-pipeline']],
  ['f3-lighting','Light and atmosphere',['lighting','level-design']],
  ['f3-shaders','Shaders, explained without code',['shader','art-direction']],
  ['f3-environments','Building environments',['environment','asset-pipeline']]]],
 ['f3-design','Part 3 · Designing 3D play','Level design, world structure, animation, and 3D mechanics.',[
  ['f3-level-design','3D level design',['level-design','lighting']],
  ['f3-structure','Open worlds, linear paths, and hubs',['level-design','core-loop']],
  ['f3-animation','Bringing 3D characters to life',['animation','character-design']],
  ['f3-mechanics','3D mechanics: physics, sight, and paths',['raycast','navigation']]]],
 ['f3-ship','Part 4 · Making it real','Performance and lessons from great 3D games.',[
  ['f3-performance','Making it run smoothly',['profiling','mesh-material']],
  ['f3-case-studies','Six 3D games, taken apart',['genre','level-design']]]],
];

// Hands-on courses on the shared 1–5 ladder. These are outlines until they are written.
const browser2d1: ModuleSeed[] = [
 ['b1-setup','Set up and plan','Choose a coding agent, plan a one-screen game, and keep safe checkpoints.',[['b1-workbench','Your vibe-coding workbench',['coding-agent']],['b1-plan','A one-page game plan',['core-loop']]]],
 ['b1-build','Build the game','Get something moving, then give it art, rules, and sound.',[['b1-first-playable','Your first playable',['game-loop']],['b1-art','Characters and art: generate, download, or draw',['art-direction']],['b1-layout','Lay out the screen',['level-design']],['b1-rules','Rules, score, and debugging',['state']],['b1-sound','Sound and game feel',['sound-design']]]],
 ['b1-share','Share it','Playtest and publish to a link.',[['b1-publish','Playtest and publish',['playtesting']]]],
];
const godot2d1: ModuleSeed[] = [
 ['g1-setup','Meet Godot','Install Godot, tour the editor, and connect your agent.',[['g1-tour','Why Godot, and a tour of the editor',['game-engine']],['g1-agent','Connect your agent and a Godot MCP server',['mcp']],['g1-scenes','Scenes and nodes in plain words',['scene']]]],
 ['g1-build','Build the game','A character, a level, and something to do.',[['g1-character','Your character: sprites and animation',['character-design']],['g1-movement','Movement and collision',['collision']],['g1-tiles','Level design with tiles',['tile-map']],['g1-pickups','Pickups, an enemy, and health',['state']]]],
 ['g1-finish','Finish and share','Interface, sound, testing, and export.',[['g1-ui-sound','Interface and sound',['ui-ux']],['g1-export','Playtest and export',['playtesting']]]],
];
const browser3d2: ModuleSeed[] = [
 ['b2-space','A 3D playground','Set up a 3D scene in the browser.',[['b2-scene','Your first 3D scene',['transforms']],['b2-ball','A rolling ball with physics',['physics']]]],
 ['b2-course','Build the course','Obstacles, models, light, and a finish line.',[['b2-models','Free and generated 3D models',['mesh-material']],['b2-track','Design an obstacle course',['level-design']],['b2-polish','Light, sound, and publishing',['lighting']]]],
];
const godot2d2: ModuleSeed[] = [
 ['g2-move','Platformer movement','Jumping that feels great.',[['g2-jump','Jump arcs, coyote time, and buffering',['velocity']],['g2-camera','A camera that looks ahead',['camera']]]],
 ['g2-levels','Designed levels','Tiles, teaching, and secrets.',[['g2-tilesets','Tilesets and auto-tiling',['tile-map']],['g2-teach','Levels that teach',['level-design']],['g2-hazards','Hazards, enemies, and checkpoints',['state-machine']],['g2-world','A world map and polish',['game-feel']]]],
];
const godot2d3: ModuleSeed[] = [
 ['g3-combat','Combat','Attacks, enemies, and fairness.',[['g3-attacks','Attacks, hitboxes, and feedback',['hitbox']],['g3-enemies','Enemies with readable intent',['state-machine']]]],
 ['g3-runs','Runs','Rooms, randomness, and upgrades.',[['g3-rooms','Rooms and seeded variety',['procedural']],['g3-upgrades','Upgrades and rewards',['core-loop']],['g3-saves','Settings and saves',['save-data']]]],
];
const browser3d4: ModuleSeed[] = [
 ['b4-world','An island to explore','Terrain, camera, and a character.',[['b4-island','Terrain, sky, and water',['environment']],['b4-explorer','A third-person explorer',['camera']]]],
 ['b4-life','Bring it to life','Things to find, light, and performance.',[['b4-quests','Collectibles and a small quest',['narrative']],['b4-atmosphere','Atmosphere with light and shaders',['shader']],['b4-perf','Keep it fast on the web',['profiling']]]],
];
const godot3d4: ModuleSeed[] = [
 ['g4-world','A 3D world','Graybox, camera, and controls.',[['g4-graybox','Graybox an adventure level',['level-design']],['g4-controller','A third-person controller',['camera']]]],
 ['g4-adventure','The adventure','Characters, enemies, objectives, and saves.',[['g4-characters','Rigged characters and animation',['animation']],['g4-enemies','Enemies that find their way',['navigation']],['g4-objectives','Objectives and checkpoints',['save-data']]]],
];
const godot5: ModuleSeed[] = [
 ['g5-plan','Your game','Choose, scope, and prototype the risky part.',[['g5-pitch','Pitch and scope your game',['vertical-slice']],['g5-prototype','Prototype the riskiest idea',['core-loop']]]],
 ['g5-ship','Ship it','Produce, playtest, and release.',[['g5-production','Production with an AI crew',['coding-agent']],['g5-release','Playtest, polish, and release',['playtesting']]]],
];
const unity1: ModuleSeed[] = [['u1-start','Getting started','An AI-first introduction to Unity.',[['u1-tour','Unity for vibe coders',['game-engine']],['u1-agent','Connecting an agent to Unity',['mcp']],['u1-first','A first small game',['core-loop']]]]];
const unreal1: ModuleSeed[] = [['ue1-start','Getting started','An AI-first introduction to Unreal Engine.',[['ue1-tour','Unreal for vibe coders',['game-engine']],['ue1-blueprints','Blueprints and agents',['programming']],['ue1-first','A first small 3D game',['core-loop']]]]];

export const catalog: Omit<Lesson,'blocks'|'summary'|'review'>[] = [];
type CourseOptions = { status: Lesson['status']; minutes: number; difficulty: (optional: boolean) => Lesson['difficulty'] };
function modules(courseId: string, seeds: ModuleSeed[], o: CourseOptions): Module[] {
 return seeds.map(([id,title,description,rows,optional]) => {
  rows.forEach(([lessonId,lessonTitle,concepts],i)=>{
   // Advisory prerequisite: the previous lesson in the same module.
   const previous=i>0?[rows[i-1][0]]:[];
   catalog.push({id:lessonId,courseId,moduleId:id,title:lessonTitle,outcome:description,minutes:o.minutes,status:o.status,difficulty:o.difficulty(!!optional),concepts,prerequisites:previous});
  });
  return {id,title,description,optional,lessonIds:rows.map(r=>r[0])};
 });
}
function check(id:string,prompt:string,options:string[],answer:number,explanation:string,concept:string):Question{return{id,prompt,options,answer,explanation,concept};}
const story:CourseOptions={status:'complete',minutes:12,difficulty:()=>'Beginner'};
const planned=(difficulty:Lesson['difficulty']):CourseOptions=>({status:'preview',minutes:20,difficulty:()=>difficulty});
const storyBase={difficulty:'Everyone',prerequisites:['Curiosity. Nothing else.'],notRequired:['Programming','Art skills','A game engine'],selfCheck:[],projectIds:[],track:'foundations' as const,availability:'available' as const};
const ladderBase={prerequisites:['What Makes a Game (recommended)'],notRequired:['Programming experience','Your own art'],selfCheck:[],projectIds:[],track:'ladder' as const,availability:'planned' as const};

export const courses: Course[] = [
 {...storyBase,id:'f-game',number:'F1',title:'What Makes a Game',shortTitle:'What Makes a Game',subtitle:'Everything a game is made of, one story at a time.',description:'Take a game apart: its loop, genres, mechanics, controls, engines, platforms, art, characters, animation, sound, interface, and story. You’ll also meet the AI tools that help you build each piece.',audience:'Anyone who wants to make games, especially with AI, and wants to understand what they are asking for.',outcomes:['Describe any game in terms of its loop, mechanics, and systems','Choose an engine, platform, and toolset with reasons','Talk about art direction, characters, animation, sound, and story like a designer'],modules:modules('f-game',foundationsGame,story)},
 {...storyBase,id:'f-history',number:'F2',title:'History of Video Games',shortTitle:'History of Games',subtitle:'Seventy years of play, from oscilloscopes to AI.',description:'Travel from laboratory experiments through arcades, console wars, the 3D revolution, online worlds, phones, and the indie explosion to today. Each era shows the ideas you can still use.',audience:'Anyone curious about where games came from and why they look the way they do.',outcomes:['Place landmark games and machines on a timeline','Explain how technology shaped design in each era','Use history as a source of ideas for your own games'],modules:modules('f-history',foundationsHistory,story)},
 {...storyBase,id:'f-2d',number:'F3',title:'2D & 2.5D Worlds',shortTitle:'2D & 2.5D Worlds',subtitle:'Sprites, tiles, isometric views, and levels that teach.',description:'How flat worlds are drawn, framed, and designed: sprites, cameras, parallax, isometric 2.5D, tilemaps, level design, movement, combat, enemies, progression, and procedural generation.',audience:'Anyone planning a 2D or isometric game, or who wants to understand level design.',prerequisites:['What Makes a Game (recommended)'],outcomes:['Choose a 2D view and art approach for an idea','Design a level that teaches without words','Describe movement, combat, and enemy behavior a coding agent can build'],modules:modules('f-2d',foundations2d,story)},
 {...storyBase,id:'f-3d',number:'F4',title:'3D Worlds',shortTitle:'3D Worlds',subtitle:'Cameras, light, shaders, and spaces you can walk through.',description:'How 3D games work: space and cameras, first and third person, models and materials, lighting, shaders, environments, 3D level design, world structure, animation, 3D mechanics, and performance.',audience:'Anyone planning a 3D game or curious how 3D worlds are made.',prerequisites:['What Makes a Game (recommended)'],outcomes:['Pick a camera and control scheme for a 3D idea','Explain models, materials, light, and shaders in plain words','Plan a 3D level with landmarks, sightlines, and guiding light'],modules:modules('f-3d',foundations3d,story)},
 {...ladderBase,id:'browser-2d-1',number:'L1',title:'Your First Browser Game',shortTitle:'Browser 2D · Lv 1',subtitle:'A one-screen game you can share with a link.',description:'Direct a coding agent to build a small dodge-and-collect game that runs in any browser. Use free or AI-generated art and sound, then publish it.',difficulty:'Level 1',audience:'Complete beginners.',outcomes:['Plan a tiny game and build it with a coding agent','Add art and sound from free libraries or AI generators','Publish a game anyone can play from a link'],engine:'browser',dimension:'2d',level:1,builds:'Star Catcher: a one-screen dodge-and-collect game',modules:modules('browser-2d-1',browser2d1,planned('Beginner'))},
 {...ladderBase,id:'godot-2d-1',number:'L1',title:'Your First Godot Game',shortTitle:'Godot 2D · Lv 1',subtitle:'A real engine, guided by AI.',description:'Install Godot, connect your coding agent through an MCP server, and build a small top-down treasure hunt with tiles, pickups, and an enemy.',difficulty:'Level 1',audience:'Beginners ready to try a real engine.',outcomes:['Find your way around the Godot editor','Build a 2D game with an agent and a Godot MCP server','Design a small tile-based level'],engine:'godot',dimension:'2d',level:1,builds:'A top-down treasure hunt',modules:modules('godot-2d-1',godot2d1,planned('Beginner'))},
 {...ladderBase,id:'browser-3d-2',number:'L2',title:'Roll into 3D',shortTitle:'Browser 3D · Lv 2',subtitle:'Your first 3D game in the browser.',description:'Build a marble-rolling obstacle course with Three.js, free 3D models, and simple physics.',difficulty:'Level 2',audience:'Learners who finished a level-1 course.',outcomes:['Set up a 3D scene, camera, and light','Use free or generated 3D models','Design a short obstacle course'],engine:'browser',dimension:'3d',level:2,builds:'A marble-rolling obstacle course',modules:modules('browser-3d-2',browser3d2,planned('Beginner'))},
 {...ladderBase,id:'godot-2d-2',number:'L2',title:'Platformer Workshop',shortTitle:'Godot 2D · Lv 2',subtitle:'Great jumps and levels that teach.',description:'Build a platformer with satisfying movement, tilesets, hazards, checkpoints, and levels designed to teach.',difficulty:'Level 2',audience:'Learners who finished Godot 2D Level 1.',outcomes:['Tune jump feel with coyote time and buffering','Design levels that introduce, test, and twist an idea'],engine:'godot',dimension:'2d',level:2,builds:'A platformer with hand-designed levels',modules:modules('godot-2d-2',godot2d2,planned('Intermediate'))},
 {...ladderBase,id:'godot-2d-3',number:'L3',title:'Roguelite Run',shortTitle:'Godot 2D · Lv 3',subtitle:'Combat, rooms, and upgrades.',description:'Build Mosslight, a room-based action roguelite with readable enemies, seeded rooms, upgrades, and saves.',difficulty:'Level 3',audience:'Learners comfortable directing an agent in Godot.',outcomes:['Design fair, readable combat','Combine handmade rooms with randomness'],engine:'godot',dimension:'2d',level:3,builds:'Mosslight: a 2D roguelite',modules:modules('godot-2d-3',godot2d3,planned('Intermediate'))},
 {...ladderBase,id:'browser-3d-4',number:'L4',title:'Explorer’s Island',shortTitle:'Browser 3D · Lv 4',subtitle:'A small world to wander.',description:'Build a third-person exploration game on an island with terrain, water, collectibles, and atmosphere, all running in a browser.',difficulty:'Level 4',audience:'Learners who finished a level-2 3D course.',outcomes:['Build and light a small 3D world','Keep a browser game running smoothly'],engine:'browser',dimension:'3d',level:4,builds:'A 3D island exploration game',modules:modules('browser-3d-4',browser3d4,planned('Advanced'))},
 {...ladderBase,id:'godot-3d-4',number:'L4',title:'Wayfinder Adventure',shortTitle:'Godot 3D · Lv 4',subtitle:'A third-person 3D adventure.',description:'Graybox a level, then add a third-person controller, rigged characters, enemies that navigate, objectives, and checkpoints.',difficulty:'Level 4',audience:'Learners who finished Godot Level 3.',outcomes:['Plan a 3D level from graybox to final art','Bring in rigged characters and animation'],engine:'godot',dimension:'3d',level:4,builds:'Wayfinder: a 3D adventure',modules:modules('godot-3d-4',godot3d4,planned('Advanced'))},
 {...ladderBase,id:'godot-5',number:'L5',title:'Your Own Game',shortTitle:'Godot · Lv 5',subtitle:'Pitch it, build it, ship it.',description:'Choose your own idea, prototype the riskiest part, produce it with your AI crew, and release it.',difficulty:'Level 5',audience:'Learners who finished a level-4 course.',outcomes:['Scope an original game','Release a finished game'],engine:'godot',dimension:'2d-3d',level:5,builds:'Your original game, released',modules:modules('godot-5',godot5,planned('Advanced'))},
 {...ladderBase,id:'unity-1',number:'U',title:'Unity, AI-First',shortTitle:'Unity',subtitle:'Coming later.',description:'An AI-first path through Unity, with do-it-yourself alternatives for every step.',difficulty:'Planned',audience:'Learners who want to work in Unity.',outcomes:['Build a small Unity game with an agent'],engine:'unity',dimension:'2d-3d',builds:'A small Unity game',modules:modules('unity-1',unity1,planned('Beginner'))},
 {...ladderBase,id:'unreal-1',number:'U',title:'Unreal, AI-First',shortTitle:'Unreal',subtitle:'Coming later.',description:'An AI-first path through Unreal Engine and Blueprints, with do-it-yourself alternatives for every step.',difficulty:'Planned',audience:'Learners who want to work in Unreal Engine.',outcomes:['Build a small 3D Unreal game with an agent'],engine:'unreal',dimension:'3d',builds:'A small 3D Unreal game',modules:modules('unreal-1',unreal1,planned('Beginner'))},
 {id:'godot',number:'C',title:'Classic Godot (code-first)',shortTitle:'Classic Godot',subtitle:'The original 55-lesson course, built around GDScript.',description:'A complete, code-first path through Godot: a 2D roguelite and a 3D adventure. It stays available while the new AI-first Godot levels are written, and its lessons will become their “do it yourself” sections.',difficulty:'Beginner bridge → Advanced',audience:'Learners who want to read and write GDScript themselves. Programmers can skip the optional bridge.',prerequisites:['What Makes a Game (recommended)','Godot 4.7.2 standard edition','Basic programming, or the included bridge'],notRequired:['Previous Godot projects','3D modeling expertise','Original finished artwork'],outcomes:['Ship complete 2D and 3D games','Design scenes, resources, signals, and reusable systems','Direct and evaluate AI coding and asset workflows'],modules:modules('godot',godotSeeds,{status:'complete',minutes:25,difficulty:optional=>optional?'Beginner':'Intermediate'}),selfCheck:[check('pre-g-1','Which responsibility belongs to a health component?',['Updating every UI widget','Accepting damage and reporting health changes','Loading the next level'],1,'Health owns its values and rules. Listeners decide how to react.','composition'),check('pre-g-2','Do you feel comfortable with variables, functions, and conditions?',['Yes, I can read a small script','I would like the optional bridge'],0,'Choose the bridge whenever you need it. This check is advisory; every lesson remains accessible.','state')],projectIds:['godot-roguelite','godot-adventure','independent-game'],track:'classic',availability:'available'},
];
export const courseById = Object.assign(Object.create(null) as Record<string,Course>,Object.fromEntries(courses.map(c=>[c.id,c])));
export const metaById = Object.assign(Object.create(null) as Record<string,(typeof catalog)[number]>,Object.fromEntries(catalog.map(l=>[l.id,l])));
export function previewLesson(meta:(typeof catalog)[number]):Lesson{
 return {...meta,blocks:[{type:'prose',title:'Coming soon',paragraphs:[meta.outcome,'This hands-on chapter is outlined but not written yet. It will follow the site’s pattern: the easy AI path first, then free assets, then a do-it-yourself option for when you want more control. Until then, the foundations courses cover the ideas behind it.']}],summary:[],review:[]};
}
export async function loadLessons(courseId:string):Promise<Lesson[]> {
 switch(courseId){
  case 'godot': return (await import('./godot')).godotLessons;
  case 'f-game': return (await import('./foundations/game')).lessons;
  case 'f-history': return (await import('./foundations/history')).lessons;
  case 'f-2d': return (await import('./foundations/worlds-2d')).lessons;
  case 'f-3d': return (await import('./foundations/worlds-3d')).lessons;
  default: return catalog.filter(l=>l.courseId===courseId).map(previewLesson);
 }
}
