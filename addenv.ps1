# read .env file content and set env var
$envFileContent = Get-Content -Path ".env" -ErrorAction SilentlyContinue
if ($envFileContent) {
    # read .env file by line
    foreach ($line in $envFileContent) {
        # ignore comment and empty line
        if (-not ($line -match '^\s*#') -and -not [string]::IsNullOrWhiteSpace($line)) {
            $envVar = $line -split '=', 2
            if ($envVar.Count -eq 2) {
                $envVarName = $envVar[0].Trim()
                $envVarValue = $envVar[1].Trim()
                # set env var
                [Environment]::SetEnvironmentVariable($envVarName, $envVarValue, 'Process')
                Write-Host "set env: $envVarName = $envVarValue"
            }
        }
    }
} else {
    Write-Host "no .env file found"
}