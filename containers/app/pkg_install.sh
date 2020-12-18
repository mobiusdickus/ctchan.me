#!/bin/bash

MODULE=$1
CONTAINER="app-ctchan"

yarn add $MODULE
docker exec -it $CONTAINER yarn add $MODULE
