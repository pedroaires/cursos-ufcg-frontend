# Use an official Node.js runtime as a parent image
FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN npm install -g lite-server

EXPOSE 3000

CMD ["lite-server", "--baseDir=.", "--files=app/**/*.{html,htm,css,js}", "--host=0.0.0.0"]
