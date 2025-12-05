FROM node:24-alpine

WORKDIR /app

COPY ./backend/package*.json ./
COPY ./common/package*.json ./common/

RUN npm install

COPY ./backend ./
COPY ./common ./common

EXPOSE 3000

CMD ["npm", "start"]