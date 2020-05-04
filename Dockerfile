# Builder
FROM node:10-alpine AS builder

RUN mkdir /app && apk add --no-cache git

WORKDIR /app

COPY . .

RUN npm install && cd src/ && ../node_modules/.bin/bower install --allow-root

# Executer
FROM nginx:1.17.10-alpine

COPY --from=builder /app/src /usr/share/nginx/html

EXPOSE 80