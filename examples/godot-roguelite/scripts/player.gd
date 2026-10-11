class_name LearningPlayer2D
extends CharacterBody2D
signal fired(origin: Vector2, direction: Vector2, damage: int)
signal died
@export var speed: float = 180.0
var damage: int = 1
var cooldown: float = 0.3
var remaining: float = 0.0
var alive: bool = true
@onready var health = $Health

func _ready() -> void:
    add_to_group("player")
    health.depleted.connect(_on_depleted)

func _physics_process(delta: float) -> void:
    if not alive:
        return
    remaining = maxf(0.0, remaining - delta)
    velocity = Input.get_vector("move_left", "move_right", "move_up", "move_down") * speed
    move_and_slide()
    if Input.is_action_pressed("attack") and remaining <= 0.0:
        var direction := (get_global_mouse_position() - global_position).normalized()
        if direction == Vector2.ZERO:
            direction = Vector2.RIGHT
        remaining = cooldown
        fired.emit(global_position + direction * 18.0, direction, damage)
    queue_redraw()

func receive_damage(amount: int) -> void:
    health.damage(amount)

func _on_depleted() -> void:
    alive = false
    velocity = Vector2.ZERO
    died.emit()

func _draw() -> void:
    var color := Color("b1c5a4")
    if is_node_ready() and health.remaining > 0.0:
        color = Color("eeeede")
    draw_rect(Rect2(-11, -11, 22, 22), color)
