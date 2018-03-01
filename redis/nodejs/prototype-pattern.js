let redis = require("redis")

let Redis = function() {
  this.client = redis.createClient()
}

Redis.prototype = {
  on: function(evt, cb) {
    this.client.on(evt, cb)
  },
  get: function(key, cb) {
    this.client.get(key, cb)
  },
  set: function(key, value) {
    this.client.set(key, value, redis.print)
  },
  hset: function(key, values) {
    this.client.hset(key, values, redis.print);
  },
  delete: function (key) {
    this.client.del(key)
  },
  quit: function() {
    this.client.quit()
  }
}

let r = new Redis()

r.on("connect", () => {
  console.log("event: connected")
})

r.on("ready", () => {
  console.log("event: ready")
})

r.on("end", () => {
  console.log("event: ended")
})

r.hset("hash key", ["hashtest 1", "some value"]);

r.set("string key", "string val")

r.get("string key", (err, reply) => {
  console.log("get:", reply.toString())
})

r.delete("string key")
r.quit()
