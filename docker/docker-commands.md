- `docker ps`
- `docker-container ps`
- Get IP address of running docker container
`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id`
for older engines `docker inspect --format '{{ .NetworkSettings.IPAddress }}' container_name_or_id`

---

- The following only builds the images, does not start the containers: `docker-compose build`
- The following builds the images if the images do not exist and starts the containers: `docker-compose up`
- If you add the --build option, it is forced to build the images even when not needed: `docker-compose up --build`
- The following skips the image build process: `docker-compose up --no-build`


- What does `docker-compose up -d` ? -> starts the containers in detached mode so will not show any output from them in the console and run them in the background
-`docker-compose down -v` If you use docker compose, you can add -v to the down command, to remove the volumes

---

- `docker volume ls -q | xargs docker volume rm -f`
- `docker network ls -q | xargs docker network rm -f`
- `docker system prune -af`
- `docker-compose down --remove-orphans`

- `docker stop $(docker ps -a -q)` -> stops all running containers
- `sudo systemctl restart docker.socket docker.service` -> reset docker service

Delete volume

- `docker volume ls`
- `docker volume rm VOLUME_NAME`

Sometimes we can't delete a volume. As long as volumes are associated with a container(either running or not), they cannot be removed.

- `docker container prune` before removing volumes must be enough

---

PostgreSQL Docker: Connect to docker container bash and execute psql queries

- `docker ps` (copy container ID)
- `docker exec -it ID bash` (enter into the container terminal)
- `psql -h localhost -p 5432 -d user -U password --password`

---

> If you use docker compose, you can add -v to the down command, to remove the volumes

`docker-compose down -v`
