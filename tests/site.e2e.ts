import { test, expect } from '@playwright/test';
import type { Locator } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { catalog } from '../src/data/catalog';
const key='vibe-coding-games:v1';
const firstChapter='/courses/f-game/lessons/fg-what-is-a-game';
async function range(control:Locator,value:number){await control.evaluate((el,value)=>{const input=el as HTMLInputElement;const setter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value')!.set!;setter.call(input,String(value));input.dispatchEvent(new Event('input',{bubbles:true}));input.dispatchEvent(new Event('change',{bubbles:true}));},value);}
async function noSideScroll(page:import('@playwright/test').Page){expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);}

test('homepage, theme, and responsive navigation',async({page})=>{
 await page.goto('/');await expect(page.getByRole('heading',{name:'Make games with AI. Know what to ask for.'})).toBeVisible();
 await expect(page.locator('.course-grid .course-card')).toHaveCount(4);
 await page.getByRole('button',{name:'Switch to dark mode'}).click();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
 await page.reload();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
 await noSideScroll(page);
 await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'Menu',exact:true}).click();await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Mechanics',exact:true}).click();await expect(page.getByRole('heading',{name:'The verbs of play.'})).toBeVisible();
 await noSideScroll(page);
});

test('a story chapter: opener, artwork, game cards, quick check, hints, completion, and resume',async({page})=>{
 await page.goto('/#'+firstChapter);
 await expect(page.locator('.story-opener')).toContainText('Picture a schoolyard');
 const artwork=page.locator('.media-figure img').first();await expect(artwork).toBeVisible();await expect(artwork).toHaveAttribute('src',/media\/fg-01-hero\.jpg$/);await expect(artwork).toHaveJSProperty('complete',true);expect(await artwork.evaluate((el:HTMLImageElement)=>el.naturalWidth)).toBeGreaterThan(0);await expect(page.getByText('Generation prompt',{exact:true})).toHaveCount(0);
 await expect(page.locator('.game-cards article')).toHaveCount(4);
 await expect(page.locator('.chapter-dots a')).toHaveCount(18);
 await expect(page.locator('.lesson-header')).toContainText('Chapter 1 of 18');
 await page.getByRole('radio',{name:'A game, because it has graphics and sound',exact:true}).check();await page.getByRole('button',{name:'Check reasoning'}).first().click();await expect(page.getByText('A useful distinction.',{exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Reveal first hint'}).click();await expect(page.getByText('Rules are often invisible until you break them',{exact:false})).toBeVisible();
 await page.getByText('Go deeper, without AI').click();await expect(page.locator('.go-deeper')).toContainText('A Theory of Fun');
 await page.getByRole('button',{name:'Mark lesson complete'}).click();await expect(page.getByRole('button',{name:'✓ Checkpoint complete'})).toBeDisabled();
 await page.reload();await expect(page.getByRole('button',{name:'✓ Checkpoint complete'})).toBeDisabled();await expect(page.locator('.chapter-dots a.done')).toHaveCount(1);
 await page.goto('/#/learn');await expect(page.getByRole('heading',{name:'What is a game?',exact:true})).toBeVisible();
 const state=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)!),key);expect(state.completed).toEqual(['fg-what-is-a-game']);expect(state.review.state).toBeDefined();
 await page.goto('/#/courses/f-game');await expect(page.locator('.journey a.done')).toHaveCount(1);await expect(page.getByRole('link',{name:'Continue course →'})).toBeVisible();
});

test('quiz options are shuffled but stable between visits',async({page})=>{
 await page.goto('/#'+firstChapter);const panel=page.locator('.question-panel').first();const first=await panel.locator('.answer-option').allInnerTexts();
 await page.reload();expect(await page.locator('.question-panel').first().locator('.answer-option').allInnerTexts()).toEqual(first);
});

test('planned courses are honest outlines that cannot be completed',async({page})=>{
 await page.goto('/#/courses/browser-2d-1');await expect(page.locator('.preview-notice')).toContainText('This course is outlined');
 await page.goto('/#/courses/browser-2d-1/lessons/b1-workbench');await expect(page.getByText('This chapter is outlined but not written yet',{exact:false})).toBeVisible();await expect(page.getByRole('button',{name:'Mark lesson complete'})).toHaveCount(0);
});

