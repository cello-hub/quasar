#!/bin/bash
mysql_container_name="mysql-db"
server_container_name="server"

docker stop $mysql_container_name
docker stop $server_container_name
docker rm $mysql_container_name
docker rm $server_container_name

docker-compose --env-file .env.prod up -d
