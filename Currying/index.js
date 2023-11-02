// const sumOfValues = (intValue) => {
//   console.log('intValue---', intValue)
//   return function (currentValue) {
//     console.log('currentValue--->', currentValue)
//     if (currentValue) {
//       return sumOfValues(intValue + currentValue)
//     }
//     return intValue;   
//   }
// }

// console.log(sumOfValues(5)(8)(1))



const sum = function (a) {
  return function (b) {
    console.log('b -->',b)
      return b ? sum(a + b) : a;
  }
};

// console.log(Sum(12)(10)(20))


// const sum = a => b => b ? sum(a + b) : a

const result = sum(2)(3)(20)

console.log(typeof result)

console.log( typeof result === 'function' ? result(): result);
// const Sum = (p1) => (p2) => p2 ? Sum(p1 + p2) : p1;
// const result = Sum(3)(4)(5); // also it can work for Sum(3)(4)(5)();

// console.log(Sum(2)(3)(6))