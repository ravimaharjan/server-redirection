FROM node:10

ENV WORKDIR_PATH /home/support
# ENV LOG_PATH /var/log

RUN mkdir -p $WORKDIR_PATH
# RUN mkdir -p $LOG_PATH

RUN mkdir -p $WORKDIR_PATH/dc

COPY package*.json $WORKDIR_PATH/dc/

WORKDIR $WORKDIR_PATH/dc
RUN npm install

COPY . $WORKDIR_PATH/dc/

EXPOSE 3000

CMD ["npm", "start"]