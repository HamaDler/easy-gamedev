extends CharacterBody2D
signal died(point: Vector2)
enum State { CHASE, WINDUP, RECOVERY, DEAD }
var state: State = State.CHASE
var target: LearningPlayer2D
var remaining: float = 0.0
var attack_direction: Vector2
@onready var health = $Health

func _ready() -> void:
    health.depleted.connect(_on_depleted)

func _physics_process(delta: float) -> void:
    if state == State.DEAD or not is_instance_valid(target) or not target.alive:
        return
    remaining -= delta
    var offset := target.global_position - global_position
    if state == State.CHASE:
        velocity = offset.normalized() * 70.0
        if offset.length() < 52.0:
            state = State.WINDUP
            remaining = 0.5
            attack_direction = offset.normalized()
            velocity = Vector2.ZERO
    elif state == State.WINDUP and remaining <= 0.0:
        if offset.length() < 62.0 and attack_direction.dot(offset.normalized()) > 0.65:
            target.receive_damage(1)
        state = State.RECOVERY
        remaining = 0.7
    elif state == State.RECOVERY and remaining <= 0.0:
        state = State.CHASE
    move_and_slide()
    queue_redraw()

func receive_damage(amount: int) -> void:
    health.damage(amount)

func _on_depleted() -> void:
    if state == State.DEAD:
        return
    state = State.DEAD
    died.emit(global_position)
    queue_free()

func _draw() -> void:
    draw_rect(Rect2(-10, -10, 20, 20), Color("d8bd8c") if state == State.WINDUP else Color("9b8c76"))
    if state == State.WINDUP:
        draw_line(Vector2.ZERO, attack_direction * 52.0, Color("d8bd8c"), 3.0)
