'use strict';

const { assert: { isFunction, isArray } } = require('chai');
const product = require('../../app/models/product.js');

describe('product.js', () => {
  
  describe('add_product_database', () => {
    it('should be a function?', () => {
      isFunction(product.add_product_database)
    });
  });
  
})