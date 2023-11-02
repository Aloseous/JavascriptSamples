
// In JavaScript, the Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs. This can be particularly useful when you need to iterate over the properties of an object or perform operations based on the key-value pairs. Here are 10 examples of using Object.entries() and when to use them:


/* const person = { name: 'John', age: 30 };
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
} */


const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log('entries -->',entries)

const toMap = new Map(entries)
const toArr = [...toMap]
console.log('toArr -->', toArr)

// for(const i of toMap){
//   console.log(toMap[i])
// }

// console.log(item)


/*  const data = { apples: 5, bananas: 3, oranges: 7 };
const filteredEntries = Object.entries(data).filter(([, count]) => count > 4);

console.log([...filteredEntries]) */

/*const params = { page: 1, limit: 10, sort: 'desc' };
const queryString = Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');

console.log(queryString) */