const numberList = [2, 4, 4,4,41, 200, 30, 40, 40, 66, 12, 123, 66, 2, 2];

const noOFRepeats = numberList.reduce((acc, current) => {
  if(acc[current]){
    acc[current] = acc[current] + 1
  }else {
    acc[current] = 1
  }
return acc
},{})

console.log('noOFRepeats -->',noOFRepeats)