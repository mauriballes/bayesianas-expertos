FROM node:10-alpine

RUN mkdir /app && apk add --no-cache git

WORKDIR /app
COPY . .

RUN npm install && cd src/ && ../node_modules/.bin/bower install --allow-root
