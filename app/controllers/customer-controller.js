'use strict';
const {red, magenta, blue} = require("chalk");
const prompt = require('prompt');
const { show_all_customers } = require('../models/customer.js');
const {} = require('../ui.js')

module.exports.prompt_new_customer = () => {
  return new Promise( (resolve, reject) => {
    prompt.get([{
      name: 'name',
      description: 'Enter customer name (First Last)',
      type: 'string',
      required: true
    }, {
      name: 'street',
      description: 'Enter street address',
      type: 'string',
      required: true
    }, {
      name: 'city',
      description: 'Enter city',
      type: 'string',
      required: true
    }, {
      name: 'state',
      description: 'Enter state (KY)',
      type: 'string',
      required: true
    }, {
      name: 'zip',
      description: 'Enter postal code',
      type: 'string',
      required: true
    }, {
      name: 'phone',
      description: 'Enter phone number (xxx-yyy-zzzz)',
      type: 'string',
      required: true
    }], function(err, results) {
      if (err) return reject(err);
      resolve(results);
    })
  });
};

module.exports.prompt_active_customer = () => {
  return new Promise( (resolve, reject) => {
    show_all_customers()
    .then( (cust_data) => {
        cust_data.forEach(function(user){
          console.log(`  ${magenta(user.user_id)}: ${user.first_last}`);
        })
        let regex = new RegExp("^[1-" + cust_data.length + "]$");
        console.log(regex);

        prompt.get([{
          name: 'id',
          description: 'Please select a customer by id',
          pattern: regex,
          message: 'you must enter in an ID number',
          required: true
        }], function(err, results) {
          if (err) reject(err);
          // if (results.id > cust_data.length) {
          //   console.log( red('PLEASE CHOOSE A VALID ID'));
          //   const { display_welcome } = require('../ui.js')
          //   display_welcome();
          // } else {
            resolve(results);
          // }
        });
    })
    .catch( (err) => {
      console.log(err);
    })
  });
};