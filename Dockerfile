FROM node:lts-alpine as builder

WORKDIR /usr/app

CMD ["node-cli-app-template"]