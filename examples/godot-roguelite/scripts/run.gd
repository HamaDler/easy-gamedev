extends Node2D
const PLAYER: PackedScene = preload("res://scenes/Player.tscn")
const ENEMY: PackedScene = preload("res://scenes/Enemy.tscn")
const PROJECTILE: PackedScene = preload("res://scenes/Projectile.tscn")
enum RunState { PLAYING, UPGRADE, PAUSED, ENDED }
var state: RunState = RunState.PLAYING
var player: LearningPlayer2D
var live: int = 0
var defeats: int = 0
var xp: int = 0
var ranks: Dictionary = {"speed": 0, "damage": 0, "rate": 0}
var run_time: float = 0.0
var spawn_left: float = 0.5
var rng := RandomNumberGenerator.new()
var pickups: Array[Vector2] = []
var hud: Label
var menu: VBoxContainer
var overlay: ColorRect

func _ready() -> void:
    process_mode = Node.PROCESS_MODE_ALWAYS
    _configure_input()
    rng.seed = 31415
    for rect in [Rect2(20, 50, 760, 10), Rect2(20, 480, 760, 10), Rect2(20, 50, 10, 440), Rect2(770, 50, 10, 440)]:
        _wall(rect)
    player = PLAYER.instantiate()
    player.fired.connect(_fire)
    player.died.connect(_defeat)
    add_child(player)
    player.position = Vector2(400, 260)
    _build_ui()
    player.health.changed.connect(func(_current: int, _maximum: int): _update_hud())
    _update_hud()

func _configure_input() -> void:
    var bindings: Dictionary = {"move_left": [KEY_A, KEY_LEFT], "move_right": [KEY_D, KEY_RIGHT], "move_up": [KEY_W, KEY_UP], "move_down": [KEY_S, KEY_DOWN], "attack": [KEY_SPACE], "pause": [KEY_ESCAPE], "restart": [KEY_R]}
    for action in bindings:
        if not InputMap.has_action(action):
            InputMap.add_action(action)
        InputMap.action_erase_events(action)
        for key in bindings[action]:
            var event := InputEventKey.new()
            event.physical_keycode = key
            InputMap.action_add_event(action, event)
    var click := InputEventMouseButton.new()
    click.button_index = MOUSE_BUTTON_LEFT
    InputMap.action_add_event("attack", click)

func _wall(rect: Rect2) -> void:
    var body := StaticBody2D.new()
    var shape := CollisionShape2D.new()
    var rectangle := RectangleShape2D.new()
    rectangle.size = rect.size
    shape.shape = rectangle
    body.position = rect.get_center()
    body.add_child(shape)
    add_child(body)

func _physics_process(delta: float) -> void:
    if state != RunState.PLAYING:
        return
    run_time += delta
    spawn_left -= delta
    if spawn_left <= 0.0 and live < 8:
        spawn_left = maxf(0.45, 1.8 - run_time / 90.0)
        _spawn()
    for index in range(pickups.size() - 1, -1, -1):
        if pickups[index].distance_to(player.position) < 24.0:
            pickups.remove_at(index)
            xp += 1
            if xp >= 4:
                xp -= 4
                _offer_upgrade()
                break
    if defeats >= 20:
        _finish(true)
    _update_hud()
    queue_redraw()

func _spawn() -> void:
    if state != RunState.PLAYING or live >= 8:
        return
    var points: Array[Vector2] = [Vector2(65, 100), Vector2(735, 100), Vector2(65, 440), Vector2(735, 440)]
    var point := points[rng.randi_range(0, points.size() - 1)]
    if point.distance_to(player.position) < 110.0:
        return
    var enemy := ENEMY.instantiate()
    enemy.target = player
    enemy.died.connect(_on_enemy_died, CONNECT_ONE_SHOT)
    live += 1
    add_child(enemy)
    enemy.position = point

func _on_enemy_died(point: Vector2) -> void:
    live = maxi(0, live - 1)
    defeats += 1
    pickups.append(point)

func _fire(origin: Vector2, direction: Vector2, amount: int) -> void:
    var projectile := PROJECTILE.instantiate()
    projectile.direction = direction
    projectile.damage = amount
    add_child(projectile)
    projectile.position = origin

func _build_ui() -> void:
    var layer := CanvasLayer.new()
    layer.process_mode = Node.PROCESS_MODE_ALWAYS
    add_child(layer)
    hud = Label.new()
    hud.position = Vector2(30, 14)
    hud.add_theme_font_size_override("font_size", 16)
    layer.add_child(hud)
    overlay = ColorRect.new()
    overlay.color = Color(0.05, 0.07, 0.05, 0.94)
    overlay.position = Vector2(220, 110)
    overlay.size = Vector2(360, 280)
    layer.add_child(overlay)
    menu = VBoxContainer.new()
    menu.position = Vector2(245, 130)
    menu.size = Vector2(310, 235)
    menu.add_theme_constant_override("separation", 12)
    layer.add_child(menu)
    overlay.hide()
    menu.hide()

func _clear_menu(title: String) -> void:
    for child in menu.get_children():
        menu.remove_child(child)
        child.queue_free()
    var label := Label.new()
    label.text = title
    label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
    menu.add_child(label)
    overlay.show()
    menu.show()

func _menu_button(text: String, callback: Callable) -> void:
    var button := Button.new()
    button.text = text
    button.pressed.connect(callback)
    menu.add_child(button)

func _offer_upgrade() -> void:
    state = RunState.UPGRADE
    get_tree().paused = true
    _clear_menu("Choose one upgrade")
    _menu_button("Stride: +15% base speed", func(): _choose("speed"))
    _menu_button("Power: +1 damage", func(): _choose("damage"))
    _menu_button("Rhythm: shorter attack cooldown", func(): _choose("rate"))

func _choose(id: String) -> void:
    if state != RunState.UPGRADE:
        return
    ranks[id] += 1
    player.speed = 180.0 * (1.0 + 0.15 * ranks["speed"])
    player.damage = 1 + ranks["damage"]
    player.cooldown = maxf(0.1, 0.3 - 0.04 * ranks["rate"])
    _resume()

func _resume() -> void:
    state = RunState.PLAYING
    get_tree().paused = false
    menu.hide()
    overlay.hide()

func _defeat() -> void:
    _finish(false)

func _finish(won: bool) -> void:
    state = RunState.ENDED
    get_tree().paused = true
    _clear_menu("Room cleared!" if won else "Defeated — try a different choice")
    _menu_button("New run (R)", _restart)

func _restart() -> void:
    get_tree().paused = false
    get_tree().reload_current_scene()

func _unhandled_input(event: InputEvent) -> void:
    if event.is_action_pressed("restart"):
        _restart()
    elif event.is_action_pressed("pause"):
        if state == RunState.PAUSED:
            _resume()
        elif state == RunState.PLAYING:
            state = RunState.PAUSED
            get_tree().paused = true
            _clear_menu("Paused")
            _menu_button("Resume", _resume)
            _menu_button("New run", _restart)

func _update_hud() -> void:
    hud.text = "MOSSLIGHT  |  HP %d/6  |  XP %d/4  |  %d/20 defeated\nWASD/arrows move · aim with mouse · click/Space attack · Esc pause · R restart" % [player.health.current, xp, defeats]

func _draw() -> void:
    draw_rect(Rect2(20, 50, 760, 440), Color("373d33"), false, 2.0)
    for point in pickups:
        draw_circle(point, 5.0, Color("d8bd8c"))
