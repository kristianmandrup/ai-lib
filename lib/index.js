const installer = require('./installer');
const bundler = require('./bundler');
const registry = require('../registry');

module.exports = {
  bundler: bundler,
  installer: installer,
  list: require('./list'),
  registry: registry,
  registries: registry
}