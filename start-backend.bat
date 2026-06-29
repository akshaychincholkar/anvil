@echo off
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
        echo %%A| findstr /b /c:"REM" >nul || set "%%A=%%B"
    )
)
echo Starting BRTN backend on http://localhost:8000
.venv\Scripts\uvicorn main:app --reload --port 8000
