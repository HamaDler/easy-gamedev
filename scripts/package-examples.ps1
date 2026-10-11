$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path $PSScriptRoot -Parent
$stageRoot = Join-Path $projectRoot 'work/packages'
$downloadRoot = Join-Path $projectRoot 'public/downloads'
New-Item -ItemType Directory -Path $stageRoot,$downloadRoot -Force | Out-Null
foreach ($id in @('godot-roguelite','godot-adventure')) {
    $source = Join-Path $projectRoot "examples/$id"
    $stage = Join-Path $stageRoot $id
    New-Item -ItemType Directory -Path $stage -Force | Out-Null
    foreach ($name in @('project.godot','Main.tscn','README.md','scripts','scenes','tests')) {
        $item = Join-Path $source $name
        if (Test-Path -LiteralPath $item) { Copy-Item -LiteralPath $item -Destination $stage -Recurse -Force }
    }
    Copy-Item -LiteralPath (Join-Path $projectRoot 'LICENSE') -Destination $stage -Force
    Compress-Archive -LiteralPath $stage -DestinationPath (Join-Path $downloadRoot "$id.zip") -Force
}
