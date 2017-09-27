// Given a customer has been made active in the program
'use strict';
const { Database } = require('sqlite3').verbose();
const { set_active_customer, get_active_customer } = require('../active-customer');
const path = require('path');

const db = new Database(path.join(__dirname, '..', '..', 'db', 'bangazon.sqlite'));
//getActiveCustomer's result appears to be {id: null}
let active_id = get_active_customer().id;

//function attempted by SS, will pass values into database from the prompt called in ui.js
module.exports.add_payment_database = (paymentData) => {
  db.run(`INSERT INTO paymentTypes (account_number, payment_type, customer_id) VALUES(
    "${paymentData.account_number}", "${paymentData.payment_type}", "${active_id}"
  )`);
};
