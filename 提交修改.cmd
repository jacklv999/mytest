@echo off
python ./Folder.py
python ./读书笔记/投资相关/量化投资/md.py
git status
git add .
git commit -m "add"
git pull
git push


