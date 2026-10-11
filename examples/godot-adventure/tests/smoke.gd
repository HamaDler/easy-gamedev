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
    game.save_path = "res://tests/test-save.json"
    for frame in range(5):
        await physics_frame
    check(game.player.health == 6, "Initial health")
    check(NavigationServer3D.map_get_iteration_id(game.get_world_3d().navigation_map) > 0, "Navigation map synchronized")
    game._on_used("beacon_ridge")
    game._on_used("beacon_ridge")
    check(game.collected.size() == 1, "Collectible is idempotent")
    game._on_used("camp")
    check(game.checkpoint_id == "camp", "Checkpoint recorded")
    check(FileAccess.file_exists(game.save_path), "Save written")
    game._on_used("beacon_garden")
    game.collected.clear()
    game.load_game()
    check(game.collected.size() == 2, "Save restores objective IDs")
    check(game.player.position.distance_to(game.checkpoints["camp"]) < 0.1, "Safe checkpoint restore")
    var file := FileAccess.open(game.save_path, FileAccess.WRITE)
    file.store_string("not JSON")
    file.close()
    game.load_game()
    check(game.collected.size() == 2, "Invalid save preserves existing state")
    game.player.invulnerability = 0.0
    game.player.receive_damage(6)
    check(game.player.health == 6, "Defeat restores health at checkpoint")
    check(game.collected.size() == 2, "Death preserves objective progress")
    game._on_used("exit")
    check(not game.ended, "Exit requires all objectives")
    game._on_used("beacon_court")
    game._on_used("exit")
    check(game.ended and paused, "Complete loop ends once")
    DirAccess.remove_absolute(ProjectSettings.globalize_path(game.save_path))
    print("ADVENTURE CHECKS: ", "PASS" if failures == 0 else "FAIL")
    quit(0 if failures == 0 else 1)
