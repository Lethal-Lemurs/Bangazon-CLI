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
}

module.exports.edit_product = (update_product, active_id) => {
  console.log(`${update_product.name} has been edited!`);    
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM products WHERE user_id = ${active_id}`);      
    db.run(`DELETE FROM products WHERE product_id = ${update_product.choice} AND user_id = ${active_id}`);
    db.run(`INSERT INTO products (user_id, product_id, product_name, product_description, product_price, product_qty) VALUES (
    ${active_id}, ${update_product.choice}, "${update_product.name}", "${update_product.description}", "${update_product.price}", "${update_product.quantity}")`,
    (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

module.exports.remove_product = (product_id) => {
  console.log("You deleted the product with id of:",product_id.choice);
  return new Promise( (resolve, reject) => {
    db.all(`DELETE FROM products WHERE product_id = ${product_id.choice}`, (err, product_data) => {
      if (err) return reject(err);
      resolve(product_data);
    });
  });
};
