FROM node:lts-slim

RUN mkdir -p /app

ENV DATABASE_PASSWORD=123
ENV DATABASE_USER=root

WORKDIR /app

COPY . .

RUN npm i

CMD ["node", "index.js"]

EXPOSE 8080

