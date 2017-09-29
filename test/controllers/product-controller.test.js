'use strict';

const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual } } = require('chai');
const chai_as_promised = require("chai-as-promised");
chai.use(chai_as_promised);
const { prompt_new_product, product_options, active_products_prompt, remove_products_prompt } = require('../../app/controllers/product-controller');

describe('product-controller.js', () => {
  
  describe('prompt_new_product', () => {
    it('should be a function?', () => {
      isFunction(prompt_new_product)
    });
    
  });

  describe('product_options', () => {
    it('should be a function', () => {
      isFunction(product_options)
    });
  });

  describe('active_products_prompt', () => {
    it('should be a function', () => {
      isFunction(active_products_prompt);
    });
  });

  describe('remove_products_prompt', () => {
    it('should be a function', () => {
      isFunction(remove_products_prompt);
    });
  });

  
});