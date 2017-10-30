#!/bin/bash

echo "~> building app"
docker exec -it phpzm-node npm run build

if [ ! -d "deploy" ]; then
  echo "~> creating deploy folder"
  mkdir "deploy"
  cd "deploy/"
  git init
  echo "~> adding remote to deploy"
  git remote add deploy ssh://ssh-quasar-phpzm-rocks@quasar-phpzm-rocks.umbler.net:9922/~/git/quasar-phpzm-rocks.git
  cd "../"
fi

echo "~> clear deploy folder"
rm -rf deploy/*

echo "~> copy dist"
cp -R dist/. deploy/
cp -R .deploy/* deploy/

echo "~> add changes"
cd "deploy/"
git add --all

echo "~> create commit changes"
git commit -m "Deploy $(date)"

echo "~> pushing all"
git push -u deploy master
