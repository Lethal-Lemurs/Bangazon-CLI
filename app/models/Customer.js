'use strict';
const { Database } = require('sqlite3').verbose();
const { setActiveCustomer, getActiveCustomer } = require('./activeCustomer');
const path = require('path');

const db = new Database(path.join(__dirname, '..', 'db', 'bangazon.sqlite'));

