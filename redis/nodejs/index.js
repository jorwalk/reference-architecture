var redis = require("redis"),
    client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("ready", function (res) {
    console.log("Ready", res);
});
client.on("connect", function (res) {
    console.log("Connect", res);
});
client.on("reconnecting", function (res) {
    console.log("Connect", res);
});
client.on("error", function (res) {
    console.log("Connect", res);
});

client.on("error", function (err) {
    console.log("Error " + err);
});



client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});
