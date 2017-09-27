// Given a customer has been made active in the program
'use strict';
const { Database } = require('sqlite3').verbose();

const path = require('path');

const db = new Database(path.join(__dirname, '..', '..', 'db', 'bangazon.sqlite'));
//get_active_customer's result appears to be {id: null}


//function attempted by SS, will pass values into database from the prompt called in ui.js
module.exports.add_payment_database = (payment_data, id) => {
  db.run(`INSERT INTO paymentTypes (account_number, payment_type, customer_id) VALUES(
    "${payment_data.account_number}", "${payment_data.payment_type}", "${id}"
  )`);
};

module.exports.get_payment_type = (id) => {
  return new Promise((resolve, reject)=>{
    console.log(`id`, id);
    db.get(`SELECT payment_type FROM paymentTypes WHERE customer_id = "${id}"`, (err, data)=>{
      if(err) reject(err);
      resolve(data);
    });
  })
};
