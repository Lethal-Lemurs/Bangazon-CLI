# Bangazon

## The Command Line Ordering System

In this group project, we allow a user to interact with a basic product ordering database via a command line interface after selecting an active account. If the user doesn't already have an account, they must first create one.

## Ordering System Interface

### Main Menu

```bash
  *********************************************************
  **  Welcome to Bangazon! Command Line Ordering System  **
  *********************************************************
  1. Create a customer account
  2. Choose active customer
  3. Create a payment option
  4. Product options
  5. Add product to shopping cart
  6. Complete an order
  7. Leave Bangazon!
> Bangazon Corp: Please make a selection:
```
### Create a customer account: Main Menu Option 1
This is the process a user walks through to add a customer to the system.
```bash
> Bangazon Corp: Please make a selection:  1
  Bangazon Corp: Enter customer name (First Last):  Name
  Bangazon Corp: Enter street address:  Address
  Bangazon Corp: Enter city:  Nashville
  Bangazon Corp: Enter state (KY):  TN
  Bangazon Corp: Enter postal code:  Depends
  Bangazon Corp: Enter phone number (xxx-yyy-zzzz):  615-555-5555
```
### Choose active customer: Main Menu Option 2
All further options depend on this. If the user attempts to continue without choosing an active user they will see the following message. 
```No Active Customer Currently!```
A list of active users is pulled from the database and you must type in the associated id that is listed to the left of the name.
```bash
> Bangazon Corp: Please make a selection:  2
  1: Fred butt
  2: Yolanda wook
  3: Maurice lopez
  4: Fred butts
  5: Cher singer
  6: Danny brown
  7: Myrtle beach
  8: Ben folds
> Bangazon Corp: Please select a customer by id:
```
### Create a payment option: Main Menu Option 3
You might need to pay for the items you plan add to your cart.
```bash
> Bangazon Corp: Please make a selection:  3
  Bangazon Corp: Enter Account Number:  4983493847
  Bangazon Corp: Enter a Supported Payment Method: (Visa, Mastercard, Paypal):  Visa
```
### Product options: Main Menu Option 4
Next, the user is given a product option sub menu.
```bash
> Bangazon Corp: Please make a selection:  4
Product Options:
  1. See your products
  2. Create product
  3. Edit product by Id
  4. Delete product by Id
  5. Go back to the main menu
> Bangazon Corp: Please make a selection:
```