@echo off
cd ./����ʼ�/Ͷ�����/����Ͷ��/
python ./md.py
cd ../../..
python ./Folder.py
git status
git add .
git commit -m "add"
git pull
git push


