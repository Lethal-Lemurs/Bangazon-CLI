'use strict';
const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual } } = require('chai');
const order_controller = require('../../app/controllers/order-controller');


describe('order-controller', () => {
  describe('add order prompt', () => {
    it('should be a function', () => {
      isFunction(order_controller.add_order_prompt);
    });
  });

  describe('order menu handler', () => {
    it('should be a function', () => {
      isFunction(order_controller.order_product_display);
    });
  });

  describe('order options prompt', () => {
    it('should be a function', () => {
      isFunction(order_controller.order_options);
    });
  });
});