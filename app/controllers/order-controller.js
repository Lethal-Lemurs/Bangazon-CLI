'use strict';

const {red, magenta, blue, green, cyan} =  require('chalk');
const prompt = require('prompt');
const { post_product_order, update_join_table, get_customer_order, put_product_order } = require('../models/order');
const { show_all_products } =require('../models/product');
const { get_active_customer, no_active_customer } = require('../active-customer');

module.exports.add_order_prompt = () => {
  return new Promise( (resolve, reject) => {
    prompt.get([{
      name: 'choice',
      description: 'Please Choose A Product To Add To THe CART'
    }],
    function(err, results) {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

module.exports.order_product_display = (products) => {
  for(let i = 0; i < products.length; i++) {
    console.log(`  ${red(products[i].product_id)}: ${products[i].product_name}`);
  };
  
};


let order_menu_handler = (err, user_input) => {
  if(user_input.choice === "1") {
    show_all_products()
    .then( (product_data) => {
      module.exports.order_product_display(product_data);
      module.exports.add_order_prompt()
      .then( (results) => {
        get_customer_order(get_active_customer().id)
          .then( (data) => {
            if(data.user_id === get_active_customer().id) {
              put_product_order(get_active_customer().id)
                .then( () => {
                  module.exports.order_options()
                })
            }else{
              post_product_order(get_active_customer().id)
              .then( (lastID) => {
                update_join_table(get_active_customer().id, lastID, results.choice)
                .then( () => {
                  module.exports.order_options()
                })
              })
            }
          })
      });
    });
  } else if (user_input.choice === "2") {
    console.log('2');
  } else if (user_input.choice === "3") {
    console.log('3');
  } else if (user_input.choice === "4") {
    console.log('4');
      const { display_welcome } = require('../ui');
      display_welcome();
  }

}

module.exports.order_options = () => {
  if(get_active_customer().id !== null){
    return new Promise( (resolve, reject) => {
      console.log(`
      **************************
      ${green('Order Options:')}
      **************************
  ${magenta('1.')} Add A Product To Cart
  ${magenta('2.')} Remove A Product From Cart
  ${magenta('3.')} Complete An Order
  ${magenta('4.')} Go Back To The Main-Menu`);
        prompt.get([{
          name: 'choice',
          description: 'Please make a selection'
        }], order_menu_handler);
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

