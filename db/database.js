const sqlite3 = require('sqlite3').verbose();
// const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { customers } = require('../data/customers');
const db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'bangazon.sqlite'));
// let db;
console.log(path.join(__dirname, '..', 'db', 'bangazon.sqlite'))


function create_db() {
  // http://stackoverflow.com/questions/27766734/dealing-with-relative-paths-with-node-js
  // db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'bangazon.sqlite'), 

  db.run(`DROP TABLE IF EXISTS customers`);

  db.run(`CREATE TABLE IF NOT EXISTS customers (
    user_id INTEGER PRIMARY KEY,
    first_last TEXT NOT NULL,
    street TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zip TEXT NOT NULL,
    phone TEXT NOT NULL)`)
  
  customers.forEach(({ first_last, street, city, state, zip, phone}) => {
      db.run(`INSERT INTO customers (first_last, street, city, state, zip, phone)
    VALUES ("${first_last}", "${street}", "${city}", "${state}", "${zip}", "${phone}")`);
  });

};

create_db();

