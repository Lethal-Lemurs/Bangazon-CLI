'use strict';

let active_customer = {
  id: null
}

module.exports.set_active_customer = (id) => {
  active_customer.id = id;
}

module.exports.get_active_customer = () => active_customer;
