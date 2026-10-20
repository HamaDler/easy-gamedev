import { catalog } from './catalog';
import { authored } from './lesson-builder';
import type { Lesson } from '../types';

const full:Lesson[] = [authored({
 id:'what-is-a-game',goal:'Describe a tiny game as input, rules, state, feedback, and a goal.',
 why:'Asking AI to “make a fun game” leaves almost every decision unstated. A small systems model gives you something concrete to direct and evaluate.',
 teach:['Imagine a reaction game: a light turns green, you click, and the game measures your response. The input is a click. A rule decides whether the click was early. State remembers whether the light is ready and when it changed. Feedback shows the result. The goal is a quick, accurate response.', 'These pieces are distinct. The color on screen is feedback about readiness; it is not the readiness value itself. If code only changes a color but forgets to change state, the game can look ready while still rejecting the click. This is a useful first debugging question: did the action change the state, or only its appearance?', 'A mechanic becomes a game when the player has a reason to use it and a meaningful consequence. Moving a square is a mechanic. Moving a square to collect a target before time runs out adds a goal and a constraint. Start with one loop you can describe without mentioning a theme or engine.'],
 model:['Player action','Rule checks state','State changes','Feedback','Next decision'],
 code:`let ready = false;
let startedAt = 0;

function turnGreen() {
  ready = true;
  startedAt = performance.now();
}

function onClick() {
  if (!ready) return 'Too early';
  ready = false;
  return performance.now() - startedAt;
}`,
 explanation:'ready is the rule’s source of truth. startedAt records time in milliseconds. onClick consumes a valid attempt, so repeated clicks cannot create several results from one signal. Drawing the result is a separate responsibility.',
 task:'Describe a one-screen collection game without asking AI to implement it yet.',steps:['Choose one player action and one goal.','List three state values needed to decide whether the player wins.','Write one rule and describe the feedback it produces.'],hints:['Try position, target position, and time remaining.','A useful rule has a condition and a consequence: if the player touches the target, increase score.'],checks:['Someone else can describe how to win from your explanation.','Your rule refers to state, rather than a vague instruction such as “make it fun”.'],
 question:['The screen shows “You won”, but enemies keep attacking. What should you inspect first?',['The font size','Whether the game state changed to won and update respects it','The asset palette'],1,'The label is feedback. Gameplay stops only if the rules also respond to the win state.'],summary:['Actions pass through rules before changing state.','Feedback communicates state to the player.','A small, explicit loop is a better starting point than a broad theme.']
}),authored({
 id:'game-loop',goal:'Explain input, update, and render, and predict what frame-dependent movement will do.',
 why:'Real-time games keep working between button presses. Understanding the repeating loop lets you find the correct place for a rule and recognize timing bugs.',
 teach:['Think of each frame as a new photograph after the world has advanced. First sample input, then update positions, collisions, timers, and other state. Finally draw what that state says is true. Rendering should not deduct health or move the player: those changes belong in update.', 'requestAnimationFrame asks the browser to call you before a repaint. Its timestamp is not a promise of a fixed frame rate. A slow device or busy tab may produce a larger gap between calls. Delta time is that gap in seconds. Multiplying pixels per second by seconds gives pixels moved.', 'A huge gap after a background tab resumes can launch a player across the screen. For this small prototype, clamp the gap to 0.05 seconds so the simulation does not catch up all at once. More demanding games may use fixed simulation steps; that is a later tool, not a prerequisite for a first game.'],
 model:['Sample input','Update state','Render state','Request next frame'],demo:'loop',
 code:`let previous;
const player = { x: 40, speed: 120 };

function frame(now) {
  const delta = previous === undefined
    ? 0 : Math.min((now - previous) / 1000, 0.05);
  previous = now;
  player.x += player.speed * delta;
  draw(player); // Your drawing function, defined separately.
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);`,explanation:'The first frame has no previous timestamp, so its delta is zero. Movement changes state before draw reads it. draw is an application function, not a browser API. This example deliberately leaves rendering separate.',
 task:'Compare movement at 30 and 120 updates per second in the velocity experiment.',steps:['Predict which object will go farther when both move 2 pixels per frame.','Run the experiment for the same amount of simulated time.','Switch to pixels per second and compare again.'],hints:['Count how many updates happen in one second.','At 120 pixels/second, both objects should cover 120 pixels in one second.'],checks:['You can explain the difference without saying one device is “faster”.','You place collision response in update, before rendering.'],question:['Where should a collision reduce the player’s health?',['In rendering','In the update phase','Only when the browser loads'],1,'Collision is a gameplay rule. Updating health before drawing makes the frame reflect the new state.'],summary:['Update changes state; render presents it.','Delta time expresses elapsed seconds.','Frame counts are not a reliable measure of elapsed time.']
}),authored({
 id:'coordinates',goal:'Move an object and explain its position, direction, and speed.',
 why:'A controllable object gives you a visible result almost immediately. It also makes coordinates and velocity concrete rather than abstract math.',
 teach:['Canvas coordinates start at the top-left. X increases to the right and Y increases downward. A rectangle’s x and y normally describe its top-left corner. Its width and height describe its size; these are not extra position coordinates.', 'A direction is a vector: a change along each axis. Right is (1, 0), up is (0, -1), and a diagonal is (1, -1). That diagonal has length √2. Normalize the direction before multiplying by speed so diagonal movement covers the same distance per second.', 'Keep input, movement, and drawing readable. Input records which keys are held; update translates that into velocity; rendering draws the rectangle. Constrain position using the rectangle’s size, or its right and bottom edges will disappear beyond the canvas.'],model:['Held keys','Direction vector','Normalize','Speed × delta','Position'],demo:'coordinates',
 code:`const keys = new Set();
addEventListener('keydown', e => keys.add(e.key));
addEventListener('keyup', e => keys.delete(e.key));
addEventListener('blur', () => keys.clear());

function update(delta) {
  let dx = Number(keys.has('ArrowRight')) - Number(keys.has('ArrowLeft'));
  let dy = Number(keys.has('ArrowDown')) - Number(keys.has('ArrowUp'));
  const length = Math.hypot(dx, dy) || 1;
  player.x += dx / length * player.speed * delta;
  player.y += dy / length * player.speed * delta;
  player.x = Math.max(0, Math.min(width - player.size, player.x));
  player.y = Math.max(0, Math.min(height - player.size, player.y));
}`,explanation:'This update function fits inside the previous lesson’s frame loop. The player needs x, y, speed, and size fields; width and height are the canvas dimensions. Clearing held keys on blur prevents a “stuck key” after focus leaves the game.',
 task:'Build a square that moves with arrow keys in a 480 × 320 Canvas.',steps:['Create an HTML canvas and draw a 24-pixel square.','Add held-key input and call update before drawing each frame.','Clamp the whole square inside the canvas and clear keys when focus is lost.'],hints:['Use canvas.getContext("2d") and fillRect to draw.','Copy the timestamp handling from the loop lesson, then pass its delta into update.'],checks:['Right increases X; up decreases Y.','Diagonal speed matches horizontal speed.','Changing tabs does not leave the square moving forever.'],question:['A 24-pixel-wide square is inside a 480-pixel canvas. What is its largest valid top-left X?',['480','456','24'],1,'The right edge is x + width. A top-left X of 456 places that edge exactly at 480.'],summary:['Position is relative to an origin.','Velocity combines direction and speed.','Normalize diagonal input and include object size when clamping.']
}),authored({
 id:'browser-idea',goal:'Turn a game idea into a scoped loop and an ordered list of observable tasks.',why:'AI can produce code quickly, but it cannot make unstated design choices reliably. A clear loop and a small scope turn a theme into a buildable project.',
 teach:['“A dungeon game” describes a setting. “Move around one room, dodge enemies, collect XP, and choose an upgrade after each wave” describes behavior. Start with player action, goal, failure, and reward. If the loop is dull with rectangles, extra art will not settle the underlying design.', 'Draw a dependency map. Damage requires a target and health. Upgrades require a working reward and a place to apply a stat change. Save systems do not belong before there is progress worth saving. Implementation order should produce a useful observation at each step.', 'A vertical slice is one representative loop at limited scale. For our browser arena, use one player, one enemy type, one attack, one reward, and a restart button. Set a maximum enemy count. Write non-goals such as multiplayer, procedural worlds, and a large inventory so AI does not introduce them casually.'],model:['Fantasy','Player action','Goal + failure','Core loop','Small tasks'],code:`const plan = [
  'Draw the player in one room',
  'Move with held arrow keys',
  'Spawn one enemy that approaches',
  'Apply contact damage with a cooldown',
  'Add one attack and enemy death',
  'Award XP and offer one upgrade',
  'Show defeat and allow restart'
];`,explanation:'Each entry ends in behavior you can see and test. This is a task list, not a runnable game. It deliberately postpones content volume until the loop works.',
 task:'Write a one-page build brief for a tiny arena roguelite.',steps:['State the repeated player action and failure condition.','List the smallest set of systems needed for a complete run.','Order tasks so each has an observable acceptance check.'],hints:['Use one room and a three-minute run.','“Enemies work” is vague. “One enemy approaches and stops attacking during cooldown” is verifiable.'],checks:['The first three tasks produce something playable.','Every task has a test you can perform.','There are explicit non-goals and a bounded content budget.'],question:['Which task belongs first in a small arena game?',['Build an elaborate upgrade database','Render and move one player','Add cloud saves'],1,'Player movement creates an immediate observation and supports later combat. Bigger systems depend on it.'],prompt:'Help scope a one-room arena game. Core loop: [loop]. Target: plain JavaScript and Canvas. Produce an ordered task list with an observable acceptance check per task. Non-goals: multiplayer, external libraries, procedural worlds. Do not implement yet.',summary:['Describe behavior, not only a theme.','Build prerequisites before dependent systems.','A small complete loop reveals risks early.']
}),authored({
 id:'browser-prompt',goal:'Ask AI for a focused implementation and verify that it fits existing code.',why:'A precise prompt reduces accidental rewrites and makes the result easier to understand. You should know what changed before building on top of it.',
 teach:['Give the agent context, desired behavior, constraints, relevant files, and acceptance checks. “Add movement” could mean mouse movement, acceleration, teleportation, or a new framework. State the actual behavior: held keys move the existing square at 140 pixels/second, with equal diagonal speed.', 'Ask for an inspection first when the project already has code. The agent should identify where input is stored and where delta is calculated before editing. You can then check whether its plan matches your mental model. If it wants to replace a working renderer just to add keyboard input, ask why that is necessary.', 'After a change, inspect the diff and test boundaries. Opposite keys should cancel. Releasing keys should stop movement. Focus loss should clear input. A correct screenshot does not prove correct behavior. Keep a working commit before requesting the next feature.'],model:['Context','One behavior','Constraints','Acceptance checks','Inspect result'],demo:'velocity',code:`// Observable behavior to request and verify:
const direction = {
  x: Number(keys.has('ArrowRight')) - Number(keys.has('ArrowLeft')),
  y: Number(keys.has('ArrowDown')) - Number(keys.has('ArrowUp'))
};
const length = Math.hypot(direction.x, direction.y) || 1;
player.x += direction.x / length * 140 * delta;
player.y += direction.y / length * 140 * delta;`,explanation:'The key set, player object, and delta come from the existing implementation. This snippet demonstrates the intended behavior rather than replacing the whole game. Ask the agent to explain where it belongs.',task:'Use a coding agent to add keyboard movement to your existing square project.',steps:['Paste the input and update code plus relevant filenames.','Ask for an integration plan before edits.','Implement only movement, inspect the diff, and run the acceptance checks.'],hints:['Mention whether delta is in seconds or milliseconds.','Ask the agent to list every file it plans to change.'],checks:['No framework or dependency was added.','Both axes and diagonals behave consistently.','You can explain each changed line before committing.'],question:['The agent rewrites rendering while adding a cooldown. What is the best next step?',['Accept because the new code is longer','Ask how the rewrite is required and request a focused alternative','Add another large feature'],1,'Unrelated rewrites increase uncertainty. Require an explanation tied to the feature and prefer a small testable change.'],prompt:'Inspect [files] and explain the current input/update flow. Then add held-arrow movement at 140 pixels/second using the existing delta in seconds. Normalize diagonals and clear keys on blur. Keep rendering unchanged. No dependencies. Verify opposite keys, diagonal speed, release, and focus loss.',summary:['Give concrete context and observable criteria.','Inspect before modifying existing systems.','Understand the diff and keep a working version.']
}),authored({
 id:'browser-debug',goal:'Create a reproducible bug report and test a root-cause hypothesis.',why:'“It is broken” invites guesswork. Evidence lets you and your coding agent distinguish the cause from a symptom.',teach:['Suppose holding contact with an enemy drains all health instantly. Expected behavior is one damage event per second. Actual behavior is one per frame. Reproduce it with one stationary enemy and no other systems. This removes spawning, upgrades, and art from the question.', 'Instrument the rule before changing it. Log timestamps when damage applies and inspect the cooldown value. If damage applies 60 times per second, the overlap check is repeatedly true and has no gate. Changing enemy speed would hide the symptom without fixing the missing timing rule.', 'Change one hypothesis at a time. A cooldown stored in milliseconds must be compared with milliseconds. A cooldown decremented by delta should use seconds. After the fix, test sustained overlap, exit and reentry, death, and restart. Remove noisy logging once the evidence is recorded.'],model:['Reproduce','Expected vs actual','Observe values','Hypothesis','One change','Retest'],demo:'collision',code:`let damageCooldown = 0;

function update(delta) {
  damageCooldown = Math.max(0, damageCooldown - delta);
  if (overlaps(player, enemy) && damageCooldown === 0 && health > 0) {
    health = Math.max(0, health - 1);
    damageCooldown = 1; // seconds
  }
}`,explanation:'overlaps is your rectangle overlap function, not a browser API. The cooldown decreases even after contact ends, so exit/reentry does not reset it. Reset cooldown with the rest of the run state when restarting.',task:'Fix an intentionally missing damage cooldown in your contact-damage prototype.',steps:['Reproduce damage with one enemy and record expected vs actual results.','Log when damage occurs and confirm which condition is missing.','Add one cooldown gate, then retest contact, reentry, death, and restart.'],hints:['A collision can remain true across many updates.','Do not put damage in the draw function or use frame count as seconds.'],checks:['Sustained overlap applies no more than one hit per second.','Health never becomes negative.','Restart clears old timing state.'],question:['Why does a collision damage the player many times?',['A true overlap can be observed every frame','The sprite is too colorful','The canvas is too large'],0,'Detection answers whether objects overlap now. A separate gameplay rule decides whether another hit is allowed.'],prompt:'Expected: one contact hit per second. Actual: [observations]. Reproduce: [steps]. Relevant files: [files]. Investigate damage timing and units before editing. Propose one root-cause fix and verify sustained overlap, reentry, zero health, and restart.',summary:['A reproducible case is more useful than a vague symptom.','Inspect values before changing rules.','Retest boundaries after a focused fix.']
})];
export const introLessons:Lesson[]=catalog.filter(l=>l.courseId!=='godot').map(meta=>full.find(l=>l.id===meta.id)||({...meta,blocks:[{type:'prose',title:'Curriculum preview',paragraphs:[meta.outcome,`This chapter will connect ${meta.concepts.join(', ').replaceAll('-',' ')} to a practical game-building task. The full lesson is still being authored; explore the linked concepts and project checklist in the meantime.`]}],summary:[],review:[]}));
