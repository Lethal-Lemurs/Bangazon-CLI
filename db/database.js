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

  db.serialize( () => {
    db.run(`DROP TABLE IF EXISTS customers`);
    db.run(`DROP TABLE IF EXISTS paymentTypes`);
    db.run(`DROP TABLE IF EXISTS orders`);

    db.run(`CREATE TABLE IF NOT EXISTS customers (
      user_id INTEGER PRIMARY KEY,
      first_last TEXT NOT NULL,
      street TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      zip TEXT NOT NULL,
      phone TEXT NOT NULL)`);

    db.run(`CREATE TABLE IF NOT EXISTS paymentTypes (
      payType_id INTEGER NOT NULL PRIMARY KEY,
      account_number TEXT NOT NULL,
      payment_type TEXT NOT NULL,
      customer_id INTEGER NOT NULL)`);

    db.run(`CREATE TABLE IF NOT EXISTS products (
      product_id INTEGER NOT NULL PRIMARY KEY,
      product_name TEXT NOT NULL,
      product_description TEXT NOT NULL,
      product_price TEXT NOT NULL,
      user_id INTEGER NULL,
      product_qty INTEGER NOT NULL,
      FOREIGN KEY (user_id) REFERENCES customers(user_id))`);
      
      db.run(`CREATE TABLE IF NOT EXISTS orders (
        order_id INTEGER NOT NULL PRIMARY KEY,
        user_id INTEGER NULL,
        payType_id INTEGER NULL,
        FOREIGN KEY (user_id) REFERENCES customers(user_id),
        FOREIGN KEY (payType_id) REFERENCES paymentTypes(payType_id))`);
  
      db.run(`CREATE TABLE IF NOT EXISTS order_product (
        order_id INTEGER NULL,
        product_id INTEGER NULL)`);
    
    customers.forEach(({ first_last, street, city, state, zip, phone}) => {
        db.run(`INSERT INTO customers (first_last, street, city, state, zip, phone)
      VALUES ("${first_last}", "${street}", "${city}", "${state}", "${zip}", "${phone}")`);
    });
  })
};

create_db();

