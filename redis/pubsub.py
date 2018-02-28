import redis

# open a connection to Redis
PORT = 6379
r = redis.Redis(
    host='127.0.0.1',
    port=PORT)

p = r.pubsub()
p.subscribe('my-first-channel')
# p.get_message()
r.publish('my-first-channel', 'some data')

message = p.get_message()

for message in p.listen():
    print(message)
     # do something with the message

#
# r.set('foo', 'bar')
# value = r.get('foo')
# print(value)
