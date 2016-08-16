class LibInstaller {
  constructor() {
  }

  install(name) {
    console.log('install', name);
  }

  uninstall(name) {
    console.log('uninstall', name);
  }
}

module.exports = function installer() {
  return new LibInstaller();
}