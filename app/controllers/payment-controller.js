'use strict';

const prompt = require('prompt');

//Prompts user for payment info by SS
module.exports.prompt_new_payment_type = () => {
  return new Promise( (resolve, reject) => {
    prompt.get([{
      name: 'account_number',
      description: 'Enter Account Number',
      type: 'string',
      required: true
    }, {
      name: 'payment_type',
      description: 'Enter a Supported Payment Method: (Visa, Mastercard, Paypal)',
      type: 'string',
      required: true
    }], function(err, results) {
      if (err) return reject(err);
      resolve(results);
    })
  });
};