param([string]$Manifest = 'work/imagegen/generated.json', [switch]$Publish)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$projectRoot = Split-Path -Parent $PSScriptRoot
$records = Get-Content -LiteralPath (Join-Path $projectRoot $Manifest) -Raw | ConvertFrom-Json
$mediaDirectory = Join-Path $projectRoot 'public/media'
[System.IO.Directory]::CreateDirectory($mediaDirectory) | Out-Null
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
$parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]90)
$sources = [ordered]@{}
$sourcePath = Join-Path $projectRoot 'src/data/foundations/generated-media.json'
if (Test-Path -LiteralPath $sourcePath) {
    (Get-Content -LiteralPath $sourcePath -Raw | ConvertFrom-Json).PSObject.Properties | ForEach-Object { $sources[$_.Name] = $_.Value }
}
$provenancePath = Join-Path $mediaDirectory 'generation.json'
$provenance = @()
if (Test-Path -LiteralPath $provenancePath) { $provenance = @(Get-Content -LiteralPath $provenancePath -Raw | ConvertFrom-Json) }
foreach ($record in $records) {
    $target = Join-Path $mediaDirectory ($record.id + '.jpg')
    $bitmap = [System.Drawing.Image]::FromFile($record.path)
    try { $bitmap.Save($target, $encoder, $parameters) } finally { $bitmap.Dispose() }
    $sources[$record.id] = 'media/' + $record.id + '.jpg'
    $provenance = @($provenance | Where-Object { $_.id -ne $record.id }) + @([ordered]@{id=$record.id;mode='built-in imagegen';prompt=$record.prompt})
}
$parameters.Dispose()
$sources | ConvertTo-Json | Set-Content -LiteralPath $sourcePath -Encoding UTF8
$provenance | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $provenancePath -Encoding UTF8
Write-Output ('Prepared ' + $sources.Count + ' images.')
if ($Publish) {
    if ($records.Count -ne 1) { throw 'Publish accepts exactly one image at a time.' }
    & npm.cmd run build
    if ($LASTEXITCODE -ne 0) { throw 'Build failed.' }
    & node scripts/verify-generated-media.mjs $records[0].id
    if ($LASTEXITCODE -ne 0) { throw 'Browser image verification failed.' }
    & git add --all
    & git commit -m ('Add generated chapter artwork: ' + $records[0].id)
    if ($LASTEXITCODE -ne 0) { throw 'Commit failed.' }
    & git push origin main
    if ($LASTEXITCODE -ne 0) { throw 'Push failed.' }
}
