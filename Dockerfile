FROM node:20-buster

RUN apt-get update 

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install 

COPY . .

EXPOSE 3334


