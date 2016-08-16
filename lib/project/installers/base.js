const replace = require('replace-in-file');
const Preferences = require('ai-core').Preferences;

// installs a library into a project
module.exports = class BaseInstaller {
  constructor(name) {
    this.name = name;
    this.preferences = new Preferences();
  }

  replace(...rest) {
    replace(...rest);
  }
}
