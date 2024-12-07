ARG NODE_VERSION=20-alpine

FROM node:${NODE_VERSION} AS build

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 80

CMD ["npm", "start"]