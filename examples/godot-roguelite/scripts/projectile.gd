extends Area2D
var direction: Vector2 = Vector2.RIGHT
var damage: int = 1
var life: float = 1.5
var spent: bool = false

func _ready() -> void:
    body_entered.connect(_on_hit)

func _physics_process(delta: float) -> void:
    position += direction * 300.0 * delta
    life -= delta
    if life <= 0.0:
        queue_free()

func _on_hit(body: Node2D) -> void:
    if spent:
        return
    spent = true
    if body.has_method("receive_damage"):
        body.receive_damage(damage)
    queue_free()

func _draw() -> void:
    draw_circle(Vector2.ZERO, 4.0, Color("eeeede"))
