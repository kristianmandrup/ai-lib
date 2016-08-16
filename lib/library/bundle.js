const Bundler = require('./base');
const {aureliaFile, registry} = require('ai-core');
const InstallTypings = require('ai-typings').InstallTypings;

class LibraryBundler extends Bundler {
  get config() {
    return registry[this.name];
  }

  bundle() {
    this.config ? this.install() : this.libNotFound();
  }

  install() {
    aureliaFile.mutate(this.config, aureliaFile.mergeBundle);
    this.customInstaller.install();
    this.installTypings();
  }

  installTypings() {
    new InstallTypings(this.name).install(() => {
      log.info(`Typings installed for ${this.name}`);
    })
  }
}

module.exports = function bundle(name) {
  new LibraryBundler(name).bundle();
}

