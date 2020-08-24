FROM node:10

ENV WORKDIR_PATH /home/support
# ENV LOG_PATH /var/log

RUN mkdir -p $WORKDIR_PATH
# RUN mkdir -p $LOG_PATH

RUN mkdir -p $WORKDIR_PATH/jobs

COPY package.json $WORKDIR_PATH/jobs/

WORKDIR $WORKDIR_PATH/jobs
RUN npm install
COPY . $WORKDIR_PATH/jobs/

EXPOSE 3002

# CMD ["npm", "start"]