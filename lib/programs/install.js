const lib = require('../commands');
const program = require('commander');
const util = require('./util');

function install(names) {
  names = util.normalize(names.split(','));
  return lib.install(...names);
}

module.exports = install;

program
  // `install [app|skeleton|pwa] <names>` 
  .command('install <names>')
  .description('Install libs')
  .action(install)