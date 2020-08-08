FROM node:lts

WORKDIR /usr/src/app

COPY package.json /usr/src/app

COPY package-lock.json /usr/src/app

RUN npm install

RUN npm install pm2 -g

COPY dist /usr/src/app

EXPOSE 3000

CMD ["pm2-docker", "start", "process.json"]
