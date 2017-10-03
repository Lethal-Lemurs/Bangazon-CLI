'use strict';

let active_customer = {
  id: null
}

module.exports.set_active_customer = (id) => {
  return new Promise( (resolve, reject) => {    
    active_customer.id = id;
    console.log("You have selected customer ID of", active_customer.id);
    const { display_welcome } = require('./ui');
    display_welcome();
    resolve(active_customer.id);
  }).catch( (err) => {
    console.log(err);
  })
};

module.exports.get_active_customer = () => active_customer;

module.exports.no_active_customer = () => {
    console.log('No Active Customer Currently!');  
};
