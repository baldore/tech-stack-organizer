FROM node:lts

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install
RUN npm install ts-node typescript -g

COPY . /usr/src/app

EXPOSE 3000

CMD ["ts-node", "src/main.ts"]
