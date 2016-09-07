const Bundler = require('./base');

// why do we need to use component bundler/unbundler!?
const bundler = require('ai-component').bundler;

class LibraryUnBundler extends Bundler {
  constructor(name) {
    super(name);
    this.unbundler = bundler.unbundle.instance;
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
