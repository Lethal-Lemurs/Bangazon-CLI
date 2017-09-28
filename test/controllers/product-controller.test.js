'use strict';

const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual } } = require('chai');
const chai_as_promised = require("chai-as-promised");
chai.use(chai_as_promised);
const { prompt_new_product, product_options } = require('../../app/controllers/product-controller');

describe('product-controller.js', () => {
  
  // describe('prompt_new_product', () => {
  //   it('should be a function?', () => {
  //     isFunction(prompt_new_product)
  //   });
  //   // it('should be a promise', () => {

  //   // })
  // });

  describe('product_options', () => {
    it('should be a function', () => {
      isFunction(product_options)
    });
  });

  // describe('', () => {
  //   it('should be a function', () => {
  //     isFunction();
  //   });
  // });

  
});