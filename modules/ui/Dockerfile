FROM node:6.11.3

COPY . /opt/ui
WORKDIR /opt/ui

ENV HOST=0.0.0.0 \
    PORT=8080 \
    BASENAME=/ \
    JWT_STORAGE_KEY=access_token

RUN yarn
CMD [ "yarn", "serve" ]
