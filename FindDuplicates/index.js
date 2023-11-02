const arrList = [5, 3, 3, 3, 3, 4, 2, 3, 7, 5, 6, 5, 5];

const findDuplicatesUsingSet = (arr) => {
  const duplicateList = new Set()
  const uniqueList = new Set()

  for(const i of arr){
    uniqueList.has(i) ? duplicateList.add(i) : uniqueList.add(i)
  }

  return duplicateList;
}

const getDuplicatesSet = findDuplicatesUsingSet(arrList)
console.log('getDuplicates -->',getDuplicatesSet);


const findDuplicatesUsingInc = (arr) => {
  const duplicateList = []
  const uniqueList = []
  for(const i of arrList){
    if(uniqueList.includes(i)){
      duplicateList.push(i)
    }else{      
      uniqueList.push(i)
    }
  }
  return duplicateList;
}

const getDuplicatesInc = findDuplicatesUsingInc(arrList)

console.log('getDuplicatesInc --->', getDuplicatesInc)

const findDuplicatesUsingReducer = (arr) => {
  const noOfrepeats = arr.reduce((acc, current) => {
    if(acc[current]){
      acc[current] = acc[current] + 1
    }else{
      acc[current] = 1
    }
    return acc
  },{})
  return noOfrepeats;
}


const getDuplicatesReducer = findDuplicatesUsingReducer(arrList)

console.log('getDuplicatesReducer --->',getDuplicatesReducer)

// const showDupes = (arr) => {
//   return [...new Set(arr.filter((elem, idx) => arr.indexOf(elem) !== idx))]
// }

const showDupes = (arr) => {
  return arr.filter((elem, idx) => arr.indexOf(elem) !== idx)
}

const getDupes = showDupes(arrList)

console.log('getDupes -->',getDupes)