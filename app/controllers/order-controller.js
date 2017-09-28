'use strict';
//do a .catch after the .then

const prompt = require('prompt');
//TODO:
//prompts user for relevant order queries. Needs to prompt user with a list of products. When a product
// is selected it should be added to the user's order.
module.exports.prompt_new_order = () => {
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
}