test('course ladder filters by engine and dimension',async({page})=>{
 await page.goto('/#/courses');await expect(page.getByRole('heading',{name:'Choose your path.'})).toBeVisible();
 const ladder=page.locator('section').filter({has:page.getByRole('heading',{name:'The hands-on ladder'})});
 await ladder.getByRole('button',{name:'Godot',exact:true}).click();await expect(ladder.getByText('Your First Godot Game')).toBeVisible();await expect(ladder.getByText('Your First Browser Game')).toHaveCount(0);
 await ladder.getByRole('button',{name:'3D',exact:true}).click();await expect(ladder.getByText('Wayfinder Adventure')).toBeVisible();await expect(ladder.getByText('Platformer Workshop')).toHaveCount(0);
 await expect(ladder.locator('.level-badge').first()).toHaveText(/Lv \d/);
});

test('libraries: mechanics, genres, toolkit, and the ecosystem redirect',async({page})=>{
 await page.goto('/#/mechanics');await page.getByRole('textbox',{name:'Search mechanics'}).fill('coyote');await page.locator('.library-grid').getByRole('link').filter({hasText:'Coyote time'}).click();await expect(page.getByRole('heading',{name:'Coyote time',exact:true})).toBeVisible();
 await page.getByRole('link',{name:'Platformer ↗'}).click();await expect(page.getByRole('heading',{name:'Platformer',exact:true})).toBeVisible();await expect(page.getByText('A success story')).toBeVisible();
 await page.goto('/#/ecosystem');await expect(page.getByRole('heading',{name:'Easy path first. Options second.'})).toBeVisible();
 await page.getByRole('button',{name:'Do it yourself',exact:true}).click();await expect(page.getByRole('link',{name:'Blender ↗'})).toBeVisible();await expect(page.getByRole('link',{name:'Claude Code ↗'})).toHaveCount(0);
});

test('media checklist lists every slot',async({page})=>{
 await page.goto('/#/media');await expect(page.getByRole('heading',{name:'Media slots'})).toBeVisible();await expect(page.locator('.media-row').first()).toContainText('fg-01-hero');expect(await page.locator('.media-row').count()).toBeGreaterThanOrEqual(55);
});

test('project milestones persist and current project appears on dashboard',async({page})=>{
 await page.goto('/#/projects/godot-adventure');await page.getByRole('button',{name:'Set as current project'}).click();await page.locator('.milestone-title input').first().check();await page.reload();await expect(page.locator('.milestone-title input').first()).toBeChecked();await page.goto('/#/learn');await expect(page.getByRole('heading',{name:'Wayfinder: a 3D adventure',exact:true})).toBeVisible();
});

test('search, concept links, and a genuine 3D raycast',async({page})=>{
 await page.goto('/#/concepts');await page.getByRole('textbox',{name:'Search concepts'}).fill('raycast');await page.locator('.concept-list').getByRole('link').filter({hasText:'Raycast'}).click();await expect(page.getByRole('heading',{name:'Raycast',exact:true})).toBeVisible();await page.getByRole('button',{name:'Aim at Switch'}).click();await expect(page.locator('.demo-result')).toContainText('First hit: Switch');
});

test('review expands correct intervals and repeats missed concepts sooner',async({page})=>{
 await page.clock.install({time:new Date('2026-10-08T12:00:00Z')});await page.goto('/#'+firstChapter);await page.getByRole('button',{name:'Mark lesson complete'}).click();await page.clock.fastForward(86400001);await page.goto('/#/review');
 await page.getByRole('radio',{name:'An action or interaction available to the player.',exact:true}).check();await page.getByRole('button',{name:'Check reasoning'}).click();await expect(page.getByText('That’s it.',{exact:true})).toBeVisible();
 let stored=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)!),key);expect(stored.review.mechanic.interval).toBe(1);
 await page.getByRole('button',{name:'Next concept'}).click();await page.locator('.answer-option').filter({hasNotText:'The repeated sequence of decisions and rewards'}).first().locator('input').check();await page.getByRole('button',{name:'Check reasoning'}).click();
 stored=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)!),key);const record=stored.review['core-loop'];expect(record.interval).toBe(0);expect(record.due-record.lastReviewed).toBe(300000);
});

