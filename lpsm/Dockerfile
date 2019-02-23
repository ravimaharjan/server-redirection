FROM ubuntu:16.04

MAINTAINER ravi

RUN apt-get update && \
	apt-get upgrade -y && \
	apt-get install -y \
	python2.7 \
	python-pip \
	nginx 

ENV WORKDIR_PATH /home/support
# ENV LOG_PATH /var/log

RUN mkdir -p $WORKDIR_PATH
# RUN mkdir -p $LOG_PATH

RUN mkdir -p $WORKDIR_PATH/lpsm
WORKDIR $WORKDIR_PATH/

COPY requirements.txt /home/support/lpsm/

RUN pip install -r /home/support/lpsm/requirements.txt

COPY . /home/support/lpsm/

# ENTRYPOINT ["/bin/bash", "/home/support/appservice/deploy/run_server.sh"]
CMD ["python", "/home/support/lpsm/app.py"]
