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

# CMD ["npm", "start"]
EXPOSE 3000

CMD ["sh", "-c", "nginx -g 'daemon off;'"]