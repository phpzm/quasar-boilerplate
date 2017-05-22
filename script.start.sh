#!/bin/bash

if [ ! -d "node_modules" ]; then
  echo "installing dependencies"
  npm i
  echo "dependencies installed"
fi
echo "starting dev"
npm run dev
