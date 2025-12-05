FROM node:24-alpine

WORKDIR /app

COPY ./frontend/package*.json ./
COPY ./common/package*.json ./common/

RUN npm install

COPY ./frontend ./
COPY ./common ./common

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]