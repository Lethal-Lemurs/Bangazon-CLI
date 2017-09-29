'use strict';
const { Database } = require('sqlite3').verbose();
const path = require('path');

const db = new Database(path.join(__dirname, '..', '..', 'db', 'bangazon.sqlite'));

// functions written by the DW, JS
module.exports.add_product_database = (new_prod_data, user_id) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO products (product_name, product_description, product_price, user_id, product_qty) VALUES(
      "${new_prod_data.name}",
      "${new_prod_data.description}",
      "${new_prod_data.price}",
      ${user_id},
      ${new_prod_data.quantity}
    )`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  })
};

module.exports.show_all_products = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM products`, (err, prod_data) => {
      if (err) return reject(err);
      resolve(prod_data)
    });
  });
};

module.exports.show_active_products = (customer_id) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM products WHERE user_id = ${customer_id}`, (err, active_prod_data) => {
      if (err) return reject(err); 
      resolve(active_prod_data);
    }); 
  });
};