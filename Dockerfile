FROM node:23.11.1-alpine3.21
WORKDIR /usr/app/src
COPY package*.json ./

RUN npm install --production
COPY src .

CMD ["node", "server.js"]