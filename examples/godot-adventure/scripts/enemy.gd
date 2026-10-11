extends CharacterBody3D
signal died
enum State { CHASE, WINDUP, RECOVERY, DEAD }
var state: State = State.CHASE
var target: LearningPlayer3D
var agent: NavigationAgent3D
var health: int = 4
var time_left: float = 0.0
var repath_left: float = 0.0
var locked_direction: Vector3 = Vector3.FORWARD
var material: StandardMaterial3D

func _ready() -> void:
    process_mode = Node.PROCESS_MODE_PAUSABLE
    add_to_group("enemies")
    collision_layer = 4
    collision_mask = 1
    var shape := CollisionShape3D.new()
    var capsule := CapsuleShape3D.new()
    capsule.radius = 0.35
    capsule.height = 1.5
    shape.shape = capsule
    shape.position.y = 0.75
    add_child(shape)
    var visual := MeshInstance3D.new()
    var mesh := CapsuleMesh.new()
    mesh.radius = 0.35
    mesh.height = 1.5
    visual.mesh = mesh
    visual.position.y = 0.75
    material = StandardMaterial3D.new()
    material.albedo_color = Color("9b8c76")
    visual.material_override = material
    add_child(visual)
    agent = NavigationAgent3D.new()
    agent.path_desired_distance = 0.3
    agent.target_desired_distance = 1.6
    add_child(agent)

func _physics_process(delta: float) -> void:
    if state == State.DEAD or not is_instance_valid(target):
        return
    var offset := target.global_position - global_position
    offset.y = 0
    time_left -= delta
    repath_left -= delta
    velocity.x = 0
    velocity.z = 0
    if state == State.CHASE:
        if repath_left <= 0.0 and NavigationServer3D.map_get_iteration_id(agent.get_navigation_map()) > 0:
            repath_left = 0.5
            agent.target_position = target.global_position
        if not agent.is_navigation_finished():
            var direction := agent.get_next_path_position() - global_position
            direction.y = 0
            direction = direction.normalized()
            velocity.x = direction.x * 2.0
            velocity.z = direction.z * 2.0
        if offset.length() < 2.0:
            state = State.WINDUP
            locked_direction = offset.normalized()
            time_left = 0.6
            material.albedo_color = Color("d8bd8c")
    elif state == State.WINDUP and time_left <= 0:
        if offset.length() < 2.5 and locked_direction.dot(offset.normalized()) > 0.6:
            target.receive_damage(1)
        state = State.RECOVERY
        time_left = 0.9
        material.albedo_color = Color("9b8c76")
    elif state == State.RECOVERY and time_left <= 0:
        state = State.CHASE
    if not is_on_floor():
        velocity.y += get_gravity().y * delta
    move_and_slide()

func receive_damage(amount: int) -> void:
    if state == State.DEAD:
        return
    health = maxi(0, health - amount)
    if health == 0:
        state = State.DEAD
        died.emit()
        queue_free()
