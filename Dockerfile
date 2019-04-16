FROM node:10.4.0

WORKDIR /client

COPY package*.json /client/

RUN yarn install

COPY . /client/

EXPOSE 8000

CMD ["yarn", "start"]