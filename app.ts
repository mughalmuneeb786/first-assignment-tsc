//Declaring the supermarket function
'use strict';
import { Console } from 'console';
// import inquirer from 'inquirer';
import * as readlineSync from 'readline-sync';

function buyGrocery(choose: string) {
  console.log('Buying Groceries');
  let groceryItems: string[];

  //Choose the choice
  if (choose === 'fruits') {
    groceryItems = ['apple', 'berry', 'orange'];
  } else {
    groceryItems = ['cabage', 'phindi', 'shimla'];
  }
  //availble grocery items and prices
  console.log('Available items');
  groceryItems.forEach(groceryItems => {
    console.log(`${groceryItems}: PKR 3.00`);
  });

  //Calculate bill
  let totalBill: number = groceryItems.length * 3.0;
  console.log(`Total Bill : PKR ${totalBill.toFixed(2)}`);

  return totalBill;
}
function checkDiscounts(totalBill: number): void {
  console.log(' Check Discount');

  if (totalBill > 10.0 && totalBill <= 20.0) {
    totalBill *= 0.9;
    // user will get 10% discount
    console.log('you can get 10% DISCOUNT');
  } else if (totalBill > 20.0) {
    totalBill *= 0.8;
    // user will get 20% discount
    console.log('you get 20% DISCOUNT');
  } else {
    // No Discount
    console.log('No DISCOUNT');
  }

  console.log(`Total DISCOUNT : PKR ${totalBill.toFixed(2)}`);
}

function checkoutProcess(): void {
  //Checkout Process Starts

  console.log('Checkout Process');

  let paymentMethod: string;

  do {
    // Payment Methods
    console.log('Choose a Payment Method');
    console.log('1 - Debit Card');
    console.log('2 - Debit Card');
    console.log('3 - Cash');

    // ask user to choose payment method
    paymentMethod = readlineSync.question('Enter the Payment method');

    switch (paymentMethod) {
      case '1':
        console.log('Payment Successful with Debit Card');
        break;
      case '2':
        console.log('Payment Successful with Credit Card');
        break;
      case '3':
        console.log('Payment Successful with Case');
        break;
      default:
        console.log('Invalid Choice .Please choose valid method');
    }
  } while (
    paymentMethod !== '1' &&
    paymentMethod !== '2' &&
    paymentMethod !== '3'
  );
  console.log('Thanks for Shopping!');
}
const choose: string = 'fruits';
const totalGroceryBill: number = buyGrocery(choose);

checkDiscounts(totalGroceryBill);
checkoutProcess();
