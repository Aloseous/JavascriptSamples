// const numList = [20, 5, 30, 41, 22, 88, 1];

// const getTotal = (noList) => {
//   const total = noList.reduce((acc, current) => {
//     const tot = acc + current
//     return tot
//   },0)
//   return total
// }

// console.log(getTotal(numList))


const numList = [10, 20, 10, 2, 30, 20, 10, 1, 20, 10];

const findNoOfRepeats = (noList) => {

  const repeatedList = noList.reduce((acc, current) => {
    if(acc[current]){
      acc[current] = acc[current]+1
    }else {
      acc[current] = 1
    }
    return acc;
  },{})
  return repeatedList;
}
console.log(findNoOfRepeats(numList))



// function testResults (form) {
//   let inputValue = form.inputbox.value;
//   let formData = new FormData(form);
//   let object = {};
//   formData.forEach(function(value, key){
//     object[key] = value;
//   });
//   var json = JSON.stringify(object);
//   console.log(json);

//   console.log(JSON.stringify(Object.fromEntries(formData)));
// }