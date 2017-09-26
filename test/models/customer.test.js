'use strict';

const { assert: { isFunction, isObject } } = require('chai');
const customer = require('../../app/models/Customer.js');

// Test written by GV, DB, JS, SS.
// tests addToDatabase and getCustDatabase in models/Customer.js
describe('Customer.js', () => {
  
  describe('add_to_database', () => {
    it('should exist', () => {
      isFunction(customer.add_to_database);
    });
  });

  describe('get_cust_database', () => {
    it('should exist', () => {
      isFunction(customer.get_cust_database);
    });
  });

});
