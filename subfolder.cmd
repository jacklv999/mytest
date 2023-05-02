@echo off
python ./Folder.py
cd ./读书笔记/投资相关/量化投资/
python ./md.py
cd ../../../
git status
git add .
git commit -m "add"
git pull
git push


