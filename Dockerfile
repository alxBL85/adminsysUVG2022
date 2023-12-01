FROM node:21.2-alpine3.18
WORKDIR /usr/app/src
COPY package*.json ./

RUN npm install --production
COPY src .

CMD ["node", "server.js"]