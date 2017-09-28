'use strict';
const { Database } = require('sqlite3').verbose();
const path = require('path');

const db = new Database(path.join(__dirname, '..', '..', 'db', 'bangazon.sqlite'));

// functions written by the DW, JS
module.exports.add_product_database = (new_prod_data, user_id) => {
  db.run(`INSERT INTO products (product_name, product_description, product_price, user_id, product_qty) VALUES(
    "${new_prod_data.name}",
    "${new_prod_data.description}",
    "${new_prod_data.price}",
    ${user_id},
    ${new_prod_data.quantity}
  )`);
};

module.exports.show_all_products = () => {
  return new Promise( (resolve, reject) => {
  db.all(`SELECT product_id, product_name FROM products`, (err, prod_data) => {
    resolve(prod_data)
  });
 });
}