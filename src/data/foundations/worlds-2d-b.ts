import type { ChapterSeed } from '../lesson-builder';
import { chart, clip, image } from './media';

export const worlds2dSeedsB: ChapterSeed[] = [
{
 id:'f2-movement',
 goal:'Understand what makes 2D movement feel good: acceleration, jump arcs, gravity, air control, and forgiving input.',
 story:[
  'Two platformers can share the same art, the same levels, and the same enemies, and still feel completely different. In one, the hero responds like an extension of your thumb. In the other, they slide like soap on ice, or float like a balloon.',
  'The difference is a handful of numbers: how fast you speed up, how fast you stop, how strong gravity is going up versus coming down. Players cannot name these numbers, but they feel them in the first three seconds.',
 ],
 hero:clip('f2-07-hero','A small hero performs a satisfying jump: a quick crouch, a fast rise, a brief float at the peak, and a quicker fall, with a dotted arc tracing the path.','A small hero jumping in a satisfying arc with a dotted path.'),
 sections:[
  {title:'Speed up, slow down',paragraphs:[
   'Movement has three main ingredients: maximum speed, acceleration (how quickly you reach it), and deceleration (how quickly you stop). High acceleration and deceleration feel snappy and precise, as in Celeste or Mega Man. Lower values feel heavy or slippery, which can be right for a big knight or an ice level, and wrong almost everywhere else.',
   'Speed is measured per second, not per frame, so the game behaves the same on fast and slow computers. If a game runs faster on a powerful machine, its movement was tied to the frame rate. The velocity lab below shows why.',
  ],demo:'velocity'},
  {title:'The anatomy of a jump',paragraphs:[
   'A jump is a battle between an upward push and gravity. Real-world jumps are symmetrical, but game jumps rarely are. Many platformers use stronger gravity when falling than when rising, so the jump rises gracefully and falls decisively. That feels more controllable.',
   'Variable jump height lets players hold the button for a high jump or tap it for a hop, usually by cutting upward speed when the button is released. A brief moment of lower gravity at the peak, called hang time, makes it easier to adjust your landing. Air control decides how much you can steer in mid-air: realistic jumps allow almost none, while most games allow a lot.',
  ],media:chart('f2-07-arc','Two jump arcs compared on a grid: a symmetrical floaty arc in grey, and an asymmetrical game arc in terracotta that rises gracefully and falls faster, with labels for rise, hang time, and fall.','A comparison of a symmetrical jump arc and a game-style arc with faster fall.','21:9')},
  {title:'Invisible forgiveness',paragraphs:[
   'The best-feeling platformers quietly forgive near misses. Coyote time lets you jump for a few frames after leaving a ledge. Jump buffering remembers a press made just before landing. Corner correction nudges you around a ceiling edge you barely clipped. Some games enlarge the ledge you can grab, or shrink the hitboxes of hazards slightly.',
   'None of these appear in a tutorial, and players rarely notice them. They notice their absence, as controls that feel “unfair” or “stiff.”',
  ]},
  {title:'Top-down movement and momentum',paragraphs:[
   'Top-down games move in all directions. Diagonal movement needs normalizing: if moving right adds one unit and moving up adds one unit, moving diagonally adds about 1.41 units, so diagonals would be faster. Games fix this by scaling the direction to a length of one before applying speed.',
   'Some games embrace momentum. Sonic builds speed on slopes; racing games drift around corners. Momentum adds skill and expression but reduces precision. Decide which your game needs, then tune by playing, with every number easy to adjust.',
  ]},
 ],
 games:[
  {title:'Super Mario Bros.',year:1985,platform:'NES',note:'Momentum and variable jump height that still feel good decades later.'},
  {title:'Sonic the Hedgehog',year:1991,platform:'Mega Drive / Genesis',note:'Speed built from slopes and momentum.'},
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'Precise acceleration, coyote time, jump buffering, and corner correction.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'Instant starts and stops with generous air control.'},
 ],
 activity:{title:'Spot it: feel the numbers',task:'Compare the movement of two 2D games and describe the differences.',steps:['Run and stop suddenly in each. Does the character slide?','Jump and change direction in mid-air. How much control do you have?','Try jumping just after leaving a ledge. Are you forgiven?'],hints:['Try one precise platformer and one with heavier movement.','Record a clip and watch it slowly.'],checks:['You described acceleration, air control, and forgiveness for both games.','You can say which you prefer and why.']},
 ai:{text:'Movement is where AI-built games most often feel “off,” because default physics are not tuned for fun. Ask your agent for the specific techniques by name, such as asymmetric gravity, variable jump height, coyote time, jump buffering, and corner correction, with every value in one place, then tune by playing.',toolIds:['claude-code','cursor','godot-mcp'],prompt:'Tune my platformer movement: max speed [180 px/s], acceleration [1800], deceleration [2400], jump height [3 tiles], rise gravity [900], fall gravity [1600], variable jump height (cut upward speed by half on release), coyote time [0.1 s], jump buffer [0.1 s], corner correction [4 px]. Put every value in one settings block.'},
 deeper:{text:'For movement design:',items:[
  {label:'Game Feel (Steve Swink)',detail:'A book-length study of the feel of control.'},
  {label:'Math for Game Programmers: Building a Better Jump (Kyle Pittman)',detail:'A GDC talk on designing jump arcs from height and distance.'},
  {label:'Celeste and Forgiveness (Maddy Thorson)',detail:'An article listing the hidden forgiving rules in Celeste.'},
 ]},
 questions:[
  ['Why do many platformers use stronger gravity when falling than rising?',['To make jumps feel more controllable and decisive','Because real gravity is stronger when you fall','To let players drop through thin platforms'],0,'Asymmetric gravity makes jumps rise gracefully and land decisively.'],
  ['In a top-down game, characters move faster diagonally. What is missing?',['Normalizing the movement direction','A lower top speed for the character','More friction on the ground'],0,'Scaling the direction to length one keeps speed equal in every direction.'],
  ['A character keeps moving faster on a powerful computer. What is the cause?',['Movement is tied to the frame rate instead of time','Gravity is stronger on faster machines','The camera is following too tightly'],0,'Speed should be measured per second, using elapsed time.'],
 ],
 summary:['Speed, acceleration, and deceleration define the feel of movement.','Game jumps use asymmetric gravity, variable height, and air control.','Invisible forgiveness and normalized diagonals make controls feel fair.'],
 teaser:'Movement brings you into danger. Next: how 2D combat works and stays fair.',
 mechanics:['variable-jump','coyote-time','jump-buffer','dash','wall-jump'],genres:['platformer'],
},
{
 id:'f2-combat',
 goal:'Understand 2D combat building blocks: hitboxes and hurtboxes, active frames, invincibility, knockback, hitstop, telegraphs, and projectiles.',
 story:[
  'A knight swings a sword at a slime. On screen it looks simple: blade meets slime, slime squishes. Underneath, the game is doing something more abstract. An invisible box appeared in front of the knight for a fraction of a second. It overlapped a different invisible box around the slime. A rule checked whether the slime could be hurt right now. A number went down.',
  'Every satisfying 2D fight is built from these invisible boxes, timings, and rules, dressed up in animation and sound. Learn to see them and you can design fights that are both exciting and fair.',
 ],
 hero:image('f2-08-hero','A small knight mid-swing against a slime, with translucent colored boxes overlaid: a red box for the sword’s attack area and a blue box around the slime’s body.','A knight attacking a slime with hitboxes and hurtboxes drawn as colored boxes.'),
 sections:[
  {title:'Hitboxes and hurtboxes',paragraphs:[
   'A hitbox is the area that deals damage, such as a sword swing, a punch, or a bullet. A hurtbox is the area that can receive damage, usually roughly the shape of a character’s body. When a hitbox overlaps a hurtbox, the game checks its rules and, if allowed, applies damage.',
   'These boxes rarely match the drawing exactly. Player hurtboxes are often slightly smaller than the sprite, and enemy hurtboxes slightly larger, so close calls go the player’s way. Try overlapping the rectangles in the collision lab below.',
  ],demo:'collision'},
  {title:'Timing: active frames and invincibility',paragraphs:[
   'An attack’s hitbox exists only during its active frames: after the wind-up and before the recovery. A long wind-up makes an attack readable; a long recovery makes it punishable. Tuning these three phases is how fighting games and action games balance their moves.',
   'After taking a hit, characters usually become invincible for a short time, flashing to show it. Invincibility frames stop one mistake from turning into instant death and give the player a moment to escape. Dodges often grant brief invincibility too, rewarding good timing.',
  ],diagram:{title:'ONE HIT, STEP BY STEP',nodes:['Wind-up (readable)','Active: hitbox appears','Overlap with hurtbox','Rules: can be hurt?','Damage, knockback, hitstop','Invincibility frames']}},
  {title:'Making hits feel solid',paragraphs:[
   'Knockback pushes the target away, changing the space between fighters after every exchange. Hitstop freezes the action for a few frames on impact, giving the hit weight. A flash of white, a burst of particles, a short sound, and a little screen shake complete the effect.',
   'These touches change nothing in the rules, but they change everything in how a fight feels. Add them one at a time and keep only those that make hits clearer.',
  ],media:clip('f2-08-impact','A slow-motion loop of a sword hitting an enemy: a tiny freeze on contact, a white flash, small particles, and the enemy sliding back from knockback.','A slow-motion sword hit showing hitstop, a flash, particles, and knockback.')},
  {title:'Projectiles and bullet patterns',paragraphs:[
   'Projectiles are moving hitboxes with a speed, direction, and lifetime. Slow projectiles can be dodged by reading them; fast ones need telegraphs, such as a glowing charge-up or an aiming line. Shoot ’em ups and bullet-hell games arrange projectiles into patterns, turning dodging into a dance.',
   'Very fast projectiles can pass through thin targets between frames, a problem called tunnelling. When an agent builds projectiles, mention it, so it checks the path between positions rather than only the new position.',
  ]},
 ],
 games:[
  {title:'Castlevania',year:1986,platform:'NES',note:'Deliberate whip attacks with clear timing and strong knockback.'},
  {title:'Street Fighter II',year:1991,platform:'Arcade, then SNES',note:'Frame-precise hitboxes, active frames, and recovery define every move.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'Short invincibility, knockback, and hitstop on every nail strike.'},
  {title:'Enter the Gungeon',year:2016,platform:'PC and consoles',note:'Bullet patterns and a dodge roll with invincibility.'},
 ],
 activity:{title:'Spot it: the three phases',task:'Pick one enemy attack in a 2D game and break it into wind-up, active, and recovery.',steps:['Watch the attack several times or in slow motion.','Estimate how long each phase lasts.','Describe how you can tell it is coming.'],hints:['Look for a flash, a pose, or a sound before the attack.','The recovery phase is usually your chance to strike back.'],checks:['You described all three phases.','You identified the telegraph.']},
 ai:{text:'Combat is a great place to be precise with your agent: hitbox sizes, phase timings, invincibility duration, knockback distance, and hitstop length are all numbers you can tune. Ask for a debug view that draws hitboxes and hurtboxes, so you can see what the game sees.',toolIds:['claude-code','cursor','godot-mcp'],prompt:'Add a melee attack: wind-up [0.15 s], active [0.1 s], recovery [0.25 s]. The hitbox only exists during active time and can hit each enemy once per swing. On hit: [1] damage, knockback [120 px], hitstop [0.06 s], white flash. After the player is hurt: [1 s] invincibility with flashing. Add a debug toggle that draws all hitboxes and hurtboxes.'},
 deeper:{text:'For combat design:',items:[
  {label:'Frame data guides for fighting games',detail:'Search for frame data of a fighting game you like to see how moves are timed.'},
  {label:'Combat design talks on GDC Vault',detail:'Free talks on action-game combat design.',url:'https://gdcvault.com/free'},
 ]},
 questions:[
  ['What is the difference between a hitbox and a hurtbox?',['A hitbox deals damage; a hurtbox receives it','A hitbox belongs to the player; a hurtbox belongs to enemies','A hurtbox exists only during an attack’s active frames'],0,'Separating them makes combat rules explicit and tunable.'],
  ['Why do characters flash and become briefly invincible after being hit?',['To give a moment to escape and prevent repeated hits from one mistake','To let the player walk through enemies on purpose','To show that the enemy has been defeated'],0,'Invincibility frames give a moment to recover, so one mistake does not snowball into defeat. The flashing tells the player the protection is active.'],
  ['A fast bullet sometimes passes straight through a thin wall. What is this called?',['Hitstop','Tunnelling','Knockback'],1,'Fast objects can skip past thin targets between frames.'],
 ],
 summary:['Hitboxes deal damage; hurtboxes receive it; neither must match the art exactly.','Wind-up, active, and recovery phases set readability and punishment.','Knockback, hitstop, and effects make hits feel solid; watch for tunnelling.'],
 teaser:'Combat needs opponents with minds of their own. Next: enemies and how they decide.',
 mechanics:['invincibility-frames','knockback','hitstop','ranged-attack','melee-combo'],genres:['beat-em-up','shmup'],
},
{
 id:'f2-enemies',
 goal:'Design enemies with clear roles and readable behavior, using simple states, perception, and encounter mixing.',
 story:[
  'In the very first Super Mario Bros. level, the first enemy you meet simply walks forward. It does not chase you. It does not jump. It walks, and if it reaches a ledge it falls off. It might be the simplest enemy ever designed, and it is perfect for its job: teaching a brand-new player to jump.',
  'Good enemies are not necessarily smart. They are clear. Each one asks the player a specific question, and the fun comes from answering several questions at once.',
 ],
 hero:image('f2-09-hero','A cheerful lineup of original 2D enemies, each with an icon above showing its role: a walker with arrows, a flyer with wavy lines, a turret with a crosshair, a charger with speed lines, a shielded blocker.','A lineup of 2D enemies with icons showing their roles.'),
 sections:[
  {title:'Enemies ask questions',paragraphs:[
   'Think of each enemy as a question. A walker asks “can you jump over me?” A flyer asks “can you hit something above you?” A turret asks “can you move between its shots?” A charger asks “can you dodge at the right moment?” A shielded enemy asks “can you get behind me?”',
   'A small set of distinct enemies combined in different ways creates more variety than a large set of similar ones. When you design a new enemy, write its question first.',
  ],compare:{title:'Common enemy roles',columns:['Role','Question it asks','Classic example'],rows:[['Walker','Can you jump over or stomp me?','Mushroom-like walkers in platformers'],['Flyer','Can you deal with threats from above?','Bats, birds, ghosts'],['Turret / shooter','Can you move between shots?','Cannons, archers'],['Charger','Can you dodge at the right moment?','Bulls, rushing knights'],['Blocker','Can you get around my defense?','Shielded soldiers'],['Swarm','Can you handle many weak threats?','Bats, insects, zombies']]}},
  {title:'Simple minds: states',paragraphs:[
   'Most enemies run on a few named states with clear rules for switching. A guard might patrol until it sees the player, then chase; if it reaches attack range it attacks; after attacking it recovers; if it loses sight of the player it returns to patrolling. If its health reaches zero it is defeated, no matter what it was doing.',
   'Designers call this a state machine. It keeps behavior readable for players and predictable for designers. It also prevents odd bugs, like an enemy attacking after it has been defeated, because the defeated state has no way out. Try switching states in the lab below.',
  ],demo:'states'},
  {title:'Perception and fairness',paragraphs:[
   'How does an enemy notice you? Common methods are distance (you came within range), line of sight (nothing blocks its view), and noise (you ran or fought nearby). Showing perception, such as an exclamation mark, a sound, or a change of pose, tells players they have been spotted and gives them a moment to react.',
   'Fair enemies follow their own rules. If an archer can only shoot when facing you, never let it shoot backwards. Players learn rules quickly, and enemies that break them feel like cheating.',
  ],media:image('f2-09-alert','A sneaking hero behind a crate while a guard with a vision cone turns toward them, a small exclamation mark popping above the guard’s head.','A guard noticing a sneaking hero, with a vision cone and an exclamation mark.')},
  {title:'Encounters and bosses',paragraphs:[
   'An encounter is a group of enemies in a space. Mixing roles creates interesting problems: a blocker protecting a turret means you must get around the shield while dodging shots. Introduce enemies alone first, then in pairs, then in mixtures, the same teach-test-twist rhythm used in level design.',
   'Bosses are big questions. They usually have several phases, each introducing a new pattern, with clear telegraphs and moments of vulnerability. A good boss tests everything the player has learned in an area and feels like an exam they studied for.',
  ]},
 ],
 games:[
  {title:'Pac-Man',year:1980,platform:'Arcade',note:'Four ghosts with four simple rules that combine into team pressure.'},
  {title:'Super Mario Bros.',year:1985,platform:'NES',note:'The simplest walking enemy, used perfectly to teach jumping.'},
  {title:'Mark of the Ninja',year:2012,platform:'Xbox 360, then PC',note:'Perception shown clearly through vision cones and sound rings.'},
  {title:'Cuphead',year:2017,platform:'PC, Xbox One, then more',note:'Multi-phase bosses with readable, hand-animated telegraphs.'},
 ],
 activity:{title:'Try it: an enemy in four states',task:'Design one enemy with a question, four states, and a telegraph.',steps:['Write the question it asks the player.','Name four states, such as patrol, notice, attack, and recover.','Write what makes it switch from each state to the next.','Describe how it telegraphs its attack.'],hints:['Every state should be visible to the player through pose or sound.','Defeated is a fifth state with no exit.'],checks:['Each switch has a clear condition.','A player could learn the enemy’s pattern by watching.']},
 ai:{text:'State machines translate beautifully into agent requests: list the states, what happens in each, and the conditions to switch. Ask for a debug label over each enemy showing its current state, so you can see exactly what it is thinking while you playtest.',toolIds:['claude-code','godot-mcp','pixellab'],prompt:'Create an enemy with states: Patrol (walk between two points), Notice (stop 0.4 s, show “!”), Chase (move toward player at [90 px/s]), Attack (wind-up 0.3 s, lunge), Recover (0.5 s), Defeated (no exit). Switch to Notice when the player is within [160 px] with clear line of sight. Show the current state as a debug label I can toggle.'},
 deeper:{text:'For enemy and AI design:',items:[
  {label:'Game Programming Patterns: State',detail:'A free chapter explaining state machines.',url:'https://gameprogrammingpatterns.com/state.html'},
  {label:'The Pac-Man Dossier',detail:'A detailed look at the ghosts’ behavior rules.'},
 ]},
 questions:[
  ['What is the best first step when designing a new enemy?',['Draw it in high detail','Write the question it asks the player','Decide its health and damage numbers'],1,'An enemy’s role in the play comes first; art supports it.'],
  ['An enemy sometimes attacks after being defeated. What design tool prevents this?',['A state machine where the defeated state has no exit','A longer defeat animation','Giving the enemy more health'],0,'Explicit states and transitions prevent incompatible behavior.'],
 ],
 summary:['Enemies are questions; distinct roles combine into rich encounters.','State machines keep behavior readable and bug-resistant.','Show perception, keep enemies consistent, and design bosses as exams.'],
 teaser:'Defeating enemies should lead somewhere. Next: collectibles, progression, and economies.',
 mechanics:['telegraph','alert-states','line-of-sight','boss-fight'],genres:['stealth','action-adventure'],
},
{
 id:'f2-progression',
 goal:'Design collectibles, progression, and simple economies that motivate players and keep difficulty in balance.',
 story:[
  'A coin chimes. A counter ticks up from 99 to 100, and with a cheerful jingle, you gain an extra life. Somewhere, a player who was about to put the controller down decides to keep going.',
  'Collectibles and progression are the reasons behind the reasons. Movement and combat are fun in the moment; progression makes players want the next moment, and the one after.',
 ],
 hero:image('f2-10-hero','A treasure room in a 2D game with coins, gems, a heart container, a key, and a shining upgrade orb on pedestals, the hero gazing at them with delight.','A hero delighted by a room of coins, gems, a heart, a key, and an upgrade orb.'),
 sections:[
  {title:'Kinds of collectibles',paragraphs:[
   'Collectibles come in families. Currency, such as coins and gems, is spent. Consumables, such as potions and bombs, are used up. Keys open specific locks. Upgrades permanently change abilities or stats: more health, a stronger attack, a new move. Completion collectibles, such as Celeste’s strawberries, exist mostly for pride and challenge.',
   'Each family motivates differently. Currency creates choices. Upgrades create a feeling of growth. Optional collectibles reward mastery and curiosity without blocking anyone.',
  ]},
  {title:'Progression: the feeling of growth',paragraphs:[
   'Players progress in two ways. Character progression makes the character stronger: more health, new abilities, better equipment. Player progression is the player becoming more skilful. The best games balance both: abilities open new options, while challenges keep testing real skill.',
   'Be careful with stat upgrades alone. If every enemy also grows stronger, the player feels no change. Progression feels best when an upgrade makes an old challenge easy, or opens a path that was closed.',
  ],diagram:{title:'A PROGRESSION LOOP',nodes:['Overcome a challenge','Earn a reward','Choose or gain an upgrade','Face a harder challenge','Feel stronger and more skilled']}},
  {title:'Sources and sinks',paragraphs:[
   'An economy has sources, where things come from, such as enemies dropping coins or chests, and sinks, where they go, such as shops, repairs, and upgrades. If sources outpace sinks, players soon have more than they can spend and rewards lose meaning. If sinks outpace sources, players feel poor and frustrated.',
   'For a small game, keep it simple: one currency, a few meaningful things to buy, and prices that require a choice. Write down roughly how much a player earns per level and what things cost, then adjust after watching playtests.',
  ],media:chart('f2-10-economy','A plumbing-style diagram: coins pouring into a central jar from pipes labelled with icons for enemies and chests, and flowing out through pipes labelled with icons for a shop, an upgrade, and a repair hammer.','An economy shown as coins flowing into a jar from sources and out to sinks.','4:3')},
  {title:'Difficulty curves',paragraphs:[
   'Difficulty should rise as players grow, with breathing room. A sawtooth curve, rising challenge with periodic easier moments, keeps players engaged without exhausting them. Bosses and new areas often spike difficulty, followed by rewards and a calmer stretch.',
   'Offer ways to adjust: optional harder routes, assist options, or upgrades that help struggling players. Celeste’s strawberries sit on harder paths for those who want them; its Assist Mode helps those who need it. Both are respectful of the player.',
  ]},
 ],
 games:[
  {title:'Super Mario Bros.',year:1985,platform:'NES',note:'One hundred coins become an extra life: a simple, motivating loop.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'Charms let players choose upgrades that suit their style.'},
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'Optional strawberries on harder paths reward skill, not power.'},
  {title:'Stardew Valley',year:2016,platform:'PC, then everywhere',note:'An economy of crops, tools, and upgrades with many meaningful sinks.'},
 ],
 activity:{title:'Try it: a tiny economy',task:'Design an economy for a ten-level game with one currency.',steps:['Estimate how many coins a player earns per level.','List three to five things to buy and their prices.','Check that a player must choose, not buy everything.'],hints:['Total earnings over ten levels might be 500 coins; total prices 900.','A permanent upgrade should feel expensive but reachable.'],checks:['Players cannot afford everything.','Each item creates a real choice.']},
 ai:{text:'Ask your agent to keep all economy and progression numbers in one data file or table so you can balance by editing values rather than code. You can also ask it to simulate rough earnings across a run, but always confirm by playtesting.',toolIds:['claude-code','cursor'],prompt:'Add a coin economy to my game: enemies drop [1–3] coins, chests give [20]. Add a shop with these items and prices: [list]. Keep every drop rate and price in one easy-to-edit data table. Show the coin count on screen and play a rising chime on pickup.'},
 deeper:{text:'For economy and progression design:',items:[
  {label:'Machinations',detail:'A tool and method for modelling game economies as flows.',url:'https://machinations.io/'},
  {label:'Designing Games (Tynan Sylvester)',detail:'Includes clear thinking about motivation and rewards.'},
 ]},
 questions:[
  ['Players have far more coins than they can spend. What is out of balance?',['Sources outpace sinks','Sinks outpace sources','The camera'],0,'More income than meaningful spending makes rewards feel worthless.'],
  ['When does an upgrade feel most satisfying?',['When every enemy also becomes stronger at the same rate','When it makes an old challenge easier or opens a closed path','When it adds a large number with no visible change'],1,'Players feel growth when the world responds differently to their new power.'],
 ],
 summary:['Collectibles include currency, consumables, keys, upgrades, and optional challenges.','Progression combines character growth and player skill.','Balance sources and sinks, and shape difficulty as a sawtooth with options to adjust.'],
 teaser:'What if levels, loot, and enemies were different every time? Next: procedural worlds and roguelikes.',
 mechanics:['currency','upgrades','shop','experience-levels','lives'],genres:['roguelite','life-sim'],
},
{
 id:'f2-procedural',
 goal:'Understand procedural generation in 2D games: rules plus randomness, seeds, room templates, validation, and roguelike structures.',
 story:[
  'In 1980, two students wanted a dungeon game they could not memorize. If the dungeon were the same every time, they would eventually know every corner. So they wrote rules that built a new dungeon each time you played: rooms, corridors, monsters, treasure. The game was Rogue, and it gave its name to a whole family of games.',
  'Procedural generation is not about making games random. It is about writing rules that build things, so a small team can create a world that keeps surprising even its own designers.',
 ],
 hero:image('f2-11-hero','A whimsical machine with dials and a crank that prints out different dungeon maps, each unique, onto a long scroll of paper, while a designer adjusts a dial labelled with a seed icon.','A whimsical machine printing different dungeon maps from adjustable rules.'),
 sections:[
  {title:'Rules plus randomness',paragraphs:[
   'Procedural generation creates content from rules instead of drawing each piece by hand. Randomness supplies variety; rules supply quality. A dungeon generator might say: place twelve rooms, connect them all, put the start and exit far apart, place one key before the locked door, and never put an enemy in the starting room.',
   'The rules are where design lives. Pure randomness creates mush. Thoughtful constraints create levels that feel designed, even though nobody drew them.',
  ]},
  {title:'Seeds',paragraphs:[
   'Computers generate random numbers from a starting value called a seed. The same seed always produces the same sequence, and therefore the same level. Seeds let players share interesting worlds, as Minecraft players do, let games offer a “daily challenge” where everyone plays the same run, and let developers reproduce bugs: “seed 48213, third room, the door is blocked.”',
   'A useful trick is to keep separate random sources for different jobs, so that a cosmetic choice, like the color of a flower, does not change which rooms appear next.',
  ],diagram:{title:'GENERATING A LEVEL',nodes:['Seed','Rules + randomness','Candidate level','Validate (is it playable?)','Accept or try again']}},
  {title:'Templates: the best of both',paragraphs:[
   'Many beloved games mix hand-made and procedural content. Spelunky builds each level from a grid of rooms, each chosen from hand-designed templates with a few random variations, arranged so a path from entrance to exit always exists. The Binding of Isaac assembles floors from hundreds of hand-made rooms. Dead Cells stitches hand-designed tiles and rooms into procedurally arranged levels.',
   'Templates guarantee that every piece is well designed, while randomness creates new combinations. For a small team, this is usually the right approach.',
  ],media:chart('f2-11-templates','A 4×4 grid of room cards, each with a small hand-drawn layout, with a highlighted winding path from a start door at the top to an exit at the bottom passing through some of the rooms.','A grid of hand-made room templates with a guaranteed path from start to exit.','1:1')},
  {title:'Roguelikes and roguelites',paragraphs:[
   'Roguelikes traditionally combine procedural levels, turn-based play, and permadeath: when you die, the run is over. Roguelites, a looser family, keep the short, varied runs but add progress that carries over, such as unlocks, permanent upgrades, and story. Hades, Dead Cells, and The Binding of Isaac are roguelites.',
   'Generation also covers loot and encounters. Weighted random tables decide what drops: common items often, rare ones occasionally. Offering a choice of three random rewards, as Slay the Spire and Hades do, combines luck with meaningful decisions.',
  ]},
 ],
 games:[
  {title:'Rogue',year:1980,platform:'Unix computers',note:'New dungeons every run, to avoid memorization.'},
  {title:'Spelunky',year:2008,platform:'PC (freeware), remade 2012',note:'Hand-designed room templates assembled with a guaranteed path.'},
  {title:'The Binding of Isaac',year:2011,platform:'PC, then consoles',note:'Floors assembled from hundreds of hand-made rooms.'},
  {title:'Dead Cells',year:2018,platform:'PC and consoles',note:'Hand-crafted pieces arranged procedurally, with meta-progression.'},
 ],
 activity:{title:'Try it: a dice dungeon',task:'Generate a five-room dungeon on paper using a die and your own rules.',steps:['Write four room types and assign each to die numbers.','Write two rules, such as “never two fights in a row” and “treasure before the boss.”','Roll five times, applying your rules, and draw the result.','Roll a second dungeon and compare.'],hints:['Re-roll when a rule is broken: that is validation.','Note how the rules make both dungeons feel designed.'],checks:['Both dungeons follow your rules.','They are different but both playable.']},
 ai:{text:'Procedural systems are a strong fit for coding agents, which are good at implementing rules, but you must define the rules and the checks. Ask for a seed display, a way to enter seeds, and a validation step that rejects unplayable results.',toolIds:['claude-code','godot-mcp','ldtk'],prompt:'Generate dungeon floors from my hand-made room templates: [list]. Rules: start and exit in different rows, a guaranteed path between them, never two combat rooms in a row, one treasure room per floor. Use a seed shown on screen that I can type in to replay a floor. Reject and regenerate any floor that breaks a rule.'},
 deeper:{text:'For procedural generation in depth:',items:[
  {label:'Red Blob Games',detail:'Interactive articles on maps, noise, and pathfinding.',url:'https://www.redblobgames.com/'},
  {label:'Procedural Generation in Game Design (Tanya Short & Tarn Adams, eds.)',detail:'Essays from developers of many procedural games.'},
  {label:'Spelunky (Derek Yu, Boss Fight Books)',detail:'How Spelunky’s level generation was designed.'},
 ]},
 questions:[
  ['What does a seed do in procedural generation?',['Makes every level identical forever','Reproduces the same generated content when reused','Stops randomness completely'],1,'The same seed produces the same sequence and therefore the same level.'],
  ['Why do many games build levels from hand-made room templates?',['Templates guarantee well-designed pieces while randomness varies their arrangement','Fully random levels are impossible to make','Templates make every level identical'],0,'Templates combine designed quality with procedural variety.'],
  ['What usually separates a roguelite from a classic roguelike?',['Roguelites have no randomness','Roguelites carry some progress between runs','Roguelites are always turn-based'],1,'Meta-progression softens permadeath in roguelites.'],
 ],
 summary:['Procedural generation builds content from rules plus randomness.','Seeds make generation reproducible for sharing, challenges, and debugging.','Hand-made templates plus procedural arrangement suit small teams.'],
 teaser:'Final chapter: six celebrated 2D games, taken apart to see how everything fits.',
 mechanics:['procedural-levels','permadeath','meta-progression','random-rewards','upgrade-choice'],genres:['roguelike','roguelite'],
},
{
 id:'f2-case-studies',
 goal:'Analyse six celebrated 2D games to see how view, movement, levels, combat, progression, and style combine.',
 story:[
  'A good chef learns by tasting: not just enjoying a dish, but working out what is in it and why it works. Game designers do the same. They play great games with a notebook nearby and ask, again and again: why does this feel so good?',
  'This final chapter tastes six celebrated 2D games. Each one uses the ideas from this course in its own way, and each one was made by a small team.',
 ],
 hero:image('f2-12-hero','A designer at a desk with six small framed game scenes on the wall: a mountain climb, a dark insect kingdom, a farm, an underworld, a crowd of monsters, and a grid of mechs, taking notes in a notebook.','A designer studying six framed game scenes and taking notes.'),
 sections:[
  {title:'Celeste and Hollow Knight',paragraphs:[
   'Celeste (2018) is a precision platformer about climbing a mountain. Its movement is tuned to perfection, with coyote time, jump buffering, and a dash whose availability is shown by the color of Madeline’s hair. Levels are mostly single screens, so every challenge is fully visible. Instant respawns make failure cheap. Assist Mode lets anyone adjust the challenge. Lesson: when the core verb feels wonderful, a whole game can explore it.',
   'Hollow Knight (2017) is a metroidvania set in a vast underground insect kingdom. Its interconnected map rewards curiosity, and maps must be bought from a wandering cartographer. Combat is tight and readable. A charm system lets players customize their style. Hand-drawn art in muted tones makes the world unforgettable. Lesson: a cohesive world and mood can carry a large game made by a tiny team.',
  ]},
  {title:'Stardew Valley and Hades',paragraphs:[
   'Stardew Valley (2016) is a farming and life game made by one person. Its daily loop of planting, watering, and harvesting nests inside seasonal and yearly loops, with relationships, festivals, fishing, and mines adding variety. Its economy has many sources and many sinks. Lesson: gentle, nested loops and many small goals can be endlessly absorbing.',
   'Hades (2020) is an isometric-view action roguelite. Each run combines a weapon choice with random blessings, chosen from small sets, creating different builds every time. Dying returns you home, where story conversations continue, so failure moves the narrative forward. Lesson: tie your story to your loop, and failure becomes something players look forward to.',
  ],media:image('f2-12-loops','Two side-by-side circular diagrams drawn like cozy illustrations: one showing a day on a farm (plant, water, harvest, sell), the other showing a run in an underworld (fight, choose blessing, die, return home, talk).','Two loop diagrams: a farming day and an underworld run.','21:9')},
  {title:'Vampire Survivors and Into the Breach',paragraphs:[
   'Vampire Survivors (2022) has one verb: move. Your character attacks automatically. The decisions are where to stand and which upgrade to choose from small random sets, as hundreds of enemies flood the screen. Simple pixel art and a low price made it approachable. Lesson: a single, generous core loop with rapid, satisfying growth can create a new genre.',
   'Into the Breach (2018) is a tactics game on an 8 × 8 grid where every enemy shows exactly what it will do next turn. There is no hidden information and almost no randomness in attacks: each turn is a puzzle with a solution. Lesson: removing a mechanic, here uncertainty, can be as powerful as adding one.',
  ],compare:{title:'Six games, six lessons',columns:['Game','View','Core idea','Lesson'],rows:[['Celeste','Side view','Perfect movement','Polish one great verb'],['Hollow Knight','Side view','Interconnected world','Cohesive world and mood'],['Stardew Valley','Three-quarter top-down','Nested daily loops','Many small goals'],['Hades','Isometric-style','Story through failure','Tie story to the loop'],['Vampire Survivors','Top-down','One verb, fast growth','Generosity and simplicity'],['Into the Breach','Isometric grid','Perfect information','Removing can be powerful']]}},
  {title:'What they share',paragraphs:[
   'All six were made by small teams or individuals. All six have a clearly defined core loop, a consistent and achievable art style, and controls or rules that feel excellent. Most were refined over years, often with players giving feedback through early access or demos.',
   'None of them tried to do everything. Each picked a few ideas and made them shine. That is the most transferable lesson of all.',
  ]},
 ],
 games:[
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'Precision platforming built on forgiving, finely tuned movement.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'A vast, cohesive metroidvania from a tiny team.'},
  {title:'Stardew Valley',year:2016,platform:'PC, then everywhere',note:'Nested farming and life loops made by one person.'},
  {title:'Hades',year:2020,platform:'PC, Switch, then consoles',note:'A roguelite where dying moves the story forward.'},
  {title:'Vampire Survivors',year:2022,platform:'PC, then everywhere',note:'One verb and explosive growth created a genre.'},
  {title:'Into the Breach',year:2018,platform:'PC, then Switch and mobile',note:'Tactics with perfect information.'},
 ],
 activity:{title:'Try it: your own case study',task:'Write a short case study of a 2D game you love using the table above.',steps:['Name its view, core idea, and one lesson.','List one technique from this course it uses well.','Write how you would borrow that lesson for your own game.'],hints:['Think about movement, maps, combat, progression, or generation.','A lesson should be one sentence you could act on.'],checks:['Your case study fits the table’s format.','You wrote a concrete way to borrow the lesson.']},
 ai:{text:'Case studies make excellent starting points for agent conversations: name a reference game and the specific lesson you want to borrow, not the whole game. “Movement that feels like Celeste’s” is a clearer request when you list the techniques: coyote time, buffering, and a dash with a visible cooldown.',toolIds:['claude-code','pixellab','kenney'],prompt:'I want my game to borrow one lesson from [reference game]: [lesson]. Describe the specific techniques behind that lesson in plain words, and propose the smallest way to apply them to my game: [description].'},
 deeper:{text:'For more design analysis:',items:[
  {label:'Game Maker’s Toolkit',detail:'Video case studies of many of these games.',url:'https://www.youtube.com/@GMTK'},
  {label:'Noclip documentaries',detail:'Free documentaries about how games were made, including indie studios. Search for Noclip on YouTube.'},
 ]},
 questions:[
  ['What did Into the Breach remove to create its distinctive play?',['Hidden information about enemy attacks','Character upgrades','Having more than one unit to control'],0,'Showing every enemy’s next move turns each turn into a solvable puzzle.'],
  ['What do these six games most clearly have in common?',['Large teams and big budgets','Focused core loops and achievable, consistent styles','Cutting-edge graphics'],1,'Each chose a few ideas and made them excellent.'],
 ],
 summary:['Great 2D games combine view, movement, levels, combat, progression, and style deliberately.','Each case study offers a transferable lesson.','Focus and polish matter more than scope.'],
 teaser:'You’ve finished 2D & 2.5D Worlds. Next, step into the third dimension, or start building in a hands-on course.',
 genres:['platformer','metroidvania','life-sim','roguelite','bullet-heaven','tactics'],
},
];
