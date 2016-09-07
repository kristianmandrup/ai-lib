const registry = require('../registry');
 
module.exports = class List {
  constructor() {
  }

  list() {
    let items = Object.keys(registry.vendor);
    for (let name of items) {
      console.log(name);
    }    
  }
}