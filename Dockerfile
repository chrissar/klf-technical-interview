FROM node:12

WORKDIR /app

COPY app ./app
COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 3000