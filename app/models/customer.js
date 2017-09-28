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
      // console.log("console of logs", cust_data.length);
      // let customer_length = cust_data.length;
      // console.log(customer_length);
      resolve(cust_data)
    });
  });
} 
module.exports.return_active_customer = (active_customer_id, display_welcome) => {
  // console.log("console of id", active_customer_id);
  return new Promise( (resolve, reject) => {
    module.exports.show_all_customers()
      .then( (cust_data) => {
        console.log('customer length', cust_data.length);
        if (active_customer_id == undefined || active_customer_id > cust_data.length) {
          console.log("Please choose a valid id.");
          const { display_welcome } = require('../ui');
          display_welcome();
        }
      })
  db.all(`SELECT * FROM customers WHERE user_id = ${active_customer_id}`, (err, active_data) => {
    // let customer_length = cust_data.length;
    // console.log(customer_length);
    // console.log('active data', active_data);
    
    resolve(active_customer_id)
    });
  }).catch( (err) => {
    console.log(err);
  })
} 
