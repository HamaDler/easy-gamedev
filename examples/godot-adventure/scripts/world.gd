extends Node3D
const PLAYER_SCRIPT = preload("res://scripts/player.gd")
const ENEMY_SCRIPT = preload("res://scripts/enemy.gd")
const INTERACT_SCRIPT = preload("res://scripts/interactable.gd")
var player: LearningPlayer3D
var collected: Array[String] = []
var checkpoint_id: String = "start"
var checkpoints: Dictionary = {"start": Vector3(0, 0.3, 6), "camp": Vector3(-6, 0.3, -3)}
var interactables: Dictionary = {}
var hud: Label
var menu: VBoxContainer
var overlay: ColorRect
var status: String = "Collect 3 beacons, then reach the amber gate."
var ended: bool = false
var save_path: String = "user://wayfinder.json"

func _ready() -> void:
    process_mode = Node.PROCESS_MODE_ALWAYS
    _input_map()
    _build_level()
    player = PLAYER_SCRIPT.new()
    player.defeated.connect(_respawn)
    add_child(player)
    player.position = checkpoints["start"]
    _build_ui()
    _spawn_enemies()
    Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _input_map() -> void:
    var bindings: Dictionary = {"move_left": [KEY_A, KEY_LEFT], "move_right": [KEY_D, KEY_RIGHT], "move_up": [KEY_W, KEY_UP], "move_down": [KEY_S, KEY_DOWN], "jump": [KEY_SPACE], "interact": [KEY_E], "attack": [KEY_F], "pause": [KEY_ESCAPE]}
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

func _box(point: Vector3, size: Vector3, color: Color) -> StaticBody3D:
    var body := StaticBody3D.new()
    var collision := CollisionShape3D.new()
    var shape := BoxShape3D.new()
    shape.size = size
    collision.shape = shape
    body.add_child(collision)
    var visual := MeshInstance3D.new()
    var mesh := BoxMesh.new()
    mesh.size = size
    visual.mesh = mesh
    var material := StandardMaterial3D.new()
    material.albedo_color = color
    material.roughness = 0.85
    visual.material_override = material
    body.add_child(visual)
    add_child(body)
    body.position = point
    return body

func _build_level() -> void:
    _box(Vector3(0, -0.3, 0), Vector3(22, 0.6, 22), Color("3e4937"))
    for point in [Vector3(-11, 1.5, 0), Vector3(11, 1.5, 0)]:
        _box(point, Vector3(0.5, 3, 22), Color("57634b"))
    for point in [Vector3(0, 1.5, -11), Vector3(0, 1.5, 11)]:
        _box(point, Vector3(22, 3, 0.5), Color("57634b"))
    var blocked: Array[Vector2i] = [Vector2i(3, 3), Vector2i(3, 4), Vector2i(4, 4)]
    for cell in blocked:
        _box(Vector3(cell.x * 2.5 - 8.75, 1.2, cell.y * 2.5 - 8.75), Vector3(1.7, 2.4, 1.7), Color("756e58"))
    var navmesh := NavigationMesh.new()
    var vertices := PackedVector3Array()
    for z in range(9):
        for x in range(9):
            vertices.append(Vector3(x * 2.5 - 10, 0, z * 2.5 - 10))
    navmesh.set_vertices(vertices)
    for z in range(8):
        for x in range(8):
            if Vector2i(x, z) in blocked:
                continue
            var i := z * 9 + x
            navmesh.add_polygon(PackedInt32Array([i, i + 9, i + 10, i + 1]))
    var region := NavigationRegion3D.new()
    region.navigation_mesh = navmesh
    add_child(region)
    var light := DirectionalLight3D.new()
    light.rotation_degrees = Vector3(-60, -35, 0)
    light.light_energy = 1.2
    add_child(light)
    var environment_node := WorldEnvironment.new()
    var environment := Environment.new()
    environment.background_mode = Environment.BG_COLOR
    environment.background_color = Color("252d29")
    environment.ambient_light_source = Environment.AMBIENT_SOURCE_COLOR
    environment.ambient_light_color = Color("eeeede")
    environment.ambient_light_energy = 0.6
    environment_node.environment = environment
    add_child(environment_node)
    _interactable("beacon_ridge", Vector3(-7, 0.8, -6), Color("b1c5a4"))
    _interactable("beacon_garden", Vector3(7, 0.8, -6), Color("b1c5a4"))
    _interactable("beacon_court", Vector3(7, 0.8, 6), Color("b1c5a4"))
    _interactable("camp", Vector3(-6, 0.8, -3), Color("eeeede"))
    _interactable("exit", Vector3(0, 1.0, -9), Color("d8bd8c"))

func _interactable(id: String, point: Vector3, color: Color) -> void:
    var body := _box(point, Vector3(0.8, 1.6, 0.8), color)
    body.set_script(INTERACT_SCRIPT)
    body.id = id
    body.collision_layer = 8
    body.used.connect(_on_used)
    interactables[id] = body

func _spawn_enemies() -> void:
    for point in [Vector3(-5, 0.3, -6), Vector3(6, 0.3, -4), Vector3(6, 0.3, 4)]:
        var enemy = ENEMY_SCRIPT.new()
        enemy.target = player
        add_child(enemy)
        enemy.position = point

