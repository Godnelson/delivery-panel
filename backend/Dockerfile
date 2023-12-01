FROM node:lts-slim

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm i

CMD ["node", "index.js"]

EXPOSE 8080

