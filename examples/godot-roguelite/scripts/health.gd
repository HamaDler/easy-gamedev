extends Node
signal changed(current: int, maximum: int)
signal depleted
@export var maximum: int = 5
@export var invulnerability: float = 0.6
var current: int = 0
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
    return true
