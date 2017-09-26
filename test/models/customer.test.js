'use strict';

const { assert: { isFunction, isObject } } = require('chai');
const customer = require('../../app/models/Customer.js');

// Test written by GV, DB, JS, SS.
// tests addToDatabase and getCustDatabase in models/Customer.js
describe('Customer.js', () => {
  
  describe('addToDatabase', () => {
    it('should exist', () => {
      isFunction(customer.addToDatabase);
    });
  });

  describe('getCustDatabase', () => {
    it('should exist', () => {
      isFunction(customer.getCustDatabase);
    });
  });

});
