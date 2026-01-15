#!/bin/bash

# meant to be run in the cloud

cd "/home/deployer/app"

npm ci --omit=dev
pm2 delete app
pm2 start "FORCE_COLOR=1 node --env-file=/home/deployer/prod.env x/server/server.js" --name app

