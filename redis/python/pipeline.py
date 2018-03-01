import redis

# open a connection to Redis
PORT = 6379
r = redis.Redis(
    host='127.0.0.1',
    port=PORT)

r.set('bing', 'baz')
# Use the pipeline() method to create a pipeline instance
pipe = r.pipeline()
# The following SET commands are buffered
pipe.set('foo', 'bar')
pipe.get('bing')
# the EXECUTE call sends all buffered commands to the server, returning
# a list of responses, one for each command.
print(pipe.execute())
