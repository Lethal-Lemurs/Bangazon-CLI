const sqlite3 = require('sqlite3');
const path = require('path');
const { customers } = require('../data/customers');
let db;

(function createDb() {
  // http://stackoverflow.com/questions/27766734/dealing-with-relative-paths-with-node-js
  db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'bangazon.sqlite'), createTables);
}());
