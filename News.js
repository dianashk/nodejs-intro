var EventEmitter = require('events').EventEmitter;

function News(country) {
  EventEmitter.call(this);
  this.country = country;
}

// this makes the News class derive from EventEmitter
News.prototype = Object.create(EventEmitter.prototype);

News.prototype.update = function (country, news) {
  if (country === this.country)
    this.emit('update', news);
  else
    this.emit('error', new Error('not interested in ' + country));
};

module.exports = News;