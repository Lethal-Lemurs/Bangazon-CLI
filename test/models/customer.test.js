'use strict';

const { assert: { isFunction, isArray } } = require('chai');
const customer = require('../../app/models/Customer.js');

// Test written by GV, DB, JS, SS.
// tests addToDatabase and getCustDatabase in models/Customer.js
describe('Customer.js', () => {
  
  describe('add_to_database', () => {
    it('should exist', () => {
      isFunction(customer.add_to_database);
    });
  });

  describe('show_all_customers', () => {
    it('should exist', () => {
      isFunction(customer.show_all_customers);
    });

    it('returns data', () => {
      return customer.show_all_customers().then( (data) => {
        isArray(data);
      })
    });
  });

});
