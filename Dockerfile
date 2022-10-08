FROM ubuntu:jammy

WORKDIR /teste/ecommerce

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN npm install -g npm
RUN npm install -g @nestjs/cli
RUN npm install --save typeorm mysql2
RUN npm install --save @nestjs/swagger
