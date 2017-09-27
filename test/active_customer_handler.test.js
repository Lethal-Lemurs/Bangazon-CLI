'use strict';

const { assert: { isFunction } } = require('chai');
const active_customer_handler = require('../app/active-customer-handler.js');

describe('active_customer_handler.js', () => {

  describe('no_active_customer', () => {
    it('should be a function', () => {
      isFunction(active_customer_handler.no_active_customer)
    });
  });
})