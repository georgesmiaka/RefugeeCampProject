#!/usr/bin/env bash

#
# Initializing
#

#cd server/service/
#python3 service.py
#cd ..

#
# Starting server, client and web client service
#
cd server
npm i
npm start &
cd ..

#
# Starting web client service
#
cd webclient
npm i
npm start