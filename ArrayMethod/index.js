const arrList  = [1,2,3,4,5,6,7,8,9,10];


/* const combination = (value, listItem) => {
  return  listItem.filter(item => {
    if(item+value > 5) {
      return [item, value]
    }
  }) 
 }
 
const value = arrList.map(item => combination(item, arrList))

console.log(value) */
/* const combination = (value, listItem) => {
  const compList = []
  const items =  listItem.forEach(item => {
    if(item+value > 5) {
      compList.push([value, item])
    }
  }) 
 return compList;
}
const value = arrList.map(item => combination(item, arrList)) 
const combinedResult = value.reduce((acc,  current) => acc.concat(current))*/

/* const combination = (value, listItem) => {
  const compList = []
  const filterdList =  listItem.forEach((item) => item+value > 5 ? compList.push([value, item]): null) 
  return compList;

}
const value = arrList.map(item => combination(item, arrList))
const combinedResult = value.reduce((acc,  current) => acc.concat(current))
console.log(combinedResult) */



// const arrList  = [1,2,3,4,5,6,7,8,9,10];

// const combination = (value, listItem) => {
//   // console.log(value)
//   return listItem.filter(item => {
//     // console.log(item, '---',  value)
//     if(item+value > 5) {
//       return {value, item}
//     }
//   }) 
//   // (item + value) > 5 ? [item, value]: null)
 
// }
// const value = arrList.map(item => combination(item, arrList))

// console.log(value)