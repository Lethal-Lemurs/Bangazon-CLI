'use strict';
const {red, magenta, blue, green, cyan} =  require('chalk');
const prompt = require('prompt');
// const optimist = require('optimist');
// prompt.override = optimist.argv;
const { add_product_database, edit_product, show_all_products, show_active_products,  show_all_active_products, show_edit_products, choose_edit_product} = require('../models/product');
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
//Displays if user doesn't select a number for which product to edit. Made by Jules. TODO: Currently not called.
module.exports.prompt_select_prod_edit = () => {
  return new Promise( (resolve, reject) => {
    prompt.get(
    [{
      name: 'choice',
      description: 'Please choose a product to edit!!!'
    }],
    function(err, results) {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

module.exports.prompt_edit_product = () => {
  if(get_active_customer().id !== null){
    return new Promise( (resolve, reject) => {
      prompt.get([{
          name: 'choice',
          description: 'Please choose a product ID to edit'
      },
      {
        name: 'name',
        description: 'Edit product name',
        type: 'string',
        required: true
      },
      {
        name: 'description',
        description: 'Edit product description',
        type: 'string',
        required: true
      },
      {
        name: 'price',
        description: 'Edit product price',
        type: 'string',
        pattern: /^[0-9\.]+$/,
        required: true
      },
      {
        name: 'quantity',
        description: 'Edit product quantity',
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
    console.log(`${red(active_customer_products[i].product_id)}: ${active_customer_products[i].product_name}`);
  };
};

module.exports.edit_prod_menu = (active_customer_products) => {
  for(let i = 0; i < active_customer_products.length; i++) {
    console.log(`${red(active_customer_products[i].product_id)}: 
    Name: ${active_customer_products[i].product_name},
    Description: ${active_customer_products[i].product_description},
    Price: $${active_customer_products[i].product_price},
    Price: ${active_customer_products[i].product_qty}`);
  };
};

module.exports.remove_products_prompt = () => {
  return new Promise( (resolve, reject) => {
    prompt.get([{
      name: 'choice',
      description: 'Please choose a product to delete!'
    }],
    function(err, results) {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

let product_menu_handler = (err, user_input) => {
  let num_products = null;
  if(user_input.choice === "1") {
    show_active_products(get_active_customer().id)
    .then( (active_customer_products) => {
      module.exports.active_products_prompt(active_customer_products);
    })
    .then( () => {
      module.exports.product_options();
    })
  } else if (user_input.choice === "2") {
    module.exports.prompt_new_product()
    .then( (new_prod_data) => {
      add_product_database(new_prod_data, get_active_customer().id)
      .then( () => {
        module.exports.product_options();
      })
      .catch( (err) => {
        console.log(err);
      })
    });
  } else if (user_input.choice === "3") {//TODO: Fix edit issues, edit products will create products if the choice doesn't exist
      show_active_products(get_active_customer().id)
      .then( (active_customer_products) => {
        module.exports.edit_prod_menu(active_customer_products);
        console.log(`num`, num_products);
        num_products = active_customer_products.length;
      })
      module.exports.prompt_edit_product()
      .then( (prod_data) => {//TODO: add feedback that user selected 
        console.log(`prod_data`, prod_data);
        if(prod_data.choice <= num_products){
          edit_product(prod_data, get_active_customer().id)
          .then( () => {
            module.exports.product_options();
          })
          .catch( (err) => {
            console.log(err);
          })
        }  
      });
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
  } else {
    console.log(red("PLEASE SELECT A VALID OPTION"));
    module.exports.product_options();
  };
};

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
          description: 'Please make a selection!'
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