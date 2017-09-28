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