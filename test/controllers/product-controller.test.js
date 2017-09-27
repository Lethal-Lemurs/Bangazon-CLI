'use strict';

const { assert: { isFunction, isArray } } = require('chai');
const product_controller = require('../../app/controllers/product-controller');

describe('product-controller.js', () => {
  
  describe('prompt_new_product', () => {
    it('should be a function?', () => {
      isFunction(product_controller.prompt_new_product)
    });
  });
  
})