FROM node:6.11.2

COPY . /opt/api
WORKDIR /opt/api

ENV PORT=8080 \
    MONGO_HOST=mongo \
    MONGO_PORT=27017 \
    REDIS_HOST=redis \
    REDIS_PORT=6379 \
    JWT_SECRET=yolo

RUN yarn
CMD [ "yarn", "serve" ]
