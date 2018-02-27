# Dockerize Simple Flask App
In this tutorial you will learn how to create a simple Flask App and run it inside a docker container

## Required Software
* docker (1.6.0 or above)
* python 2.7 or above
* Linux VM - (We used ubuntu 14.04 64 bit)

## Create the Flask App and Deployment files
Create a folder web. All our files will be inside this directory

### Flask Application

Create a new file app.py inside web and add the following python code
```
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Flask Dockerized'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
```
### Requirements File
Requirements file states the software required to be installed in the container. Create a file requirements.txt inside web folder
```
Flask==0.10.1
```

### Dockerfile
This file is needs to create a docker image and deploy it
```
FROM ubuntu:latest
MAINTAINER Rajdeep Dua "dua_rajdeep@yahoo.com"
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
ENTRYPOINT ["python"]
CMD ["app.py"]
```
### Build the docker Image
Run the following command to build the docker image flask-sample-one from web directory
```
$ docker build -t flask-sample-one:latest .
```

### Run the Docker Container
```
$ docker run -d -p 5000:5000 flask-sample-one
```

You can find the container runtime details as shown below
```
$ docker ps -a
CONTAINER ID        IMAGE                              COMMAND                CREATED             STATUS                             PORTS                    NAMES
92fb4d65c7cd        flask-sample-one:latest            "python app.py"        22 minutes ago      Up 22 minutes                      0.0.0.0:5000->5000/tcp   clever_blackwell
```
