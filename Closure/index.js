/* function closure(a) { 
  return function trapB (b) {
    return function trapC(c) {
      return c * a + b; 
    }
  }
}

const oneEight = closure(1.8);
const thirtyTwo = oneEight(32);
const degreeToFahrenheit = thirtyTwo(30);
console.log(degreeToFahrenheit); // 86 */

// function outerScope() {
//     const outside = 'i am outside';
//     function innerScope() {
//       const inside = 'i am inside';
//       console.log('innerScope ➡', outside);
//       console.log('innerScope ➡',inside);
//     }
//     return innerScope
//   }
  
//   const inner = outerScope();
//   inner();

/* function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log('111')
console.log(increment()); // 2
 */

function add(a) {
  return function(b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(3)); // 8
console.log(addFive(10)); // 15