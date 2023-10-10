FROM node:latest AS builder

WORKDIR /build
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY index.html --from=build /usr/share/nginx/html/

COPY index.js --from=build /usr/share/nginx/html/
