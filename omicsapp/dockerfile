#FROM node:alpine
#COPY . /usr/src/app
#WORKDIR /usr/src/app
#RUN npm install
#CMD ["npm", "start"]
#EXPOSE 3000


FROM node:alpine
WORKDIR /usr/omicsapp
COPY ./package.json  ./
RUN npm install
COPY ./  ./
CMD ["npm", "start"]
EXPOSE 5173