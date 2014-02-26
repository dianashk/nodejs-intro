var EventEmitter = require('events').EventEmitter;

// this is the constructor
function News(country) {
  // call the base class constructor
  EventEmitter.call(this);

  this.country = country;
}

// this makes the News class derive from EventEmitter
News.prototype = Object.create(EventEmitter.prototype);

// class function
News.prototype.update = function (country, news) {
  if (country === this.country) {
    // this will trigger the 'update' event and call all registered callbacks
    this.emit('update', news);
  }
  else {
    // this will trigger the 'error' event and call all registered callbacks
    // if no callbacks are registered for the 'error' event, this will result in an exception being thrown
    this.emit('error', new Error('not interested in ' + country));
  }
};

// export the class
module.exports = News;