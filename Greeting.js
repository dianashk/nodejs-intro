/**
 * Greeting.js
 */

/**
 * file system library
 */
var fs = require('fs');

var languages = {
  english: './lang/english.txt',
  russian: './lang/russian.txt',
  spanish: './lang/spanish.txt',
  chinese: './lang/chinese.txt'
};

/**
 * constructor
 *
 * @param defaultLanguage string
 */
function Greeting (defaultLanguage) {
  this.default = defaultLanguage;
}

/**
 * greeting generator function
 *
 * @param callback
 */
Greeting.prototype.getText = function (language, callback) {

  var greetingFile = null;

  if (language === null || !languages[language]) {
    greetingFile = languages[this.default];
  }
  else {
    greetingFile = languages[language];
  }

  fs.readFile(greetingFile, function (err, data) {
    callback(data);
  });
}

// expose Greeting class
module.exports = Greeting;
