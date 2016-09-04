const bundler = require('../bundler');

module.exports = function bundle(...names) {
  bundler.bundle(...names); 
}