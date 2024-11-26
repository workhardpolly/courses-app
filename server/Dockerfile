FROM node:18-alpine

WORKDIR /home/app-server

RUN mkdir -p /home/app-server
COPY . /home/app-server/
RUN cd /home/app-server/ \
    && npm install 
EXPOSE 4000
CMD [ "npm", "start" ]