func _on_used(id: String) -> void:
    if ended:
        return
    if id == "exit":
        if collected.size() < 3:
            status = "The gate needs all three beacons."
            return
        ended = true
        get_tree().paused = true
        Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
        _show_menu("Adventure complete — you found the way.")
        return
    if id == "camp":
        checkpoint_id = "camp"
        interactables[id].claimed = false
        player.health = 6
        save_game()
        status = "Camp activated. Progress saved; health restored."
        return
    if id not in collected:
        collected.append(id)
        interactables[id].hide()
        interactables[id].collision_layer = 0
        status = "Beacon collected: %d / 3" % collected.size()
        save_game()

func save_game() -> void:
    var file := FileAccess.open(save_path, FileAccess.WRITE)
    if file == null:
        status = "Save failed: " + error_string(FileAccess.get_open_error())
        return
    file.store_string(JSON.stringify({"version": 1, "checkpoint": checkpoint_id, "collected": collected}))
    if file.get_error() != OK:
        status = "Save write failed."
    file.close()

func load_game() -> void:
    if not FileAccess.file_exists(save_path):
        status = "No saved progress yet."
        return
    var file := FileAccess.open(save_path, FileAccess.READ)
    if file == null:
        status = "Cannot open saved progress."
        return
    var parser := JSON.new()
    if parser.parse(file.get_as_text()) != OK:
        status = "Save file is not valid JSON. Current game preserved."
        return
    var data: Variant = parser.data
    file.close()
    if not data is Dictionary or data.get("version", -1) != 1:
        status = "Save format is invalid or unsupported."
        return
    var id: Variant = data.get("checkpoint", "")
    var ids: Variant = data.get("collected", [])
    if not id is String or not checkpoints.has(id) or not ids is Array:
        status = "Save contains invalid progress."
        return
    var candidate: Array[String] = []
    for item in ids:
        if not item is String or not item.begins_with("beacon_") or not interactables.has(item):
            status = "Save contains unknown objective IDs."
            return
        if item not in candidate:
            candidate.append(item)
    checkpoint_id = id
    collected = candidate
    for key in interactables:
        if key.begins_with("beacon_"):
            var claimed: bool = key in collected
            interactables[key].claimed = claimed
            interactables[key].visible = not claimed
            interactables[key].collision_layer = 0 if claimed else 8
    ended = false
    _reset_enemies()
    player.restore(checkpoints[checkpoint_id])
    status = "Progress restored at " + checkpoint_id
    _resume()

func _reset_enemies() -> void:
    for enemy in get_tree().get_nodes_in_group("enemies"):
        enemy.remove_from_group("enemies")
        enemy.queue_free()
    _spawn_enemies()

func _respawn() -> void:
    player.restore(checkpoints[checkpoint_id])
    _reset_enemies()
    status = "Restored at checkpoint. Collected beacons are preserved."

func _build_ui() -> void:
    var layer := CanvasLayer.new()
    layer.process_mode = Node.PROCESS_MODE_ALWAYS
    add_child(layer)
    hud = Label.new()
    hud.position = Vector2(20, 15)
    layer.add_child(hud)
    var crosshair := Label.new()
    crosshair.text = "+"
    crosshair.set_anchors_and_offsets_preset(Control.PRESET_CENTER)
    layer.add_child(crosshair)
    overlay = ColorRect.new()
    overlay.color = Color(0.05, 0.07, 0.05, 0.95)
    overlay.position = Vector2(245, 170)
    overlay.size = Vector2(470, 250)
    layer.add_child(overlay)
    menu = VBoxContainer.new()
    menu.position = Vector2(270, 190)
    menu.size = Vector2(420, 220)
    menu.add_theme_constant_override("separation", 10)
    layer.add_child(menu)
    overlay.hide()
    menu.hide()

func _show_menu(title: String) -> void:
    for child in menu.get_children():
        menu.remove_child(child)
        child.queue_free()
    var label := Label.new()
    label.text = title
    menu.add_child(label)
    for spec in [["Resume", _resume], ["Save progress", save_game], ["Load progress", load_game], ["New game", _new_game]]:
        var button := Button.new()
        button.text = spec[0]
        button.pressed.connect(spec[1])
        menu.add_child(button)
    overlay.show()
    menu.show()

func _resume() -> void:
    if ended:
        return
    get_tree().paused = false
    menu.hide()
    overlay.hide()
    Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _new_game() -> void:
    get_tree().paused = false
    get_tree().reload_current_scene()

func _unhandled_input(event: InputEvent) -> void:
    if event.is_action_pressed("pause"):
        if get_tree().paused and not ended:
            _resume()
        elif not ended:
            get_tree().paused = true
            Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
            _show_menu("Paused — progress stays on this device")

func _process(_delta: float) -> void:
    if hud != null and is_instance_valid(player):
        hud.text = "WAYFINDER | HP %d/6 | Beacons %d/3\nWASD move · mouse look · Space jump · E interact · F/click attack · Esc menu\n%s" % [player.health, collected.size(), status]