test('export, invalid import, and reset confirmation',async({page})=>{
 await page.goto('/#/courses/f-game/lessons/fg-core-loop');await page.getByRole('button',{name:'Mark lesson complete'}).click();await page.goto('/#/progress');
 const downloaded=page.waitForEvent('download');await page.getByRole('button',{name:'Export progress',exact:true}).click();expect((await downloaded).suggestedFilename()).toBe('vibe-coding-games-progress.json');
 await page.getByLabel('Import progress JSON').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{')});await expect(page.getByRole('status')).toContainText(/JSON|Unexpected|property/i);
 let stored=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)!),key);expect(stored.completed).toContain('fg-core-loop');
 await page.getByRole('button',{name:'Reset local progress',exact:true}).click();await page.getByRole('button',{name:'Keep progress',exact:true}).click();await page.getByRole('button',{name:'Reset local progress',exact:true}).click();await page.getByRole('button',{name:'Reset progress',exact:true}).click();stored=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)!),key);expect(stored.completed).toEqual([]);
});

test('all fourteen labs respond to controls',async({page})=>{
 await page.goto('/#/labs');await expect(page.locator('.demo-panel')).toHaveCount(14);
 const coordinate=page.getByRole('region',{name:'Coordinate explorer',exact:true});await coordinate.getByRole('application').press('ArrowRight');await expect(coordinate.locator('.demo-readout')).toContainText('150');
 const loop=page.getByRole('region',{name:'Game loop visualizer',exact:true});await loop.getByRole('button',{name:'Step phase'}).click();await expect(loop.locator('.loop-phases .active')).toHaveText('2. Update');
 const velocity=page.getByRole('region',{name:'Velocity & delta time',exact:true});await velocity.getByRole('checkbox').uncheck();await expect(velocity.locator('.demo-readout')).toContainText('120.0 px');await velocity.getByRole('slider',{name:'Updates per second',exact:true}).press('End');await expect(velocity.locator('.demo-readout')).toContainText('240.0 px');
 const collision=page.getByRole('region',{name:'Collision lab',exact:true});await range(collision.getByRole('slider',{name:'A · X',exact:true}),230);await range(collision.getByRole('slider',{name:'A · Y',exact:true}),95);await expect(collision.locator('.demo-result')).toContainText('Overlap detected');
 const states=page.getByRole('region',{name:'State machine',exact:true});await states.getByRole('button',{name:/Attack ALLOWED/}).click();await expect(states.getByRole('button',{name:/Move BLOCKED/})).toBeDisabled();
 const parallax=page.getByRole('region',{name:'Parallax layers',exact:true});await range(parallax.getByRole('slider',{name:'Camera position',exact:true}),100);await expect(parallax.locator('.demo-readout')).toContainText('Sky 10 px');await expect(parallax.locator('.demo-readout')).toContainText('Ground 100 px');await parallax.getByRole('checkbox').uncheck();await expect(parallax.locator('.demo-readout')).toContainText('Sky 100 px');
 const iso=page.getByRole('region',{name:'Isometric projection',exact:true});await iso.getByRole('application').press('ArrowRight');await expect(iso.locator('.demo-readout')).toContainText('(3, 2)');await iso.getByRole('button',{name:'Top-down',exact:true}).click();await expect(iso.locator('.demo-readout')).toContainText('top-down');
 const tree=page.getByRole('region',{name:'Godot node tree',exact:true});await tree.getByRole('button',{name:/Health/}).click();await expect(tree.locator('.node-inspector')).toContainText('Owns current HP');
 const signal=page.getByRole('region',{name:'Signal visualizer',exact:true});await signal.getByRole('button',{name:'Apply 1 damage'}).click();await expect(signal.locator('.demo-result')).toContainText('Event #1');
 const feel=page.getByRole('region',{name:'Game feel lab',exact:true});await feel.getByRole('button',{name:'Hit the target'}).click();await expect(feel.locator('svg')).toHaveAttribute('aria-label','Hit target. 1 hits.');
 const transforms=page.getByRole('region',{name:'3D transform explorer',exact:true});await range(transforms.getByRole('slider', {name:'Local X',exact:true}),2);await range(transforms.getByRole('slider',{name:'Parent rotation',exact:true}),90);await expect(transforms.locator('.demo-result')).toContainText('World position: (0.0, 0.5, -2.0)');
 const camera=page.getByRole('region',{name:'3D camera explorer',exact:true});await range(camera.getByRole('slider',{name:'Camera orbit',exact:true}),90);await expect(camera.getByRole('slider',{name:'Camera orbit',exact:true})).toHaveValue('90');
 const ray=page.getByRole('region',{name:'3D raycast lab',exact:true});await ray.getByRole('button',{name:'Aim at Switch'}).click();await expect(ray.locator('.demo-result')).toContainText('First hit: Switch');
 const navigation=page.getByRole('region',{name:'3D navigation lab',exact:true});await navigation.getByRole('button',{name:'Navigate to (6,6)'}).click();await expect(navigation.locator('.demo-result')).toContainText('Path has');
});

