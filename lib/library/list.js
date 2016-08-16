const registry = require('../../registry/vendor-libs.json');
 
module.exports = class LibraryList {
  constructor() {
  }

  list() {
    let items = Object.keys(registry);
    for (let name of items) {
      console.log(name);
    }    
  }
}