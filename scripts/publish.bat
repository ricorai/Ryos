@echo off

echo.
echo ===== Publishing Ryos =====
echo.

git add .

set /p msg=Commit message: 

git commit -m "%msg%"

git push

echo.
echo ===== Publish Complete =====

pause