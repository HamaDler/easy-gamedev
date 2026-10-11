extends StaticBody3D
signal used(id: String)
var id: String = ""
var claimed: bool = false

func interact(_actor: Node3D) -> void:
    if claimed:
        return
    if id != "exit":
        claimed = true
    used.emit(id)
