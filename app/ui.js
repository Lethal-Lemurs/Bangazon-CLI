'use strict';

// 3rd party libs
const {red, magenta, blue} = require("chalk");
const prompt = require('prompt');
const colors = require("colors/safe");
const path = require('path');
const { Database } = require('sqlite3').verbose();
prompt.message = colors.blue("Bangazon Corp");

// app modules
const { prompt_new_payment_type } = require('./controllers/payment-controller')
const { add_payment_database } = require('./models/payment');
const { prompt_new_customer, prompt_active_customer } = require('./controllers/customer-controller');
const { add_to_database, return_active_customer } = require('./models/customer');
const { set_active_customer, active_customer } = require('./active-customer');
const { product_options } = require('./controllers/product-controller');
const { order_options } = require('./controllers/order-controller');
const { prompt_new_order } = require('./controllers/order-controller');
const { show_all_products } = require('./models/product')
const active = require('./active-customer');

const db = new Database(path.join(__dirname, '..', 'db', 'bangazon.sqlite'));

prompt.start();

let main_menu_handler = (err, user_input) => {

    if (user_input.choice === '1'){
      prompt_new_customer()
      .then( (cust_data) => {
        add_to_database(cust_data);
      });
    } else if (user_input.choice === '2'){
      prompt_active_customer()
      .then( (cust_data) => {
        set_active_customer(cust_data.id)
        .then( (active_id)  => {
          return_active_customer(active_id);
        })
      });
    } else if (user_input.choice === '3'){
      prompt_new_payment_type()
      .then( (payment_data) => {
        add_payment_database(payment_data, active.get_active_customer().id);
      })
    } else if (user_input.choice === '4'){
      product_options();      
    } else if (user_input.choice === '5'){
      order_options();
    } else if (user_input.choice === '5'){
      prompt_new_order();
    } else if (user_input.choice === '7'){
      console.reset = function () {
        return process.stdout.write('\x1Bc');
        // http://www.ascii-code.net/
        // https://gist.github.com/KenanSulayman/4990953
      }
      console.reset();
      console.log(' Thank you for choosing to shop with Bangazon!');
      // console.log();
      // process.exit();
    } else {
    console.log(red("PLEASE SELECT A VALID OPTION"));
    module.exports.display_welcome();
  }
};

module.exports.display_welcome = () => {
  let header_divider = `${magenta('*********************************************************')}`
  return new Promise( (resolve, reject) => {
    console.log(`
  ${header_divider}
  ${magenta('**  Welcome to Bangazon! Command Line Ordering System  **')}
  ${header_divider}
  ${magenta('1.')} Create a customer account
  ${magenta('2.')} Choose active customer
  ${magenta('3.')} Create a payment option
  ${magenta('4.')} Product options
  ${magenta('5.')} Order Options
  ${magenta('7.')} See product popularity
  ${magenta('8.')} Leave Bangazon!`);
    prompt.get([{
      name: 'choice',
      description: 'Please make a selection'
    }], main_menu_handler );
  });
};
