const installer = require('../installer');

module.exports = function create(mountPath, name) {
  installer.uninstall(name, mountPath);  
}