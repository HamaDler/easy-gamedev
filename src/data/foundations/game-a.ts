import type { ChapterSeed } from '../lesson-builder';
import { chart, clip, image } from './media';

export const gameSeedsA: ChapterSeed[] = [
{
 id:'fg-what-is-a-game',
 goal:'Recognize the ingredients every game shares: a goal, rules, choices, feedback, and a reason to try again.',
 story:[
  'Picture a schoolyard on a grey afternoon. Someone draws a grid in chalk, tosses a pebble, and hops. Within minutes there are rules nobody wrote down: you can’t step on the lines, you must land on one foot, the pebble has to stay inside its square. Nobody owns a console. Nobody has written a line of code. And yet everyone in that circle is playing a game.',
  'Now picture a teenager in 2024, thumbs flying across a phone, dodging a storm of glowing projectiles in a game made by a single developer. Different century, different technology, same spark. Something asked them to try, pushed back, and told them how they did.',
  'Before you make a game with AI, or with anything, it helps to know what that spark is made of. Let’s take it apart.',
 ],
 hero:image('fg-01-hero','Two scenes side by side: children playing hopscotch with chalk, and a teenager playing a colorful game on a phone. A dotted line connects them.','Children playing hopscotch on one side and a teenager playing a phone game on the other, connected by a dotted line.'),
 sections:[
  {title:'The five ingredients',paragraphs:[
   'Game designers have argued about definitions for decades, but most agree on a handful of ingredients. A game has a goal: something you are trying to reach. It has rules that limit how you can reach it. It offers choices, so what you do matters. It gives feedback that tells you how you are doing. And it creates a reason to try again, whether that is a higher score, a new level, or simply the itch of almost winning.',
   'Hopscotch has all five. The goal is to finish the course and fetch the pebble. The rules forbid stepping on lines. You choose where to throw and how to balance. Feedback is instant: you wobble, you land, your friends cheer or groan. And because the pebble goes further each turn, there is always a next challenge.',
   'Notice what is missing from that list: graphics, story, characters, and music. Those things can make a game wonderful, but they are not what makes it a game. A game can be made of chalk.',
  ],diagram:{title:'THE INGREDIENTS OF PLAY',nodes:['Goal','Rules','Choices','Feedback','Try again']}},
  {title:'Rules make the fun',paragraphs:[
   'It sounds backwards, but the rules are where the fun lives. The philosopher Bernard Suits described playing a game as “the voluntary attempt to overcome unnecessary obstacles.” Golf would be easier if you could carry the ball to the hole. Football would be easier if you could pick the ball up. We accept the obstacle because the obstacle is the game.',
   'This matters enormously when you build with AI. If you ask a coding agent to “make a fun game,” it has to invent every rule for you, and it will probably invent something generic. If instead you describe the obstacle you want, such as “the player can only jump twice before touching the ground,” you are designing. The agent becomes your builder rather than your designer.',
  ]},
  {title:'Toys, puzzles, and games',paragraphs:[
   'A useful way to sharpen your eye is to compare a game with its neighbours. A toy is something you play with freely, without a fixed goal: a ball, a sandbox, a box of blocks. A puzzle has a goal and a solution; once solved, it stays solved. A game adds an opponent or uncertainty, so the outcome is never quite certain, even on the hundredth try.',
   'Many great video games blend all three. Minecraft is mostly a toy: a world of blocks you shape as you like. Its survival mode adds goals and danger, turning the toy into a game. Portal is built from puzzles, but its timing and physics add the tension of a game. When you sketch your own idea, ask which of the three you are really making. All three are valid, but they need different things.',
  ],media:chart('fg-01-toy-puzzle-game','Three panels: a child happily stacking blocks (toy), a person studying a solved jigsaw (puzzle), and two people leaning over a board game with dice in mid-air (game).','Three panels showing a toy, a puzzle, and a game.','21:9')},
  {title:'Why games feel good',paragraphs:[
   'Games are among the few places where failure is safe and progress is visible. When you miss a jump, the game shows you exactly what happened, and you can try again a second later. Psychologists call the absorbing state you reach when challenge matches skill “flow.” Games are machines for producing it: a little harder when you improve, a little gentler when you struggle.',
   'Keep this in mind as you build. Every game you make is a promise to the player: if you try, I will respond, and you will get better. The rest of this course is about keeping that promise with movement, art, sound, story, and levels.',
  ]},
 ],
 games:[
  {title:'Tetris',year:1984,platform:'Electronika 60, then nearly everything',note:'Almost pure rules: falling shapes, a filling well, and a score. No story, no characters, and one of the most played games ever.'},
  {title:'Minecraft',year:2011,platform:'PC, then everywhere',note:'Mostly a toy. Survival mode adds goals and danger, turning a block box into a game.'},
  {title:'Portal',year:2007,platform:'PC, Xbox 360, PS3',note:'A chain of puzzles wrapped in physics and timing that keep the outcome uncertain.'},
  {title:'Vampire Survivors',year:2022,platform:'PC, then consoles and mobile',note:'One verb (move), simple pixel art, and an irresistible reason to try one more run.'},
 ],
 activity:{title:'Spot it: take a game apart',task:'Pick any game you have played recently, digital or not, and find its five ingredients.',steps:['Write down the goal in one sentence.','List two rules that make reaching the goal harder.','Name one choice you made while playing and what it changed.','Describe how the game told you whether you were doing well.','Explain what made you want to play again, or why you didn’t.'],hints:['Rules are often invisible until you break them: falling off the screen, running out of time.','Feedback can be a sound, a number, a flash, or a friend shouting.'],checks:['You found all five ingredients.','You can say which ingredient is the strongest in that game.']},
 ai:{text:'When you work with a coding agent, the five ingredients become the skeleton of your request. Instead of “make me a space game,” describe the goal, the obstacle rules, the choices, the feedback, and the reason to replay. Agents are very good at building what you describe and poor at guessing what you meant.',toolIds:['claude-code','cursor','copilot'],prompt:'I want to build a tiny browser game. Goal: [one sentence]. Rules: [2–3 obstacles]. Player choices: [what the player decides]. Feedback: [how the game responds]. Replay reason: [why play again]. Before writing any code, restate the game back to me in your own words and list anything that is still unclear.'},
 deeper:{text:'If you want to think about play more deeply, these classics are worth your time.',items:[
  {label:'A Theory of Fun for Game Design (Raph Koster)',detail:'A short, illustrated book arguing that fun is the feeling of learning.'},
  {label:'Rules of Play (Katie Salen & Eric Zimmerman)',detail:'A thorough textbook on games as systems of rules, play, and culture.'},
  {label:'The Grasshopper (Bernard Suits)',detail:'The playful philosophy book behind the famous definition of a game.'},
 ]},
 questions:[
  ['A friend shows you an app where you decorate a room freely with no goals or score. What is it closest to?',['A puzzle, because each room has a correct layout','A toy, because you play freely without a fixed goal','A game, because it has graphics and sound'],1,'With no goal or uncertain outcome it is closest to a toy. Adding a challenge, like decorating for a picky client before time runs out, would turn it into a game.'],
  ['Why is “make me a fun game” a weak request for a coding agent?',['Agents can only build games from existing templates','It leaves every rule and obstacle for the agent to invent','It should name a programming language first'],1,'The rules and obstacles are the design. Describing them is your job; building them is the agent’s.'],
  ['Which of these is NOT one of the five ingredients of a game?',['Feedback','A reason to try again','Detailed graphics'],2,'Graphics can make a game better, but a game can exist without them. Chalk hopscotch has no graphics at all.'],
 ],
 summary:['Games share five ingredients: a goal, rules, choices, feedback, and a reason to try again.','Rules are the obstacles that create the fun.','Toys, puzzles, and games are different things; great games often blend them.'],
 teaser:'Next, we zoom in on the heartbeat inside every game: the loop that repeats every few seconds.',
 mechanics:['jump','upgrade-choice'],genres:['puzzle','sandbox'],
},
{
 id:'fg-core-loop',
 goal:'Describe a game’s core loop and see how loops nest inside each other, from a single second to a whole season.',
 story:[
  'Somewhere in a 1980 arcade, a player leans into a cabinet. A yellow circle chomps along a maze. Eat a dot. Turn a corner. A ghost appears; swerve. Grab a power pellet; now the ghosts flee and you chase them. Clear the maze. A new maze begins, a little faster than the last.',
  'Watch long enough and you notice the player doing the same few things again and again, and loving it. That repetition is not a weakness. It is the heartbeat of the game, and every game has one.',
 ],
 hero:clip('fg-02-hero','A looping animation of a small round hero eating dots in a maze while a ghost-like shape wanders, circling back to where it started.','A small round character moving through a maze collecting dots in a loop.'),
 sections:[
  {title:'The loop you repeat',paragraphs:[
   'A core loop is the short cycle of actions the player repeats most often. In that maze game, it is roughly: move, collect, avoid, power up, chase. In a farming game it might be plant, water, wait, harvest, sell. In a shooter: find enemy, aim, shoot, take cover, reload.',
   'If the core loop feels good on its own, with plain shapes and no music, the game has a solid foundation. If it feels flat, no amount of art or story will fix it. That is why designers prototype the loop first, often with grey boxes, before anything else is built.',
  ],diagram:{title:'A CORE LOOP',nodes:['Act','Challenge','Reward','Grow stronger','Act again'],note:'The reward feeds the next round, so each pass is slightly different.'}},
  {title:'Loops inside loops',paragraphs:[
   'Games have loops at several sizes. The second-to-second loop is the feel of movement and action: pressing jump, landing, attacking. The minute-to-minute loop is the core loop: clearing a room, finishing a match, completing a run. The hour-to-hour loop is progression: unlocking a new ability, reaching a new area, upgrading your base.',
   'The best games make each size feed the next. In Hades, the second-to-second loop is dashing and striking; the minute-to-minute loop is clearing a chamber and picking a blessing; the run-to-run loop is dying, returning home, and spending what you found on permanent upgrades. Each layer makes the others more meaningful.',
  ],media:chart('fg-02-nested-loops','Three concentric circular arrows: the small inner one labelled with a jumping figure (seconds), the middle one with a door and treasure (minutes), the outer one with a growing tree (hours).','Three nested loops for seconds, minutes, and hours of play.','1:1')},
  {title:'Rewards and pressure',paragraphs:[
   'Loops stay interesting because something changes on each pass. Rewards push you forward: points, items, new abilities, story. Pressure pushes back: faster enemies, tighter timers, scarcer resources. Too much reward and the game feels like a vending machine; too much pressure and it feels like a wall.',
   'A good loop also has variety: small surprises that make each pass a little different. Random upgrade choices, new enemy types, or a different room layout keep the same loop fresh for hundreds of hours.',
  ]},
  {title:'The game loop under the hood',paragraphs:[
   'There is a second, more mechanical loop running inside every real-time game. Many times per second, the game checks what the player is pressing, updates the world, moving characters and checking collisions, then draws a new picture. That cycle is called the game loop, and each picture is a frame.',
   'You will rarely build the game loop yourself; engines do it for you. But knowing it exists explains a lot. When something moves too fast on a powerful computer, or a hit is counted twice, the cause usually lives in how the game loop was handled. You can name it when you talk to your coding agent.',
  ],demo:'loop'},
 ],
 games:[
  {title:'Pac-Man',year:1980,platform:'Arcade',note:'A tight loop of eat, avoid, power up, and chase, with each maze slightly faster than the last.'},
  {title:'Stardew Valley',year:2016,platform:'PC, then consoles and mobile',note:'Daily loops of planting and harvesting inside seasonal and yearly loops of growth.'},
  {title:'Hades',year:2020,platform:'PC, Switch, then consoles',note:'Second, chamber, and run loops that each feed the next, with story delivered between runs.'},
 ],
 activity:{title:'Spot it: draw a loop',task:'Choose a game you know well and draw its core loop as a circle of four to six steps.',steps:['Write the steps the player repeats most often.','Mark where the reward happens and where the pressure comes from.','Add one outer loop: what changes over a longer session?'],hints:['Ask: what am I doing most of the time?','The outer loop is usually about unlocking, upgrading, or reaching new places.'],checks:['Someone who has never played could understand the game from your circle.','You found at least one reward and one source of pressure.']},
 ai:{text:'A clear core loop is the best first message to send a coding agent. It tells the agent what to build first and what “working” means. Ask it to build only the loop with plain shapes before adding anything else; that first playable version is where you discover if your idea is fun.',toolIds:['claude-code','cursor','gemini-cli'],prompt:'Here is the core loop of my game: [step 1] → [step 2] → [step 3] → [step 4]. Build only this loop as a single-page browser game using plain shapes (no art, no menus). The reward is [reward] and the pressure is [pressure]. When you are done, tell me how to play it and what you left out.'},
 deeper:{text:'Loops are one of the most discussed ideas in design. These help you see them everywhere.',items:[
  {label:'Game Maker’s Toolkit (Mark Brown)',detail:'Video essays that break down how famous games work, including their loops.',url:'https://www.youtube.com/@GMTK'},
  {label:'Game Programming Patterns: Game Loop (Robert Nystrom)',detail:'A clear, free explanation of the technical game loop, for when you’re curious.',url:'https://gameprogrammingpatterns.com/game-loop.html'},
 ]},
 questions:[
  ['A tester says your prototype is boring even though it has lovely art. What should you look at first?',['The music','The core loop','The menu design'],1,'If the repeated actions are not satisfying with plain shapes, art cannot fix them.'],
  ['In a roguelite, which loop is “die, return home, buy a permanent upgrade”?',['The second-to-second loop','The game loop that draws frames','The longer run-to-run loop'],2,'It happens once per run, wrapping the shorter loops of moment-to-moment action and room clearing.'],
 ],
 summary:['The core loop is the short cycle of actions players repeat most.','Loops nest: seconds inside minutes inside hours, each feeding the next.','Under the hood, the game loop reads input, updates the world, and draws frames many times per second.'],
 teaser:'A loop is only one part of a game. Next, let’s open the whole machine and name every part inside it.',
 mechanics:['upgrade-choice','meta-progression','currency'],genres:['roguelite','life-sim'],
},
{
 id:'fg-anatomy',
 goal:'Name the parts that make up a finished game and see how design, code, art, audio, levels, interface, and story fit together.',
 story:[
  'Open the credits of a big game and they scroll for twenty minutes: hundreds of names, dozens of job titles. Open the credits of Stardew Valley and you mostly see one name. Both games have the same parts inside them. In one, a crowd of specialists built each part. In the other, one person learned to build them all.',
  'Today you have a third option. You can direct AI tools to help build parts you have never trained for. But you can only direct what you can name. So let’s lay a game out on the workbench, like the pieces of a clock.',
 ],
 hero:image('fg-03-hero','An exploded-view illustration of a game cartridge, its parts floating apart and labelled with small icons: a gear for rules, a paintbrush for art, a music note, a map, a speech bubble, and a game controller.','A game shown as an exploded diagram of its parts: rules, art, sound, levels, story, and controls.'),
 sections:[
  {title:'The parts on the bench',paragraphs:[
   'Game design is the set of decisions about goals, rules, mechanics, and balance: what the player does and why. Programming turns those decisions into instructions a computer can follow. Art gives everything a look: characters, environments, effects, and a consistent style. Animation makes that art move. Audio covers sound effects, ambience, and music.',
   'Level design arranges spaces and challenges. Interface (UI) covers menus, health bars, and buttons, while user experience (UX) is how easy and pleasant all of it feels. Narrative is the story, whether told in words or through the world. And underneath, an engine provides the shared machinery: drawing pictures, simulating physics, playing sound, and reading the controller.',
  ],compare:{title:'Who usually builds each part',columns:['Part','What it decides','Typical role'],rows:[['Game design','Goals, rules, mechanics, balance','Game designer'],['Programming','How rules become instructions','Gameplay programmer'],['Art & animation','How everything looks and moves','Artists, animators'],['Audio','What everything sounds like','Sound designer, composer'],['Level design','Where challenges and rewards sit','Level designer'],['UI / UX','What players see and how easy it is','UI/UX designer'],['Narrative','Story, characters, world','Writer, narrative designer'],['Production','Plans, scope, schedule','Producer']],note:'On a solo or AI-assisted project, you hold all of these roles. The skill is knowing which hat you are wearing at any moment.'}},
  {title:'Systems: parts that talk to each other',paragraphs:[
   'Parts do not work alone. When your character takes a hit, the combat system reduces health, the interface shrinks a heart, the audio plays a thud, the animation flinches, and maybe the camera shakes. One event, five parts responding. Designers call a group of related rules a system, and games are webs of systems.',
   'This is why a “small” feature often isn’t. Adding a shield touches combat, interface, art, animation, and sound. When you ask an AI agent for a feature, listing which parts it touches helps the agent avoid forgetting one, and helps you test all of them.',
  ],diagram:{title:'ONE HIT, MANY SYSTEMS',nodes:['Enemy attack lands','Health drops','Heart icon shrinks','Thud sound','Flinch animation','Camera shake']}},
  {title:'Content versus systems',paragraphs:[
   'Another useful split is between systems and content. Systems are the rules: how jumping works, how enemies decide what to do, how loot is chosen. Content is the stuff those rules act on: the levels, the enemy types, the items, the dialogue. A game with strong systems can generate a lot of play from a little content; a story game might be mostly content with light systems.',
   'For a small team, or one person with AI helpers, this choice decides your workload. Ten hand-made levels take far longer than one good system that varies a few rooms. Many successful indie games pick deep systems and modest content for exactly this reason.',
  ],media:image('fg-03-systems-content','A workshop split in two: on one side a single clever machine producing many varied toys; on the other, an artisan hand-carving a row of unique figurines.','A machine producing many toys beside an artisan carving unique figures.')},
  {title:'The game around the game',paragraphs:[
   'Some parts are easy to forget because players only notice them when they are missing. Saving and loading. A settings screen with volume and controls. A pause button. Loading screens that do not freeze. Text that fits when translated into other languages. A game that still runs smoothly when twenty enemies appear at once.',
   'These parts rarely appear in a pitch, but they decide whether a game feels finished. Plan a little time for them from the start, and mention them to your coding agent early: adding saving to a game that was never designed for it is much harder than building it in from the beginning.',
  ]},
 ],
 games:[
  {title:'Stardew Valley',year:2016,platform:'PC, then consoles and mobile',note:'Design, code, art, music, and writing by one person, Eric Barone, over about four years.'},
  {title:'Spelunky',year:2008,platform:'PC (freeware), remade for consoles in 2012',note:'Deep systems with generated levels: a small amount of content creating endless variety.'},
  {title:'The Legend of Zelda: Breath of the Wild',year:2017,platform:'Wii U, Switch',note:'Physics, chemistry, and weather systems that interact in ways players keep discovering.'},
 ],
 activity:{title:'Spot it: one event, many parts',task:'In a game you like, pick one event, such as opening a chest, getting hit, or scoring, and list every part of the game that responds.',steps:['Describe the event in one sentence.','List what changes in the rules (numbers, states).','List what you see, hear, and feel.','Count the parts involved.'],hints:['Watch closely, or record a short clip and play it back slowly.','Don’t forget the interface: numbers and icons often change too.'],checks:['You found at least four parts responding to one event.','You can say which part would be missed most if removed.']},
 ai:{text:'AI tools now help with almost every part on the bench: coding agents for programming, image and 3D generators for art, audio generators for sound and music. Your job is to stay the designer and the director. Keep a short document listing your game’s parts, its style, and its rules, and share it with every tool so the parts fit together.',toolIds:['claude-code','pixellab','elevenlabs-sfx','kenney'],prompt:'I am making [one-sentence game]. Please create a one-page “game bible” I can share with every AI tool I use. Include: core loop, list of systems, list of content (levels, enemies, items), visual style in five words, sound mood in five words, and three things the game will NOT include.'},
 deeper:{text:'To learn how real teams divide this work, and how small teams survive it:',items:[
  {label:'Blood, Sweat, and Pixels (Jason Schreier)',detail:'Behind-the-scenes stories of how ten games were made, including Stardew Valley.'},
  {label:'The Art of Game Design: A Book of Lenses (Jesse Schell)',detail:'A designer’s toolkit of questions for looking at every part of a game.'},
 ]},
 questions:[
  ['You add a “freeze” spell to your game. Which list best shows the parts it probably touches?',['Only the combat code','Combat rules, enemy behavior, visuals, sound, and the interface','Only the visual effect'],1,'Even a small feature usually touches several systems. Listing them up front makes testing much easier.'],
  ['A solo developer has six months. Which plan best matches their workload?',['Fifty hand-crafted levels with unique art','A strong system that creates variety from a modest set of content','A huge open world with hundreds of characters'],1,'Systems that generate variety let small teams create a lot of play from a little content.'],
 ],
 summary:['A game is built from design, programming, art, animation, audio, levels, interface, story, and an engine.','Parts connect into systems; one event can trigger many parts.','Balancing systems against content decides how much work a game needs.'],
 teaser:'Now that you can see the parts, let’s meet the families games fall into: the genres.',
 mechanics:['health','screen-shake','procedural-levels'],genres:['life-sim','roguelike'],
},
{
 id:'fg-genres',
 goal:'Recognize major game genres by their core loops and use genres as a shorthand for ideas.',
 story:[
  'Walk into a video game shop in 1995 and the shelves are sorted into neat sections: action, adventure, sports, role-playing, strategy. Walk into an online store today and the tags multiply: roguelite deckbuilder, cozy farming sim, survivors-like, soulslike metroidvania.',
  'Genres are not boxes that games must fit inside. They are more like family names. They tell you what the relatives have in common, so that when someone says “it’s a metroidvania,” a whole picture appears in your head. Learning that vocabulary lets you borrow decades of design wisdom in a single word.',
 ],
 hero:image('fg-04-hero','A cozy bookshop of games, its shelves labelled by genre with little icons: a sword, a spaceship, a farm, a puzzle piece, a race car, a ghost. A customer browses with curiosity.','A bookshop-style store with shelves of games sorted by genre icons.'),
 sections:[
  {title:'Genres describe play, not themes',paragraphs:[
   'In film, a genre often describes a mood or setting: horror, western, romance. In games, the most useful genres describe what you do. A platformer is about jumping between platforms, whether it is set in a candy kingdom or on a space station. A tower defense game is about placing defenses along a path, whatever the theme.',
   'This is why “a game set in space” tells a builder almost nothing, while “a space-themed tower defense” tells them a lot. When you describe your idea to a coding agent, lead with the genre and the loop, then add the theme.',
  ]},
  {title:'A quick tour of the families',paragraphs:[
   'Action games test reflexes: platformers, shooters, fighting games, beat ’em ups. Adventure games emphasize exploration and puzzles. Role-playing games let a character grow through experience, equipment, and choices. Strategy games test planning: real-time strategy, turn-based tactics, tower defense. Simulation games model systems such as cities, farms, or factories. Puzzle games test logic and pattern recognition.',
   'Then there are hybrids and newer families. Roguelikes and roguelites built around short, randomized runs. Survival games about gathering and crafting. Metroidvanias with interconnected maps. Survivors-likes, where your character attacks automatically while you dodge and choose upgrades. The site’s genre library describes more than thirty of them, each with landmark games.',
  ],compare:{title:'Genre in one line',columns:['Genre','You mostly…','Landmark'],rows:[['Platformer','Jump across hazards','Super Mario Bros. (1985)'],['Shooter','Aim and fire','Doom (1993)'],['RPG','Grow a character through choices','Final Fantasy VI (1994)'],['Strategy','Plan and command','StarCraft (1998)'],['Puzzle','Solve problems','Tetris (1984)'],['Simulation','Manage a system','SimCity (1989)'],['Roguelite','Repeat short random runs','Hades (2020)'],['Survival','Gather, craft, endure','Minecraft (2011)']]}},
  {title:'Mixing genres',paragraphs:[
   'Many beloved games are crossbreeds. Slay the Spire mixed card games with roguelike runs and started a wave of deckbuilders. Stardew Valley mixed farming simulation with relationships and light dungeon combat. Hollow Knight combined a metroidvania map with demanding, souls-like combat.',
   'A mix works best when the parts reinforce each other. In Slay the Spire, the random run gives the deck new cards to choose, and the deck gives each run its identity. When you blend genres, ask what each half gives the other. If you cannot answer, the mix might just be two games glued together.',
  ],media:image('fg-04-mixing','Two potion bottles labelled with genre icons, a card and a dungeon door, being poured into a single glowing flask.','Two genre potions being mixed into one new flask.')},
  {title:'Genres as a starting point',paragraphs:[
   'For a beginner, a genre is a gift: it comes with proven loops and player expectations. Choosing a small, well-understood genre for your first game, such as a one-screen arcade game, a simple platformer, or a tiny puzzle game, means you can focus on learning to build rather than inventing a new kind of play.',
   'Players also bring expectations. Platformer players expect tight jump controls. Metroidvania players expect locked doors they can return to. Meeting those expectations makes a game feel right; breaking one on purpose can make it memorable.',
  ]},
 ],
 games:[
  {title:'Slay the Spire',year:2019,platform:'PC, then consoles and mobile',note:'Card game plus roguelike runs: the blend started the roguelike deckbuilder genre.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then Switch and consoles',note:'A metroidvania map combined with demanding, readable souls-like combat.'},
  {title:'Vampire Survivors',year:2022,platform:'PC, then consoles and mobile',note:'Created a new family, the survivors-like, almost overnight.'},
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'A platformer that met every expectation for precise controls, then added an assist mode.'},
 ],
 activity:{title:'Spot it: describe by genre',task:'Describe three games you know using only genre words and one theme word.',steps:['Pick three games of different kinds.','For each, write “a [theme] [genre]” or “a [genre] mixed with [genre]”.','Check: could someone guess the core loop from your phrase?'],hints:['Use the genre library on this site if you need more words.','“A farming RPG with dungeon combat” is more useful than “a cozy game”.'],checks:['Each phrase suggests what the player does.','At least one of your three is a genre mix.']},
 ai:{text:'Genres are excellent prompt shorthand. Agents have read a lot about how platformers, tower defense games, or roguelites work, so naming the genre gives them the right defaults. Then be specific about the one or two things that make yours different.',toolIds:['claude-code','cursor'],prompt:'I want to make a small [genre] game with a [theme] theme. Its one unusual twist is: [twist]. List the standard features players of this genre will expect, mark which ones I need for a first playable version, and suggest the smallest version of my twist.'},
 deeper:{text:'Genre history is a great source of ideas.',items:[
  {label:'This site’s genre library',detail:'More than thirty genres with origins, signature mechanics, and landmark games.'},
  {label:'Steam tags',detail:'Browsing a store by tags shows how players themselves describe and combine genres.',url:'https://store.steampowered.com/tag/browse/'},
 ]},
 questions:[
  ['Which description tells a game builder the most?',['A game set in space','A space-themed tower defense game','A beautiful space game'],1,'The genre describes what the player does. Theme alone leaves the actual play undefined.'],
  ['Why is a well-known genre a good choice for a first game?',['It guarantees sales','It comes with proven loops and expectations, so you can focus on building','It needs less art'],1,'Known genres give you a tested starting point and clear expectations to meet.'],
  ['When does a genre mix work best?',['When each half strengthens the other','When the two halves stay completely separate','When it uses as many genres as possible'],0,'In great hybrids, each part feeds the other, like random runs supplying cards in a deckbuilder.'],
 ],
 summary:['Game genres describe what you do, not just the setting.','Genres carry proven loops and player expectations.','The best genre mixes make each half strengthen the other.'],
 teaser:'Genres are built from smaller pieces: mechanics, the verbs of play. They’re next.',
 mechanics:['deckbuilding','auto-attack','ability-gating'],genres:['platformer','shooter','rpg','strategy','puzzle','simulation','roguelite','survival','metroidvania','deckbuilder'],
},
{
 id:'fg-mechanics',
 goal:'Think of mechanics as the verbs of play, and understand how a few verbs combine into rich systems.',
 story:[
  'In 1985, a team at Nintendo gave a small plumber exactly two verbs: run and jump. Then they spent their time building a world that asked those two verbs hundreds of different questions. How far can you jump? Can you jump on that? What happens if you jump while running?',
  'Decades later, games are still built the same way. A designer chooses a handful of verbs, then builds a world full of questions for those verbs to answer.',
 ],
 hero:image('fg-05-hero','A small hero character standing in front of a giant dictionary whose open pages show icons for verbs: jump, dash, climb, build, talk, hide.','A character reading a giant dictionary of action verbs.'),
 sections:[
  {title:'Mechanics are verbs',paragraphs:[
   'A mechanic is something the player can do, or a rule about how the world responds. Jump, shoot, build, trade, hide, talk, and rewind time are all mechanics. Each one comes with its own details: how high the jump goes, how long the dash lasts, how much an item costs.',
   'A useful habit is to list your game’s verbs before anything else. A shooter might have move, aim, shoot, reload, and take cover. A farming game might have walk, plant, water, harvest, sell, and gift. If your verb list is very long, the game may be too big; if it has only one verb, that verb had better be wonderful.',
  ]},
  {title:'Depth comes from combinations',paragraphs:[
   'Great games get a lot from a little by letting verbs interact with each other and with the world. In Breath of the Wild, fire burns grass, burning grass creates rising air, and rising air lifts your glider. None of those rules is complicated. Together they let players invent solutions the designers never scripted.',
   'Designers call this emergence: complex, surprising play arising from simple rules. You can aim for it deliberately. Give your verbs a few clear rules, then ask: what happens when two of them meet?',
  ],diagram:{title:'EMERGENCE FROM SIMPLE RULES',nodes:['Fire burns grass','Burning grass makes hot air','Hot air lifts a glider','Player soars over a cliff'],note:'Three simple rules, one moment players remember.'}},
  {title:'Mechanics, dynamics, and feelings',paragraphs:[
   'A popular framework called MDA splits a game into three layers. Mechanics are the rules you write. Dynamics are what happens when players use those rules: rushing, hoarding, sneaking, cooperating. Aesthetics are the feelings players have: tension, discovery, fellowship, triumph.',
   'Designers work from mechanics outward; players experience the game from feelings inward. When a mechanic does not create the feeling you hoped for, it is usually the dynamics in the middle that went wrong. A scarcity rule meant to create tension might instead make players hoard everything and never take risks.',
  ],media:chart('fg-05-mda','Three stacked layers like a cake: the bottom layer shows gears (mechanics), the middle shows players moving and interacting (dynamics), the top shows a happy, tense face (aesthetics). An arrow goes up labelled designer, another goes down labelled player.','Three-layer diagram of mechanics, dynamics, and aesthetics with designer and player arrows.','4:3')},
  {title:'Borrowing mechanics wisely',paragraphs:[
   'Almost every mechanic you will use has been invented before, and that is fine. Coyote time, double jumps, dodge rolls, cooldowns, and upgrade choices are shared tools of the craft, refined by thousands of games. The mechanics library on this site lists over a hundred, each with real examples.',
   'The craft is in choosing and tuning. A dash that lasts a fifth of a second feels different from one that lasts half a second. A cooldown of one second encourages constant use; ten seconds makes each use a decision. Small numbers shape big feelings.',
  ]},
 ],
 games:[
  {title:'Super Mario Bros.',year:1985,platform:'NES',note:'Two core verbs, run and jump, explored through dozens of levels of questions.'},
  {title:'The Legend of Zelda: Breath of the Wild',year:2017,platform:'Wii U, Switch',note:'Simple physics and chemistry rules that combine into emergent solutions.'},
  {title:'Baba Is You',year:2019,platform:'PC, Switch',note:'Its mechanic is changing the rules themselves, by pushing word blocks around.'},
 ],
 activity:{title:'Spot it: list the verbs',task:'Write the verb list for a game you know, then imagine removing one verb.',steps:['List every action the player can take.','Circle the two or three used most.','Imagine the game without one circled verb. What breaks? What new game appears?'],hints:['Include verbs such as talk, buy, and open, not only combat and movement.','Removing a verb is a classic way designers discover new ideas.'],checks:['Your list has between three and twelve verbs.','You can explain how removing one verb changes the feeling of play.']},
 ai:{text:'Mechanics translate beautifully into agent requests because they are precise. “Add a dash that moves the player 120 pixels in 0.15 seconds, with a 1-second cooldown, during which the player can’t be hurt” is easy to build and easy to test. Ask for the numbers to be easy to change, so you can tune feel by playing instead of rewriting.',toolIds:['claude-code','cursor','copilot'],prompt:'Add one mechanic to my game: [verb]. Rules: [exact rules with numbers]. Put every number in one clearly named settings section so I can tune them. Then tell me three ways I should test that it works, including one edge case.'},
 deeper:{text:'Mechanics are the most studied part of game design.',items:[
  {label:'This site’s mechanics library',detail:'More than a hundred mechanics in thirteen categories, each with real game examples.'},
  {label:'MDA: A Formal Approach to Game Design (Hunicke, LeBlanc, Zubek)',detail:'The short 2004 paper that introduced mechanics, dynamics, and aesthetics.'},
  {label:'Advanced Game Design: A Systems Approach (Michael Sellers)',detail:'A deeper look at how mechanics combine into systems.'},
 ]},
 questions:[
  ['In the MDA framework, “players start hoarding every potion and never use them” is an example of…',['A mechanic','A dynamic','An aesthetic'],1,'Hoarding is what players do with the rules: a dynamic. It can undermine the feeling the designer wanted.'],
  ['What creates emergent play?',['Many scripted cutscenes','Simple rules that interact in ways designers did not script','A very long list of unrelated verbs'],1,'Emergence comes from interacting rules, like fire, wind, and gliding combining in unexpected ways.'],
 ],
 summary:['Mechanics are the verbs of play plus the rules of how the world responds.','Depth comes from simple mechanics interacting, which can create emergent play.','Small numbers, such as durations and cooldowns, shape big feelings.'],
 teaser:'Verbs need a way in. Next: controls, the bridge between the player’s hands and the game.',
 mechanics:['jump','dash','dodge-roll','cooldowns','rule-changing','physics-objects'],genres:['platformer','open-world'],
},
{
 id:'fg-controls',
 goal:'Understand how physical input becomes game actions, and why controls decide whether a game feels good.',
 story:[
  'There is a moment, a few minutes into a great game, when you stop thinking about the controller. Your thumb presses a button and the character simply jumps, as if your intention travelled straight into the screen. The controller has disappeared.',
  'That disappearance is not luck. Somebody tuned how quickly the character starts and stops, how long the button is listened to, and how the game forgives a press that was a fraction too early. Controls are the handshake between person and game. When they are right, nobody notices. When they are wrong, nothing else matters.',
 ],
 hero:image('fg-06-hero','Close-up of hands holding a gamepad, with glowing lines flowing from the buttons into a small character mid-jump on a screen.','Hands on a controller with glowing lines connecting the buttons to a jumping character.'),
 sections:[
  {title:'From buttons to actions',paragraphs:[
   'Every game listens to some kind of input device: keyboard and mouse, gamepad, touchscreen, motion sensors, or even a microphone or camera. The game turns physical actions into game actions. Good engines let you work with named actions such as “jump” or “interact” instead of specific keys, so the same game works with a keyboard, a gamepad, or a phone.',
   'That separation also makes remapping possible: letting players choose their own keys. Remapping is one of the most important accessibility features a game can have, and it is far easier to support if you think in actions from the very start.',
  ],diagram:{title:'INPUT TO ACTION',nodes:['Space / A button / Tap','“Jump” action','Game rule','Character jumps','Feedback']}},
  {title:'Each device shapes the game',paragraphs:[
   'A mouse is precise and fast, which is why strategy games and shooters thrive on PC. A gamepad offers analog sticks for smooth movement and comfortable buttons for action, ideal for platformers and third-person adventures. A touchscreen has no physical buttons, so mobile games favor taps, swipes, and drags, often with one hand.',
   'Design for the device from the start. A phone game with eight virtual buttons covering the screen will feel worse than a game designed around a single tap. Angry Birds works so well on phones because flinging with a finger is the mechanic.',
  ],compare:{title:'Devices and what they do best',columns:['Device','Strengths','Genres that shine'],rows:[['Keyboard & mouse','Precise pointing, many keys','Strategy, shooters, simulation'],['Gamepad','Analog movement, comfortable for long play','Platformers, action, racing'],['Touchscreen','Direct, intuitive gestures','Puzzle, casual, card games'],['Motion / VR','Body movement as input','Rhythm, sports, immersive VR']]}},
  {title:'Responsiveness and forgiveness',paragraphs:[
   'Players feel delays of a tenth of a second. If the character takes too long to react, the game feels sluggish; if it stops instantly with no weight, it can feel stiff. Designers tune acceleration, deceleration, and how long animations delay an action. Platformers often let a jump start even before the attack animation ends, because responsiveness beats realism.',
   'Good controls are also forgiving in invisible ways. Coyote time lets you jump a moment after running off a ledge. Jump buffering remembers a press made just before landing. Aim assist gently helps on gamepads. Players never see these rules; they just feel that the game understood them.',
  ],media:clip('fg-06-coyote','A small character runs off a cliff edge, hangs in the air for a split second, then successfully jumps; a ghostly outline shows where a strict game would have made them fall.','Animation of coyote time: a character jumps successfully just after leaving a ledge.')},
  {title:'Controls for everyone',paragraphs:[
   'Some players use one hand, have limited grip strength, or cannot press buttons rapidly. Options such as remapping, toggling instead of holding, adjustable sensitivity, and slower game speeds open your game to many more people. Celeste’s Assist Mode, which lets players slow the game down or add extra dashes, is a famous example.',
   'Accessibility is not an extra layer at the end; it is easier and cheaper when planned early, especially by thinking in actions rather than keys.',
  ]},
 ],
 games:[
  {title:'Celeste',year:2018,platform:'PC and consoles',note:'Coyote time, jump buffering, and an Assist Mode that lets every player tune the challenge.'},
  {title:'Angry Birds',year:2009,platform:'iPhone, then everywhere',note:'A mechanic, flinging, designed for the finger instead of adapted to it.'},
  {title:'Halo: Combat Evolved',year:2001,platform:'Xbox',note:'Showed that first-person shooters could feel great on a gamepad, helped by careful aim assist.'},
 ],
 activity:{title:'Spot it: feel the controls',task:'Play a game for five minutes and pay attention only to how it feels to control.',steps:['Notice how quickly your character starts and stops moving.','Try jumping or acting at the last possible moment. Does the game forgive you?','Look in the settings for remapping and accessibility options.'],hints:['Compare a game you love with one that felt “off” to you.','Many games list their accessibility options in a separate settings tab.'],checks:['You described the feel in your own words (snappy, floaty, heavy…).','You found at least one forgiving rule or accessibility option.']},
 ai:{text:'When you ask an agent to add controls, ask for named actions, not hard-coded keys, and for movement values in a single settings block. Then tune by playing. A good request also mentions forgiveness rules such as coyote time and jump buffering explicitly; agents often leave them out unless asked.',toolIds:['claude-code','cursor','godot-mcp'],prompt:'Set up controls for my game using named actions: move_left, move_right, jump, interact. Map each to keyboard and gamepad. Add coyote time (0.1 s) and jump buffering (0.1 s). Keep all tuning numbers in one place, and make it possible for players to remap the keys later.'},
 deeper:{text:'For the craft of controls and feel:',items:[
  {label:'Game Feel (Steve Swink)',detail:'A whole book about the tactile sensation of controlling something in a game.'},
  {label:'Game Accessibility Guidelines',detail:'Free, practical guidelines for making games playable by more people.',url:'https://gameaccessibilityguidelines.com/'},
 ]},
 questions:[
  ['Why should a game listen for a “jump” action instead of the Space key directly?',['It makes the game run faster','It lets keyboards, gamepads, touch, and remapping all trigger the same action','The Space key does not work in browsers'],1,'Named actions separate the device from the rule, which makes multiple devices and remapping easy.'],
  ['What is coyote time?',['A short grace period to jump just after leaving a ledge','A time limit on each level','Extra time to aim before an enemy attacks'],0,'It forgives presses that are a fraction late, making controls feel fair.'],
 ],
 summary:['Controls turn physical input into named game actions.','Each device, from mouse and gamepad to touch and motion, favors different designs.','Responsiveness, invisible forgiveness, and accessibility options make controls feel right for everyone.'],
 teaser:'Behind every action is an instruction. Next we look at programming, without writing a single line.',
 mechanics:['coyote-time','jump-buffer','aiming'],genres:['platformer','casual'],
},
{
 id:'fg-programming',
 goal:'Understand what programming does inside a game, so you can describe behavior clearly and spot what an AI agent missed.',
 story:[
  'Imagine you are writing instructions for an extremely fast, extremely literal assistant. It will follow your instructions millions of times per second without ever getting tired. But it has no common sense. If you say “move the character right,” it will move it right forever, through walls and off the edge of the world, unless you also tell it when to stop.',
  'That assistant is the computer, and the instructions are code. You may never write code by hand: an AI agent can write it for you. But understanding the shape of the instructions turns you from someone who hopes the agent understood into someone who knows what to ask for.',
 ],
 hero:image('fg-07-hero','A very literal robot assistant marching to the right across a desk, about to walk off the edge, holding a note that says only an arrow pointing right.','A literal robot walking off the edge of a desk following an instruction to go right.'),
 sections:[
  {title:'Remember, check, react, repeat',paragraphs:[
   'Almost everything code does in a game fits four ideas. Remember: the game stores values, called state, such as the player’s position, health, score, and whether a door is open. Check: rules test conditions, such as “if health reaches zero” or “if the player touches a coin.” React: when something happens, the game responds by changing state, playing a sound, or starting an animation. Repeat: the game loop runs all of this many times per second.',
   'Read any game behavior through these four ideas and it becomes clear. “When the player touches a coin, add one to the score, remove the coin, and play a chime” means remember the score, check for touching, and react three ways.',
  ],diagram:{title:'THE SHAPE OF GAME CODE',nodes:['Remember (state)','Check (rules)','React (events)','Repeat (loop)']}},
  {title:'Events and the order of things',paragraphs:[
   'Games are full of events: a button pressed, an enemy defeated, a timer finished. Code listens for events and decides what happens next. Many bugs are really questions of order. Did the score go up before or after the level ended? Did the enemy deal damage after it was already defeated?',
   'You can catch these problems by describing edge cases. What if two things happen at once? What if the player presses the button twice quickly? What happens when the game restarts? Edge cases are where literal assistants go wrong, and where your understanding helps most.',
  ],media:chart('fg-07-events','A row of dominoes labelled with icons: button press, sword swing, enemy hit, health drop, sound, score increase. One domino in the middle is wobbling out of order.','Dominoes showing a chain of game events, one out of order.','21:9')},
  {title:'Code is organized like a game',paragraphs:[
   'Programmers organize code into pieces that each own one job: a player piece, an enemy piece, a score piece. Engines such as Godot call these nodes and scenes; Unity calls them GameObjects and components. The idea is the same: each piece remembers its own state and reacts to its own events.',
   'This organization matters to you when you work with an agent. If you say “the score should go up when an enemy dies,” a good agent asks which piece owns the score and how the enemy tells it. If your project is a tangle where everything touches everything, every change gets riskier. Asking the agent to keep responsibilities separate is like asking a builder to keep the plumbing and the wiring tidy.',
  ]},
  {title:'Your role: designer, tester, reviewer',paragraphs:[
   'Working with a coding agent, you do three things a programmer does without needing to write the code. You design: describe the behavior precisely, with numbers and edge cases. You test: play the game and check every case you described. You review: ask the agent to explain what it changed and why, in plain words, before you keep it.',
   'Keep a saved copy of every working version, using a tool such as Git, which your agent can operate for you. Then a bad change is never a disaster, just a step back.',
  ]},
 ],
 games:[
  {title:'Baba Is You',year:2019,platform:'PC, Switch',note:'A puzzle game where you edit the rules like code: “WALL IS STOP” becomes “WALL IS WIN.”'},
  {title:'Human Resource Machine',year:2015,platform:'PC, then consoles and mobile',note:'A puzzle game that teaches programming ideas through office workers moving boxes.'},
  {title:'Minecraft',year:2011,platform:'PC, then everywhere',note:'Redstone circuits let players build logic and machines inside the game.'},
 ],
 activity:{title:'Spot it: write a rule in plain words',task:'Take one behavior from a game you like and write it as remember, check, and react, including two edge cases.',steps:['Choose a behavior, such as opening a door with a key.','Write what the game must remember.','Write the check (the condition).','Write every reaction.','Add two edge cases and what should happen.'],hints:['Edge cases: no key, two keys, door already open, game restarted.','React can include sounds, animations, and interface changes.'],checks:['Your description is precise enough that a literal assistant could not misread it.','You handled at least two edge cases.']},
 ai:{text:'This chapter is the heart of vibe coding: describe behavior as state, checks, reactions, and edge cases, then let the agent write the code. Ask it to explain changes in plain words and to keep each responsibility in its own place. When a game engine is connected through an MCP server, the agent can also run your game and read its errors.',toolIds:['claude-code','cursor','gemini-cli','mcp'],prompt:'Add this behavior to my game. Remember: [state]. Check: [condition]. React: [reactions]. Edge cases: [list]. Before editing, tell me which parts of the project you will change. After editing, explain the change in plain words and tell me how to test each edge case.'},
 deeper:{text:'If you want to peek under the hood, or learn to code someday:',items:[
  {label:'Game Programming Patterns (Robert Nystrom)',detail:'A free, friendly book about how game code is organized.',url:'https://gameprogrammingpatterns.com/'},
  {label:'The classic Godot course on this site',detail:'Fifty-five code-first lessons, with an optional programming bridge for beginners.'},
  {label:'Scratch',detail:'A block-based way to try programming ideas with no typing.',url:'https://scratch.mit.edu/'},
 ]},
 questions:[
  ['“If the player touches lava, set health to zero” is mostly an example of…',['Remember','Check and react','Repeat'],1,'Touching lava is the condition being checked; setting health is the reaction.'],
  ['Your agent built a working shop, but buying an item twice quickly charges you three times. What kind of problem is this?',['A balance problem with the prices','An edge case about events and order','A problem with the shop’s layout'],1,'Fast repeated presses are a classic edge case. Describing it lets the agent guard against it.'],
  ['What is the safest habit when accepting changes from a coding agent?',['Keep a saved working version and ask for a plain-words explanation of each change','Accept any change as long as the game still starts','Ask for a full rewrite whenever something breaks'],0,'Saved versions make mistakes cheap, and explanations help you understand what you now own.'],
 ],
 summary:['Game code remembers state, checks rules, reacts to events, and repeats in the loop.','Bugs often hide in edge cases and the order of events.','With an agent, you design precisely, test thoroughly, and review changes, keeping saved versions.'],
 teaser:'Code needs somewhere to run. Next: game engines, the workshops where games are built.',
 mechanics:['rule-changing'],genres:['puzzle'],
},
{
 id:'fg-engines',
 goal:'Know what a game engine provides and compare the major engines, so you can choose one with reasons.',
 story:[
  'In the early 1990s, if you wanted to make a game, you often had to write your own way of drawing pictures, playing sounds, and reading the joystick, sometimes for each different computer. Then, in 1993, a small team in Texas released Doom, and later licensed the technology underneath it to other studios. Other teams could build entirely new games on the same foundation.',
  'That foundation is called an engine. Today, engines are free to download, and a single person can build what once needed a studio. The question is no longer whether you can get an engine. It is which one fits your game.',
 ],
 hero:image('fg-08-hero','A cozy workshop where a giant machine, the engine, has drawers labelled with icons for drawing, physics, sound, and controls. A small maker plugs in their own colorful game piece.','A maker adding their own piece to a large workshop machine labelled with engine features.'),
 sections:[
  {title:'What an engine gives you',paragraphs:[
   'An engine is software that provides the parts most games share. It draws images and 3D scenes to the screen. It simulates physics, such as gravity, collisions, and bouncing. It plays sound, reads controllers, loads files, and exports your game for different platforms. Most engines also include an editor: a visual workspace where you place objects, build levels, and adjust settings.',
   'Your job is the part that is unique: the rules, the levels, the characters, the story. A coding agent can write game-specific code inside an engine far more reliably than it could write an entire engine from scratch.',
  ],diagram:{title:'ENGINE VS. YOUR GAME',nodes:['Engine: drawing, physics, sound, input, export','+','Your game: rules, levels, art, story','=','A finished game']}},
  {title:'The major engines',paragraphs:[
   'Godot is free and open source, light to download, and well suited to 2D and small to medium 3D games. Unity is a widely used commercial engine with an enormous library of tutorials and assets, strong on mobile and cross-platform. Unreal Engine is known for high-end 3D graphics and visual scripting with Blueprints. GameMaker focuses on 2D and has powered many indie hits.',
   'For the web, frameworks such as Phaser (2D) and Three.js (3D) run games directly in a browser with no installation. Specialized tools also exist: RPG Maker for classic role-playing games, Roblox Studio for experiences inside Roblox, and Defold for small, fast mobile and web games.',
  ],compare:{title:'Choosing an engine',columns:['Engine','Best for','Cost'],rows:[['Godot','2D and small/medium 3D, learning, no fees','Free, open source'],['Unity','Mobile, cross-platform, huge asset store','Free tier, then paid plans'],['Unreal Engine','High-end 3D, large worlds','Free to start, royalties above a revenue threshold'],['GameMaker','2D action and platformers','Free tier, paid exports'],['Phaser / Three.js','Browser games shared by a link','Free, open source'],['RPG Maker','Classic RPGs with little code','Paid'],['Roblox Studio','Multiplayer games inside Roblox','Free, revenue share']],note:'Pricing changes; check each engine’s current terms. The toolkit page lists them all.'}},
  {title:'How to choose',paragraphs:[
   'Choose based on your game, not on hype. A small 2D game runs happily in Godot, GameMaker, or a browser framework. A realistic 3D world might push you toward Unreal. If you want your game playable instantly from a link, start in the browser. If you want no fees or licensing worries ever, Godot is hard to beat.',
   'For AI-assisted work, also consider how well agents can work with the engine. Engines that keep projects as readable text files, as Godot and browser frameworks do, are easier for coding agents to understand and change. MCP servers now exist for several engines, letting agents run the project and read its errors.',
  ],media:image('fg-08-crossroads','A signpost at a crossroads with arrows labelled by simple icons: a browser window, a Godot-like robot head, a cube, a mountain range. A traveler with a backpack studies the signs.','A traveler at a signpost choosing between engine paths.')},
  {title:'Skills that transfer',paragraphs:[
   'Do not worry about choosing wrong. The ideas in these foundations courses, such as loops, mechanics, cameras, level design, and animation, apply in every engine. Developers switch engines regularly. The first engine you learn teaches you how engines think, and the second one is much easier.',
   'This site’s hands-on ladder starts in the browser and in Godot because both are free, text-friendly for agents, and gentle for beginners. Unity and Unreal courses are planned for later.',
  ]},
 ],
 games:[
  {title:'Doom',year:1993,platform:'PC',note:'Its engine was licensed to other studios, helping popularize engines as a business.'},
  {title:'Hollow Knight',year:2017,platform:'PC, then consoles',note:'Built with Unity by a tiny team.'},
  {title:'Brotato',year:2023,platform:'PC, then consoles and mobile',note:'A hit survivors-like built in Godot.'},
  {title:'Fortnite',year:2017,platform:'PC, consoles, mobile',note:'Built with Unreal Engine by Epic, the company that makes Unreal.'},
 ],
 activity:{title:'Spot it: which engine?',task:'Look up the engines behind three games you like.',steps:['Search “[game name] engine” for three games.','Note whether each was 2D or 3D and how big the team was.','Decide which engine you would choose for your own first game, and why.'],hints:['Many games show the engine’s logo when they start.','Small indie teams often use Godot, Unity, or GameMaker.'],checks:['You found the engine for at least two games.','Your choice has a reason linked to your game idea.']},
 ai:{text:'Agents work best inside an engine when they can see and test the project. With Godot, a Godot MCP server lets an agent launch the game and read error messages. With browser games, a browser MCP server can let an agent open the page and try it. Tell the agent which engine and version you use in every request.',toolIds:['godot','phaser','godot-mcp','playwright-mcp'],prompt:'I am making [game idea]. Compare Godot, a browser framework (Phaser or Three.js), Unity, and Unreal for this specific game. Consider: 2D or 3D, my experience (beginner), cost, how easy it is for a coding agent to work with, and where I want to publish ([platform]). Recommend one and explain the trade-offs in plain words.'},
 deeper:{text:'Official starting points:',items:[
  {label:'Godot documentation',detail:'Step-by-step guides, including “Your first 2D game”.',url:'https://docs.godotengine.org/'},
  {label:'Unity Learn',detail:'Free official Unity courses.',url:'https://learn.unity.com/'},
  {label:'Unreal Engine documentation',detail:'Official Unreal guides and samples.',url:'https://dev.epicgames.com/documentation/'},
  {label:'Phaser examples',detail:'Hundreds of small browser-game examples.',url:'https://phaser.io/examples'},
 ]},
 questions:[
  ['Which part is usually YOUR job rather than the engine’s?',['Drawing pixels to the screen','Simulating gravity','Designing the rules and levels of your game'],2,'Engines supply shared machinery; the rules, levels, and characters that make your game unique are yours.'],
  ['You want people to play your game instantly from a link with nothing to install. What is a natural starting point?',['A browser framework such as Phaser or Three.js','Unreal Engine with its high-end graphics','A console development kit'],0,'Browser games run in any web browser and can be shared with a link.'],
 ],
 summary:['An engine provides drawing, physics, sound, input, an editor, and export.','Godot, Unity, Unreal, GameMaker, and browser frameworks each fit different games.','Ideas transfer between engines; choose based on your game, not hype.'],
 teaser:'An engine builds the game. A platform decides where it lives, and who can play it. That’s next.',
 genres:['shooter','metroidvania','bullet-heaven'],
},
{
 id:'fg-platforms',
 goal:'Understand how platforms such as PC, web, mobile, console, and VR change design, and how games reach players through stores.',
 story:[
  'A game is finished. Now where does it go? In 1980 the answer was an arcade cabinet bolted to the floor of a pizza parlour. In 1990 it was a cartridge in a cardboard box. Today the same game might run on a laptop, inside a browser tab, on a phone in a bus queue, on a living-room console, and on a headset strapped to someone’s face.',
  'Each of those places is a platform, and each one quietly reshapes the game: its controls, its screen, its session length, and how players find it at all.',
 ],
 hero:image('fg-09-hero','The same small game character appearing on a row of devices: an old arcade cabinet, a desktop computer, a phone, a handheld console, a TV, and a VR headset.','One character shown on many devices from arcade to VR.'),
 sections:[
  {title:'The main platforms',paragraphs:[
   'PC games run on Windows, macOS, and Linux computers, usually with keyboard and mouse, and are sold through stores such as Steam and itch.io. Web games run in a browser and can be shared with a link; they are perfect for small games and game jams. Mobile games run on phones and tablets through the App Store and Google Play, and must be designed for touch, small screens, and short sessions.',
   'Console games run on PlayStation, Xbox, and Nintendo systems. Publishing on them requires approval and development kits from the console makers. VR and XR games run on headsets and need comfort-focused design: motion can cause sickness if handled badly.',
  ],compare:{title:'Platforms at a glance',columns:['Platform','Input','Typical session','Getting published'],rows:[['PC','Keyboard, mouse, gamepad','Long','Open: Steam, itch.io, others'],['Web','Keyboard, mouse, touch','Short','Open: any web host, itch.io'],['Mobile','Touch','Very short','App stores with review'],['Console','Gamepad','Long','Approval from console makers'],['VR / XR','Motion controllers, body','Short to medium','Headset stores with review']]}},
  {title:'Design changes with the platform',paragraphs:[
   'A mobile player might play for two minutes while waiting for coffee, so games there often save constantly and have short levels. A console player sits on a sofa, far from the screen, so text must be large. A PC player can see small details and use dozens of keys. A web player may leave within seconds if the game does not load quickly.',
   'Performance differs too. A powerful PC can draw detailed 3D worlds; a cheap phone or a browser tab needs simpler scenes. Choosing a platform early helps you choose an art style and scope you can actually run.',
  ],media:image('fg-09-contexts','Four small vignettes of people playing in different places: on a bus with a phone, on a sofa with a gamepad, at a desk with a mouse, and standing in a living room wearing a VR headset.','Four people playing on different platforms in different settings.','4:3')},
  {title:'Stores and discovery',paragraphs:[
   'Making a game available is easy; getting it noticed is hard. Thousands of games release on Steam each year. Stores show games based on wishlists, reviews, tags, and sales, so many developers start building interest long before release with trailers, social media, demos, and festivals.',
   'itch.io is a friendly place to start: it is open to anyone, supports browser games, and hosts game jams where you make a game in a weekend alongside thousands of others. A jam is one of the best ways to finish your first game and meet players.',
  ]},
  {title:'Start small, then expand',paragraphs:[
   'Engines can export to several platforms, but each one needs testing and its own adjustments. A good first plan: build for one platform, such as the web or PC, finish the game, put it in front of players, and only then consider porting it elsewhere. Many famous indie games started on one platform and arrived on others years later.',
  ]},
 ],
 games:[
  {title:'Candy Crush Saga',year:2012,platform:'Facebook, then mobile',note:'Designed for very short sessions and touch play on phones.'},
  {title:'Beat Saber',year:2019,platform:'VR headsets',note:'A game built entirely around the body movement only VR provides.'},
  {title:'Undertale',year:2015,platform:'PC, later consoles',note:'Started on PC and arrived on consoles years later.'},
 ],
 activity:{title:'Spot it: one game, two platforms',task:'Find a game available on two different platforms and compare them.',steps:['Pick a game released on, say, PC and mobile, or console and handheld.','Watch a short video of each version.','List three things that changed: controls, interface, visuals, or session length.'],hints:['Look at button prompts and text size.','Mobile versions often add touch buttons or simplify menus.'],checks:['You found three concrete differences.','You can say which platform the game was originally designed for.']},
 ai:{text:'Tell your coding agent your target platform at the very start; it changes how controls, screen layout, and performance should be handled. Agents can also help you prepare store pages, write descriptions, and resize screenshots, but always review anything that will be public.',toolIds:['itch','github-pages','steam'],prompt:'My game is [description] and I want to publish it first on [platform]. List the platform-specific things I must handle: controls, screen sizes, performance limits, saving, and store requirements. Mark which ones matter for a first release and which can wait.'},
 deeper:{text:'Where to start publishing and learning about discovery:',items:[
  {label:'itch.io game jams',detail:'Find a jam to finish a small game with a deadline and community.',url:'https://itch.io/jams'},
  {label:'How To Market A Game (Chris Zukowski)',detail:'A blog about how indie games get discovered on Steam.',url:'https://howtomarketagame.com/'},
 ]},
 questions:[
  ['You are designing for phones. Which choice fits the platform best?',['Short levels that save often and work with one thumb','Many on-screen buttons for full control','Detailed menus with small text'],0,'Mobile players play in short bursts with touch, so short sessions and simple input fit best.'],
  ['What is a sensible first publishing plan for a beginner?',['Release on every platform at once','Finish for one platform, get players, then consider others','Wait until the game is perfect before anyone sees it'],1,'One platform keeps testing manageable and gets you real feedback sooner.'],
 ],
 summary:['Platforms (PC, web, mobile, console, VR) change controls, screens, sessions, and performance.','Stores make games available; discovery takes deliberate effort.','Start with one platform, finish, then expand.'],
 teaser:'You know the workshop and where games live. Next, meet the AI crew that can help you build.',
 genres:['casual','rhythm'],
},
];
