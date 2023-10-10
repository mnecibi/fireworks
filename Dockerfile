FROM node:latest AS builder

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

From nginx:latest

WORKDIR /usr/share/nginx/html

COPY index.html --from=build index.html

COPY ~/index.js --from=build index.js
