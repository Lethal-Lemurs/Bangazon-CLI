'use strict';

const prompt = require('prompt');

module.exports.promptNewPaymentType = () => {
  return new Promise( (resolve, reject) => {
    prompt.get([{
      name: 'Account Number',
      description: 'Enter Account Number:',
      type: 'string',
      required: true
    }, {
      name: 'Payment Method',
      description: 'Enter a Supported Payment Method: (Visa, Mastercard, Paypal)',
      type: 'string',
      required: true
    }], function(err, results) {
      if (err) return reject(err);
      resolve(results);
    })
  });
};