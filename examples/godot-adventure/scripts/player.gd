class_name LearningPlayer3D
extends CharacterBody3D
signal defeated
var speed: float = 5.0
var health: int = 6
var invulnerability: float = 0.0
var attack_remaining: float = 0.0
var pivot: Node3D
var arm: SpringArm3D
var camera: Camera3D
var ray: RayCast3D
var visual: MeshInstance3D

func _ready() -> void:
    process_mode = Node.PROCESS_MODE_PAUSABLE
    collision_layer = 2
    collision_mask = 1
    var shape_node := CollisionShape3D.new()
    var capsule := CapsuleShape3D.new()
    capsule.radius = 0.35
    capsule.height = 1.6
    shape_node.shape = capsule
    shape_node.position.y = 0.8
    add_child(shape_node)
    visual = MeshInstance3D.new()
    var mesh := CapsuleMesh.new()
    mesh.radius = 0.35
    mesh.height = 1.6
    visual.mesh = mesh
    visual.position.y = 0.8
    var material := StandardMaterial3D.new()
    material.albedo_color = Color("b1c5a4")
    visual.material_override = material
    add_child(visual)
    pivot = Node3D.new()
    pivot.position.y = 1.3
    pivot.rotation.x = -0.25
    add_child(pivot)
    arm = SpringArm3D.new()
    arm.spring_length = 4.0
    arm.margin = 0.2
    arm.collision_mask = 1
    pivot.add_child(arm)
    arm.add_excluded_object(get_rid())
    camera = Camera3D.new()
    camera.current = true
    arm.add_child(camera)
    ray = RayCast3D.new()
    ray.target_position = Vector3(0, 0, -8)
    ray.collision_mask = 1 | 8
    ray.add_exception(self)
    camera.add_child(ray)

func _physics_process(delta: float) -> void:
    invulnerability = maxf(0.0, invulnerability - delta)
    attack_remaining = maxf(0.0, attack_remaining - delta)
    var input := Input.get_vector("move_left", "move_right", "move_up", "move_down")
    var direction := camera.global_basis * Vector3(input.x, 0, input.y)
    direction.y = 0
    direction = direction.normalized()
    velocity.x = direction.x * speed
    velocity.z = direction.z * speed
    if not is_on_floor():
        velocity.y += get_gravity().y * delta
    elif Input.is_action_just_pressed("jump"):
        velocity.y = 6.0
    move_and_slide()
    if Input.is_action_just_pressed("interact"):
        try_interact()
    if Input.is_action_just_pressed("attack") and attack_remaining <= 0.0:
        attack_remaining = 0.6
        _attack()

func _unhandled_input(event: InputEvent) -> void:
    if event is InputEventMouseMotion and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
        pivot.rotation.y -= event.relative.x * 0.003
        pivot.rotation.x = clampf(pivot.rotation.x - event.relative.y * 0.003, -0.8, 0.4)

func try_interact() -> void:
    ray.force_raycast_update()
    if not ray.is_colliding():
        return
    var target := ray.get_collider() as Node3D
    if target != null and target.has_method("interact") and global_position.distance_to(ray.get_collision_point()) < 3.2:
        target.interact(self)

func _attack() -> void:
    var forward := -camera.global_basis.z
    forward.y = 0
    forward = forward.normalized()
    for enemy in get_tree().get_nodes_in_group("enemies"):
        var offset: Vector3 = enemy.global_position - global_position
        offset.y = 0
        if offset.length() < 2.5 and forward.dot(offset.normalized()) > 0.5:
            var query := PhysicsRayQueryParameters3D.create(global_position + Vector3.UP, enemy.global_position + Vector3.UP, 1)
            query.exclude = [get_rid()]
            if get_world_3d().direct_space_state.intersect_ray(query).is_empty():
                enemy.receive_damage(2)

func receive_damage(amount: int) -> void:
    if invulnerability > 0 or health <= 0:
        return
    health = maxi(0, health - amount)
    invulnerability = 0.8
    if health == 0:
        defeated.emit()

func restore(point: Vector3) -> void:
    global_position = point
    velocity = Vector3.ZERO
    health = 6
    invulnerability = 1.5
