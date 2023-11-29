FROM node:lts-slim

WORKDIR /app

COPY . .

RUN cd /app npm i

CMD ["node", "app/index.js"]

EXPOSE 8080

