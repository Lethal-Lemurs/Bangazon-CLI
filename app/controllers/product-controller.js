'use strict';
const {red, magenta, blue, green, cyan} =  require('chalk');
const prompt = require('prompt');
const { add_product_database, show_active_products, remove_product } = require('../models/product');
const { get_active_customer, no_active_customer } = require('../active-customer');

// This method written by DW 
 module.exports.prompt_new_product = () => {
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
        pattern: /^[0-9\.]+$/,
        required: true
      },
      {
        name: 'quantity',
        description: 'Enter the quantity of said product',
        type: 'integer',
        pattern: /^[0-9]+$/,
        required: true
      } 
    ], function(err, results) {
      if (err) return reject(err);
      resolve(results);
    });
  });
  } else {
    return new Promise( (resolve, reject) => {
      no_active_customer();
      // This weird thing was told to us by Jufe
      const { display_welcome } = require('../ui');
      display_welcome();
    });
  };
};

module.exports.active_products_prompt = (active_customer_products) => {
  for(let i = 0; i < active_customer_products.length; i++) {
    console.log(`  ${red(active_customer_products[i].product_id)}: ${active_customer_products[i].product_name}`);
  };
  module.exports.product_options();
};

module.exports.remove_products_prompt = () => {
  return new Promise( (resolve, reject) => {
    prompt.get([{
      name: 'choice',
      description: 'please choose a product to delete'
    }],
    function(err, results) {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

let product_menu_handler = (err, user_input) => {
  if(user_input.choice === "1") {
    show_active_products(get_active_customer().id)
    .then( (active_customer_products) => {
      module.exports.active_products_prompt(active_customer_products);
    });
  } else if (user_input.choice === "2") {
    module.exports.prompt_new_product()
    .then( (new_prod_data) => {
      add_product_database(new_prod_data, get_active_customer().id)
      .then( () => {
        module.exports.product_options();
      });
    });
  } else if (user_input.choice === "3") {

  } else if (user_input.choice === "4") {
    module.exports.remove_products_prompt()
    .then( (prod_data) => {
      remove_product(prod_data)
      .then( () => {
        module.exports.product_options();
      });
    });

  } else if (user_input.choice === "5") {
      const { display_welcome } = require('../ui');
      display_welcome();
  }

}

module.exports.product_options = () => {
  if(get_active_customer().id !== null){
    return new Promise( (resolve, reject) => {
      console.log(`${green('Product Options:')}
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
    return new Promise( (resolve, reject) => {
      no_active_customer();
      // This weird thing was told to us by Jufe
      const { display_welcome } = require('../ui');
      display_welcome();
    });
  }
}
