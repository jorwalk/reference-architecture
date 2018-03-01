import redis

# open a connection to Redis
PORT = 6379
r = redis.Redis(
    host='127.0.0.1',
    port=PORT)

r.set('foo', 'bar')
value = r.get('foo')
print(value)
