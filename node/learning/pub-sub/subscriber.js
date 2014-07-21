var redis = require('redis');

var client = redis.createClient();

var print = function(err, message) {
        if (err) throw err;
        console.log(message);
}

client.on('subscribe', function(channel, count) {
        print(null, 'Subscribed to channel %s. Total Subscribers: %d', channel, count);
});

client.on('message', function(channel, message) {
        console.log('Received message on channel %s. The message says: %s', channel, message);
});

client.subscribe('channel1');
