const BaseInstaller = require('./base');

module.exports = class jQueryInstaller extends BaseInstaller {
  constructor(name) {
    super(name);
  }

  configure() {
    if (this.preferences.packageManager !== 'jspm') return; 

    let filePath = path.join(__dirname, 'systemjs/jquery.js');

    let systemConfig = fs.readFileSync(filePath, 'utf8');
    this.replace({
      files: './index.html',
      replace: /System.import\('aurelia-bootstrapper'\);?/g,
      with: systemConfig
    }, (err, changedFiles) => {
      if (err) {
        log.error('Unable to automatically configure System.js for jQuery');
      } else {
        log.success('Successfully configured System.js for jQuery in index.html');
      }
    })
  }
}