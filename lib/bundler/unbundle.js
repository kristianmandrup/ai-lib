const Bundler = require('./base');
const ComponentUnBundler = require('ai-component').ComponentUnBundler;

class LibraryUnBundler extends Bundler {
  constructor(name) {
    super(name);
    this.unbundler = new ComponentUnBundler();
  }

  unbundle() {
    this.config? this.uninstall() : this.libNotFound();
  }

  uninstall() {
    this.unbundler.removeLib(this.config, this.name);
  }
}

module.exports = function unbundle(name) {
  new LibraryUnBundler(name).unbundle();
}
