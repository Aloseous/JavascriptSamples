const n = 10;
const arr = [...Array(n).keys()];

arr.forEach(keyList => {
    if(keyList%5 === 0){
      console.log('called')
    }else{
      console.log('in else')
    }
})

console.log(arr);


console.log(3+'3'+2)
console.log(3-'3'-3)