# mern-starter  

Quickly set up a MERN stack using the power of Docker!

## What is MERN?
MERN is like the MEAN stack except it swaps out Angular for React. You use JavaScript for all the things.  

M - MongoDB  
E - Express  
R - React  
N - Node  

This project uses a slightly modified MERN acronym:  

M - MongoDB  
E - Express  
R - React+Redux+Rxjs  
N - Node+Nginx  

## Features
### Persistence Layer
* MongoDB + Mongoose ORM

### API Layer
* Express REST API
* JWT authentication via Passport

### UI Layer
* React+Redux+Rxjs UI built with Webpack
* CSS modules + SCSS
* Deploy to NGINX

### Environment Configuration
* Both the UI and API layers utilize dotenv to load environment-specific configuration settings (see `.env.sample` to check out supported settings for each project) 
* ENV variables can also be specified via `Dockerfile`s or `docker-compose.yml`

### Development Tools
* Develop the API with Nodemon to automatically restart server
* Develop the UI with Webpack-Dev-Server and Redux-DevTools to hot reload and time travel debug
* Portainer to manage your Docker containers, volumes, networks, etc.
* Mongo-Express web GUI to manage Mongo

## Get Started
Clone the repo:
```
git clone git@github.com:ecozoic/mern-starter.git
cd mern-starter
```

Install dependencies:
```
cd modules/ui
yarn
cd ../api
yarn
```

Deploy via `docker-compose.yml`:
```
docker-compose up -d
```

To run UI locally:
```
docker-compose up -d
docker stop ui

cd modules/ui

# don't forget to create .env file! 
yarn start
```

To run API locally:
```
docker-compose up -d
docker stop api

cd modules/api

# don't forget to create .env file!
yarn start
```

The above steps can be combined if you wish to run both the UI and API projects locally. The UI's Webpack-Dev-Server is configured to proxy API requests to the API server.

To rebuild images:
```
docker-compose build
```

To undeploy:
```
docker-compose down
```

To undeploy and remove persisted data volumes:
```
docker-compose down --volumes
```

## Ports
By default, this project will bind to the following ports on the host machine:

* UI - [http://localhost:8080](http://localhost:8080)
* API - [http://localhost:8081](http://localhost:8081)
* Mongo-Express - [http://localhost:8082](http://localhost:8082)
* MongoDB - [http://localhost:27017](http://localhost:27017)
* Portainer - [http://localhost:9000](http://localhost:9000)

## Project Roadmap
* SSL support
* Improve NGINX caching
* More unit test coverage
* Improve documentation
* GraphQL?
* Document deployment process for DigitalOcean droplets