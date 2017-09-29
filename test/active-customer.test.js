'use strict';
const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual } } = require('chai');
const active = require('../app/active-customer.js')
describe('active-customer.js tests', ()=>{
  describe('set_active_customer', ()=>{
    it('should be a function', ()=>{
      isFunction(active.set_active_customer);
    })
  })
  describe('get_active_customer', ()=>{
    it('should be a function', ()=>{
      isFunction(active.get_active_customer);
    })
  })
})
