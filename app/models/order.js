'use strict';

const { Database } = require('sqlite3').verbose();
const path = require('path');
const db = new Database(path.join(__dirname, '..', '..', 'db', 'bangazon.sqlite'));



//function attempted by SS
module.exports.get_orders = (active_id) => {
  return new Promise((resolve, reject)=>{
    db.all('SELECT * FROM orders')
  })
}
//function to insert into the active customers open order table. TODO: Store product data?
module.exports.add_orders_to_active = (active_id, customer_pay_type, time) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO orders (customer_id, payment_type_id, order_date) VALUES( ${active_id}, ${customer_pay_type}, ${time})`)
  })
}