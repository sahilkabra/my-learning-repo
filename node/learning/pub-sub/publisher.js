var redis = require('redis');
var prompt = require('prompt');

prompt.start();
var publisherClient = redis.createClient(); 
publisherClient.publish('channel1', 'Hi There');
publisherClient.publish('channel1', '{message: Hi There}');
publisherClient.quit();
