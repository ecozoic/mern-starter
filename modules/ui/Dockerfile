FROM node:6.11.4

COPY . /opt/ui
WORKDIR /opt/ui

RUN yarn

FROM nginx

WORKDIR /usr/share/nginx/html
COPY --from=0 /opt/ui/dist .
