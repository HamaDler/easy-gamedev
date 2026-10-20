import type { Tool, ToolCategory } from '../types';

// Prices and plans change often, so entries record only a cost type. Every entry was checked in October 2026.
const C = '2026-10';
type Row = [id: string, name: string, category: ToolCategory, path: Tool['path'], cost: Tool['cost'], url: string, summary: string, bestFor: string, license?: string];
const rows: Row[] = [
  // Engines
  ['godot','Godot Engine','engine','manual','open-source','https://godotengine.org/','A free, open-source engine for 2D and 3D games with its own editor and scripting language.','Learning, 2D games, small 3D games, and anyone who wants no fees or royalties.','MIT'],
  ['unity','Unity','engine','manual','free-tier','https://unity.com/','A widely used commercial engine for 2D, 3D, mobile, console, and XR games.','Mobile and console projects, and teams that want a huge asset store and tutorial library.'],
  ['unreal','Unreal Engine','engine','manual','free-tier','https://www.unrealengine.com/','A commercial engine known for high-end 3D graphics, with visual scripting called Blueprints.','Realistic 3D, large worlds, and cinematic projects. Royalties apply above a revenue threshold.'],
  ['gamemaker','GameMaker','engine','manual','free-tier','https://gamemaker.io/','A 2D-focused engine with a gentle learning curve and a long history of indie hits.','2D action games and platformers.'],
  ['phaser','Phaser','engine','manual','open-source','https://phaser.io/','A JavaScript framework for 2D games that run in any web browser.','Browser games you can share with a link.','MIT'],
  ['threejs','Three.js','engine','manual','open-source','https://threejs.org/','A JavaScript library for drawing 3D scenes in the browser.','Small 3D browser games and interactive 3D experiments.','MIT'],
  ['defold','Defold','engine','manual','free','https://defold.com/','A lightweight engine for 2D and simple 3D games that exports small builds.','Mobile and web games that must load quickly.'],
  ['rpgmaker','RPG Maker','engine','manual','paid','https://www.rpgmakerweb.com/','A tool for making classic role-playing games mostly through menus and event editors.','Story-driven RPGs without much programming.'],
  ['roblox-studio','Roblox Studio','engine','manual','free','https://create.roblox.com/','The editor for building experiences that run inside Roblox.','Multiplayer social games with a built-in audience.'],
  // Coding agents
  ['claude-code','Claude Code','coding-agent','ai','paid','https://claude.com/product/claude-code','An agent that reads your project, edits files, and runs commands from a terminal or code editor.','Larger changes across many files, and projects connected through MCP servers.'],
  ['cursor','Cursor','coding-agent','ai','free-tier','https://cursor.com/','A code editor built around an AI agent that can plan and apply changes.','People who want the agent inside a familiar editor.'],
  ['copilot','GitHub Copilot','coding-agent','ai','free-tier','https://github.com/features/copilot','Code suggestions and an agent mode inside VS Code and other editors.','A free starting point if you already use VS Code.'],
  ['codex','OpenAI Codex','coding-agent','ai','free-tier','https://openai.com/codex/','A coding agent available as an open-source command-line tool and in other apps.','Terminal-based work with OpenAI models.'],
  ['gemini-cli','Gemini CLI','coding-agent','ai','free-tier','https://github.com/google-gemini/gemini-cli','Google’s open-source command-line agent with a generous free allowance.','Trying an agent at no cost.'],
  ['cline','Cline','coding-agent','ai','open-source','https://cline.bot/','An open-source agent for VS Code that works with the AI provider you choose.','Choosing your own model and paying only for what you use.'],
  // MCP servers
  ['mcp','Model Context Protocol','mcp','ai','open-source','https://modelcontextprotocol.io/','An open standard that lets a coding agent use outside tools, such as a game editor or a browser.','Understanding how agents connect to engines and apps.'],
  ['godot-mcp','Godot MCP servers','mcp','ai','open-source','https://github.com/Coding-Solo/godot-mcp','Community servers that let an agent launch Godot, run your project, and read its errors. Several exist; some drive the live editor.','Letting an agent test the Godot game it just changed.'],
  ['blender-mcp','Blender MCP','mcp','ai','open-source','https://github.com/ahujasid/blender-mcp','Connects an agent to Blender so it can create and change 3D scenes by instruction.','Blocking out simple 3D props and scenes by describing them.'],
  ['playwright-mcp','Playwright MCP','mcp','ai','open-source','https://github.com/microsoft/playwright-mcp','Lets an agent open and click through a web page in a real browser.','Having an agent playtest and screenshot a browser game.'],
  // AI generators
  ['pixellab','PixelLab','ai-image','ai','free-tier','https://www.pixellab.ai/','Generates pixel-art characters, animations, rotations, and tilesets on a real pixel grid.','Animated pixel-art sprites.'],
  ['retro-diffusion','Retro Diffusion','ai-image','ai','paid','https://www.retrodiffusion.ai/','Pixel-art generation as a web app or an Aseprite extension.','Pixel artists who work in Aseprite.'],
  ['scenario','Scenario','ai-image','ai','free-tier','https://www.scenario.com/','Image generation you can train on your own art style for consistent game assets.','Keeping a whole set of assets in one style.'],
  ['meshy','Meshy','ai-3d','ai','free-tier','https://www.meshy.ai/','Turns text or images into textured 3D models, with optional auto-rigging.','Quick 3D props and characters. Check attribution rules on free-tier output.'],
  ['tripo','Tripo','ai-3d','ai','free-tier','https://www.tripo3d.ai/','Fast text- and image-to-3D model generation.','Rapid 3D prototypes. Check commercial-use terms for your plan.'],
  ['hunyuan3d','Hunyuan3D','ai-3d','ai','open-source','https://github.com/Tencent-Hunyuan/Hunyuan3D-2','Open-weight image-to-3D models you can run yourself.','Free 3D generation if you have a capable computer. Read its license for regional limits.'],
  ['elevenlabs-sfx','ElevenLabs Sound Effects','ai-audio','ai','free-tier','https://elevenlabs.io/sound-effects','Generates short sound effects from a text description.','Footsteps, hits, pickups, and ambient one-shots.'],
  ['suno','Suno','ai-audio','ai','free-tier','https://suno.com/','Generates full music tracks from a text description.','Background music. Check whether your plan allows commercial use.'],
  // Free asset libraries
  ['kenney','Kenney','asset-library','library','free','https://kenney.nl/assets','Thousands of consistent 2D, 3D, UI, and audio assets released into the public domain.','Prototypes and full games: no attribution required.','CC0'],
  ['opengameart','OpenGameArt','asset-library','library','free','https://opengameart.org/','A community library of free sprites, tiles, models, music, and sounds.','Finding a specific asset. Each item lists its own license.','Varies (CC0, CC-BY, GPL…)'],
  ['itch-assets','itch.io game assets','asset-library','library','free-tier','https://itch.io/game-assets/free','Free and paid asset packs from independent artists.','Distinctive art packs with a consistent style.','Varies by pack'],
  ['polyhaven','Poly Haven','asset-library','library','free','https://polyhaven.com/','High-quality 3D models, textures, and sky images.','Realistic 3D environments and lighting.','CC0'],
  ['quaternius','Quaternius','asset-library','library','free','https://quaternius.com/','Free low-poly 3D models, many with animations.','Stylized 3D characters, props, and nature.','CC0'],
  ['ambientcg','ambientCG','asset-library','library','free','https://ambientcg.com/','Free materials and textures for 3D surfaces.','Floors, walls, metal, wood, and terrain textures.','CC0'],
  ['freesound','Freesound','asset-library','library','free','https://freesound.org/','A huge collaborative library of recorded sounds.','Realistic sound effects and ambience. Check each sound’s license.','Varies (CC0, CC-BY…)'],
  ['mixamo','Mixamo','asset-library','library','free','https://www.mixamo.com/','Free character animations and automatic rigging (requires an Adobe account).','Giving a humanoid 3D character walk, run, and attack animations.'],
  // Do-it-yourself tools
  ['blender','Blender','3d-tool','manual','open-source','https://www.blender.org/','The free, professional 3D suite for modeling, sculpting, rigging, animating, and rendering.','Making or fixing your own 3D models and animations.','GPL'],
  ['aseprite','Aseprite','art-tool','manual','paid','https://www.aseprite.org/','The standard pixel-art editor and animation tool.','Drawing and animating pixel sprites by hand.'],
  ['libresprite','LibreSprite','art-tool','manual','open-source','https://libresprite.github.io/','A free fork of an older version of Aseprite.','Pixel art on a zero budget.','GPL'],
  ['piskel','Piskel','art-tool','manual','free','https://www.piskelapp.com/','A simple pixel-art editor that runs in the browser.','A first try at drawing sprites.'],
  ['krita','Krita','art-tool','manual','open-source','https://krita.org/','A free painting program for illustrations, concept art, and hand-drawn sprites.','Painted characters, backgrounds, and concept art.','GPL'],
  ['inkscape','Inkscape','art-tool','manual','open-source','https://inkscape.org/','A free vector drawing program.','Clean, scalable shapes, icons, and UI art.','GPL'],
  ['tiled','Tiled','level-tool','manual','open-source','https://www.mapeditor.org/','A free editor for building 2D levels from tiles.','Laying out 2D maps that many engines can import.','GPL'],
  ['ldtk','LDtk','level-tool','manual','open-source','https://ldtk.io/','A modern 2D level editor from the director of Dead Cells.','Designing 2D levels with smart auto-tiling.','MIT'],
  ['audacity','Audacity','audio-tool','manual','open-source','https://www.audacityteam.org/','A free audio editor for recording, trimming, and cleaning sounds.','Trimming and fixing sound effects before import.','GPL'],
  ['jsfxr','jsfxr','audio-tool','manual','free','https://sfxr.me/','A browser tool that makes retro game sound effects with sliders.','Instant jump, coin, and explosion sounds.'],
  ['lmms','LMMS','audio-tool','manual','open-source','https://lmms.io/','A free music-making program.','Composing your own game music.','GPL'],
  // Hosting
  ['itch','itch.io','hosting','manual','free','https://itch.io/','An open store and hosting site for indie and browser games.','Publishing a first game and getting player feedback.'],
  ['steam','Steam','hosting','manual','paid','https://partner.steamgames.com/','The largest PC game store (one-time fee per game).','Selling a finished PC game.'],
  ['github-pages','GitHub Pages','hosting','manual','free','https://pages.github.com/','Free static website hosting from a GitHub repository.','Hosting a browser game at a shareable link.'],
];
export const tools: Tool[] = rows.map(([id,name,category,path,cost,url,summary,bestFor,license]) => ({ id, name, category, path, cost, url, summary, bestFor, license, checked: C }));
export const toolById = Object.assign(Object.create(null) as Record<string, Tool>, Object.fromEntries(tools.map(t => [t.id, t])));
export const toolCategoryNames: Record<ToolCategory, string> = { engine: 'Game engines', 'coding-agent': 'Coding agents', mcp: 'MCP servers', 'ai-image': 'AI image & sprite generators', 'ai-3d': 'AI 3D generators', 'ai-audio': 'AI sound & music', 'asset-library': 'Free asset libraries', 'art-tool': '2D art tools', '3d-tool': '3D tools', 'level-tool': 'Level editors', 'audio-tool': 'Audio tools', hosting: 'Publishing & hosting' };
export const costNames: Record<Tool['cost'], string> = { free: 'Free', 'open-source': 'Open source', 'free-tier': 'Free tier', paid: 'Paid' };
