// Tests for equality and inequality with strings
let str1 = 'hello';
let str2 = 'world';

console.log("Are str1 and str2 equal? I predict False.");
console.log(str1 === str2); // False

console.log("Are str1 and str2 not equal? I predict True.");
console.log(str1 !== str2); // True

// Tests using the lower case function
let mixedCaseString = 'HeLLo';

console.log(`Is mixedCaseString in lowercase equal to 'hello'? I predict True.`);
console.log(mixedCaseString.toLowerCase() === 'hello'); // True

// Numerical tests
let num1 = 10;
let num2 = 5;

console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2); // True

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
let isSunny = true;
let isWarm = false;

console.log("Is it sunny and warm? I predict False.");
console.log(isSunny && isWarm); // False

console.log("Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm); // True

// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];

console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3)); // True

// Test whether an item is not in an array
console.log("Is 6 not in the numbers array? I predict True.");
console.log(!numbers.includes(6)); // True
