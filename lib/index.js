const installer = require('./installer');
const bundler = require('./bundler');
const registries = require('./registries');

module.exports = {
  bundler: bundler,
  installer: installer,
  list: require('./list'),
  registries: registries
}