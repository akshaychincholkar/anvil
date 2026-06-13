@echo off
cd /d "%~dp0backend"
if not exist ".venv" (
    echo Creating virtual environment...
    python -m venv .venv
    echo Installing dependencies...
    .venv\Scripts\pip install -r requirements.txt
)
echo Starting BRTN backend on http://localhost:8000
.venv\Scripts\uvicorn main:app --reload --port 8000
