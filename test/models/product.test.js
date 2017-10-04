'use strict';
const chai = require('chai');
const { assert: { isFunction, isObject, exists, isDefined, isArray } } = require('chai');
const { add_product_database, show_all_products, show_active_products, remove_product, product_id} = require('../../app/models/product.js');
const chai_as_promised = require("chai-as-promised");
chai.use(chai_as_promised);

let test_add_object = { 
  name: "monkey",
  description: "funkey",
  price: "600",
  user_id: 1,
  quantity: 7000000000
 };
 let last_add = show_all_products().length;
describe('product.js', () => {
  
  describe('add_product_database', () => {
    it('should be a function?', () => {
      isFunction(add_product_database)
    });
  });
  
  describe('show_all_products', () => {
    it('should be a function', () => {
      isFunction(show_all_products);
    });
    // it('should resolve a object', () => {
    //   return show_active_products().then( (data) => {
    //     isObject(data)
    //   })
    // }) unsure
  });

  describe('show_active_products', () => {
    it('should be a function', () => {
      isFunction(show_active_products);
    });
    it('should return an array', () => {
      return show_active_products(1).then( (data) => {
        isArray(data);
      })
    })
  });

  describe('remove_product', () => {
    it('should be a function', () => {
      isFunction(remove_product);
    });
    it('somehow returns an array', () => {
      return add_product_database(test_add_object, 1).then( () => {
        remove_product(last_add).then( (data) => {
          isArray(data);
        })
      })
    })
  });

})