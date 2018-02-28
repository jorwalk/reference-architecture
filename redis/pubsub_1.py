import redis

# open a connection to Redis
PORT = 6379
r = redis.Redis(
    host='127.0.0.1',
    port=PORT)


for i in range(0,30):
    r.publish('my-first-channel', i)
