'use strict';
const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual } } = require('chai');
const orders = require('../../app/models/order');
describe('Orders Model', ()=>{
  describe('get_orders', ()=>{
    it('should exist', ()=>{
      isFunction(orders.get_orders);
    });
    it('should return an order (object?)', ()=>{
      return order.get_orders().then((data)=>{
        isObject(data);
      })
    });
  })
  describe('', ()=>{

  })
})
// INSERT INTO products (product_name, product_description, 
//   product_price, user_id, product_qty) 
//   VALUES( "banana", "fruit", "1", 1, 1)