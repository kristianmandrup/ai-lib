const lib = require('../commands');
const program = require('commander');
const util = require('./util');

function bundle(names) {
  names = util.normalize(names);
  return lib.bundle(...names);
}

module.exports = bundle;

program
  // `install [app|skeleton|pwa] <names>` 
  .command('bundle <names>')
  .description('Bundle lib(s)')
  .action(bundle)