import type { ChapterSeed } from '../lesson-builder';
import { image } from './media';

export const historySeedsB: ChapterSeed[] = [
{
 id:'fh-3d',
 goal:'Understand the leap from 2D to 3D in the 1990s and the new problems it created, especially cameras and controls.',
 story:[
  'Christmas 1996. A child unwraps a new console with a strange three-pronged controller and a small stick in the middle. They switch it on. A familiar plumber stands in a castle garden, and when the stick tilts, he runs, not left or right, but anywhere. Into the distance. Around a tree. Up a hill. The child laughs out loud, just moving.',
  'The jump to 3D was the biggest change games had ever faced. Every designer had to answer questions nobody had asked before: where should the camera be? How do you aim in a world with depth? How do players know how far away something is?',
 ],
 hero:image('fh-07-hero','A child in a 1990s living room holding a three-pronged controller, mouth open in delight, as a small hero on the TV runs freely through a sunny 3D castle garden.','A child amazed by running freely in a 3D world on a 1990s console.','A child in a 1990s living room holding a chunky three-pronged controller, delighted, while on a bulky CRT TV a small original hero runs freely across a sunny low-poly castle garden'),
 sections:[
  {title:'Polygons arrive',paragraphs:[
   'Early 3D games drew worlds from polygons, flat shapes joined to form surfaces. Arcade games such as Virtua Fighter (1993) used them for fighters; Star Fox (1993) brought simple polygon worlds to the SNES with an extra chip. On the PC, Doom suggested 3D spaces, and Quake (1996) built fully 3D worlds that ran especially well with new 3D graphics cards such as the 3dfx Voodoo.',
   'Sony entered the market with the PlayStation (1994 in Japan, 1995 elsewhere). Its CD-ROMs were cheap to manufacture and held far more data than cartridges, which attracted many developers. Nintendo stayed with cartridges for the Nintendo 64 (1996), prioritizing speed but limiting space.',
  ]},
  {title:'Inventing the 3D camera',paragraphs:[
   'Super Mario 64 (1996) introduced an analog stick for smooth movement in any direction, and a camera the player could rotate, presented as a cameraman character filming the hero. Tomb Raider (1996) used a camera behind its hero, Lara Croft, as she explored ancient ruins. These games established the third-person camera that action games still use.',
   'The Legend of Zelda: Ocarina of Time (1998) solved another problem: fighting in 3D. Its “Z-targeting” locked the camera and attacks onto one enemy, so players could circle and dodge without losing track. Lock-on systems in action games today descend from it.',
  ],timeline:{title:'The leap into 3D',events:[
   {year:1993,title:'Virtua Fighter and Star Fox',text:'Polygon characters and worlds go mainstream.'},
   {year:1994,title:'PlayStation (Japan)',text:'Sony’s CD-based console attracts developers worldwide.'},
   {year:1996,title:'Super Mario 64, Tomb Raider, Quake',text:'Analog movement, third-person cameras, and true 3D shooters.'},
   {year:1997,title:'Final Fantasy VII',text:'Cinematic 3D storytelling reaches a worldwide audience.'},
   {year:1998,title:'Ocarina of Time, Half-Life, Metal Gear Solid',text:'Lock-on combat, story without cutscenes, and stealth.'},
   {year:2000,title:'PlayStation 2',text:'Becomes one of the best-selling consoles ever.'},
  ]}},
  {title:'Telling stories in 3D',paragraphs:[
   'Final Fantasy VII (1997) moved to the PlayStation for the space CDs offered, filling three discs with cinematic scenes, and became a worldwide hit. Metal Gear Solid (1998) made stealth and film-like storytelling its signature. Half-Life (1998) did something different: it almost never took control away from the player. Its story happened around you, in real time, from the first-person view.',
   'Those two approaches, cinematic cutscenes versus story you live through, still divide game storytelling today. Both can be powerful; they suit different games.',
  ],media:image('fh-07-two-ways','Split image: on the left, a player relaxed and watching a dramatic cinematic scene on a TV; on the right, a player leaning in, controller in hand, as dramatic events happen around their first-person view.','A player watching a cinematic scene beside a player experiencing story in first person.','A split illustration: on the left a player relaxing on a couch watching a dramatic cinematic scene; on the right a player leaning forward gripping a controller as a dramatic event unfolds around a first-person view','21:9')},
  {title:'Growing pains',paragraphs:[
   'Early 3D was hard. Cameras got stuck behind walls. Players misjudged jumps because they could not see depth. Textures wobbled and objects popped into view. Designers developed tools to help: shadows directly under characters to show where they would land, fog to hide distant objects, and level layouts that guided the camera.',
   'These lessons remain the foundation of 3D design. The 3D Worlds course on this site explores them in detail: cameras, depth cues, lighting, and level design.',
  ]},
 ],
 games:[
  {title:'Super Mario 64',year:1996,platform:'Nintendo 64',note:'Analog movement and a player-controlled camera set the template for 3D platformers.'},
  {title:'Tomb Raider',year:1996,platform:'Saturn, PlayStation, PC',note:'Third-person exploration and one of gaming’s most famous heroes.'},
  {title:'The Legend of Zelda: Ocarina of Time',year:1998,platform:'Nintendo 64',note:'Z-targeting made 3D combat readable.'},
  {title:'Half-Life',year:1998,platform:'PC',note:'A story told without taking control away from the player.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Spot it: depth cues',task:'Watch a video of an early 3D platformer and list the tricks it uses to show depth.',steps:['Look for shadows under the character.','Look for fog or simplified distant objects.','Notice how the camera moves near walls.'],hints:['A round shadow directly below a jumping character is a classic trick.','Watch for moments when the camera struggles.'],checks:['You found at least two depth cues.','You noticed at least one camera problem.']},
 ai:{text:'Classic 3D problems still appear when an agent builds a 3D game: cameras clipping through walls, jumps that are hard to judge, and aiming that feels off. Naming the classic solutions, such as a drop shadow, a camera that pulls in near walls, and lock-on, helps your agent implement them.',toolIds:['claude-code','threejs','godot'],prompt:'My 3D platformer’s jumps are hard to judge. Add a soft round shadow directly under the player that is always visible, and make the camera move closer when a wall is between it and the player. Explain how to test both changes.'},
 deeper:{text:'For the 3D revolution:',items:[
  {label:'Game Maker’s Toolkit videos on 3D cameras',detail:'Clear explanations of how 3D cameras are designed.',url:'https://www.youtube.com/@GMTK'},
  {label:'The 3D Worlds course on this site',detail:'Cameras, depth, lighting, and 3D level design.'},
 ]},
 questions:[
  ['What problem did Ocarina of Time’s Z-targeting solve?',['Aiming in first person','Keeping track of one enemy while moving and fighting in 3D','Switching weapons quickly'],1,'Locking onto a target kept combat readable in a 3D space.'],
  ['Why do many 3D games show a shadow directly under a jumping character?',['It makes the scene look more realistic','It helps players judge where they will land','It shows the character’s health'],1,'A drop shadow is a classic depth cue that makes jumps easier to judge.'],
 ],
 summary:['Polygons, 3D graphics cards, and CD-ROMs enabled the jump to 3D.','Super Mario 64, Tomb Raider, and Ocarina of Time invented 3D cameras, movement, and lock-on combat.','Designers developed depth cues and camera rules that are still used today.'],
 teaser:'While worlds became three-dimensional, they were also becoming connected. Next: online play.',
 mechanics:['third-person','lock-on','first-person'],genres:['action-adventure','shooter','stealth'],
},
{
 id:'fh-online',
 goal:'Follow how games became connected, from text worlds and LAN parties to MMOs, digital stores, and esports.',
 story:[
  'A university computer lab in England, 1978. Two students, Roy Trubshaw and Richard Bartle, are building a world entirely of text: rooms, objects, and other players, all typing at once. They call it MUD, for Multi-User Dungeon. People connect from far away and find themselves sharing an imaginary space with strangers.',
  'Twenty-five years later, millions of people would share enormous 3D worlds. The idea at the heart of online games, that other people make the best content, started in that small lab.',
 ],
 hero:image('fh-08-hero','A 1990s LAN party in a garage: rows of bulky computers and CRT monitors, tangled cables, pizza boxes, and friends shouting and laughing at each other across the tables.','Friends at a 1990s LAN party with bulky computers, cables, and pizza.','A lively 1990s garage LAN party, rows of beige tower computers and bulky CRT monitors, tangled cables across the floor, pizza boxes stacked, friends laughing and pointing at each other across folding tables'),
 sections:[
  {title:'From text worlds to deathmatch',paragraphs:[
   'MUDs spread through universities in the 1980s, creating the first online communities in games: guilds, friendships, and rivalries in text. In 1993, Doom let players fight each other over local networks and modems in “deathmatch.” Friends began hauling their computers to each other’s houses for LAN parties, connecting machines with cables for nights of play.',
   'Quake (1996) and its update QuakeWorld made fast action playable over the internet. Players formed clans, ran servers, and organized tournaments.',
  ]},
  {title:'Massive worlds',paragraphs:[
   'In 1997, Ultima Online gave thousands of players one shared fantasy world, and its creator Richard Garriott popularized the term MMORPG (massively multiplayer online role-playing game). EverQuest (1999) followed. Then, in 2004, Blizzard released World of Warcraft, which made MMOs accessible to a vast audience and at its peak had more than 12 million subscribers.',
   'MMOs introduced design ideas still used everywhere: quests with clear markers, team roles such as tank and healer, guilds, raids that required dozens of coordinated players, and economies where players traded with each other.',
  ],timeline:{title:'Getting connected',events:[
   {year:1978,title:'MUD',text:'A shared text world at the University of Essex.'},
   {year:1993,title:'Doom deathmatch',text:'Players fight each other over networks and modems.'},
   {year:1997,title:'Ultima Online',text:'Thousands share one persistent fantasy world.'},
   {year:1998,title:'StarCraft',text:'Online strategy that becomes a televised sport in South Korea.'},
   {year:2000,title:'Counter-Strike',text:'A fan-made mod becomes one of the most played online games.'},
   {year:2003,title:'Steam',text:'Valve launches the platform that would reshape PC game distribution.'},
   {year:2004,title:'World of Warcraft',text:'MMOs reach millions of players.'},
  ]},media:image('fh-08-mmo','A huge fantasy city plaza filled with dozens of different player characters gathering, trading, dancing, and forming a group around a quest-giver.','A busy online fantasy city plaza full of player characters.','A sprawling original fantasy city plaza bustling with dozens of varied adventurers trading at stalls, dancing, chatting, and gathering around a quest-giver beneath colorful banners')},
  {title:'Strategy, mods, and esports',paragraphs:[
   'StarCraft (1998) and its online service became a national phenomenon in South Korea, where professional players competed in televised leagues. Counter-Strike began as a mod of Half-Life made by fans, then became one of the most played online games in the world. Defense of the Ancients, a fan-made map for Warcraft III, created the genre that became League of Legends (2009) and Dota 2 (2013).',
   'Online play also changed consoles. Xbox Live (2002) brought unified online services and voice chat to a console. Valve’s Steam (2003) began as a way to update Valve’s own games and grew into the main store for PC games, delivering them digitally rather than on discs.',
  ]},
  {title:'Watching games',paragraphs:[
   'In the 2010s, watching games became as popular as playing them. Twitch (2011) and YouTube made streamers and video creators into stars, and esports filled arenas. A game’s success could now depend on whether it was fun to watch, and on whether streamers chose to play it.',
   'For small developers, this created new opportunities. A single popular streamer playing your game can bring more players than a big advertising campaign.',
  ]},
 ],
 games:[
  {title:'Ultima Online',year:1997,platform:'PC',note:'A persistent world shared by thousands of players.'},
  {title:'StarCraft',year:1998,platform:'PC',note:'Online strategy that became a televised sport in South Korea.'},
  {title:'Counter-Strike',year:2000,platform:'PC',note:'A fan-made mod that grew into one of the biggest competitive games.'},
  {title:'World of Warcraft',year:2004,platform:'PC, Mac',note:'Made MMOs accessible to millions.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Spot it: what other players add',task:'Think of an online game you know and list what other players add that designers could not.',steps:['List three things that happen only because other people are playing.','Note one problem other players can cause.','Think how the design encourages the good and limits the bad.'],hints:['Consider trading, teamwork, surprises, rivalry, and griefing.','Look at features such as reporting, muting, matchmaking, and emotes.'],checks:['You named three positive contributions.','You named one problem and a design response.']},
 ai:{text:'Online multiplayer is one of the hardest features to build well, even with AI help: it involves servers, lag, cheating, and security. For a first game, build single-player or local multiplayer (several players on one screen). If you do explore online play later, ask your agent about established services rather than building everything from scratch.',toolIds:['claude-code'],prompt:'I want my game to have multiplayer someday. Explain in plain words the differences between local multiplayer, peer-to-peer online, and server-based online play, what each costs in effort and money, and which you would recommend for a beginner’s first multiplayer prototype.'},
 deeper:{text:'For online game history and design:',items:[
  {label:'Designing Virtual Worlds (Richard Bartle)',detail:'A deep book by MUD’s co-creator on online world design.'},
  {label:'Bartle’s player types',detail:'Achievers, explorers, socializers, and killers: a famous model of why people play online.'},
 ]},
 questions:[
  ['What did MUDs prove as early as 1978?',['That 3D graphics were possible on early computers','That sharing a game world with other people was compelling','That text games could sell in shops'],1,'Even in text, sharing a world with others created community and fun.'],
  ['Counter-Strike and Defense of the Ancients both began as…',['Fan-made mods of other games','Official sequels to older games','Browser games on Flash portals'],0,'Both were created by players modifying existing games, then grew into giants.'],
 ],
 summary:['Online play grew from text MUDs to deathmatch, LAN parties, and the internet.','MMOs, esports, and digital stores changed how games are played and sold.','Watching games became a major way players discover them.'],
 teaser:'Next: high definition, giant open worlds, and a console that got grandparents playing.',
 mechanics:['guilds','pvp','quests'],genres:['mmo','strategy','moba','shooter'],
},
{
 id:'fh-hd',
 goal:'Explore the HD era: open worlds, cinematic games, motion controls, and new expectations around budgets and online updates.',
 story:[
  'It is 2001, and a game lets you do something that feels almost forbidden: walk out of a mission and simply wander a city. You can drive anywhere, change the radio station, and watch the sun set over the bridge. The mission will wait. The city keeps living around you.',
  'Five years later, in living rooms across the world, grandparents are swinging a white remote like a tennis racket, laughing at a bowling game. Within one decade, games became huge cinematic worlds and simple, physical party games, and both found enormous audiences.',
 ],
 hero:image('fh-09-hero','A cozy living room in the late 2000s where three generations, kids, parents, and grandparents, play a motion-controlled bowling game together, everyone laughing.','Three generations playing a motion-controlled bowling game together.','A cozy late-2000s living room, three generations of one family laughing together as a grandparent swings a slim white motion controller like a bowling ball toward a bright TV'),
 sections:[
  {title:'Open worlds',paragraphs:[
   'Grand Theft Auto III (2001) put players in a living 3D city they could explore freely, and the open-world format spread across genres. Fantasy worlds such as The Elder Scrolls IV: Oblivion (2006) and Skyrim (2011), and westerns such as Red Dead Redemption (2010), let players wander vast landscapes full of quests and secrets.',
   'Open worlds changed level design. Instead of a path, designers created places with landmarks, systems that kept the world alive, such as daily routines and weather, and activities scattered across the map. The challenge became making a huge world feel meaningful rather than empty.',
  ]},
  {title:'Cinematic games',paragraphs:[
   'As graphics approached film quality, many games borrowed film techniques: motion-captured performances, orchestral scores, and dramatic camera work. Halo: Combat Evolved (2001) made console shooters feel epic. BioShock (2007) told much of its story through its underwater city. Mass Effect (2007) let choices carry across a trilogy. Uncharted (2007) and The Last of Us (2013) blended play and drama tightly.',
   'Budgets grew enormously. Large games now needed hundreds of developers, and companies became more cautious, favoring sequels. That caution would leave a gap that independent developers rushed to fill.',
  ],timeline:{title:'The HD era',events:[
   {year:2001,title:'Grand Theft Auto III and Halo',text:'A living 3D city, and a console shooter that felt epic.'},
   {year:2004,title:'Nintendo DS',text:'Two screens and a touchscreen in a handheld.'},
   {year:2005,title:'Xbox 360',text:'High definition and achievements arrive.'},
   {year:2006,title:'Wii and PlayStation 3',text:'Motion controls bring new players; HD continues.'},
   {year:2007,title:'BioShock, Portal, Mass Effect',text:'A landmark year for storytelling and design.'},
   {year:2011,title:'Skyrim',text:'A vast open world that players explored for years.'},
  ]},media:image('fh-09-open-world','A traveler on horseback at the edge of a cliff overlooking a vast open-world landscape: forests, a distant city, mountains, a winding river, and a sunset sky.','A rider overlooking a vast open-world landscape at sunset.','A lone traveler on horseback at a cliff edge overlooking a sweeping open landscape of forests, a winding river, a distant walled city, snowy mountains, and a glowing sunset sky')},
  {title:'Motion and touch',paragraphs:[
   'Nintendo took a different path. The Nintendo DS (2004) offered two screens and a touchscreen, and games such as Brain Age and Nintendogs reached people who had never owned a console. The Wii (2006) used a motion-sensing remote. Wii Sports let families swing, bowl, and box, and the Wii sold over 100 million units.',
   'These successes showed that new kinds of input could bring entirely new audiences. Microsoft’s Kinect (2010) and Sony’s PlayStation Move (2010) followed with their own motion controls.',
  ]},
  {title:'Always connected',paragraphs:[
   'The Xbox 360 (2005) introduced achievements, giving players optional goals and bragging rights. Games began receiving patches and downloadable content (DLC) after release. That made fixing bugs easier, but also raised debates about games being released unfinished or sold in pieces.',
   'For developers, the lesson is double-edged: updates let you improve a game based on player feedback, but a game should still feel complete and respectful of the player’s time on day one.',
  ]},
 ],
 games:[
  {title:'Grand Theft Auto III',year:2001,platform:'PlayStation 2',note:'A free-roaming 3D city that defined the modern open world.'},
  {title:'BioShock',year:2007,platform:'PC, Xbox 360',note:'An underwater city that told its story through its environments.'},
  {title:'Wii Sports',year:2006,platform:'Wii',note:'Motion controls that brought entire families to games.'},
  {title:'The Elder Scrolls V: Skyrim',year:2011,platform:'PC, PS3, Xbox 360',note:'A vast world full of quests, secrets, and player-made mods.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Spot it: a full map, or an empty one?',task:'Watch someone travel across an open-world map for a few minutes and note what keeps it interesting.',steps:['Count how often something new catches the player’s attention.','List the types of things: landmarks, enemies, characters, items.','Decide whether the world felt full or empty, and why.'],hints:['Good open worlds place something interesting within sight most of the time.','Weather and day-night cycles make the same place feel different.'],checks:['You recorded at least five points of interest.','You can explain what made the world feel alive or empty.']},
 ai:{text:'Open worlds are tempting and enormous. With AI help you can generate terrain, props, and even quest text quickly, but each piece still needs design, testing, and polish. If you love big worlds, start with a small “open area”: a single valley with a few points of interest, designed carefully.',toolIds:['claude-code','meshy','polyhaven','quaternius'],prompt:'Help me design a small open area for a 3D game: one valley about the size of a few city blocks. Suggest one landmark visible from everywhere, five points of interest, and how players are guided between them without markers. Keep it small enough to build in two weeks.'},
 deeper:{text:'For this era’s design ideas:',items:[
  {label:'GDC Vault: Skyrim’s modular level design',detail:'Bethesda shared how they built huge worlds from reusable pieces.',url:'https://gdcvault.com/'},
  {label:'Blood, Sweat, and Pixels (Jason Schreier)',detail:'How large and small teams made games in this era.'},
 ]},
 questions:[
  ['What design challenge do open worlds create?',['Making a huge space feel meaningful rather than empty','Fitting everything onto a single disc','Teaching players to read a map'],0,'Space is easy to make; interesting space is the hard part.'],
  ['How did the Wii reach new audiences?',['By having the most powerful graphics of its generation','With motion controls simple enough for families to understand instantly','By being the cheapest console ever made'],1,'Swinging a remote like a racket needed no explanation.'],
 ],
 summary:['Open worlds spread from Grand Theft Auto III across many genres.','Cinematic games grew budgets and teams enormously.','Motion and touch brought new players; online updates changed how games evolve.'],
 teaser:'Next: games slip into pockets and browser tabs, and billions of people start playing.',
 mechanics:['open-world','achievements','environmental-storytelling'],genres:['open-world','shooter','sports'],
},
{
 id:'fh-mobile',
 goal:'Trace how phones, browsers, and social networks brought games to billions of players, and what designing for them requires.',
 story:[
  'It is 1998, and a businessman on a train is staring intently at his phone. Not at a message. At a tiny black line made of square pixels, slithering around a green screen, eating dots and growing longer. Snake came pre-installed on millions of Nokia phones. For many people, it was the first video game they ever played regularly.',
  'A decade later, phones had touchscreens and app stores, and games reached more people than ever before. Today, more people play on phones than on any other kind of device.',
 ],
 hero:image('fh-10-hero','A late-1990s commuter train carriage where a passenger in a suit stares intently at a small monochrome mobile phone screen showing a pixel snake, while other passengers glance over curiously.','A commuter absorbed in a snake game on an old mobile phone.','A late-1990s commuter train carriage, a passenger in a suit absorbed in a small greenish monochrome phone screen showing a pixel snake chasing a dot, other passengers glancing over curiously'),
 sections:[
  {title:'Games in the browser',paragraphs:[
   'In the late 1990s and 2000s, millions played free games in web browsers, many made with Adobe Flash on portals such as Newgrounds. Flash was a playground for young developers; many professional careers and famous indie games began there. Casual games such as Bejeweled (2001) reached people who did not see themselves as gamers.',
   'Social networks became platforms too. FarmVille (2009) on Facebook had tens of millions of players, built around friends helping each other. Flash itself was retired at the end of 2020, but browser games live on with modern web technology, and the browser remains one of the easiest places to share a game.',
  ]},
  {title:'The App Store moment',paragraphs:[
   'The iPhone launched in 2007, and its App Store opened in 2008, letting anyone publish games to millions of phones. Touchscreens demanded new designs: Angry Birds (2009) used a simple finger-fling; Fruit Ninja (2010) used swipes. Prices fell quickly, and many games became free to download, earning money through in-app purchases or adverts.',
   'This free-to-play model brought huge audiences and big revenues, along with criticism of designs that pressure players to spend. Candy Crush Saga (2012) and Clash of Clans (2012) became enormous businesses. By the late 2010s, mobile games earned more than any other part of the games market.',
  ],timeline:{title:'Pockets and browsers',events:[
   {year:1997,title:'Snake on Nokia phones',text:'A pre-installed game becomes many people’s first.'},
   {year:2001,title:'Bejeweled',text:'Casual browser games reach a new audience.'},
   {year:2008,title:'App Store',text:'Anyone can publish games to millions of phones.'},
   {year:2009,title:'Angry Birds and FarmVille',text:'Touch flinging, and friends farming on Facebook.'},
   {year:2012,title:'Candy Crush Saga',text:'Free-to-play puzzle games become huge businesses.'},
   {year:2016,title:'Pokémon Go',text:'Players walk outside to catch creatures on real streets.'},
  ]}},
  {title:'Designing for pockets',paragraphs:[
   'Mobile players often play in short bursts, with one hand, in noisy places, with interruptions. Successful mobile games have quick sessions, clear touch controls, readable visuals on small screens, and progress that saves instantly. Many work without sound.',
   'Pokémon Go (2016) turned the phone’s location and camera into the game, sending millions of people outside. Monument Valley (2014) showed that premium, beautifully crafted puzzle games could thrive on phones too.',
  ],media:image('fh-10-pokewalk','A group of friends in a park at golden hour, phones raised, following glowing creature footprints on the path, with small creatures hinted at in the bushes.','Friends in a park following glowing creature tracks with their phones.','A group of friends walking through a city park at golden hour, phones raised, following glowing pawprint trails on the path, small original creatures peeking from bushes and trees')},
  {title:'A platform for beginners',paragraphs:[
   'Phones and browsers are wonderful targets for small games: one-screen designs, simple controls, and short sessions are exactly what beginners can build well. The browser in particular needs no store approval at all. Your game can be a link, sent to a friend in seconds.',
  ]},
 ],
 games:[
  {title:'Snake',year:1997,platform:'Nokia mobile phones',note:'Pre-installed on millions of phones; for many people, their first video game.'},
  {title:'Angry Birds',year:2009,platform:'iPhone, then everywhere',note:'A finger-fling mechanic perfectly fitted to touchscreens.'},
  {title:'Candy Crush Saga',year:2012,platform:'Facebook, then mobile',note:'Short sessions and free-to-play design on a massive scale.'},
  {title:'Pokémon Go',year:2016,platform:'iOS, Android',note:'The real world as the game map.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Try it: the one-thumb test',task:'Design a game that can be played with one thumb in thirty-second sessions.',steps:['Choose a single touch gesture: tap, hold, drag, or swipe.','Describe the goal of one thirty-second round.','Describe what improves between rounds.'],hints:['Many great mobile games use just one gesture.','Rounds that end quickly encourage “just one more.”'],checks:['The game needs only one thumb.','A round fits in about thirty seconds.']},
 ai:{text:'One-gesture browser games are ideal first projects with a coding agent: small, testable, and shareable as a link. Ask the agent to make the game work with both mouse and touch, and to scale to phone screens.',toolIds:['claude-code','phaser','github-pages','itch'],prompt:'Build a one-gesture browser game: [describe]. It must work with mouse and touch, scale to phone screens in portrait, run each round in about 30 seconds, and save the best score in the browser. Use plain shapes first.'},
 deeper:{text:'For mobile and web game history:',items:[
  {label:'Newgrounds',detail:'The long-running home of Flash-era games and animation, still active today.',url:'https://www.newgrounds.com/'},
  {label:'Flashpoint Archive',detail:'A preservation project that has saved well over a hundred thousand web games and animations.',url:'https://flashpointarchive.org/'},
 ]},
 questions:[
  ['Which design fits mobile players best?',['Long sessions requiring many buttons','Short sessions with simple touch controls and instant saving','Tiny text and detailed menus'],1,'Mobile play happens in short, interrupted bursts with touch input.'],
  ['What was significant about the App Store opening in 2008?',['It let anyone publish games to millions of phones','It introduced the first games on mobile phones','It made every mobile game free'],0,'It opened a huge new platform to developers large and small.'],
 ],
 summary:['Browser and social games reached people who did not see themselves as gamers.','App stores, touchscreens, and free-to-play reshaped the market.','Short sessions and simple input make mobile and web ideal for small games.'],
 teaser:'Next: the indie revolution, when small teams, and sometimes one person, made some of the most loved games ever.',
 mechanics:['match-three','physics-puzzle'],genres:['casual','puzzle'],
},
{
 id:'fh-indie',
 goal:'Understand the indie revolution: how small teams and solo developers reached players, and what their successes teach.',
 story:[
  'In 2004, a Japanese developer known as Pixel released a free game he had made alone in his spare time over about five years: a side-scrolling adventure called Cave Story. He wrote the code, drew the art, composed the music, and wrote the story. Players around the world translated it and passed it along.',
  'A few years later, small independent games were winning awards, selling millions, and inspiring a documentary. Big studios had grown cautious. Indie developers, free to experiment, filled the gap with games full of personality.',
 ],
 hero:image('fh-11-hero','A single developer at a small desk late at night, surrounded by sketches, sticky notes, and a cat, with a glowing monitor showing a charming pixel-art game; through the window, a city of lit windows where other developers are working too.','A solo developer working late at night on a pixel-art game, with other lit windows across the city.','A solo developer at a cluttered desk late at night, sketches and sticky notes everywhere, a sleeping cat, a glowing monitor showing a charming pixel-art cave game; through the window, a city of lit windows where other makers work too'),
 sections:[
  {title:'New doors open',paragraphs:[
   'Three things made the indie revolution possible. Digital stores, such as Xbox Live Arcade, Steam, and later itch.io, let small games reach players without printing discs. Affordable and free tools appeared: Unity introduced a free version in 2009, GameMaker grew popular, Unreal Engine 4 became free to use in 2015, and Godot was released as open source in 2014. And the internet let developers build communities directly.',
   'Crowdfunding helped too. In 2012, a Kickstarter campaign for an adventure game by Double Fine raised over three million dollars, proving players would fund games directly.',
  ]},
  {title:'The breakout years',paragraphs:[
   'Braid (2008), made by Jonathan Blow, used time-rewinding puzzles to tell a mysterious story. World of Goo (2008) was made by two people. Super Meat Boy (2010) offered brutally precise platforming. Minecraft, released early in 2009, grew into one of the best-selling games of all time. The documentary Indie Game: The Movie (2012) brought these stories to a wider audience.',
   'Indie games were often defined by a single strong idea: a mechanic, an art style, or an emotion that a bigger studio might have considered too risky.',
  ],timeline:{title:'The indie revolution',events:[
   {year:2004,title:'Cave Story',text:'A free game made by one person over about five years.'},
   {year:2008,title:'Braid and World of Goo',text:'Tiny teams win awards and audiences.'},
   {year:2009,title:'Minecraft (early release)',text:'A solo project grows into a phenomenon.'},
   {year:2014,title:'Godot goes open source',text:'A full engine becomes free for everyone.'},
   {year:2015,title:'Undertale',text:'A crowdfunded game made largely by one person.'},
   {year:2016,title:'Stardew Valley',text:'One developer, about four years, millions of players.'},
   {year:2018,title:'Celeste',text:'A game-jam prototype becomes a beloved platformer.'},
  ]}},
  {title:'One person, one vision',paragraphs:[
   'Undertale (2015), largely made by Toby Fox, let players spare every enemy and remembered their choices. Stardew Valley (2016), made by Eric Barone, revived the farming game. Hollow Knight (2017) from a tiny team, Celeste (2018), Hades (2020), Vampire Survivors (2022), and Balatro (2024) all showed small teams producing some of the most acclaimed games of their years.',
   'These games share traits worth copying: a focused core loop, a distinctive style the team could actually produce, and years of patient iteration, often with players involved through early access or community feedback.',
  ],media:image('fh-11-shelf','A bookshelf-style display of small handmade game boxes, each with a unique hand-drawn style: a farm, a knight, a mountain, a skull, a deck of cards, each glowing with personality.','A shelf of distinctive indie game boxes in many hand-made styles.','A wooden shelf displaying small hand-made game boxes with unique original art styles: a cozy farm, a tiny knight, a snowy mountain, a cheerful skull, a deck of cards, each softly glowing')},
  {title:'The indie path today',paragraphs:[
   'Today, thousands of indie games release every year, and getting noticed is harder than in 2010. But the tools are better and cheaper than ever, game jams offer a supportive way to start, and AI tools can fill skill gaps. The lesson of the indie revolution remains: a small, focused, personal game can find its audience.',
  ]},
 ],
 games:[
  {title:'Braid',year:2008,platform:'Xbox 360, then PC',note:'Time-rewinding puzzles and a mysterious story from a solo designer.'},
  {title:'Minecraft',year:2011,platform:'PC, then everywhere',note:'A solo project, sold while in development, that became the best-selling game ever.'},
  {title:'Undertale',year:2015,platform:'PC, then consoles',note:'Crowdfunded and made largely by one person.'},
  {title:'Stardew Valley',year:2016,platform:'PC, then everywhere',note:'One developer, about four years, and a revived genre.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Spot it: the one strong idea',task:'Pick three indie games and write the one strong idea at the heart of each.',steps:['Choose three indie games you know or can look up.','Write each game’s strong idea in one sentence.','Write the one strong idea for a game you could make.'],hints:['Braid: “what if you could rewind time, and the puzzles depended on it?”','A strong idea is usually a mechanic, a style, or a feeling.'],checks:['Each sentence names a mechanic, style, or feeling.','Your own idea is small enough for one person.']},
 ai:{text:'AI tools are part of a long tradition of new tools opening game-making to more people, from free engines to digital stores. They help most when you bring what successful indie developers brought: a focused idea, a consistent style, and patience to iterate with player feedback.',toolIds:['claude-code','godot','itch','kenney'],prompt:'My game’s one strong idea is: [idea]. Help me find the smallest playable version that proves it, list what I could cut, and suggest how to show it to players early (for example, a game jam or an itch.io page).'},
 deeper:{text:'Indie stories and resources:',items:[
  {label:'Indie Game: The Movie (2012)',detail:'A documentary following the makers of Super Meat Boy, Fez, and Braid.'},
  {label:'Spelunky (Derek Yu, Boss Fight Books)',detail:'The designer of Spelunky on making an indie game.'},
  {label:'itch.io game jams',detail:'Find a jam and make your first game alongside others.',url:'https://itch.io/jams'},
 ]},
 questions:[
  ['Which change helped make the indie revolution possible?',['Digital stores and free or cheap engines','Big publishers funding small teams','More powerful consoles'],0,'Digital distribution and accessible tools let small teams reach players directly.'],
  ['What do many successful indie games have in common?',['Large budgets and big teams','A focused idea, an achievable style, and long iteration','Realistic graphics'],1,'Focus and persistence matter more than scale.'],
 ],
 summary:['Digital stores, affordable engines, and crowdfunding opened game-making to small teams.','Indie games are often built around one strong, risky idea.','Focus, achievable style, and iteration with players are the lessons to borrow.'],
 teaser:'Final chapter: live worlds, creators, virtual reality, AI, and your place in the story.',
 mechanics:['time-rewind','farming'],genres:['platformer','life-sim','sandbox'],
},
{
 id:'fh-today',
 goal:'See the current landscape, including live-service games, creator platforms, streaming, VR, handheld PCs, and AI tools, and where you fit in it.',
 story:[
  'Somewhere right now, a twelve-year-old is publishing a game inside Roblox that will be played by thousands of strangers by the weekend. A streamer is discovering a tiny indie game live in front of fifty thousand viewers. A developer is wearing a headset, testing whether a VR sword swing feels right. And someone, maybe you, is describing a game idea to an AI agent and watching the first version appear in a browser tab.',
  'Game history is not finished. It is happening now, and the barriers to joining it have never been lower.',
 ],
 hero:image('fh-12-hero','A collage-like scene of modern play: a kid building in a block world on a tablet, a streamer laughing at a webcam, someone in a VR headset swinging an arm, and a person at a laptop with a friendly AI assistant icon beside a game in progress.','A collage of modern play: creators, streamers, VR, and a person building a game with AI.','A lively modern collage: a child building with blocks on a tablet, a streamer laughing at a webcam with ring light, a person in a VR headset mid-swing, and a maker at a laptop with a small friendly robot helper beside an in-progress game'),
 sections:[
  {title:'Games that never end',paragraphs:[
   'Many of today’s biggest games are live services: they are updated with new content for years, often free to play and funded by cosmetic purchases and seasonal passes. Fortnite added its battle royale mode in 2017 and became a cultural phenomenon, hosting in-game concerts and events. Live games are run more like ongoing shows than finished products.',
   'At the same time, platforms such as Roblox and Minecraft became places where players create games for each other. Roblox gives millions of young creators a way to build and publish experiences, and Fortnite added tools for players to build their own islands.',
  ]},
  {title:'Watch, stream, discover',paragraphs:[
   'Streaming and video changed how games are discovered. Among Us, released in 2018 to little attention, exploded in 2020 when streamers started playing it. Games designed to create funny, surprising, or tense moments spread fastest, because those moments are fun to watch and share.',
   'For a small developer, this means a short, surprising, shareable game can find an audience without a marketing budget.',
  ],timeline:{title:'Live worlds, creators, and AI',events:[
   {year:2011,title:'Twitch',text:'Live-streaming games becomes mainstream.'},
   {year:2016,title:'Consumer VR headsets',text:'Oculus Rift and HTC Vive bring room-scale VR to homes.'},
   {year:2017,title:'Nintendo Switch and Fortnite Battle Royale',text:'A hybrid console and a free-to-play phenomenon.'},
   {year:2020,title:'Among Us breaks out',text:'Streamers turn a two-year-old game into a hit.'},
   {year:2022,title:'Steam Deck',text:'PC games become handheld.'},
   {year:2024,title:'AI tools spread',text:'Coding agents and asset generators enter everyday game-making, along with new debates about their use.'},
  ]},media:image('fh-12-stream','A cozy streamer’s room: a person laughing at a monitor showing a small quirky indie game, with a side panel of colorful chat bubbles reacting.','A streamer laughing while playing a quirky indie game with chat reacting.','A cozy streaming setup with string lights, a person laughing at a monitor showing a quirky original indie game, a side panel full of colorful chat bubbles and emoji reactions')},
  {title:'New hardware, new ways to play',paragraphs:[
   'Virtual reality matured with headsets such as the Oculus Rift and HTC Vive (2016) and the standalone Quest (2019). Beat Saber (2019) and Half-Life: Alyx (2020) showed what VR could do. The Nintendo Switch (2017) blurred the line between home console and handheld, and Valve’s Steam Deck (2022) put PC libraries into a handheld device.',
   'Each new device creates new design questions, just as 3D and touchscreens did before. The foundations you are learning, such as loops, controls, cameras, and feedback, apply to all of them.',
  ]},
  {title:'AI and you',paragraphs:[
   'In the 2020s, AI tools arrived in game development: coding agents that build from descriptions, generators for images, 3D models, sound, and music, and assistants for writing and testing. They raise real questions about jobs, credit, consent, and copyright, and stores such as Steam ask developers to disclose AI-generated content. Thoughtful use means respecting licenses, being honest with players, and putting your own design at the center.',
   'Used well, these tools are the latest step in a seventy-year story of games becoming easier to make, from room-sized computers to home computers, free engines, and now AI helpers. Every era’s tools let new people bring new ideas. The next chapter of game history might be yours.',
  ]},
 ],
 games:[
  {title:'Fortnite',year:2017,platform:'PC, consoles, mobile',note:'A live-service world that hosts events and player-made islands.'},
  {title:'Among Us',year:2018,platform:'PC and mobile, then consoles',note:'Discovered by streamers two years after release.'},
  {title:'Beat Saber',year:2019,platform:'VR headsets',note:'Proved that VR’s physical movement could be the whole game.'},
  {title:'Roblox',year:2006,platform:'PC, mobile, consoles',note:'A platform where millions of players create games for each other.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Try it: your place in the timeline',task:'Write the entry for your own first game on the timeline of game history.',steps:['Give your game a title and a year.','Write one sentence about what it does.','Name one game from history that inspired it.'],hints:['Choose a game small enough to finish this year.','Inspiration can come from any era in this course.'],checks:['Your entry is one sentence long.','It names a historical inspiration.']},
 ai:{text:'You now have more tools available than any developer in history. Use them as a crew, not a replacement for your judgement: you decide what the game is, what is good enough, and what is honest to players. The hands-on ladder courses on this site will guide you from a first browser game to a released original game.',toolIds:['claude-code','godot-mcp','pixellab','meshy','suno','itch'],prompt:'I just learned the history of video games. Suggest five small game ideas, each inspired by a different era (arcade, 8-bit, 16-bit, early 3D, indie), that a beginner could build in a weekend with a coding agent. For each, name the classic game it borrows from and the one twist that makes it new.'},
 deeper:{text:'Keep exploring:',items:[
  {label:'Video Game History Foundation',detail:'Preservation and stories from every era.',url:'https://gamehistory.org/'},
  {label:'Steam’s AI content disclosure',detail:'Search for Steam’s current rules on disclosing AI-generated content before you publish.'},
  {label:'The hands-on ladder',detail:'Start with Browser 2D or Godot 2D, Level 1.'},
 ]},
 questions:[
  ['What best describes a live-service game?',['A game updated with new content for years after release','A game that streams from the cloud','A game broadcast live on television'],0,'Live-service games evolve continuously, often funded by cosmetics and seasons.'],
  ['What is a responsible way to use AI tools in game development?',['Hide their use from players and ignore licenses','Respect licenses, be honest with players, and keep your own design at the center','Let the AI decide everything'],1,'Good practice includes honest disclosure, respecting rights, and human design judgement.'],
 ],
 summary:['Live services, creator platforms, and streaming reshaped how games are made and found.','VR, hybrid consoles, and handheld PCs bring new design questions.','AI tools are the latest step in making games easier to create; use them thoughtfully.'],
 teaser:'You’ve travelled seventy years of games. Next, step inside 2D and 3D worlds to learn how they are built.',
 mechanics:['shrinking-zone','emotes','social-deduction'],genres:['battle-royale','party','rhythm'],
},
];
