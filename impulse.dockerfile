FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm i lerna -g --loglevel notice

COPY package.json .
COPY lerna.json .
COPY package-lock.json .

COPY packages/config ./packages/config
COPY packages/impulse ./packages/impulse

RUN npm install --ignore-scripts --no-optional

RUN lerna bootstrap

EXPOSE 3000

CMD [ "npm", "--prefix", "packages/impulse", "start" ]
