'use strict';
const {red, magenta, blue, rainbow} =  require('chalk');
const prompt = require('prompt');
const {} = require('../models/product');
const { get_active_customer, no_active_customer } = require('../active-customer');




module.exports.prompt_new_product = () => {
  console.log(get_active_customer());
  if(get_active_customer().id !== null){
    return new Promise( (resolve, reject) => {
      prompt.get([{
        name: 'name',
        description: 'Enter name of Product',
        type: 'string',
        required: true
      },
      {
        name: 'description',
        description: 'Enter the products description',
        type: 'string',
        required: true
      },
      {
        name: 'price',
        description: 'Enter the price of said product',
        type: 'integer',
        required: true
      },
      {
        name: 'quantity',
        description: 'Enter the quantity of said product',
        type: 'integer',
        required: true
      } 
    ]);
  });
  } else {
    return new Promise( (resolve, reject) => {
    no_active_customer();
    const { display_welcome } = require('../ui');
    display_welcome();
    });
  }
}