var arr = [1, 4, 3, [6, 2, 5], [7, [9, 10, 8]], [88, [33, 44], 66, [12, 13]]];

/* const combineArrayData = (arrList) => {
  let concatedList = [];
  for (const i of arrList) {
    if (Array.isArray(i)) {
      concatedList = concatedList.concat(combineArrayData(i));
    } else {
      concatedList.push(i);
    }
  }
  return concatedList;
};

const combineArray = combineArrayData(arr);

console.log("combineArray -->", combineArray);

 */









// const arr = [1, 4, 3, [6, 2, 5], [7, [9, 10, 8]], [88, [33, 44], 66, [12, 13]]];

const formatArray = (arrList) => {
  let concatList = [];  
     arrList.forEach(item => {
      if(Array.isArray(item)){
        console.log('item-->',item)
        concatList = concatList.concat(formatArray(item))
      }else{
        concatList.push(item)
      }
      // console.log(typeof item)
    })    
    return concatList;
}


const getFlatData = formatArray(arr);

console.log(getFlatData);
// const getFlatData = arr.map();




