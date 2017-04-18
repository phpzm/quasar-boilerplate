#!/bin/bash

if [ ! -d "node_modules" ]; then
  npm i
fi

npm run dev
