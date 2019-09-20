#use base image
FROM node:alpine
#workdir
WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
