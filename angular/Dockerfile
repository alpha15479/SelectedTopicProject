FROM node:lts

RUN mkdir /home/node/app && chown node:node /home/node/app

WORKDIR /home/node/app
USER node

COPY --chown=node:node app/ . 
RUN npm ci --quiet
