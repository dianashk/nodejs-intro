var Twitter = require('twitter');
var config = require('../config');
var async = require('async');

var NODE = 91985735;

var twitter = new Twitter(config.credentials);

twitter.get('/application/rate_limit_status.json', {  }, function (result) {
  console.log(result.resources.followers);
});

function getFollower(id, callback) {
  twitter.get('/followers/ids.json', { count: 10, user_id: id }, function (result) {
    if (! result || ! result.ids) {
      callback(new Error('Invalid response from Twitter'));
      return;
    }

    var followers = result.ids;
    shuffle(followers);
    callback(null, followers[0]);
  });
}


async.waterfall([
  function (callback) { getFollower(NODE, callback) },
  function (firstDegree, callback) { getFollower(firstDegree, callback) },
  function (secondDegree, callback) { getFollower(secondDegree, callback) }
], function (err, result) {
  console.log(result + ' is at most 3 degrees away from @nodejs.');
});

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
};
