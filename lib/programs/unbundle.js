const lib = require('../commands');
const program = require('commander');
const util = require('./util');

function unbundle(names) {
  names = util.normalize(names);
  return lib.unbundle(...names);
}

module.exports = unbundle;

program
  // `install [app|skeleton|pwa] <names>` 
  .command('unbundle <names>')
  .description('UnBundle lib(s)')
  .action(unbundle)