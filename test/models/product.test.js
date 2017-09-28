'use strict';

const { assert: { isFunction, isArray } } = require('chai');
const { add_product_database, show_all_products} = require('../../app/models/product.js');

describe('product.js', () => {
  
  describe('add_product_database', () => {
    it('should be a function?', () => {
      isFunction(add_product_database)
    });
  });
  
  describe('show_all_products', () => {
    it('should be a function', () => {
      isFunction(show_all_products)
    })
  })

})