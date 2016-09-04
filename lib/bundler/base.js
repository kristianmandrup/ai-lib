const { Preferences, Registry } = require('ai-core');
// const CustomInstaller = require('../../project/custom-installer');

module.exports = class Base {
  constructor(name) {
    this.name = name;
    this.registry = new Registry();
    this.preferences = new Preferences();
    // this.customInstaller = new CustomInstaller(name);
  }

  libNotFound() {
    throw `Vendor library ${this.name} is not in registry`;
  }
}
