const Preferences = require('ai-core').preferences;
const CustomInstaller = require('../project/custom-installer');

module.exports = class Bundler {
  constructor(name) {
    this.name = name;
    this.preferences = new Preferences();
    this.customInstaller = new CustomInstaller(name);
  }

  libNotFound() {
    throw `Vendor library ${this.name} is not in registry`;
  }
}
