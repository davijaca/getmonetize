FROM node:18-bullseye-slim as build

RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

USER node

RUN npm ci

COPY --chown=node:node . .

RUN npm install && npm run build --ignore-scripts


FROM nginx:1.19.0

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

USER node

EXPOSE 3000

CMD ["serve"]
