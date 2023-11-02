//longest-substring-without-repeating-characters
const str = "pwwkew"
const findLongString = (str) => {
  const toArr = Array.from(str)
  let addChar = "";
  const charSet = []
  toArr.forEach(item => {
    if(addChar.includes(item)){
      charSet.push(addChar);
      addChar = "";
    }
    addChar += item
  })

  addChar = "";
  for(const i of charSet){
    console.log(i.length)
    if(i.length > addChar.length){
      addChar = i
    }
  }

  return addChar;
}
const getLongest = findLongString(str);

console.log('getLongest --->',getLongest)

