const { utils } = require('ai-core');
const { _ } = utils;

exports.normalize = function(names) {
  names = names.split(',');
  names = names.map(name => _.trim(name));
  return _.flatten(names);
}