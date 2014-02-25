var colors = require('colors');
var News = require('./News');

var usaNews = new News('USA');

// .on returns EventEmitter instance, so these can be chained
usaNews
  .on('update',function (news) { console.log('Breaking news: '.green, news); })
  .on('error', function (err) { console.log('error: '.red, err); });


usaNews.update('USA', 'node.js is everywhere!!!');

usaNews.update('UK', 'node.js is there too');
