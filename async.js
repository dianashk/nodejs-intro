var Twitter = require('twitter');
var config = require('./config');
var async = require('async');

var tweets = {}

var twitter = new Twitter(config.credentials);

twitter.search('nodejs', {count: 10, result_type: 'popular'}, function (result) {
  var tweets = {};

  async.forEach(result.statuses, function (tweet, callback) {
    twitter.getUserTimeline({user_id: tweet.user.id, count: 5}, function (r) { 
      tweets[tweet.user.name] = [];
      r.forEach(function (tweet) {
        tweets[tweet.user.name].push(tweet.text);
      });
      callback();
    });
  }, function (err) {
    console.log(tweets);
  });
});
