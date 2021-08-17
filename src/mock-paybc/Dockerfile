# base image
FROM node:14.17 as build-deps

# set working directory
ENV NODE_ROOT /usr/src/app

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package-lock.json yarn.lock ./
RUN npm install

COPY . .
RUN npm run build

FROM registry.access.redhat.com/ubi8/nginx-118
# CMD ["npm", "start"]
EXPOSE 3000

CMD ["sh", "-c", "nginx -g 'daemon off;'"]