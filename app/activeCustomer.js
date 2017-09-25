'use strict';

let activeCustomer = {
  id: null
}

module.exports.setActiveCustomer = (id) => {
  activeCustomer.id = id;
}

module.exports.getActiveCustomer = () => activeCustomer;
