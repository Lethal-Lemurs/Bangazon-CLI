'use strict';
const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual } } = require('chai');
// const chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);

const { add_payment_database } = require('../../app/models/payment');
//Payment model tests SS
describe('Payments-Model', ()=>{
  describe('add_payment_database', ()=>{
    it('should exist', ()=>{
      isFunction(add_payment_database);
    });
  });
})