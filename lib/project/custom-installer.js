const installers = require('./installers'); 

module.exports = class CustomInstaller {
  constructor(name) {
    this.name = name;
  }

  get clazz() {
    return installers[name];
  }

  get instance() {
    new this.customInstallerClass(this.name);
  }

  install() {
    if (this.clazz) this.instance.install();  
  }
}
