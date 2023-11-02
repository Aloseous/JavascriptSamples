/* A function which returns a function or accept a function is called higher order function*/

const radius = [5, 2, 6, 1]

const area = (radius) => Math.PI * radius * radius;
// const area = function(radius){
//  return Math.PI * radius * radius;
// }

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]))
  }
  return output;
}
// Array.prototype.calculate = function(logic){
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]))
//   }
//   return output;
// }

// console.log(radius.map(area))
// console.log(radius.calculate(area))

const arrList = [1, 0, 5, 4, 2, 9, 8, 1, 10, 3]
const evenList = [2,4,6,8,10]

// const numTest = 3;

// const isEven = (values) => {
//   return values % 2 === 0 ? true : false
// }

// Array.prototype.mainfun = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]))
//   }
//   return output;
// }

// const getEvenNumbers = arrList.mainfun(isEven)

// console.log(getEvenNumbers);


// Number.prototype.isEven = function () {
//   console.log('this-->',this)
//   return this % 2 === 0;
// };

Array.prototype.isEven = function () {
  const list = this;
  // console.log(arrList.length)
  for (let i = 0; i < list.length; i++) {
    if(list[i] % 2 !== 0){
      console.log(list[i])
      return false
    }
   }
  // return this % 2 === 0;
  return true;
};




console.log(evenList.isEven())