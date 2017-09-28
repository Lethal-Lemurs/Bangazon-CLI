'use strict';
const chai = require('chai');
const { assert, assert: { isFunction, equal, isObject, deepEqual, isString } } = require('chai');
const pay = require('../../app/models/payment');

let tests = [
  { account_number: "234", payment_type: "Visa", customer_id: "1" }
]


//Payment model tests SS
//use INSERT INTO paymentTypes (account_number, payment_type, customer_id) VALUES(
    // "453", "Visa", "4"
  // )
// before testing get payment type. then write the changes. Don't worry db:reset clears it.
describe('Payments-Model', ()=>{
  describe('add_payment_database', ()=>{
    it('should exist', ()=>{
      isFunction(pay.add_payment_database);
    });
    it('should add to database', ()=>{
      pay.add_payment_database(tests[0], tests[0].customer_id)
      .then(()=>{
        pay.get_payment_type("1")
        .then((data)=>{
          isString(data)
        })
      })
    });
  });
  describe('get_payment_type', ()=>{
    it('should exist', ()=>{
      isFunction(pay.get_payment_type);
    })
    it('should return a string', ()=>{
      console.log(`payment type`, pay.get_payment_type("4"));
      pay.get_payment_type("4").then((data)=>{
        isString(data);
      })   
    })
  })
})
//only thing that could reasonably be added is TODO: test returns from using prompt functionality.