const message = 'Hello, World!';

for (const index in message) {
  console.log(index, message[index]);
}

console.log('------------------------------------------------------');
for (const [key, value] of message) {
  console.log(key, value);
}



/* const person = {firstName: 'John',lastName: 'Doe', age: 30};

for (const key in person) {
  console.log(key, person[key]);
}
for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
 */








/* 
const nodeList = document.querySelectorAll('p')
const byClass = document.getElementsByClassName('para');

// console.log('nodeList -->',nodeList)
// console.log('nodeList -->',byClass)

for(const index in byClass){
  console.log(index, ' --- ', byClass[index].innerText)
}  */


