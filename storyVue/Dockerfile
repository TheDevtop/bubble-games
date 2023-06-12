# docker build -t bg/storyscapes .
FROM node:alpine3.17

WORKDIR /app

COPY . .
 
RUN npm install

EXPOSE 8080
EXPOSE 3000

CMD [ "npm", "run", "prod" ]