test('all published chapters and lessons render without page errors',async({page})=>{
 test.setTimeout(240000);const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
 for(const lesson of catalog.filter(l=>l.status==='complete')){await page.goto(`/#/courses/${lesson.courseId}/lessons/${lesson.id}`);await expect(page.locator('.lesson-header h1')).toHaveText(lesson.title);await expect(page.getByRole('button',{name:'Mark lesson complete'})).toBeVisible();}
 expect(errors).toEqual([]);
});

test('narrow pages stay readable in light and dark mode',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 for(const path of ['/courses','/courses/f-game','/courses/f-2d/lessons/f2-isometric','/courses/f-history/lessons/fh-labs','/mechanics','/genres/roguelite','/toolkit','/courses/godot','/courses/godot/lessons/g-controller-3d','/projects/godot-adventure']){await page.goto('/#'+path);await expect(page.locator('h1')).toBeVisible();await noSideScroll(page);}
 await page.getByRole('button',{name:'Switch to dark mode'}).click();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');await page.goto('/#/courses/f-3d/lessons/f3-lighting');await expect(page.locator('h1')).toBeVisible();await noSideScroll(page);
});

test('unknown and prototype-shaped routes show a useful fallback',async({page})=>{for(const path of ['/courses/unknown','/courses/__proto__','/projects/constructor','/concepts/toString','/courses/godot/lessons/nope','/mechanics/nope','/genres/__proto__']){await page.goto('/#'+path);await expect(page.getByRole('heading',{name:'This checkpoint isn’t here.'})).toBeVisible();}});

test('runnable reference downloads exist',async({request})=>{for(const id of ['godot-roguelite','godot-adventure']){const response=await request.get(`/downloads/${id}.zip`);expect(response.status()).toBe(200);expect((await response.body()).subarray(0,2).toString()).toBe('PK');}});

test('classic course prerequisites advise without locking the fast track',async({page})=>{
 await page.goto('/#/courses/godot');await page.getByText('Take a quick prerequisite self-check',{exact:false}).click();await expect(page.locator('.prerequisite-check .question-panel')).not.toHaveCount(0);await page.getByLabel('Programmer fast track').check();await expect(page.locator('.roadmap')).not.toContainText('Optional programming bridge');await page.getByRole('link',{name:'Start course',exact:false}).click();await expect(page.locator('.lesson-header h1')).toHaveText('Your first runnable scene');await expect(page.getByRole('button',{name:'Mark lesson complete'})).toBeEnabled();
});

test('touch input works across the teaching simulations',async({browser,baseURL})=>{
 const context=await browser.newContext({hasTouch:true,viewport:{width:390,height:844},baseURL});const page=await context.newPage();await page.goto('/#/labs');
 const coords=page.getByRole('region',{name:'Coordinate explorer',exact:true});await coords.getByRole('application').tap();await expect(coords.locator('.demo-readout')).not.toContainText('140');
 const loop=page.getByRole('region',{name:'Game loop visualizer',exact:true});await loop.getByRole('button',{name:'Step phase'}).tap();await expect(loop.locator('.loop-phases .active')).toHaveText('2. Update');
 const velocity=page.getByRole('region',{name:'Velocity & delta time',exact:true});await velocity.getByRole('checkbox').tap();await expect(velocity.getByRole('checkbox')).not.toBeChecked();
 const collision=page.getByRole('region',{name:'Collision lab',exact:true});await collision.getByRole('slider',{name:'A · X',exact:true}).tap();await expect(collision.getByRole('slider',{name:'A · X',exact:true})).not.toHaveValue('65');
 const iso=page.getByRole('region',{name:'Isometric projection',exact:true});await iso.getByRole('button',{name:'Move right'}).tap();await expect(iso.locator('.demo-readout')).toContainText('(3, 2)');
 const states=page.getByRole('region',{name:'State machine',exact:true});await states.getByRole('button',{name:/Attack ALLOWED/}).tap();await expect(states.getByRole('button',{name:/Attack CURRENT/})).toBeDisabled();
 const tree=page.getByRole('region',{name:'Godot node tree',exact:true});await tree.getByRole('button',{name:/Health/}).tap();await expect(tree.locator('.node-inspector')).toContainText('Owns current HP');
 const signal=page.getByRole('region',{name:'Signal visualizer',exact:true});await signal.getByRole('button',{name:'Apply 1 damage'}).tap();await expect(signal.locator('.demo-result')).toContainText('Event #1');
 const feel=page.getByRole('region',{name:'Game feel lab',exact:true});await feel.getByRole('button',{name:'Hit the target'}).tap();await expect(feel.locator('svg')).toHaveAttribute('aria-label','Hit target. 1 hits.');
 for(const [name,label] of [['3D transform explorer','Local X'],['3D camera explorer','Camera orbit']]){const control=page.getByRole('region',{name,exact:true}).getByRole('slider',{name:label,exact:true});const before=await control.inputValue();const box=await control.boundingBox();await control.tap({position:{x:box!.width*.75,y:box!.height/2}});await expect(control).not.toHaveValue(before);}
 await page.getByRole('region',{name:'3D raycast lab',exact:true}).getByRole('button',{name:'Aim at Switch'}).tap();await expect(page.getByRole('region',{name:'3D raycast lab',exact:true}).locator('.demo-result')).toContainText('First hit: Switch');
 await page.getByRole('region',{name:'3D navigation lab',exact:true}).getByRole('button',{name:'Navigate to (6,6)'}).tap();await expect(page.getByRole('region',{name:'3D navigation lab',exact:true}).locator('.demo-result')).toContainText('Path has');await context.close();
});

