'use strict';

const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual } } = require('chai');
const chai_as_promised = require("chai-as-promised");
chai.use(chai_as_promised);
const product_controller = require('../../app/controllers/product-controller');

describe('product-controller.js', () => {
  
  describe('prompt_new_product', () => {
    it('should be a function?', () => {
      isFunction(product_controller.prompt_new_product)
    });
    // it('should be a promise', () => {

    // })
  });

  
})