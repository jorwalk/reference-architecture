let redis = require("redis")
let assert = require("assert")
let Redis = function() {
  this.client = redis.createClient({ host: '0.0.0.0' })
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

r.on("ready", () => { assert("cb: ready event") })
r.on("connect", () => { assert("cb: connection event") })
r.on("reconnecting", () => { assert.fail("cb: reconnecting event") })
r.on("error", () => { assert.fail("cb: error event") })
r.on("end", () => { assert("cb: end event") })
r.on("warning", () => { assert.fail("cb: warning event") })
r.set("urn:key:test", "test:value")
// r.get("urn:key:test", (err, reply) => {
//   if(err) assert.fail("cb: get key error")
//   assert.equal(reply.toString(), "test:value")
// })
// r.delete("urn:key:test")
// r.get("urn:key:test", (err, reply) => {
//   if(err) assert("cb: key does not exist")
//   assert.equal(reply, null)
// })
r.quit()