test('visual review captures and reduced-motion focus states',async({page})=>{
 const folder=resolve(process.env.VCG_SCREENSHOTS || 'work/screenshots');await mkdir(folder,{recursive:true});
 await page.goto('/');await expect(page.locator('.home-sketch img')).toBeVisible();expect(await page.locator('.home-sketch img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0)).toBe(true);await page.screenshot({path:resolve(folder,'homepage-light.png'),fullPage:true});
 await page.getByRole('link',{name:'Skip to content'}).focus();await page.keyboard.press('Enter');await expect(page.locator('main')).toBeFocused();await expect(page).toHaveURL(/\/$/);
 await page.getByRole('button',{name:'Switch to dark mode'}).click();await expect(page.locator('.home-intro .button.ghost')).toHaveCSS('color','rgb(241, 238, 229)');await page.screenshot({path:resolve(folder,'homepage-dark.png'),fullPage:true});await page.getByRole('button',{name:'Switch to light mode'}).click();await expect(page.locator('.home-intro .button.ghost')).toHaveCSS('color','rgb(41, 40, 34)');
 for(const [route,file] of [['/courses','courses.png'],['/courses/f-game','journey.png'],[firstChapter,'chapter.png'],['/courses/f-2d/lessons/f2-isometric','chapter-2d.png'],['/mechanics','mechanics.png'],['/toolkit','toolkit.png'],['/courses/godot/lessons/g-controller-3d','classic-lesson.png']]){await page.goto('/#'+route);await expect(page.locator('h1')).toBeVisible();await page.screenshot({path:resolve(folder,file),fullPage:true});}
 await page.setViewportSize({width:390,height:844});await page.goto('/');await page.screenshot({path:resolve(folder,'homepage-mobile.png'),fullPage:true});await page.goto('/#'+firstChapter);await page.screenshot({path:resolve(folder,'chapter-mobile.png'),fullPage:true});
 await page.setViewportSize({width:1365,height:900});await page.goto('/#/courses/godot/lessons/g-controller-3d');await page.locator('.code-block').screenshot({path:resolve(folder,'lesson-code.png')});
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/#/labs');const feel=page.getByRole('region',{name:'Game feel lab',exact:true});await feel.getByLabel('Shake', {exact:true}).check();await feel.getByRole('button',{name:'Hit the target'}).click();expect(await feel.locator('svg').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
});

test('valid progress import restores history and project selection',async({page})=>{
 await page.goto('/#/progress');const data={version:1,completed:['fg-core-loop'],attempts:{},milestones:[],review:{},theme:'dark',resume:'fg-core-loop',currentProject:'godot-roguelite',reviewDays:[]};await page.getByLabel('Import progress JSON').setInputFiles({name:'saved.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(data))});await expect(page.getByRole('status')).toContainText('Progress imported');await page.reload();expect(await page.evaluate(key=>JSON.parse(localStorage.getItem(key)!).completed,key)).toEqual(['fg-core-loop']);await page.goto('/#/learn');await expect(page.getByRole('heading',{name:'Mosslight: a 2D roguelite',exact:true})).toBeVisible();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
});
