// const fruits = ['apple', 'banana', 'orange', 'banana'];
// console.log(fruits.indexOf('orange')); // Output: 1
// console.log(fruits.indexOf('kiwi'));   // Output: -1

// const sentence = 'The quick brown fox jumps over the lazy dog';
// console.log(sentence.indexOf('fox'));   // Output: 16
// console.log(sentence.indexOf('cat'));   // Output: -1



// const numbers = [10, 20, 30, 40, 50];
// const indexes = numbers.findIndex(num => num > 25);
// console.log(indexes);  // Output: 2


const persons = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'CAT', age: 30 },
];
const index = persons.findIndex(person => person.age === 30);
const find = persons.find(person => person.age === 30);
console.log('index -->',find); 

const testStr = "Am a man"
const testIndex = testStr.split("").findIndex(str => str === 'n');

console.log('testIndex -->',testIndex)