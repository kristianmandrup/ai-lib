const Base = require('./base');
const {aureliaFile, Registry} = require('ai-core');
// const InstallTypings = require('ai-typings').InstallTypings;

class Bundle extends Base {
  get config() {
    return this.registry.config;
  }

  run() {
    this.config ? this.install() : this.libNotFound();
  }

  install() {
    aureliaFile.mutate(this.config, aureliaFile.mergeBundle);
    // this.customInstaller.install();
    this.installTypings();
  }

  installTypings() {
    // new InstallTypings(this.name).install(() => {
    //   log.info(`Typings installed for ${this.name}`);
    // })
  }
}

module.exports = function bundle(name) {
  new Bundle(name).run();
}

