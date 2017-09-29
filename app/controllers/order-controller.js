'use strict';
//do a .catch after the .then

const prompt = require('prompt');
const { add_product_database, show_active_products, show_all_products } = require('../models/product');
const { get_active_customer, no_active_customer } = require('../active-customer');
const {red, magenta, blue, green, cyan} =  require('chalk');
const products = require('../models/product');
//TODO:
//prompts user for relevant order queries. Needs to prompt user with a list of products. When a product
// is selected it should be added to the user's order.
module.exports.prompt_new_order = () => { 
  if(get_active_customer().id !== null){
    show_all_products()//show_all_products doesn't actually show things. Just gets the data
    .then((data)=>{
      data.forEach((product)=>{
        console.log(product.product_id, product.product_name, product.product_description);
      })
    })
    return new Promise((resolve, reject)=>{
      //TODO: need to display products here or after first prompt
      prompt.get([
        {
          name: 'product_list_prompt',
          description: 'What product do you want to add to your order',
          type: 'string',
          required: true
        }
      ], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      })
    })
  } else {
    return new Promise( (resolve, reject) => {
      no_active_customer();
      // This weird thing was told to us by Jufe
      const { display_welcome } = require('../ui');
      display_welcome();
    });
  }
}