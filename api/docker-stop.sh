#!/bin/sh
docker ps |
while read -r line; do
    if [[ "$line" == *"$web-api:v1"* ]]; then
        container_id=$(awk '{print $1}' <<< "$line")
        docker stop $container_id
    fi
done

#echo "currently running docker images:"
#docker ps
