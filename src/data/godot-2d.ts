import { authored, type LessonSeed } from './lesson-builder';
const seeds:LessonSeed[]=[
{id:'g-movement',goal:'Build normalized, frame-rate-independent top-down movement.',why:'A controllable character gives you a playable test bed before adding combat or content.',teach:['Create Player as CharacterBody2D with Sprite2D and CollisionShape2D. Give the shape a small rectangle or capsule. In Project Settings → Input Map, create move_left, move_right, move_up, and move_down; assign WASD and arrow keys. Keep action names stable across the course.', 'CharacterBody2D velocity is measured in pixels per second. Input.get_vector combines four actions and limits vector length to one. Set velocity in _physics_process, then call move_and_slide. Do not multiply velocity by delta here: the body’s movement method handles the physics timestep.', 'If you want acceleration later, move velocity toward a desired velocity by acceleration × delta. That is an explicit change in feel. Begin with immediate movement so you can evaluate walls and attacks without also debugging acceleration.'],model:['Input Map','Normalized direction','Velocity','move_and_slide','Position'],demo:'velocity',code:`extends CharacterBody2D
@export var speed: float = 180.0

func _physics_process(_delta: float) -> void:
    var direction := Input.get_vector(
        "move_left", "move_right", "move_up", "move_down")
    velocity = direction * speed
    move_and_slide()`,explanation:'_delta is intentionally unused. Multiplying velocity by it before move_and_slide would make movement far too slow. This example expects the four actions and a valid collision shape.',task:'Move a player around a one-room test scene.',steps:['Build the Player scene and configure the four input actions.','Instantiate Player under a Node2D main scene and add four StaticBody2D walls.','Test axes, diagonals, and movement into a corner.'],hints:['Give each wall a CollisionShape2D.','If the player passes through walls, inspect the collision masks before changing movement.'],checks:['Diagonal speed matches straight movement.','Walls block the body.','Holding into a corner produces sliding rather than teleporting.'],question:['Should velocity be multiplied by delta before move_and_slide()?',['Yes, twice','No, move_and_slide handles the timestep','Only with diagonal input'],1,'CharacterBody velocity is units per second. The movement method integrates it for the physics step.'],prompt:'Godot 4.7.2, Player(CharacterBody2D) → Sprite2D, CollisionShape2D. Add normalized top-down movement using my Input Map actions. Explain units and verify diagonals and walls. Keep animation and combat out of this task.',summary:['Use Input Map for behavior-level actions.','CharacterBody velocity is units per second.','Build a movement regression room early.']},
{id:'g-collision',goal:'Choose bodies and areas appropriately and configure collision filters.',why:'A visible sprite has no collision by itself. Correct shape and filtering choices prevent ghosts, self-hits, and accidental triggers.',teach:['CharacterBody2D is for controlled characters. StaticBody2D is for immovable level geometry. RigidBody2D is for simulation-driven objects. Area2D detects overlaps without blocking motion. Attach a CollisionShape2D to the body or area it belongs to; a shape elsewhere in the tree does not automatically serve another body.', 'A collision layer describes what an object is; a mask describes which layers it queries. Name layers in Project Settings: World, Player, Enemy, Attack, Pickup. A player body can be on Player and query World. An enemy attack area can query Player without querying every other enemy.', 'Detection and response are separate. An Area emits body_entered when a body enters; it does not choose damage rules. For sustained contact damage, track overlapping candidates and apply a cooldown. A disabled shape or monitoring set to false can explain a silent trigger before you suspect a signal bug.'],model:['Shape','Layer = identity','Mask = query','Detection','Rule response'],demo:'collision',code:`extends Area2D

func _ready() -> void:
    body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node2D) -> void:
    if body.is_in_group("player"):
        print("Player entered trigger")`,explanation:'Attach this to a trigger Area2D with a CollisionShape2D. Put the player in the player group and set the trigger mask to the Player layer. The callback reports entry; it does not block or repeatedly damage the body.',task:'Build a wall and a pickup trigger with different behavior.',steps:['Name the collision layers and assign the player.','Create a StaticBody2D wall that blocks movement.','Create an Area2D pickup that observes entry and prints once.'],hints:['Select the Collision section of each body in the Inspector.','Use Debug → Visible Collision Shapes while running.'],checks:['The wall blocks but the pickup does not.','Enemies do not trigger a player-only pickup.'],question:['What does a collision mask describe?',['The layers this object detects','The sprite’s transparency','The object’s current health'],0,'A layer identifies an object. A mask selects relevant identities for collision queries.'],summary:['Visuals and shapes have separate roles.','Choose the right body type.','Detection does not define gameplay response.']},
{id:'g-camera-2d',goal:'Follow a player while keeping animation tied to readable movement state.',why:'Movement is easier to understand when the camera and presentation cooperate without changing the rules.',teach:['Add Camera2D under Player, enable position smoothing if desired, and set limits to the room bounds. A camera is a viewport into the world, not a change to the player’s position. Test near edges: smoothing and limits should not reveal empty areas unintentionally.', 'AnimatedSprite2D plays named sprite-frame animations. AnimationPlayer animates arbitrary properties on a timeline. Tween handles short procedural transitions. Use the simplest appropriate tool: idle/run frames on AnimatedSprite2D do not require a full state-machine framework.', 'Animation reads gameplay state. Choosing run because velocity is nonzero does not make the actor move. Keep a facing direction when movement stops so the sprite does not snap unpredictably. Make sure camera movement and character movement are not both modifying the same visual offset.'],model:['Movement state','Facing','Animation selection','Camera framing'],code:`extends CharacterBody2D
@onready var sprite: AnimatedSprite2D = $AnimatedSprite2D

func update_animation() -> void:
    if velocity.length_squared() > 1.0:
        sprite.play("run")
        if absf(velocity.x) > 1.0:
            sprite.flip_h = velocity.x < 0.0
    else:
        sprite.play("idle")`,explanation:'Call update_animation after movement in your existing script. This fragment expects idle and run animations. It is not a replacement movement controller. Facing is preserved when horizontal velocity is near zero.',task:'Add idle/run feedback and bounded camera following.',steps:['Create two named animations from temporary frames.','Add Camera2D and set room limits.','Test stop/start, diagonal movement, and every room edge.'],hints:['Set the camera limits in world coordinates.','Turn smoothing off temporarily to isolate a camera positioning bug.'],checks:['Animation reflects movement rather than driving it.','No blank world is revealed beyond intended boundaries.'],question:['Which tool is suitable for animating a door’s rotation and an attack hitbox on a timeline?',['AnimationPlayer','A shared health Resource','Input Map'],0,'AnimationPlayer can key arbitrary properties, making it useful for timed presentation and attack windows.'],summary:['Camera framing is separate from world state.','Choose animation tools by responsibility.','Preserve facing through idle.']},
{id:'g-health',goal:'Implement reusable health with invulnerability and exactly one depletion event.',why:'Reliable damage rules are the foundation of fair combat and consistent UI.',teach:['Create Health as a Node component. It owns current health, maximum health, and invulnerability time. The attack requests damage; Health decides whether the request is accepted. Actors and UI listen for events, keeping health independent of their scene paths.', 'Repeated overlap is normal. Gate hits with a cooldown in seconds and reject damage after depletion. Emit changed after updating current health, then depleted only when a valid hit reaches zero. Since further hits are rejected at zero, depletion cannot fire every frame.', 'Invulnerability has a design consequence: one enemy can prevent another from dealing damage during the window. Decide whether that is intended. For our small roguelite, global damage invulnerability is a simple readable rule. Separate invulnerability from attack cooldowns: they belong to different owners.'],model:['Damage request','Alive + cooldown guards','Clamp health','changed / depleted'],code:`extends Node
signal changed(current: int, maximum: int)
signal depleted
@export var maximum: int = 5
@export var invulnerability: float = 0.6
var current: int
var remaining: float = 0.0

func _ready() -> void:
    current = maximum

func _physics_process(delta: float) -> void:
    remaining = maxf(0.0, remaining - delta)

func damage(amount: int) -> bool:
    if amount <= 0 or current <= 0 or remaining > 0.0:
        return false
    current = maxi(0, current - amount)
    remaining = invulnerability
    changed.emit(current, maximum)
    if current == 0:
        depleted.emit()
    return true`,explanation:'The caller receives whether a hit was accepted, useful for hit effects. A new Health instance starts with maximum health. Put regeneration or healing in separate explicit functions rather than bypassing damage rules.',task:'Connect Health to the player and an enemy.',steps:['Add Health children and initialize their UI listeners.','Apply repeated damage requests while standing in a test hazard.','Observe timestamps and count depletion events.'],hints:['Print only accepted damage events.','Make the hazard ask for damage; do not let it directly modify current.'],checks:['Hits respect invulnerability time.','Health never goes below zero.','Depletion emits exactly once per life.'],question:['Who should own invulnerability after being hit?',['The health/damage recipient','Every unrelated UI widget','The world texture'],0,'The recipient decides whether it can currently accept damage, regardless of the attacker.'],summary:['Health is a state owner.','Guard repeated damage and depletion.','Events report consequences after state changes.']},
{id:'g-projectiles',goal:'Spawn a moving projectile that hits once and cleans itself up.',why:'Projectiles combine scenes, velocity, filters, and lifetime. They expose ownership and cleanup mistakes quickly.',teach:['Use an Area2D projectile with a CollisionShape2D and temporary Sprite2D. Configure its mask to Enemy and World. Direction and damage are supplied by the weapon before the projectile is added to the tree. Normalize direction so targeting distance does not alter speed.', 'The projectile’s hit is a request to the target, not permission to mutate arbitrary fields. For the course, damageable actors expose receive_damage(amount). A spent flag protects against two overlap callbacks in the same frame; queue_free is deferred, so the node may briefly still exist after requesting removal.', 'A lifetime prevents off-screen projectiles from accumulating. Small, slow projectiles can use overlap detection, but fast projectiles can cross thin shapes between physics steps. Test this boundary; a swept ray/shape query is an appropriate later improvement rather than pretending areas can never tunnel.'],model:['Weapon configures','Spawn in world','Move','Hit once / expire','Cleanup'],code:`extends Area2D
var direction: Vector2 = Vector2.RIGHT
var speed: float = 320.0
var damage: int = 1
var life: float = 2.0
var spent: bool = false

func _ready() -> void:
    body_entered.connect(_on_hit)

func _physics_process(delta: float) -> void:
    position += direction.normalized() * speed * delta
    life -= delta
    if life <= 0.0:
        queue_free()

func _on_hit(body: Node2D) -> void:
    if spent:
        return
    spent = true
    if body.has_method("receive_damage"):
        body.receive_damage(damage)
    queue_free()`,explanation:'This script is self-contained on the projectile scene. In the weapon, instantiate, set direction/damage, add under the world, and set global_position. Each damageable actor delegates receive_damage to its Health child.',task:'Add a projectile attack with a cooldown.',steps:['Create the projectile scene and filters.','Let a Weapon spawn it in the world rather than under the moving player.','Test enemies, walls, expiration, and repeated callbacks.'],hints:['Set initial data before add_child.','A projectile parented to the player inherits the player’s transform.'],checks:['One projectile cannot damage twice.','Old projectiles disappear after two seconds.','The player does not hit itself.'],question:['Why keep a spent flag before queue_free()?',['Removal is deferred, so another callback may arrive','To increase projectile speed','To change the renderer'],0,'The node can still receive callbacks before the queued deletion is processed. The flag makes the hit idempotent.'],summary:['Projectiles have configuration and lifetime.','Spawn under the correct coordinate-space owner.','Test fast movement and single-hit behavior.']},
{id:'g-melee',goal:'Make attack timing explicit with anticipation, active frames, and recovery.',why:'Combat becomes readable when the player can predict when an attack can hurt and when another action is allowed.',teach:['An attack has phases. Anticipation communicates intent; the active phase enables the hitbox; recovery creates a cost and prevents instant repeated attacks. Define the state transition before adding animation so gameplay cannot accidentally depend on the sprite finishing a loop.', 'Use AnimationPlayer tracks to animate presentation and request hitbox activation at known times. If changing a physics shape during a collision callback, defer the property change. Keep a set of targets hit during this swing so staying inside an active hitbox does not apply damage repeatedly.', 'The actor chooses whether an attack can begin. Attack data supplies duration and damage. Health still decides whether the target accepts the hit. This separates attack timing, collision geometry, and damage permission.'],model:['Idle / move','Anticipation','Active hitbox','Recovery','Ready'],demo:'states',code:`# In a weapon component with an Area2D child named Hitbox:
@onready var hitbox: Area2D = $Hitbox
var hit_targets: Array[Node2D] = []

func begin_swing() -> void:
    hit_targets.clear()

func set_active(active: bool) -> void:
    hitbox.set_deferred("monitoring", active)

func try_hit(target: Node2D) -> void:
    if target in hit_targets:
        return
    hit_targets.append(target)
    if target.has_method("receive_damage"):
        target.receive_damage(2)`,explanation:'Connect Hitbox.body_entered to try_hit. Call begin_swing once at attack start and set_active from animation method tracks. Track the gameplay phase separately so a dead or hurt actor cannot begin a new attack.',task:'Build one telegraphed melee enemy.',steps:['Draw an anticipation cue before the hitbox activates.','Enable damage only during the active phase.','Clear per-swing targets and enforce recovery before another swing.'],hints:['Use obvious timing first: 0.4 seconds anticipation, 0.15 active, 0.5 recovery.','Add a log for phase changes before tuning art.'],checks:['Standing in the hitbox produces at most one hit per swing.','The cue appears before damage.','Hurt or death cancels the attack safely.'],question:['What prevents the same swing from hitting a target every update?',['A per-swing record of hit targets','A larger sprite','A higher frame rate'],0,'The hit list belongs to the attack instance and resets for the next swing. Health invulnerability is a separate rule.'],summary:['Attack phases make combat fair and readable.','Separate presentation, detection, and permission.','A swing needs its own single-hit rule.']},
{id:'g-enemy-states',goal:'Implement enemy intent with explicit, interruptible states.',why:'Chase, attack, hurt, and death should not all run at the same time.',teach:['Start with a small enum rather than a general framework. Chase moves toward the player; Windup stops and telegraphs; Attack activates the weapon; Recovery waits; Dead disables all action. Each state should say what it does and what allows it to leave.', 'A range check chooses when to enter Windup, but leaving range during a telegraphed attack is a design choice. For this enemy, lock the direction at windup and let the player dodge. Instant retargeting throughout the active attack would contradict that cue.', 'Death must interrupt every state. Set Dead, clear velocity, disable attack monitoring, and emit one death event. If an asynchronous animation callback arrives later, check the current state before it restarts behavior.'],model:['Chase','Windup','Attack','Recovery','Chase'],demo:'states',code:`enum State { CHASE, WINDUP, ATTACK, RECOVERY, DEAD }
var state: State = State.CHASE
var time_left: float = 0.0

func enter(next: State) -> void:
    if state == State.DEAD:
        return
    state = next
    if state == State.WINDUP:
        velocity = Vector2.ZERO
        time_left = 0.4
    elif state == State.DEAD:
        velocity = Vector2.ZERO
        $Weapon.set_active(false)`,explanation:'This transition fragment belongs in the enemy controller; integrate state-specific update logic in _physics_process. The Weapon contract comes from melee. A transition to Dead is permitted from every live state, but no later transition leaves Dead.',task:'Implement Chase → Windup → Attack → Recovery.',steps:['Write the valid transition map on paper.','Implement one transition at a time with debug labels.','Kill the enemy during each phase and verify interruption.'],hints:['Use delta to decrement state timing.','Keep the attack direction captured when the cue begins.'],checks:['The enemy never chases and attacks simultaneously.','No callback revives a dead enemy.','The player can dodge the telegraphed direction.'],question:['A delayed animation callback returns a dead enemy to Chase. What is missing?',['A current-state guard on the callback/transition','More enemy textures','A shorter variable name'],0,'Asynchronous completion must respect the actor’s current lifecycle. Death remains terminal for this instance.'],summary:['States make incompatible behavior explicit.','Cues must agree with targeting rules.','Interruptions need cleanup and guards.']},
{id:'g-spawning',goal:'Bound enemy population and clean up encounter bookkeeping.',why:'An unbounded spawner can overwhelm gameplay and performance even when individual enemies work.',teach:['An encounter owns its spawn budget and live-enemy count. A timer proposes a spawn; the encounter checks whether it is still active and below the cap. The enemy reports death; the encounter releases a slot and updates rewards.', 'Connect death before the instance can begin gameplay. Increment the count exactly once per successful spawn and decrement once per death. Reset, scene exit, and restarting a run should cancel the spawner and remove old entities. Do not let old timers continue adding enemies to a new run.', 'Choose spawn points outside a safe radius around the player but inside reachable room space. A random coordinate is not automatically a valid position. Start with authored spawn markers so you can verify fairness before introducing generation.'],model:['Timer request','Active + budget guards','Spawn','Enemy death','Release slot'],code:`extends Node2D
@export var enemy_scene: PackedScene
@export var cap: int = 8
var alive_count: int = 0
var active: bool = true

func spawn_at(point: Vector2) -> void:
    if not active or alive_count >= cap:
        return
    var enemy := enemy_scene.instantiate()
    enemy.died.connect(_on_enemy_died, CONNECT_ONE_SHOT)
    alive_count += 1
    add_child(enemy)
    enemy.global_position = point

func _on_enemy_died() -> void:
    alive_count = maxi(0, alive_count - 1)`,explanation:'Enemy must expose a no-argument died signal emitted once. The authored marker selection and Timer callback call spawn_at. CONNECT_ONE_SHOT protects the listener count, while the enemy still needs correct death rules.',task:'Build a capped encounter with four spawn markers.',steps:['Add Marker2D children at valid positions.','Connect a Timer to a guarded spawn request.','Stop the encounter on defeat and test restart cleanup.'],hints:['Reject markers too close to the player.','Print alive_count alongside the actual enemy-node count.'],checks:['The cap is never exceeded.','Death releases exactly one slot.','Restart does not leave an old timer active.'],question:['What should decide the maximum number of live enemies?',['The encounter/spawner','Each enemy’s sprite','The HUD label'],0,'The encounter coordinates population. Individual enemies should not infer a global budget independently.'],summary:['Bound populations explicitly.','Connect lifecycle events before play begins.','Validate spawn positions and cleanup.']},
{id:'g-slice',goal:'Complete and playtest one representative roguelite loop.',why:'A vertical slice tests whether the systems create a worthwhile experience before multiplying content.',teach:['Connect one room, one enemy type, one attack, one reward, one upgrade, and a defeat/restart flow. Temporary shapes are enough, but feedback must make the rules readable. The player should know when a hit was accepted, when an enemy threatens, and what the upgrade changes.', 'Give the slice an objective measurement: a two-minute run, one upgrade before the end, and a restart that returns to a clean initial state. Watch someone else play without coaching. Record moments of confusion separately from mechanical bugs.', 'A slice is a decision point. If movement feels unresponsive or upgrades have no visible effect, tune the loop before authoring ten rooms. Keep a short cut list of features that do not support the current goal.'],model:['Enter room','Fight + avoid','Gain XP','Choose upgrade','Continue / restart'],code:`# Example session state, owned by the run controller.
enum RunState { PLAYING, CHOOSING_UPGRADE, DEFEATED }
var run_state: RunState = RunState.PLAYING
var experience: int = 0

func gain_xp(amount: int) -> void:
    if run_state != RunState.PLAYING:
        return
    experience += amount
    if experience >= 5:
        run_state = RunState.CHOOSING_UPGRADE
        # Show the upgrade UI and pause gameplay deliberately.`,explanation:'This is the integration seam, not the entire session implementation. Upgrade selection must consume the threshold, apply one effect, and return to Playing. The pause lesson covers keeping the upgrade UI interactive.',task:'Finish a two-minute vertical slice.',steps:['Connect the existing components into one run.','Add a visible upgrade decision and a reliable restart.','Observe an uncoached playtest and record three changes.'],hints:['Use one clearly visible upgrade such as +20% movement speed.','Restart by rebuilding run state rather than repairing scattered old nodes.'],checks:['A complete loop works from launch to restart.','The player understands damage and rewards.','No debugger errors appear across three consecutive runs.'],question:['The slice is not fun yet. What should happen next?',['Add fifty rooms','Improve the core decisions and feedback before expanding content','Start a different engine'],1,'The slice exists to expose risks. Content volume rarely fixes an unclear or unsatisfying central loop.'],summary:['A slice contains a representative complete loop.','Observe playtests instead of coaching them.','Resolve central risks before scaling content.']},
{id:'g-tiles',goal:'Author rooms with clear visual, collision, and gameplay layers.',why:'A reusable room must be readable and mechanically valid, not merely attractive.',teach:['Use TileMapLayer nodes for ground, walls, and decoration. Create a TileSet and configure collision on wall tiles. Godot 4’s old TileMap node is deprecated; ask AI for TileMapLayer examples that match the pinned version.', 'Keep gameplay markers such as entrances, exits, and spawn points as named children of the room scene. A painted exit tile alone does not implement level transition. Room metadata should identify connection points and an encounter budget.', 'Test collision with visible shapes. Tiles may have visual overhangs while their collision remains a simple footprint. Keep corridors wider than the player and enemy shapes. Reusing a room scene makes validation cheaper than generating arbitrary tiles immediately.'],model:['TileSet definitions','Ground / wall layers','Room markers','Validated room'],code:`# Room.gd on a Node2D root with Marker2D children.
extends Node2D
@onready var entry: Marker2D = $Entry
@onready var exit: Marker2D = $Exit

func spawn_position() -> Vector2:
    return entry.global_position`,explanation:'Ground and Walls are separate TileMapLayer children. Entry and Exit are markers independent of tile visuals. The room exposes a simple contract for the run controller to place the player.',task:'Author two reusable rooms.',steps:['Create a TileSet with wall collision.','Separate ground, wall, and decorative layers.','Add entry/exit markers and test traversability with the real player.'],hints:['Use simple placeholder tiles while learning the pipeline.','Toggle Debug → Visible Collision Shapes to inspect actual geometry.'],checks:['The player can reach the exit from entry.','Decoration does not unexpectedly block movement.'],question:['A painted door should transition rooms. What else is needed?',['A gameplay trigger/controller contract','Only a brighter door texture','A new physics engine'],0,'Visual tiles communicate intent. A rule and trigger implement the transition.'],summary:['Separate visual and collision responsibilities.','Markers expose room contracts.','Validate with actual actor sizes.']},
{id:'g-procedural',goal:'Generate reproducible variation from validated building blocks.',why:'A seed lets you replay bugs; constraints prevent random content from becoming unplayable.',teach:['Use a dedicated RandomNumberGenerator for a run. Store its seed alongside a generator version. Randomize for a fresh run, then print or save the chosen seed. Debugging can set that seed directly to reproduce the same choices.', 'Choose from authored rooms whose entrances, exits, and spawn points are already valid. Add constraints: no repeated room three times in a row, a reward room after a difficult encounter, and a final room after a fixed budget. Randomness chooses among valid options; it does not replace validation.', 'Identical seeds reproduce results only when the generator, inputs, call order, and relevant engine behavior stay consistent. Adding an unrelated random call can change later choices. Keep content generation RNG separate from cosmetic randomness such as particle variation.'],model:['Seed + version','Validated pool','Constrained choices','Layout','Replay'],code:`extends Node
var rng := RandomNumberGenerator.new()
var rooms: Array[String] = ["small", "cross", "wide"]

func generate_room_ids(seed_value: int, count: int) -> Array[String]:
    rng.seed = seed_value
    var result: Array[String] = []
    for index in range(count):
        result.append(rooms[rng.randi_range(0, rooms.size() - 1)])
    return result`,explanation:'This minimal example returns IDs rather than loading scenes. Add constraints and ID-to-PackedScene mapping after proving reproducibility. Use a separate RNG for visual effects.',task:'Select a five-room run reproducibly.',steps:['Create a map of room IDs to validated scenes.','Generate a sequence from a logged seed.','Add one no-repeat constraint and replay the same seed twice.'],hints:['Validate nonempty pools before calling randi_range.','Record the generator version when you change selection rules.'],checks:['The same generator and seed produce the same sequence.','Every chosen room has a usable entry and exit.'],question:['Why separate cosmetic RNG from room-generation RNG?',['Cosmetic calls should not change future room choices','To make all rooms identical','Because Godot has only one RNG'],0,'Call order affects a seeded sequence. Separating streams prevents an added particle effect from changing the level layout.'],summary:['Seeds support reproducible debugging.','Generate from valid pieces and enforce constraints.','Version the generator and separate random streams.']},
{id:'g-loot',goal:'Award pickups once and choose rewards with explicit weights.',why:'Rewards connect combat to progression. Duplicate collection events and unclear probability can corrupt that loop.',teach:['An enemy death produces a pickup at a world position. The pickup has a claimed guard, checks the player group, reports its value to the run, and removes itself. Set claimed before reporting because a response can trigger other events before deletion finishes.', 'Weighted selection does not mean each item has an independent probability. The chance is weight divided by the total eligible weight. With weights 6, 3, and 1, the chances are 60%, 30%, and 10%. Reject negative weights and handle an empty eligible pool.', 'Eligibility is a rule before randomness: exclude upgrades already at maximum rank, then select. Keep reward generation in the seeded gameplay RNG if it affects run outcomes. Cosmetic pickup motion belongs to a separate effect stream.'],model:['Enemy death','Reward definition','Pickup','Claim once','Run progression'],code:`extends Area2D
signal collected(value: int)
@export var value: int = 1
var claimed: bool = false

func _ready() -> void:
    body_entered.connect(_on_entered)

func _on_entered(body: Node2D) -> void:
    if claimed or not body.is_in_group("player"):
        return
    claimed = true
    collected.emit(value)
    queue_free()`,explanation:'The encounter connects collected to the run’s gain_xp when spawning. The pickup does not search the scene for a global XP label. Its layer/mask should detect only the player.',task:'Connect enemy death to XP pickups and audit collection.',steps:['Spawn a pickup where an enemy dies.','Connect its event to the run controller before adding it.','Collect several overlapping pickups and confirm each awards once.'],hints:['Log a stable pickup instance ID with each award.','A visual pickup animation can play after claimed is set.'],checks:['No pickup awards twice.','A missing or maxed-out reward pool has an explicit fallback.'],question:['A reward has weight 3 in a pool with total weight 10. Its chance is…',['3%','30%','Always 3 rewards'],1,'Weighted choice divides an eligible item’s weight by total eligible weight.'],summary:['Claim before reporting collection.','Filter eligibility before randomness.','Weights are relative shares.']},
{id:'g-upgrades',goal:'Apply one upgrade choice and derive effective stats from definitions.',why:'Progression should produce understandable changes without permanently mutating shared configuration.',teach:['Represent an upgrade with a stable ID, label, description, effect key, magnitude, and maximum rank. The run stores ranks per ID. Base actor data stays unchanged; effective speed or damage is calculated from base values plus owned modifiers.', 'Choosing an upgrade is a transaction: validate the offered ID, ensure selection is still open, increment the rank once, consume the XP threshold, close the panel, and resume. Disable repeated selection before performing side effects so a double click cannot apply twice.', 'Add only a few effects first and explain them in player-facing terms. An upgrade that silently modifies four unrelated stats is hard to evaluate. Later combinations can be interesting, but you need an observable baseline to judge balance.'],model:['Eligible definitions','Offer choices','Select once','Update rank','Recalculate stats'],code:`var ranks: Dictionary = {}
var choosing: bool = false
var base_speed: float = 180.0

func choose_speed_upgrade() -> void:
    if not choosing:
        return
    choosing = false
    ranks["speed"] = mini(3, int(ranks.get("speed", 0)) + 1)
    $Player.speed = base_speed * (1.0 + 0.15 * ranks["speed"])`,explanation:'This fragment demonstrates one effect on a run controller with a Player child. The final offer system should validate that speed was actually offered and not already maxed. Recalculation prevents accidental compounding on a previously modified value.',task:'Offer three eligible upgrade choices.',steps:['Create definitions for speed, damage, and attack cooldown.','Filter maximum ranks and present three choices with exact effects.','Apply one choice, update ranks, consume the threshold, and resume.'],hints:['If fewer than three upgrades remain, show fewer choices.','Derive effective values from base values and ranks each time.'],checks:['A double click applies one rank.','Shared WeaponData is not mutated.','The UI describes a measurable effect.'],question:['Why derive effective speed from base speed and ranks?',['To prevent unintended repeated compounding','To make saves larger','To hide the upgrade’s effect'],0,'A pure derivation can be recalculated and restored consistently. Mutating the already-modified value can stack unexpectedly.'],summary:['Upgrade definitions and acquired ranks are different data.','Selection applies once.','Derive effective stats from explicit modifiers.']},
{id:'g-inventory',goal:'Track item ownership with stable IDs and consistent quantity rules.',why:'Inventory touches UI, interactions, progression, and saving. Clear ownership prevents those systems from disagreeing.',teach:['Use item definitions for names, icons, stack limits, and effects. Store inventory state as item ID → quantity. The UI reads definitions to display that state. Saving the node path of an item is fragile because level hierarchy can change; stable IDs are durable.', 'Put adding and consuming behind functions. consume checks available quantity and returns whether the request succeeded. A door should open only after a successful key consumption, not after independently editing the UI or checking an old label.', 'Decide whether keys are consumed, whether items persist between rooms, and whether capacity exists. These are design rules, not automatic engine features. Test zero, full stack, duplicate pickup, and missing definition cases before adding many items.'],model:['Item definition','Inventory quantities','Validated operation','changed signal','UI / save'],code:`extends Node
signal changed
var quantities: Dictionary = {}

func consume(id: String, amount: int = 1) -> bool:
    var available: int = int(quantities.get(id, 0))
    if amount <= 0 or available < amount:
        return false
    quantities[id] = available - amount
    changed.emit()
    return true`,explanation:'The inventory owns quantities and emits a fact after a successful mutation. A door asks consume("bronze_key") and opens only if true. Add stack limits and validated add_item as separate operations.',task:'Make a key open one door.',steps:['Define bronze_key and add it through a pickup.','Make the door request consumption on interaction.','Update UI from inventory.changed and save only IDs/counts.'],hints:['Do not infer possession from whether an icon is visible.','Decide whether a used key should remain at quantity zero or be removed consistently.'],checks:['The door cannot open without the key.','Repeated interaction does not consume negative quantities.','UI and saved state match the inventory.'],question:['What should determine whether a key can be used?',['The inventory’s validated consume result','The icon’s screen position','A separate counter on every door'],0,'The inventory is the state owner. Other systems should request an operation rather than maintain competing copies.'],summary:['Use stable item IDs.','Validate mutations at the state owner.','UI observes inventory state.']},
];
export const twoDLessons=seeds.map(authored);
