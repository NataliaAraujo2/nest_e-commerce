FROM ubuntu:jammy

WORKDIR /srv/app

RUN apt-get update
RUN apt-get install -y \
nodejs \
npm

RUN npm install -g npm
RUN npm install -g @nestjs/cli
RUN npm install --save typeorm mysql2
RUN npm install -g typescript

