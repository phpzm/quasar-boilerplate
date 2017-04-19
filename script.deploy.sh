#!/bin/bash

if [ ! -d "deploy" ]; then
  mkdir "deploy"
  cd "deploy/"
  git init
  git remote add deploy ssh://ssh-quasar-phpzm-rocks@quasar-phpzm-rocks.umbler.net:9922/~/git/quasar-phpzm-rocks.git
  cd "../"
fi

cp -R dist/. deploy/
cd "deploy/"
git add --all
git commit -m "Deploy $(date)"
git push -u deploy master
