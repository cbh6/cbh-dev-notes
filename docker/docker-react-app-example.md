# Dockerize a react app

All this info is extracted from this awesome post https://www.bogotobogo.com/DevOps/Docker/Docker-React-App.php

.dockerignore
```
node_modules
npm-debug.log
build
.dockerignore
**/.git
**/.DS_Store
**/node_modules
```

Dockerfile
```
# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# add app
COPY . ./

# start app
CMD ["npm", "start"]  
```

docker-compose.yml
```
version: '3.7'

services:
  cindes-front:
    container_name: react-app
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - '.:/app'
      - '/app/node_modules'
    ports:
      - 3001:3000
    environment:
      - CHOKIDAR_USEPOLLING=true
    stdin_open: true
```

- To run with docker-compose `docker-compose up`
- To run with docker-compose in detached mode `docker-compose up -d`
- To run directly with docker using the Dockerfile
  - `docker build -t react-app:dev .`
  - `docker run -it --rm \ -v ${PWD}:/app \ -v /app/node_modules \ -p 3001:3000 \ -e CHOKIDAR_USEPOLLING=true \ react-app:dev`
