'use strict';
const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual, isNumber, isArray } } = require('chai');
const orders = require('../../app/models/order');

describe('Orders Model', () => {
  describe('put_product_order', () => {
    it('should exist', () => {
      isFunction(orders.put_product_order);
    });
    it('should resolve a number', () => {
      orders.put_product_order(1, 1, 1).then( (data) => {
        isNumber(data);
      })
    })
  })

  describe('post_product_order', () => {
    it('should exist', () => {
      isFunction(orders.post_product_order);
    });
    it('should resolve a number', () => {
      orders.post_product_order(1, 1).then( (data) => {
        isNumber(data);
      })
    })
  })

  describe('get_customer_order', () => {
    it('should exist', () => {
      isFunction(orders.get_customer_order);
    });
    it('should return an object', () => {
      orders.get_customer_order(1).then( (data) => {
        isArray(data)
      })
    });
  })
})
