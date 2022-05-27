const numbers = [4, 6, 5, 7, 9, 10];

// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element) {
//     return element * element;
// }

// const square = element => element * element;

// const square = x => x * x;

// const result = numbers.map(function(element) {
//     return element * element;
// });

// Map Practice:
const result = numbers.map(x => x * x);
console.log(result);

// Filter Practice:
const showBigger = numbers.filter(x => x > 5);
console.log(showBigger);
const showSmall = numbers.filter(x => x < 5);
console.log(showSmall);
const showEven = numbers.filter(x => x % 2 == 0);
console.log(showEven);

// Find Practice:
const isThere = numbers.find(x => x > 6);
console.log(isThere);