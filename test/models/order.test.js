'use strict';
const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual } } = require('chai');
const orders = require('../../app/models/order');

describe('Orders Model', () => {
  describe('put_product_order', () => {
    it('should exist', () => {
      isFunction(orders.put_product_order);
    });
  })

  describe('post_product_order', () => {
    it('should exist', () => {
      isFunction(orders.post_product_order);
    });
  })

  describe('get_customer_order', () => {
    it('should exist', () => {
      isFunction(orders.get_customer_order);
    });
  })
})
