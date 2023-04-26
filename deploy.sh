#!/bin/bash
image_name="quasar"
container_name="/api"

docker stop $container_name
docker rm $container_name
docker rmi $image_name

docker build -t $image_name .
docker run -d --name $container_name -p 3000:3000 $image_name

docker-compose --env-file .env.prod up -d
