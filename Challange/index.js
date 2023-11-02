// 3. Pallindrome checker

const str = '0123443210';

const isPallindrome = (strValue) => {
  const len = Array.from(strValue).length
  let flag = false;
  for(let i = 0; i< len; i++) {
    console.log(strValue.indexOf(i), ' ==', strValue.lastIndexOf(i))
    if(strValue.charAt(i) === strValue.charAt(len-(i+1))){
      flag = true
    }
    else {
      return flag = false;
    }
  }
  return flag
}

const checkIsPallindrome = isPallindrome(str);
console.log('checkIsPallindrome -->',checkIsPallindrome)






/* const numberList = [1, 2, 3, 5];

const getMissingNumber = () => {
  const maxValue = Math.max(...numberList)
  const missingValues = []
  for (let i = 0; i < maxValue; i++) {
    if (!numberList.includes(i + 1)) {
      missingValues.push(i + 1)
    }
  }
  return missingValues;
}

console.log(getMissingNumber()) */


// 2. Factorial of a Number: Create a function to calculate the factorial of a number.

/* const factorialNum = 3;

const factorialResult = [...Array(factorialNum+1).keys()]
const modifiedValues = factorialResult.splice(1, factorialResult.length-1)

const result = modifiedValues.reduce((acc, current) => {
    return acc*current;
},1)
console.log(result);
 */

/* function calculateFactorial(n) {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result = i*result;
    i++;
  }
  return result;
}

const factorial = calculateFactorial(3);
console.log(factorial);
 */





// 1. Reverse a String: Write a function that reverses a string.

/* const str = 'Hello World!'

const reverseMethodOne = str.split("").reverse().join('');

console.log('MethodOne -->',reverseMethodOne)


const reverseMethodTwo = () => {
  let reverseStr = ''
    for(let i = str.length -1; i>=0; i--){
       reverseStr += str.charAt(i)
    }
    return reverseStr;
}

console.log('reverseMethodTwo -->',reverseMethodTwo()) */