// Sum
function add(num1: number, num2: number): number {
  return num1 + num2;
}

function checkEvenOrOdd(num: number): string {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
// clculate area
function calculateArea(width: number, height: number): number {
  return width * height;
}
// reversal  string
function reverseString(inputString: string): string {
  return inputString.split('').reverse().join('');
}
//Conversion  Temperature
function convertCelsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

// Example usage:
const sum: number = add(5, 10);
console.log('Sum:', sum);

const checkEvenOdd: string = checkEvenOrOdd(7);
console.log('Check Even or Odd:', checkEvenOdd);

const area: number = calculateArea(3, 4);
console.log('Area:', area);

const reversedString: string = reverseString('hello');
console.log('Reversed String:', reversedString);

const fahrenheitTemp: number = convertCelsiusToFahrenheit(25);
console.log('Fahrenheit Temperature:', fahrenheitTemp);
