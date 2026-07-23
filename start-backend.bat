@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0backend"
if not exist ".venv" (
    echo Creating virtual environment...
    python -m venv .venv
    echo Installing dependencies...
    .venv\Scripts\pip install -r requirements.txt
)
if exist ".env.local" (
    echo Loading backend\.env.local
    for /f "usebackq tokens=1,* delims==" %%A in (".env.local") do (
        set "_line=%%A"
        if not "!_line:~0,3!"=="REM" (
            set "_key=%%A"
            set "_val=%%B"
            REM Strip any double-quote characters from the value — a quoted
            REM path in .env.local (PATH="C:\x\y.json") otherwise keeps the
            REM quote characters INSIDE the value and every file lookup fails.
            set "_val=!_val:"=!"
            set "!_key!=!_val!"
        )
    )
)
echo Starting BRTN backend on http://localhost:8000
.venv\Scripts\uvicorn main:app --reload --port 8000
