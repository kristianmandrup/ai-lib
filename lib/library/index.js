const installer = require('./installer')();

module.exports = {
 bundle: require('./bundle'),
 unbundle: require('./unbundle'),
 install: installer.install,
 uninstall: installer.uninstall,
 list: require('./list')
}