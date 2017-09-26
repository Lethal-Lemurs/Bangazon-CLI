'use strict';
const { Database } = require('sqlite3').verbose();
const { setActiveCustomer, getActiveCustomer } = require('../active-customer');
const path = require('path');

const db = new Database(path.join(__dirname, '..', '..', 'db', 'bangazon.sqlite'));

// function written by GV, DB, JS, SS.
module.exports.addToDatabase = (newCustData) => {
  db.run(`INSERT INTO customers (first_last, street, city, state, zip, phone) VALUES(
    "${newCustData.name}",
    "${newCustData.street}",
    "${newCustData.city}",
    "${newCustData.state}",
    "${newCustData.zip}",
    "${newCustData.phone}"
  )`);
};