FROM node:18-alpine

WORKDIR /home/app-client

RUN mkdir -p /home/app-client
COPY . /home/app-client
RUN cd /home/app-client/ \
    && npm install 
EXPOSE 8080
CMD [ "npm", "start" ] 