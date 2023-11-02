// const arrList = [5, 3, 3, 3, 3, 4, 2, 3, 7, 5, 6, 5, 5];


// const showDupesMap = (arr) => {
//   return arr.map((elem, idx) => arr.indexOf(elem) !== idx)
// }

// const showDupesFilter = (arr) => {
//   return arr.filter((elem, idx) => arr.indexOf(elem) !== idx)
// }

// const getDupesMap = showDupesMap(arrList)
// const getDupesFilter = showDupesFilter(arrList)

// console.log('getDupesMap -->',getDupesMap)
// console.log('getDupesFilter -->',getDupesFilter)


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.filter(num => {
//   return num * 2;
// });

// console.log(doubledNumbers);

const numberList = [2, 4, 4,4,41, 200, 30, 40, 40, 66, 12, 123, 66, 2, 2];

// const removeDuplicateByFilter = (numList) => {
//     const filterList = numList.filter((item, index) => {
//         return numList.indexOf(item) !== index
//     })
//     return filterList;
// }
// const filterMethod = removeDuplicateByFilter(numberList);

// console.log(filterMethod);




const testLet = letFun();

 function letFun() {
  for(const i of numberList) {
    console.log('iii--->',i)
  }
// console.log('iii--->',i)
}


console.log('testLet -->',testLet)