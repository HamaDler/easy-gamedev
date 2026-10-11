extends SceneTree
var failures: int = 0

func _initialize() -> void:
    call_deferred("_run")

func check(condition: bool, message: String) -> void:
    if not condition:
        failures += 1
        push_error(message)

func _run() -> void:
    var game = load("res://Main.tscn").instantiate()
    root.add_child(game)
    current_scene = game
    await physics_frame
    check(game.player.health.current == 6, "Initial health")
    var death_count: Array[int] = [0]
    game.player.health.depleted.connect(func(): death_count[0] += 1)
    game.player.health.damage(1)
    game.player.health.damage(1)
    check(game.player.health.current == 5, "Invulnerability prevents repeated hit")
    game.player.health.remaining = 0
    game.player.health.damage(100)
    game.player.health.damage(100)
    check(game.player.health.current == 0 and death_count[0] == 1, "Depletion applies once")
    check(game.state == game.RunState.ENDED and paused, "Defeat pauses")
    paused = false
    game.player.health.current = 6
    game.player.alive = true
    game.state = game.RunState.PLAYING
    for index in range(30):
        game._spawn()
    check(game.live <= 8, "Enemy count is bounded")
    game._offer_upgrade()
    check(paused, "Upgrade pauses gameplay")
    var before: Vector2 = game.player.position
    Input.action_press("move_right")
    await physics_frame
    await physics_frame
    check(game.player.position.is_equal_approx(before), "Paused actor does not move")
    game._choose("speed")
    game._choose("speed")
    check(game.ranks["speed"] == 1, "Upgrade applies once")
    check(not paused, "Choice resumes gameplay")
    await physics_frame
    await physics_frame
    Input.action_release("move_right")
    check(game.player.position.x > before.x, "Movement resumes")
    print("ROGUELITE CHECKS: ", "PASS" if failures == 0 else "FAIL")
    quit(0 if failures == 0 else 1)
