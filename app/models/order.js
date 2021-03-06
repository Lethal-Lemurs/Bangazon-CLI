'use strict';
const { Database } = require('sqlite3').verbose();
const path = require('path');

const db = new Database(path.join(__dirname, '..', '..', 'db', 'bangazon.sqlite'));

module.exports.put_product_order = (order_id, user_id, product_id) => {
  return new Promise( (resolve, reject) => {
    db.run(`DELETE FROM orders WHERE order_id = ${order_id}`);
    db.run(`INSERT INTO orders (user_id) VALUES(${user_id})`,
    function (err) {
      if (err) {
        return reject(err)
      } 
    db.run(`INSERT INTO order_product VALUES (${this.lastID}, ${product_id})`,
    function (err) {
      if (err) return reject(err)
      resolve(this.lastID);
      });
    });  
  });
};

module.exports.post_product_order = (customer_id, product_id) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO orders (user_id) VALUES (${customer_id})`,
    function(err) {
      if(err) {
        return reject(err);
      }
    console.log('Customer ID:',customer_id,"added product ID:", product_id, "to CART");
    db.run(`INSERT INTO order_product (order_id, product_id) VALUES(${this.lastID}, ${product_id})`,
    function(err) {
      if(err) return reject(err)
      resolve(this.lastID);
    });
  });
})
}

module.exports.get_customer_order = (id) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT orders.user_id, orders.order_id FROM orders 
    JOIN customers 
    WHERE orders.user_id = ${id} 
    AND customers.user_id = orders.user_id`,
  (err, data) => {
    if(err) return reject(err);
    resolve(data)
  });
}); 
}


    
