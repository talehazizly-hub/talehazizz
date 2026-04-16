@echo off
cd /d "%~dp0"
echo Starting local web server for the quiz folder...
python -m http.server 8000
pause
