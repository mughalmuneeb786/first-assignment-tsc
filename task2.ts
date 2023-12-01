// Sum
function add(num1, num2) {
  return num1 + num2;
}
function checkEvenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
// clculate area
function calculateArea(width, height) {
  return width * height;
}
// reversal  string
function reverseString(inputString) {
  return inputString.split('').reverse().join('');
}
//Conversion  Temperature
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
//add 2 numbers
var sum = add(5, 10);
console.log('Sum:', sum);

//check value even or odd
var checkEvenOdd = checkEvenOrOdd(7);
console.log('Check Even or Odd:', checkEvenOdd);

//calculate area 
var area = calculateArea(3, 4);
console.log('Area:', area);

//revearsed the string value
var reversedString = reverseString('Muneeb');
console.log('Reversed String:', reversedString);

//convert temprature to farhanitrate
var fahrenheitTemp = convertCelsiusToFahrenheit(25);
console.log('Fahrenheit Temperature:', fahrenheitTemp);
