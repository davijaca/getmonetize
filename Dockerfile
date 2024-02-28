FROM node:18-bullseye-slim as build

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY package.json package-lock.json ./

USER node

RUN npm ci

COPY --chown=node:node . .

RUN npm run build --ignore-scripts


FROM node:18-bullseye-slim as container

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY --from=build --chown=node:node /usr/src/node-app/build/ .

RUN npm install -g serve

USER node

EXPOSE 3000

CMD ["serve"]
