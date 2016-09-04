const lib = require('../commands');
const program = require('commander');
const util = require('./util');

function uninstall(names) {
  names = util.normalize(names.split(','));
  return lib.uninstall(...names);
}

module.exports = uninstall;

program
  // `install [app|skeleton|pwa] <names>` 
  .command('uninstall <names>')
  .description('UnInstall libs')
  .action(uninstall)