FROM node:alpine
WORKDIR /usr/omicfe
COPY ./package.json  ./
COPY ./yarn.lock ./
RUN npm install
COPY .  .
CMD ["npm", "start"]
EXPOSE 3001