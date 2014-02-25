var Twitter = require('twitter');
var config = require('./config');

var tweets = {}

var twitter = new Twitter(config.credentials);
twitter.search('nodejs', {count: 10, result_type: 'popular'}, function(result) {

  var count = result.statuses.length;

  result.statuses.forEach(function (status) {
    twitter.getUserTimeline({user_id: status.user.id, count: 5}, function (r) {
      --count;

      tweets[status.user.name] = [];
      r.forEach(function (tweet) {
        tweets[status.user.name].push(tweet.text);
      });

      if (count === 0) {
        console.log(tweets);
      }
    });
  });;
});
