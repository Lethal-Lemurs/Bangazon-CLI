'use strict';
const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual } } = require('chai');
// const chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
const { prompt_new_payment_type } = require("../../app/controllers/payment-controller");

//Payments Controller Tests SS 
describe('Payments-Controller', ()=>{
  describe('prompt_new_payment_type', ()=>{
    it('should exist', ()=>{
      isFunction(prompt_new_payment_type);
    });
  });
});
