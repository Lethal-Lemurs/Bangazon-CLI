'use strict';
const {red, magenta, blue, rainbow} =  require('chalk');
const prompt = require('prompt');
const { add_product_database } = require('../models/product');
const { get_active_customer, no_active_customer } = require('../active-customer');

// This method written by DW 
let prompt_new_product = () => {
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
        type: 'string',
        required: true
      },
      {
        name: 'quantity',
        description: 'Enter the quantity of said product',
        type: 'integer',
        required: true
      } 
    ], function(err, results) {
      if (err) return reject(err);
      resolve(results);
    });
  });
  } else {
    // This weird thing was told to us by Jufe
    return new Promise( (resolve, reject) => {
    no_active_customer();
    const { display_welcome } = require('../ui');
    display_welcome();
    });
  }
}

let product_menu_handler = (err, user_input) => {
  if(user_input.choice === "1") {

  } else if (user_input.choice === "2") {
    prompt_new_product().then( (new_prod_data) => {
      // console.log("??", new_prod_data);
      add_product_database(new_prod_data, get_active_customer().id);
    });
  } else if (user_input.choice === "3") {

  } else if (user_input.choice === "4") {

  } else if (user_input.coice === "5") {

  }

}

module.exports.product_options = () => {
  if(get_active_customer().id !== null){
    return new Promise( (resolve, reject) => {
      let choose_options = `${blue('Choose a Option!')}`
      console.log(` ${choose_options}
  ${magenta('1.')} See your products
  ${magenta('2.')} Create product
  ${magenta('3.')} Edit product by Id
  ${magenta('4.')} Delete product by Id
  ${magenta('5.')} Go back to the main menu`);
        prompt.get([{
          name: 'choice',
          description: 'Please make a selection'
        }], product_menu_handler);
    })
  } else {
    // This weird thing was told to us by Jufe
    return new Promise( (resolve, reject) => {
    no_active_customer();
    const { display_welcome } = require('../ui');
    display_welcome();
    });
  }
}
