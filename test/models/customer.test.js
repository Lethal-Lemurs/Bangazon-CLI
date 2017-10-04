'use strict';
const chai = require('chai');
const { assert: { isFunction, isArray, isNumber } } = require('chai');
const customer = require('../../app/models/customer.js');
const chai_as_promised = require("chai-as-promised");
chai.use(chai_as_promised);

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
  describe('return_active_customer', () => {
    it('should exist', () => {
      isFunction(customer.return_active_customer);
    });
    it('should return an number', () => {
      return customer.return_active_customer(1).then( (data) => {
        isNumber(data);
      })
    });
  });
});
