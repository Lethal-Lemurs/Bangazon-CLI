'use strict';

// 3rd party libs
const {red, magenta, blue} = require("chalk");
const prompt = require('prompt');
const colors = require("colors/safe");
const path = require('path');
const { Database } = require('sqlite3').verbose();
prompt.message = colors.blue("Bangazon Corp");

// app modules
const { promptNewCustomer } = require('./controllers/customer-controller');
const { prompt_new_payment_type } = require('./controllers/payment-controller')
const { addToDatabase } = require('./models/Customer.js');
const { add_payment_database } = require('./models/payment.js');

const db = new Database(path.join(__dirname, '..', 'db', 'bangazon.sqlite'));

prompt.start();

let mainMenuHandler = (err, userInput) => {
  if (userInput.choice === '1') {
    promptNewCustomer()
    .then( (custData) => {
      addToDatabase(custData);
    });
  } else if (userInput === '2'){

  } else if (userInput.choice === '3'){
    prompt_new_payment_type()
    .then( (payment_data) => {
      add_payment_database(payment_data);
    })
  } else if (userInput === '4'){

  }
};

module.exports.displayWelcome = () => {
  let headerDivider = `${magenta('*********************************************************')}`
  return new Promise( (resolve, reject) => {
    console.log(`
  ${headerDivider}
  ${magenta('**  Welcome to Bangazon! Command Line Ordering System  **')}
  ${headerDivider}
  ${magenta('1.')} Create a customer account
  ${magenta('2.')} Choose active customer
  ${magenta('3.')} Create a payment option
  ${magenta('4.')} Add product to shopping cart
  ${magenta('5.')} Complete an order
  ${magenta('6.')} See product popularity
  ${magenta('7.')} Leave Bangazon!`);
    prompt.get([{
      name: 'choice',
      description: 'Please make a selection'
    }], mainMenuHandler );
  });
};
