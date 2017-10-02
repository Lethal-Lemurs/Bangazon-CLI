'use strict';
const { Database } = require('sqlite3').verbose();
const path = require('path');

const db = new Database(path.join(__dirname, '..', '..', 'db', 'bangazon.sqlite'));

module.exports.post_product_order = (id) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO orders (user_id) VALUES(
      ${id}
    )`,
    function (err) {
      if (err) return reject(err)

      resolve(this.lastID)
    });  
  });
}
 

module.exports.update_join_table = (customer_id ,lastID, product) => {
  return new Promise( (resolve, reject) => {
    console.log('Customer ID:',customer_id,"added product ID:", product, "to CART");
    db.run(`INSERT INTO order_product (order_id, product_id) VALUES(
      ${lastID}, ${product})`,
    function( err) {
      console.log('cust id foo', customer_id);
      if(err) return reject(err)
      resolve()
    });  
  });
};

module.exports.put_product_order = (id) => {
  return new Promise( (resolve, reject) => {
    db.run(`DELETE FROM orders WHERE order_id = ${id}`);
    db.run(`INSERT INTO orders (user_id) VALUES (
      ${id}

    )`,
    function(err) {
      if(err) return reject(err);
    })
    db.run(`INSERT INTO order_product VALUES(${this.lastID})`,
    function(err) {
      if(err) return reject(err);
    });
  });
};


module.exports.get_customer_order = (id) => {
  console.log('idzzzz', id);
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM orders 
    JOIN customers 
    WHERE orders.user_id = ${id} 
    AND customers.user_id = orders.user_id`,
  (err, data) => {
    if(err) return reject(err);
    console.log("THIS IS THE RESULTS", data);
    resolve(data)
  });
});
  
  
}


    