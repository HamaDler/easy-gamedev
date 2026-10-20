import type { ChapterSeed } from '../lesson-builder';
import { image } from './media';

export const historySeedsA: ChapterSeed[] = [
{
 id:'fh-labs',
 goal:'Discover how the first video games were born as experiments and demonstrations in laboratories and universities.',
 story:[
  'October 1958. Brookhaven National Laboratory in New York holds its annual visitors’ day. The exhibits are serious: radiation, reactors, the physics of the very small. But one corner is crowded with laughing visitors. On a small round oscilloscope screen, a bright dot arcs over a line, and two people twist knobs and press buttons to hit it back and forth.',
  'The physicist William Higinbotham built it in a few weeks because he thought the displays were dull, and he wanted to show that science could be fun. He called it Tennis for Two. He never patented it. He had no idea he was standing at the beginning of something that would one day be bigger than the film and music industries combined.',
 ],
 hero:image('fh-01-hero','A 1950s laboratory open day: visitors in period clothing crowd around a small round oscilloscope screen showing a glowing dot arcing over a net line, while two players hold boxy controllers.','Visitors in the 1950s crowding around an oscilloscope tennis game.'),
 sections:[
  {title:'Machines that played',paragraphs:[
   'Even before Tennis for Two, computers had played games. In 1951, a machine called Nimrod played the ancient strategy game Nim at the Festival of Britain, showing off what computers could do. In 1952, a Cambridge student, A. S. Douglas, programmed the EDSAC computer to play noughts and crosses (tic-tac-toe) on a tiny screen as part of his research into how people interact with machines.',
   'These were demonstrations and experiments, not products. Computers filled entire rooms, cost fortunes, and belonged to universities, governments, and laboratories. Nobody imagined owning one at home.',
  ],timeline:{title:'Before the arcade',events:[
   {year:1951,title:'Nimrod',text:'A computer built to play the game Nim is shown at the Festival of Britain.'},
   {year:1952,title:'OXO',text:'Noughts and crosses on the EDSAC computer at Cambridge.'},
   {year:1958,title:'Tennis for Two',text:'A tennis game on an oscilloscope delights laboratory visitors.'},
   {year:1962,title:'Spacewar!',text:'Students at MIT create a two-player space battle on the PDP-1.'},
   {year:1971,title:'Computer Space',text:'The first commercially sold coin-operated video game.'},
   {year:1972,title:'Magnavox Odyssey',text:'The first home video game console goes on sale.'},
  ]}},
  {title:'Spacewar! and the hacker spirit',paragraphs:[
   'In 1962, a group of students and staff at the Massachusetts Institute of Technology, led by Steve Russell, wrote Spacewar! for a new computer called the PDP-1. Two players piloted spaceships around a star whose gravity pulled them in, firing torpedoes and escaping with a risky hyperspace jump.',
   'Spacewar! spread from university to university as copies of its program travelled with the machines. Others improved it, added features, and passed it on. That culture of sharing and modifying is still alive today in game jams, open-source engines, and mods. Spacewar! even contained ideas, such as gravity, limited fuel, and a desperate escape button, that game designers still use.',
  ],media:image('fh-01-spacewar','Two university students in the early 1960s hunched over a large computer console with a round screen showing two tiny spaceships circling a glowing star.','Two students playing a space battle game on an early 1960s computer.')},
  {title:'From lab to living room',paragraphs:[
   'Meanwhile, an engineer named Ralph Baer had a different dream: a game you could play on the television already in your living room. Working at a defence electronics company in the late 1960s, he built a series of prototypes, the last nicknamed the “Brown Box.” In 1972, Magnavox released it as the Odyssey, the first home video game console.',
   'The Odyssey had no sound and could not keep score. Players taped colored plastic overlays onto their TV screens to add backgrounds, and kept score with paper. It was simple, but it proved something new: games could live at home.',
  ]},
  {title:'The first coin in the slot',paragraphs:[
   'In 1971, two engineers, Nolan Bushnell and Ted Dabney, turned the Spacewar! idea into a coin-operated machine called Computer Space. It looked futuristic, with a curvy fibreglass cabinet, but its controls were complicated for people who had never seen a video game. It sold modestly.',
   'Bushnell learned a lesson that would shape the next decade: a game for the public must be understood in seconds. His next company would prove it, with a game so simple its instructions fit on a single line.',
  ]},
 ],
 games:[
  {title:'Tennis for Two',year:1958,platform:'Analog computer and oscilloscope',note:'Built to make a science open day more fun; often called one of the first video games.'},
  {title:'Spacewar!',year:1962,platform:'PDP-1',note:'Gravity, fuel, and hyperspace in a game shared freely between universities.'},
  {title:'Magnavox Odyssey',year:1972,platform:'Home console',note:'No sound, no score, plastic TV overlays, and the start of home gaming.'},
  {title:'Computer Space',year:1971,platform:'Arcade',note:'The first commercial arcade video game, too complicated for its moment.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Try it: play a piece of history',task:'Find an emulated or recreated version of Spacewar! or Tennis for Two and play it for five minutes.',steps:['Search for “Spacewar! online emulator” or a Tennis for Two recreation video.','Play or watch for five minutes.','List which modern game ideas you can already see.'],hints:['Look for gravity, limited resources, and an emergency escape.','Notice how quickly you understand the goal.'],checks:['You identified at least two ideas still used today.','You can explain why the game was fun with so little.']},
 ai:{text:'History is a library of ideas you can borrow. Ask an AI assistant to explain an old game’s rules, then ask your coding agent to build a tiny modern version with one twist. Recreating a classic is one of the best first projects: the rules are already proven.',toolIds:['claude-code','phaser'],prompt:'Explain the rules of Spacewar! (1962) in plain words. Then help me plan a tiny browser version with one modern twist: [twist]. List the smallest set of features needed for a playable first version.'},
 deeper:{text:'To explore the earliest games:',items:[
  {label:'Video Game History Foundation',detail:'A non-profit preserving and explaining game history.',url:'https://gamehistory.org/'},
  {label:'The Strong National Museum of Play',detail:'Home of the World Video Game Hall of Fame.',url:'https://www.museumofplay.org/'},
  {label:'Replay: The History of Video Games (Tristan Donovan)',detail:'A readable history from the very beginning.'},
 ]},
 questions:[
  ['Why did William Higinbotham build Tennis for Two?',['To sell it as the first home console','To make a laboratory open day more fun for visitors','To test radar displays for the military'],1,'He wanted visitors to enjoy the exhibits. He never patented the idea.'],
  ['What made the Magnavox Odyssey historically important?',['It was the first coin-operated arcade game','It was the first home video game console','It was the first game with color graphics'],1,'Released in 1972, it brought video games into living rooms for the first time.'],
  ['What lesson did Computer Space teach its creators?',['Public games must be understood in seconds','Arcade games need detailed graphics to sell','Players prefer complex controls they can master'],0,'Its complicated controls confused players; the next hit would be extremely simple.'],
 ],
 summary:['The first games were experiments and demonstrations in labs and universities.','Spacewar! began a culture of sharing and modifying games.','The Odyssey brought games home; Computer Space opened the arcade, and taught that simplicity matters.'],
 teaser:'Next: a simple game of electronic table tennis starts an industry.',
 genres:['shooter','sports'],
},
{
 id:'fh-pong',
 goal:'See how Pong and Atari created the video game industry, and how home consoles with swappable cartridges changed everything.',
 story:[
  'Sunnyvale, California, 1972. Andy Capp’s Tavern is a small bar with a pinball machine and a jukebox. One evening a new wooden cabinet appears in the corner. Its screen shows two white paddles and a square ball. The instructions say simply: “Avoid missing ball for high score.”',
  'A couple of weeks later, the bar owner calls the young company that installed it. The machine has stopped working. An engineer drives over, opens the cabinet, and finds the problem: the coin box is so full of quarters that it has jammed. The company was Atari, the game was Pong, and an industry had just been born.',
 ],
 hero:image('fh-02-hero','A cozy 1970s bar at night, with a group of people gathered around a wooden arcade cabinet showing a simple paddle-and-ball game, a jukebox glowing in the background.','People gathered around an early paddle game cabinet in a 1970s bar.'),
 sections:[
  {title:'Simple enough for anyone',paragraphs:[
   'Pong was created by engineer Allan Alcorn, originally as a training exercise set by Atari’s founder Nolan Bushnell. Its genius was its simplicity: one knob, one rule, and immediate feedback. You could understand it by watching someone else for five seconds. It also added sound, the famous “pong” blip, which made every hit satisfying.',
   'Pong’s success spawned a wave of copies and variations, many from other companies. It also showed that games were social: two people playing side by side, with onlookers waiting their turn.',
  ]},
  {title:'Cartridges change the home',paragraphs:[
   'Early home consoles, including home versions of Pong, could play only the games built into them. The breakthrough was the cartridge: a plug-in module containing a game, so one console could play many. The Fairchild Channel F (1976) pioneered this, and the Atari Video Computer System, later called the Atari 2600, made it a hit after its 1977 launch.',
   'Separating the machine from the games created a new business: selling games for a console you already own. It also created new jobs: people whose whole work was designing games.',
  ],timeline:{title:'Building an industry',events:[
   {year:1972,title:'Atari and Pong',text:'Atari is founded, and Pong becomes a hit in bars and arcades.'},
   {year:1975,title:'Home Pong',text:'A home version of Pong sells through a major department store.'},
   {year:1976,title:'Fairchild Channel F',text:'One of the first consoles with interchangeable cartridges.'},
   {year:1977,title:'Atari 2600',text:'The cartridge console that brought arcade hits home.'},
   {year:1979,title:'Activision',text:'Former Atari programmers start the first independent console game publisher.'},
  ]}},
  {title:'Designers want their names',paragraphs:[
   'At Atari, programmers designed entire games alone, but their names appeared nowhere. Warren Robinett, creator of the 1980 Atari 2600 game Adventure, hid a secret room containing his name, one of the most famous early Easter eggs. Players had to carry an almost invisible single-pixel dot to a particular wall to find it.',
   'In 1979, several top Atari programmers left to found Activision, the first independent company making games for someone else’s console. Activision put its designers’ names on boxes and in manuals. It was the start of game developers being seen as creators.',
  ],media:image('fh-02-easter-egg','A tiny hidden room in a blocky early-console style game, with a glowing secret message on the wall, and a small square hero entering it.','A small hero discovering a secret room with a glowing message in a blocky early game.')},
  {title:'Lessons from the Pong era',paragraphs:[
   'Three lessons from this era still guide designers. Teach in seconds: Pong needed only one sentence. Feedback is fun: the blip of each hit mattered. And social play sells itself: crowds gathering behind players were the best advertisement any game could have.',
   'Notice, too, that every one of these games was made by tiny teams, often by one person. The idea that a single creator can make a game people love is not new. It is where the medium began.',
  ]},
 ],
 games:[
  {title:'Pong',year:1972,platform:'Arcade',note:'One knob, one rule, and a satisfying sound.'},
  {title:'Combat',year:1977,platform:'Atari 2600',note:'Included with the 2600: two-player tank and plane battles at home.'},
  {title:'Adventure',year:1980,platform:'Atari 2600',note:'An early action-adventure with a famous hidden room crediting its designer.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Try it: the one-sentence test',task:'Write a one-sentence instruction for a game idea of your own, in the spirit of “Avoid missing ball for high score.”',steps:['Pick a simple game idea.','Write its instructions in one sentence.','Ask a friend to explain the game back to you from that sentence alone.'],hints:['Use a verb and a goal: “Catch the falling stars before they touch the ground.”','If you need “and then”, the idea might be too complex for a first game.'],checks:['Your sentence contains a verb and a goal.','A friend could explain the game from it.']},
 ai:{text:'Pong-like games are a classic first project with a coding agent. Ask for the simplest version, then add one twist at a time, such as a shrinking paddle, a second ball, or gravity. Each twist is a small, testable change, which is exactly how agents work best.',toolIds:['claude-code','cursor','phaser'],prompt:'Build a two-player Pong game for the browser in a single HTML file: paddles on W/S and Up/Down keys, a ball that speeds up slightly after each hit, a score to 7, and a short sound on each hit. Use plain shapes only. Then suggest three one-rule twists I could add next.'},
 deeper:{text:'For more on Atari and early console history:',items:[
  {label:'Racing the Beam (Nick Montfort & Ian Bogost)',detail:'How the Atari 2600’s strange hardware shaped its games.'},
  {label:'The Ultimate History of Video Games (Steven L. Kent)',detail:'Interviews and stories from the founders of the industry.'},
 ]},
 questions:[
  ['What was the key innovation of cartridge-based consoles?',['They made games look much better','One console could play many games sold separately','They allowed players to save their progress'],1,'Cartridges separated games from hardware, creating the business of selling games for consoles.'],
  ['Why did Warren Robinett hide his name inside Adventure?',['Programmers were not credited for their games','To test whether players read the manual','It was a debugging tool he forgot to remove'],0,'Atari did not credit designers, so he hid a secret room with his name.'],
 ],
 summary:['Pong proved that a simple, social game with clear feedback could start an industry.','Cartridges let one console play many games, creating the console game business.','Activision and hidden credits mark the start of developers as recognized creators.'],
 teaser:'Next: the golden age of the arcades, and a yellow circle that changed game design.',
 genres:['sports','action-adventure'],
},
{
 id:'fh-golden-age',
 goal:'Explore the golden age of arcades and the design ideas, such as characters, enemy personalities, and difficulty curves, that came out of it.',
 story:[
  'It is 1981, and the arcade is the loudest room in town. Rows of cabinets glow in the dark, each one chirping and booming to attract you. A crowd gathers behind a teenager about to beat the high score on a maze game. When they do, they type three initials into the machine. For a few days, until someone beats them, they are famous.',
  'In just a few years, arcade designers invented ideas that games still use: characters with personalities, enemies with different behaviors, stories told in short scenes, and difficulty that rises just fast enough to keep you feeding coins into the slot.',
 ],
 hero:image('fh-03-hero','A busy early-1980s arcade at night: rows of glowing cabinets, teenagers in period clothes, one player at a cabinet with a crowd watching, initials glowing on a high-score screen.','A crowded early-1980s arcade with a player cheered on by onlookers.'),
 sections:[
  {title:'Invaders from space',paragraphs:[
   'In 1978, Taito released Space Invaders, designed by Tomohiro Nishikado. Rows of aliens marched back and forth, descending step by step, while you fired from below. Because the hardware drew fewer aliens faster, the invaders sped up as you destroyed them, along with the thumping music. The accident became the heart of the design: tension that builds naturally as you succeed.',
   'Space Invaders made high scores central and became a phenomenon in Japan and abroad. It showed that a game could tell a tiny story through rising pressure alone.',
  ]},
  {title:'A character is born',paragraphs:[
   'In 1980, Namco released Pac-Man, created by Toru Iwatani. At a time when most games were about shooting, Iwatani wanted a game that would appeal to a wider audience, including women and couples. The theme was eating. Iwatani has said the shape was inspired by a pizza with a slice missing.',
   'Pac-Man was one of the first video game characters to become a star, with merchandise, songs, and a cartoon. Its ghosts had names and personalities: one chases you directly, one tries to get in front of you, one behaves unpredictably, and one wanders off when it gets close. Four simple rules made the ghosts feel like a team, an early, elegant lesson in enemy design.',
  ],media:image('fh-03-ghosts','Four friendly but mischievous original ghost-like creatures in different colors, each shown with a small arrow diagram of its behavior: one chasing, one cutting ahead, one zigzagging, one wandering away.','Four ghost-like creatures with arrows showing four different chase behaviors.','21:9')},
  {title:'Jumpman and the first platforms',paragraphs:[
   'In 1981, a young Nintendo designer named Shigeru Miyamoto created Donkey Kong. A carpenter, called Jumpman, climbed girders and leapt over rolling barrels to rescue a woman from a giant ape. The game opened with a short animated scene showing the ape climbing the structure: a story before the play even began.',
   'Donkey Kong was one of the first platform games, where jumping is central. Jumpman was soon renamed Mario. Within a few years, he would become the most recognizable character in games.',
  ],timeline:{title:'The golden age of arcades',events:[
   {year:1978,title:'Space Invaders',text:'Marching aliens and rising tension make high scores a craze.'},
   {year:1979,title:'Asteroids and Galaxian',text:'Vector graphics and colorful alien swarms.'},
   {year:1980,title:'Pac-Man',text:'A maze, four ghost personalities, and the first character superstar.'},
   {year:1981,title:'Donkey Kong',text:'Jumpman (later Mario) jumps into the first platform games.'},
   {year:1981,title:'Galaga, Defender, Centipede',text:'A peak year of creativity and arcade revenue.'},
  ]}},
  {title:'Designing for coins',paragraphs:[
   'Arcade games had to earn money every minute, which shaped their design. Attract modes, with demo play shown on screen while nobody was playing, advertised the game. Short lives and rising difficulty kept sessions to a few minutes. High-score tables gave players a reason to come back.',
   'Some of those pressures are still with us in different forms. Lives and difficulty curves came from arcades. So did the idea of designing the first thirty seconds to hook a player. Today you can borrow the good parts, quick understanding, rising tension, and clear scores, without the coin slot.',
  ]},
 ],
 games:[
  {title:'Space Invaders',year:1978,platform:'Arcade',note:'Aliens speed up as you destroy them, building tension naturally.'},
  {title:'Pac-Man',year:1980,platform:'Arcade',note:'Four ghosts, four behaviors, and a character who became a pop-culture star.'},
  {title:'Donkey Kong',year:1981,platform:'Arcade',note:'An early platformer that introduced Mario and told a story in short scenes.'},
  {title:'Centipede',year:1981,platform:'Arcade',note:'Co-designed by Dona Bailey, one of the first women to design an arcade game.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Try it: four enemies, four rules',task:'Invent four enemies for a simple maze game, each with one behavior rule, inspired by Pac-Man’s ghosts.',steps:['Give each enemy a name and a color.','Write one rule for how it moves.','Check that the four rules create different kinds of pressure.'],hints:['Try: chase directly, ambush ahead, patrol a route, flee when close.','Different behaviors make a group feel smarter than any one enemy.'],checks:['Each enemy has exactly one clear rule.','Together they would trap a player in different ways.']},
 ai:{text:'Enemy behaviors described as simple rules are easy for a coding agent to build and test. You can recreate classic arcade ideas, then remix them. Describe one rule per enemy and ask the agent to make each rule easy to adjust.',toolIds:['claude-code','phaser','kenney'],prompt:'In my maze game, add four enemies with one rule each: [enemy 1 rule], [enemy 2 rule], [enemy 3 rule], [enemy 4 rule]. Give each a different color. Add a setting for enemy speed that increases a little after each cleared maze.'},
 deeper:{text:'For arcade history and design:',items:[
  {label:'The Pac-Man Dossier (Jamey Pittman)',detail:'A detailed explanation of how Pac-Man’s ghosts really behave.'},
  {label:'Arcade Museum (KLOV)',detail:'A huge database of arcade machines and their history.',url:'https://www.arcade-museum.com/'},
 ]},
 questions:[
  ['Why did the aliens in Space Invaders speed up as you destroyed them?',['A deliberate difficulty setting chosen at the start','The hardware could draw fewer aliens faster, and the effect was kept','Players asked for it'],1,'It began as a technical side effect and became the heart of the game’s tension.'],
  ['What made Pac-Man’s ghosts an important design lesson?',['They chased the player as a single group','Each had a simple, different behavior, so together they felt like a team','They learned from the player over time'],1,'Simple, varied rules created complex, team-like pressure.'],
  ['Which idea came from designing arcade games for coins?',['Lives and rising difficulty that keep sessions short','Save files to continue later','Long stories told in cutscenes'],0,'Short sessions and rising difficulty kept the coins flowing, and influenced games for decades.'],
 ],
 summary:['Space Invaders turned a technical accident into rising tension.','Pac-Man introduced character stars and enemies with personalities.','Donkey Kong brought platforms, story scenes, and Mario; arcade economics shaped lives and difficulty.'],
 teaser:'The boom could not last. Next: the great crash, and the console that brought games back.',
 mechanics:['lives','leaderboards','jump'],genres:['shmup','platformer'],
},
{
 id:'fh-crash',
 goal:'Understand the 1983 video game crash, how Nintendo revived home gaming, and the design lessons of the NES era.',
 story:[
  'In 1983, a truck rolls into a landfill near Alamogordo, New Mexico, and buries thousands of unsold game cartridges. For years the story sounded like an urban legend. In 2014, a documentary team dug into the site and found them, dusty but real.',
  'Those cartridges are a symbol of the moment the young industry nearly collapsed. Too many consoles, too many rushed games, and too little trust from players. And yet, within a few years, a company known for playing cards would bring games back, bigger than before.',
 ],
 hero:image('fh-04-hero','A desert landfill at sunset with an excavator digging up dusty old game cartridges, while a small group of onlookers watch with cameras.','An excavator digging up old game cartridges in a desert landfill at sunset.'),
 sections:[
  {title:'Why the market crashed',paragraphs:[
   'By the early 1980s, many companies were making consoles and many more were making games, with little quality control. Stores filled with confusing choices and poor-quality games. Rushed releases disappointed players: a highly anticipated movie tie-in was developed in about five weeks to hit the holiday season, and became infamous.',
   'Cheap home computers that could also play games added more competition. In North America, sales collapsed between 1983 and 1985. Many companies went out of business, and retailers began to see video games as a fad that had ended.',
  ]},
  {title:'Nintendo’s careful comeback',paragraphs:[
   'Nintendo, founded in 1889 as a playing-card company, released the Family Computer, or Famicom, in Japan in 1983. To bring it to a nervous North American market in 1985, it was redesigned as the Nintendo Entertainment System (NES). It looked like a video recorder rather than a toy, and launched with a small robot accessory, R.O.B., so stores would treat it as a toy rather than a “video game.”',
   'Nintendo controlled which games could be released, using a security chip and a “Seal of Quality.” The approach was strict, and later criticized for limiting other companies, but it restored trust: players could expect a certain standard.',
  ],timeline:{title:'Crash and recovery',events:[
   {year:1982,title:'Too many games',text:'A flood of consoles and rushed games confuses players and stores.'},
   {year:1983,title:'The crash',text:'North American sales collapse; unsold cartridges are buried in New Mexico.'},
   {year:1983,title:'Famicom',text:'Nintendo launches its Family Computer in Japan.'},
   {year:1985,title:'NES and Super Mario Bros.',text:'The NES launches in North America with a redesigned, toy-like image.'},
   {year:1986,title:'Zelda and Metroid',text:'Exploration and secrets become a new kind of adventure.'},
   {year:1989,title:'Game Boy',text:'A handheld console bundled with Tetris becomes a worldwide hit.'},
  ]}},
  {title:'Super Mario Bros. and the art of the level',paragraphs:[
   'Super Mario Bros. (1985), directed by Shigeru Miyamoto, made the side-scrolling platformer the defining game of its era. Its first level teaches by doing, without words. Its world was full of secrets: hidden blocks, warp pipes, and shortcuts that players shared in schoolyards.',
   'The Legend of Zelda (1986) offered a large world to explore in any order, and let players save their progress: on a floppy disk in Japan, and with a battery inside the cartridge abroad. Metroid (1986) gave players a vast alien labyrinth where new abilities opened old paths, the idea behind metroidvanias today.',
  ],media:image('fh-04-schoolyard','Kids in a 1980s schoolyard huddled around a hand-drawn map on notebook paper, pointing at secret passages and treasure marks.','Children in the 1980s sharing a hand-drawn game map with secrets marked on it.')},
  {title:'Games in your pocket',paragraphs:[
   'In 1989, Nintendo released the Game Boy, designed under Gunpei Yokoi. Its green-tinted screen was primitive even then, but it ran for many hours on batteries and was tough enough to survive being dropped. Bundled with Tetris, it became a worldwide hit and showed that simpler, affordable hardware with great games could beat more powerful rivals.',
   'Yokoi called his philosophy “lateral thinking with withered technology”: using mature, cheap technology in new ways. It is a useful idea for any developer with limited resources, and especially for a beginner. You do not need the newest tools to make something people love.',
  ]},
 ],
 games:[
  {title:'Super Mario Bros.',year:1985,platform:'NES',note:'Taught by doing, rewarded curiosity with secrets, and helped revive an industry.'},
  {title:'The Legend of Zelda',year:1986,platform:'Famicom Disk System, NES',note:'An open world with a save feature, inviting exploration in any order.'},
  {title:'Metroid',year:1986,platform:'Famicom Disk System, NES',note:'A labyrinth opened by new abilities, which became a genre.'},
  {title:'Tetris',year:1989,platform:'Game Boy',note:'Bundled with the Game Boy and became one of the best-selling games ever.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Try it: what would you cut?',task:'Imagine you are a store buyer in 1983 with too many games on the shelves. Write three quality rules a game must pass before you stock it.',steps:['Think about what disappointed players in this era.','Write three clear quality rules.','Check whether your own game idea would pass them.'],hints:['Consider: does it work, is it clear, is it different?','Playtesting covers many of these rules.'],checks:['Your rules are specific enough to check.','You applied them to your own idea.']},
 ai:{text:'The crash is a warning that applies to AI-made games too: speed without quality loses players’ trust. Use your coding agent to move faster, but keep your own quality rules, playtest, and finish fewer, better things rather than many rushed ones.',toolIds:['claude-code','playwright-mcp'],prompt:'Here are my game’s quality rules: [rules]. Review my current project against them and list anything that fails, with the smallest fix for each. Do not add new features.'},
 deeper:{text:'For more on this era:',items:[
  {label:'Atari: Game Over (2014 documentary)',detail:'The excavation of the buried cartridges in New Mexico.'},
  {label:'Game Over (David Sheff)',detail:'How Nintendo rose to dominate the industry.'},
  {label:'Super Mario Bros. World 1-1 analyses',detail:'Search for level-design breakdowns; many designers have studied it in depth.'},
 ]},
 questions:[
  ['Which was a major cause of the 1983 crash?',['Video games had simply gone out of fashion','A flood of low-quality games and consoles that eroded trust','Consoles became too expensive to manufacture'],1,'Players and stores lost confidence after too many poor and confusing products.'],
  ['What idea does Metroid share with modern metroidvanias?',['New abilities open paths you saw earlier','Levels change every time you play','You choose levels from a world map'],0,'Ability gating in a connected world became the defining feature of the genre.'],
  ['What did “lateral thinking with withered technology” mean?',['Always use the newest, most powerful hardware','Use mature, cheap technology in new ways','Re-release old games instead of making new ones'],1,'The Game Boy succeeded with simple, reliable hardware and great games.'],
 ],
 summary:['The 1983 crash came from too many poor games and lost trust.','Nintendo’s NES rebuilt the market with quality control and great games.','Mario, Zelda, Metroid, and the Game Boy set patterns still used today.'],
 teaser:'While consoles crashed and recovered, another revolution was happening in bedrooms on home computers. That’s next.',
 mechanics:['secrets','ability-gating','save-points'],genres:['platformer','action-adventure','metroidvania'],
},
{
 id:'fh-computers',
 goal:'Explore how home computers and the PC created bedroom developers, new genres, shareware, and modding.',
 story:[
  'A bedroom in Britain, 1983. A teenager sits in front of a small computer plugged into the family television. Next to it is a cassette recorder; the games load from tape with a long, screeching noise. Tonight they are not playing a game. They are writing one, line by line, from a listing printed in a magazine, and then changing it to make it their own.',
  'Across Europe, North America, and Japan, home computers turned players into makers. Some of those teenagers would go on to build some of the biggest games and studios in the world.',
 ],
 hero:image('fh-05-hero','A 1980s teenager’s bedroom at night: a boxy home computer connected to a small TV, a cassette recorder, a magazine open to a page of program code, and posters on the wall.','A teenager programming a game on a 1980s home computer in their bedroom.'),
 sections:[
  {title:'Computers come home',paragraphs:[
   'The late 1970s and early 1980s brought affordable home computers: the Apple II (1977), the Commodore 64 (1982), the ZX Spectrum (1982), the BBC Micro, and many more. Unlike consoles, they came with a programming language built in, and anyone could write and share software. Magazines printed game programs for readers to type in.',
   'This created a generation of “bedroom coders,” especially in the UK, who made and sold games themselves, sometimes through mail order or local shops. Small studios grew from these beginnings.',
  ]},
  {title:'Words, worlds, and new genres',paragraphs:[
   'Some of the earliest computer games were made of words. Colossal Cave Adventure (1976) described caves in text, and you typed commands like “go north” or “take lamp.” Zork followed, and companies such as Infocom made text adventures a popular genre. Graphical adventures, such as King’s Quest (1984), added pictures.',
   'Computers also gave birth to role-playing games such as Ultima and Wizardry (both 1981), simulations such as SimCity (1989), and strategy games such as Civilization (1991). Elite (1984) packed a whole galaxy of star systems into a tiny amount of memory by generating them from rules, an early triumph of procedural generation.',
  ],timeline:{title:'Home computers and the PC',events:[
   {year:1976,title:'Colossal Cave Adventure',text:'Exploring caves through typed commands.'},
   {year:1977,title:'Apple II',text:'One of the first successful home computers.'},
   {year:1981,title:'Ultima and Wizardry',text:'Computer role-playing games take shape.'},
   {year:1982,title:'Commodore 64 and ZX Spectrum',text:'Affordable computers create a generation of bedroom coders.'},
   {year:1984,title:'Elite',text:'A whole galaxy generated from rules in tiny memory.'},
   {year:1989,title:'SimCity',text:'A game with no winning or losing: a city as a toy.'},
   {year:1993,title:'Doom',text:'Fast 3D action, shareware distribution, and modding.'},
  ]},media:image('fh-05-text-adventure','An old monochrome monitor showing glowing green text describing a cave, with a blinking cursor waiting for a command, and a dreamlike illustrated cave emerging from the screen.','A green text adventure on an old monitor, with an imagined cave rising out of it.')},
  {title:'Shareware and the first-person revolution',paragraphs:[
   'In the early 1990s, a small company in Texas called id Software changed PC gaming. Wolfenstein 3D (1992) and Doom (1993) offered fast, smooth first-person action that felt impossible on home computers. Doom’s first episode was released as shareware: free to copy and share, with the rest of the game sold to fans.',
   'id also made Doom easy to modify. Players created their own levels and changes, called mods, and shared them online. Many future game developers started by making mods. Later, whole new games were born as mods, including Counter-Strike and the original Defense of the Ancients.',
  ]},
  {title:'The PC grows up',paragraphs:[
   'Through the 1990s, the PC became a major gaming platform. CD-ROMs held far more data, enabling games such as Myst (1993) with detailed images and audio. Sound cards brought music and voice. Lemmings (1991), from a small Scottish studio that would later make Grand Theft Auto, showed that a game could be both a puzzle and a comedy.',
   'The spirit of the home computer era lives on in every indie developer with a laptop, every modder, and every game jam. It is the spirit this site is built on: you can make games, not just play them.',
  ]},
 ],
 games:[
  {title:'Zork',year:1980,platform:'Home computers',note:'A text adventure whose clever writing made the player’s imagination the graphics card.'},
  {title:'Elite',year:1984,platform:'BBC Micro',note:'A whole galaxy generated by rules to fit in tiny memory.'},
  {title:'SimCity',year:1989,platform:'Home computers',note:'A game without winning or losing, inspired by the fun of building levels.'},
  {title:'Doom',year:1993,platform:'PC',note:'Shareware distribution and modding built a community that still makes levels today.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Try it: a text adventure in five rooms',task:'Design a tiny text adventure on paper: five rooms, one item, and one locked door.',steps:['Write a two-sentence description for each room.','Decide which item opens the locked door.','List the commands a player would need.'],hints:['Descriptions should hint at what is possible.','Free tools such as Twine let you build this in an afternoon.'],checks:['A player could solve it from your descriptions alone.','The locked door creates a goal.']},
 ai:{text:'Text adventures and small simulations are wonderful projects for coding agents: they are mostly rules and words. You can also ask an agent to explain how classic techniques worked, such as Elite’s procedural galaxy, and build a tiny version yourself.',toolIds:['claude-code','gemini-cli'],prompt:'Build a five-room text adventure that runs in the browser. Rooms: [descriptions]. Item: [item] opens [door]. Support commands: look, go [direction], take [item], use [item], inventory. Keep all room text in one easy-to-edit list.'},
 deeper:{text:'For the history of computer games:',items:[
  {label:'Masters of Doom (David Kushner)',detail:'The story of id Software and the creators of Doom.'},
  {label:'Twine',detail:'Make your own text-based interactive stories.',url:'https://twinery.org/'},
  {label:'The Digital Antiquarian (Jimmy Maher)',detail:'A deep, readable history of computer games.',url:'https://www.filfre.net/'},
 ]},
 questions:[
  ['What made home computers different from consoles for future developers?',['They had better graphics than every console','They came with programming tools, so anyone could make and share games','They could only run text games'],1,'Built-in programming turned players into makers.'],
  ['How did Elite fit a huge galaxy into tiny memory?',['By generating star systems from rules','By loading each star system from a separate cassette','By showing only a single star system'],0,'Procedural generation created content from compact rules instead of storing it all.'],
  ['Which famous games began as mods of other games?',['Super Mario Bros. and Zelda','Counter-Strike and Defense of the Ancients','Doom and Wolfenstein 3D'],1,'Both started as player-made modifications and grew into huge games.'],
 ],
 summary:['Home computers turned players into makers.','Computers gave rise to text adventures, RPGs, simulations, and strategy games.','Shareware and modding built communities and launched careers.'],
 teaser:'Back on consoles, a fierce rivalry was about to begin. Next: the 16-bit era.',
 mechanics:['procedural-levels','first-person'],genres:['adventure','rpg','simulation','shooter'],
},
{
 id:'fh-16bit',
 goal:'Explore the 16-bit console rivalry, the rise of fighting games and JRPGs, and how game ratings began.',
 story:[
  'It is 1991, and the playground has split into two camps. One side swears by a speedy blue hedgehog. The other insists a plumber is better. Television adverts mock the competition, and magazines tally up which console has more colors and faster processors.',
  'Behind the noise, the two big console makers were pushing each other to innovate. In a few short years, this era gave the world fighting games with combos, sweeping role-playing stories, and some of the most beloved 2D games ever made.',
 ],
 hero:image('fh-06-hero','Two groups of kids in early-1990s clothing on opposite sides of a playground, one cheering for a fast blue blur, the other for a jumping hero in a red cap, with lightning between them.','Two groups of kids on a playground cheering for rival game mascots.'),
 sections:[
  {title:'The console wars',paragraphs:[
   'Sega launched the Mega Drive (called the Genesis in North America) in 1988, and Nintendo answered with the Super Famicom (Super Nintendo, or SNES) in 1990. Sega needed a mascot to rival Mario and created Sonic the Hedgehog (1991), designed around speed and attitude. Its adverts claimed “Genesis does what Nintendon’t.”',
   'The rivalry pushed both companies. The SNES offered special graphics modes for rotating and scaling backgrounds, used in F-Zero and Super Mario Kart. Special chips inside some cartridges, such as the one in Star Fox (1993), added simple 3D. Competition made hardware and games better, fast.',
  ]},
  {title:'Fighting games and combos',paragraphs:[
   'In 1991, Capcom released Street Fighter II in arcades. Players chose from eight distinct fighters with special moves performed by joystick motions. Players discovered they could link certain attacks together faster than the opponent could recover, and those combos, at first a happy accident, became a core part of the genre.',
   'Fighting games turned arcades into tournaments and communities. In 1992, Mortal Kombat used digitized photos of actors and graphic violence, sparking controversy and US government hearings. In 1994, the industry created the Entertainment Software Rating Board (ESRB) to rate games by age, similar to film ratings. Europe’s PEGI system followed in 2003.',
  ],timeline:{title:'The 16-bit era',events:[
   {year:1988,title:'Sega Mega Drive / Genesis',text:'Sega’s 16-bit console launches in Japan.'},
   {year:1990,title:'Super Famicom / SNES',text:'Nintendo answers with its 16-bit console.'},
   {year:1991,title:'Sonic and Street Fighter II',text:'Speed, attitude, and the birth of combos.'},
   {year:1994,title:'ESRB founded',text:'Age ratings arrive for games in North America.'},
   {year:1995,title:'Chrono Trigger',text:'A role-playing masterpiece with multiple endings.'},
   {year:1996,title:'Pokémon Red and Green',text:'Collecting and trading monsters on the Game Boy.'},
  ]}},
  {title:'The golden age of the JRPG',paragraphs:[
   'Japanese role-playing games flourished. Final Fantasy IV (1991) introduced the Active Time Battle system, where turns came in real time. Final Fantasy VI (1994), Secret of Mana (1993), EarthBound (1994), and Chrono Trigger (1995), made by a “dream team” of famous creators, told rich stories within the limits of cartridges.',
   'Chrono Trigger’s time-travel story had more than a dozen endings, and its “New Game+” mode let players restart with their progress. These games showed that limited graphics could carry emotional, epic stories through music, writing, and imagination.',
  ],media:image('fh-06-jrpg','A party of four original fantasy heroes in a pixel-art style, standing on a hilltop at dawn looking out over a vast world map with castles, forests, and an airship.','A party of four pixel-art heroes overlooking a fantasy world map at dawn.')},
  {title:'The peak of 2D',paragraphs:[
   'By the mid-1990s, developers had mastered 2D. Super Metroid (1994) perfected atmospheric exploration. Donkey Kong Country (1994) used pre-rendered 3D models turned into sprites, so it looked startlingly modern. And on the Game Boy, Pokémon Red and Green (1996) let players collect monsters and trade them with friends through a link cable, a social mechanic that made it a worldwide phenomenon.',
   'Many of today’s indie games deliberately use 16-bit-inspired pixel art, partly from nostalgia and partly because it remains a clear, expressive, and achievable style.',
  ]},
 ],
 games:[
  {title:'Sonic the Hedgehog',year:1991,platform:'Mega Drive / Genesis',note:'Built around speed and momentum to rival Mario.'},
  {title:'Street Fighter II',year:1991,platform:'Arcade, then SNES',note:'Eight characters, special moves, and combos that started as an accident.'},
  {title:'Chrono Trigger',year:1995,platform:'SNES',note:'Time travel, multiple endings, and New Game+.'},
  {title:'Pokémon Red and Green',year:1996,platform:'Game Boy',note:'Collecting and trading as a social mechanic.'},
 ],
 gamesTitle:'Landmarks of the era',
 activity:{title:'Try it: design a fighter',task:'Design one fighting-game character with three special moves and a clear weakness.',steps:['Write a personality line and silhouette idea.','Describe three special moves and what each is good for.','Write one clear weakness that gives opponents a chance.'],hints:['A fast character might be fragile; a strong one might be slow.','Moves should cover different ranges: close, middle, far.'],checks:['Each move has a purpose.','The weakness makes the character fair to fight.']},
 ai:{text:'Pixel art in a 16-bit style is one of the friendliest styles for AI and free assets. Specialist pixel generators can create characters, animations, and tilesets on a real pixel grid, and many free packs use this look. Agree on a resolution and palette before generating anything.',toolIds:['pixellab','retro-diffusion','kenney','itch-assets'],prompt:'Create a 16-bit-style pixel art character for a fighting game: [personality line]. 64×64 pixels, side view, limited palette of [n] colors, idle pose, transparent background. Then suggest the minimum set of animation frames for idle, walk, punch, and special move.'},
 deeper:{text:'To dig deeper into this era:',items:[
  {label:'Console Wars (Blake J. Harris)',detail:'The story of the Sega and Nintendo rivalry.'},
  {label:'Boss Fight Books',detail:'Short books, each about a single classic game.',url:'https://bossfightbooks.com/'},
 ]},
 questions:[
  ['How did combos in Street Fighter II begin?',['As a planned feature','As an accidental discovery that designers embraced','They were added in a later patch'],1,'Players found attacks could be linked; the genre adopted combos as a core skill.'],
  ['Why was the ESRB created in 1994?',['To rate games by age after controversy over violent games','To decide which games arcades could show','To set the prices of new games'],0,'Controversy around games such as Mortal Kombat led the industry to create age ratings.'],
 ],
 summary:['The Sega–Nintendo rivalry pushed fast innovation.','Fighting games, combos, and age ratings emerged in this era.','JRPGs and late 2D classics showed how much limited hardware could achieve.'],
 teaser:'Next: games leap into the third dimension, and designers must reinvent cameras and controls.',
 mechanics:['melee-combo','new-game-plus','trading'],genres:['fighting','jrpg','platformer'],
},
];
