'use strict';
const { Database } = require('sqlite3').verbose();
const { set_active_customer, get_active_customer } = require('../active-customer');
const path = require('path');

const db = new Database(path.join(__dirname, '..', '..', 'db', 'bangazon.sqlite'));

// function written by GV, DB, JS, SS.
module.exports.add_to_database = (new_cust_data) => {
  db.run(`INSERT INTO customers (first_last, street, city, state, zip, phone) VALUES(
    "${new_cust_data.name}",
    "${new_cust_data.street}",
    "${new_cust_data.city}",
    "${new_cust_data.state}",
    "${new_cust_data.zip}",
    "${new_cust_data.phone}"
  )`);
};

module.exports.show_all_customers = () => {
  return new Promise( (resolve, reject) => {
  db.all(`SELECT user_id, first_last FROM customers`, (err, cust_data) => {
    resolve(cust_data)
  });
 });
} 
