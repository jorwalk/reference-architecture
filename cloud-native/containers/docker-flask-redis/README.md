## Step 1: Setup
Define the application dependencies.
1. Create a directory for the project:
```
$ mkdir docker-flask-redis
$ cd docker-flask-redis
```
2. Create a file called app.py in your project directory and paste this in:
```
touch app.py
```
In this example, redis is the hostname of the redis container on the application’s network. We use the default port for Redis, 6379.
```
from flask import Flask
from redis import Redis

app = Flask(__name__)
redis = Redis(host='redis', port=6379)

@app.route('/')
def hello():
    count = redis.incr('hits')
    return 'Hello World! I have been seen {} times.\n'.format(count)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
```
3. Create another file called requirements.txt in your project directory and paste this in:
```
touch requirements.txt
```
```
flask
redis
```

## Step 2: Create a Dockerfile
In this step, you write a Dockerfile that builds a Docker image. The image contains all the dependencies the Python application requires, including Python itself.

In your project directory, create a file named `Dockerfile` and paste the following:
```
touch Dockerfile
```
```
FROM python:3.6-jessie
ADD . /code
WORKDIR /code
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```
This tells Docker to:
* Build an image starting with the Python 3.4 image.
* Add the current directory . into the path /code in the image.
* Set the working directory to /code.
* Install the Python dependencies.
* Set the default command for the container to python app.py.

## Step 3: Define services in a Compose file
Create a file called docker-compose.yml in your project directory and paste the following:
```
touch docker-compose.yml
```
```
version: '3'
services:
  web:
    build: .
    ports:
     - "5000:5000"
  redis:
    image: "redis:alpine"
```

This Compose file defines two services, web and redis. The web service:

* Uses an image that’s built from the Dockerfile in the current directory.
* Forwards the exposed port 5000 on the container to port 5000 on the host machine. We use the default port for the Flask web server, 5000.

The redis service uses a public Redis image pulled from the Docker Hub registry.

## Step 4: Build and run your app with Compose
1. From your project directory, start up your application by running docker-compose up.
```
$ docker-compose up
```
Compose pulls a Redis image, builds an image for your code, and starts the services you defined. In this case, the code is statically copied into the image at build time.

2. Enter http://0.0.0.0:5000/ in a browser to see the application running.

If you’re using Docker natively on Linux, Docker for Mac, or Docker for Windows, then the web app should now be listening on port 5000 on your Docker daemon host. Point your web browser to http://localhost:5000 to find the Hello World message. If this doesn’t resolve, you can also try http://0.0.0.0:5000.

If you’re using Docker Machine on a Mac or Windows, use docker-machine ip MACHINE_VM to get the IP address of your Docker host. Then, open http://MACHINE_VM_IP:5000 in a browser.

3. Refresh the page.

The number should increment.

4. Switch to another terminal window, and type docker image ls to list local images.

Listing images at this point should return redis and web.

```
$ docker image ls
```

You can inspect images with docker inspect <tag or id>.

5. Stop the application, either by running docker-compose down from within your project directory in the second terminal, or by hitting CTRL+C in the original terminal where you started the app.

### Step 5: Edit the Compose file to add a bind mount

Edit docker-compose.yml in your project directory to add a bind mount for the web service:

```
version: '3'
services:
  web:
    build: .
    ports:
     - "5000:5000"
    volumes:
     - .:/code
  redis:
    image: "redis:alpine"
```

## Step 6: Experiment with some other commands

If you want to run your services in the background, you can pass the -d flag (for “detached” mode) to docker-compose up and use docker-compose ps to see what is currently running:

```
$ docker-compose up -d
$ docker-compose ps
```

The docker-compose run command allows you to run one-off commands for your services. For example, to see what environment variables are available to the web service:

```
$ docker-compose run web env
```

See docker-compose --help to see other available commands. You can also install command completion for the bash and zsh shell, which will also show you available commands.

If you started Compose with docker-compose up -d, you’ll probably want to stop your services once you’ve finished with them:
```
$ docker-compose stop
```
You can bring everything down, removing the containers entirely, with the down command. Pass --volumes to also remove the data volume used by the Redis container:
```
$ docker-compose down --volumes
```
