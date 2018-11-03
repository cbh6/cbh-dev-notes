# Docker

Docker Hub: for downloading images (like npm)

## Dockerfile

create new file Dockerfile
it will be our image

```
FROM node:carbon

CMD ["/bin/bash"]
```

- `docker build -t superawesomecontainer .`
- `docker run -it superawesomecontainer`
- `exit`

- `-it` allows us to enter in the container
/bin/bash 

- `docker run -it -d (background)`
- `docker ps (docker containers running)`

- `docker exec -it container_name bash (access bash container)`
- `docker stop container_name`

```
FROM node:8.11.1
WORKDIR /usr/src/smart-brain-api //working directory it will create it
COPY ./ ./ //copy this dir into WORKDIR container
RUN npm install
CMD ["/bin/bash"]
```

if you run it now and then access to the console

- `docker run -it superawesomecontainer`
- `npm start`

it will start but you cant access it from localhost because container 

is a separate 'computer'

you need to expose container port
`docker run -it -p 3000:3000 superawesomecontainer`


> Ps, you can learn more about Dockerfile commands by using this resource: https://docs.docker.com/engine/reference/builder/#usage


## DOCKER COMPOSE

Throughout the next few videos we are going to use Docker Compose to launch separate services under one command. In these videos, I refer to all of these being under one container, but technically Docker Compose launches multiple containers. For simplicity sake, with Docker Compose in the next videos we are going to assume everything is running in this one "Docker World" as you will see. 


```yml
version: '3.6'

services:
  smart-brain-api:
    container_name: backend
    # image: node:8.11.1 # this is commented since we use build
    build: ./ # allows us to use our Dockerfile image
    command: npm start
    working_dir: /src/usr/smart-brain-api
    ports:
      - "3000:3000"
```
- `docker-compose build`
- `docker-compose run smart-brain-api`
- `docker-compose down` it will remove any running containers
- `docker-compose up --build` it will build and run all services we have defined in our docker-compose file (not only one)

Every time you change your .yml file you need to run build first

`docker-compose exec smart-brain-api bash` it will access bash of smart-brain-api container

## Volumes


Volumes allows us to access to the file system

```
# Added this to our yml file

      volumes:
        - ./:/usr/src/smart_brain_api
```

This will map our files to the dir of our container, the host filesystem will be able to watch file changes


> To learn more about Volumes in Docker:
https://stackoverflow.com/questions/34809646/what-is-the-purpose-of-volume-in-dockerfile
https://www.linux.com/learn/docker-volumes-and-networks-compose