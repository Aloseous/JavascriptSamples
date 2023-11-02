// const arr = [2, 4, 4, 4, 41, 200, 30, 40, 40, 66, 12, 123, 66, 2, 2];
// const duplicates = [];
// for (let i = 0; i < arr.length; i++) {

//     console.log(arr.indexOf(arr[i]), '---------', arr.lastIndexOf(arr[i]))
//   if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !duplicates.includes(arr[i])) {
//     duplicates.push(arr[i]);
//   }
// }
// console.log(duplicates);

const objList = [{id: 2, name:"kingz"}, {id: 2, name:"Ryan"}, {id: 3, name:"Nash"}, {id: 4, name:"faren"}]


const uniqueList =objList.map(({name}) => name)

console.log('uniqueList -->',uniqueList)

