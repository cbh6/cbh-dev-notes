docker ps
docker-container ps

- Get IP address of running docker container
`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id`
for older engines `docker inspect --format '{{ .NetworkSettings.IPAddress }}' container_name_or_id`
