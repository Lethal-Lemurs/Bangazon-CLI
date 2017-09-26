// Given a customer has been made active in the program
'use strict';
const { Database } = require('sqlite3').verbose();
const { setActiveCustomer, getActiveCustomer } = require('../active-customer');
const path = require('path');

const db = new Database(path.join(__dirname, '..', '..', 'db', 'bangazon.sqlite'));
//getActiveCustomer's result appears to be {id: null}
console.log(`Active Customer in Payment.js`, getActiveCustomer().id);
let activeId = getActiveCustomer().id;

//function attempted by SS
