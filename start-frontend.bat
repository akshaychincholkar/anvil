@echo off
cd /d "%~dp0frontend"
if not exist "node_modules" (
    echo Installing npm packages...
    npm install
)
echo Starting BRTN frontend on http://localhost:5173
npm run dev
