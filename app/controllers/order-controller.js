'use strict';

const {red, magenta, blue, green, cyan} =  require('chalk');
const prompt = require('prompt');
const {  } = require('../models/order');
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


let order_menu_handler = (err, user_input) => {
  if(user_input.choice === "1") {
    // console.log('1');
    // console.log(show_all_products());
    // show_all_products();
    // .then( () => {
      module.exports.add_order_prompt();
    // });
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

