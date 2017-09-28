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