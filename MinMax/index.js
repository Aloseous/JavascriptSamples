// Method One

const minMaxValues = [5,20,30,11,2,8,9]

const minValue = Math.min(...minMaxValues)
const maxValue = Math.max(...minMaxValues)
console.log(minValue,'---', maxValue);


// Method 2

const findMinMaxReduce = minMaxValues.reduce((acc, current) => {
    return acc > current ? acc : current
},{})

console.log('findMinMaxReduce--',findMinMaxReduce)


// Method 3

const findMinMax = (arr) => {
  let min = arr[0], max = arr[0];

  for (let i = 1, len=arr.length; i < len; i++) {
    let v = arr[i];
    min = (v < min) ? v : min;
    max = (v > max) ? v : max;
  }

  return [min, max];
}

console.log(findMinMax(minMaxValues))