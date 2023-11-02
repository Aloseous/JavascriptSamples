const arrList = [10,5,2,1,40,4]

const sortArr = arrList.sort((a,b) => a-b)

console.log('sortArr---',sortArr)



const customers = [
  { name: "Sara", birthday: "1995-4-12", credit: 725 },
  { name: "Alice", birthday: "1995-4-22", credit: 540 },
  { name: "Mary", birthday: "1985-3-14", credit: 515 },
  { name: "Zoya", birthday: "1999-2-12", credit: 325 },
  { name: "Peter", birthday: "1992-1-10", credit: 875 },
  { name: "Mike", birthday: "1997-5-14", credit: 825 }
];

// const sortArrObj = customers.sort((a,b) => a.credit-b.credit)
const sortArrObj = customers.sort((a,b) => a.name.localeCompare(b.name))

console.log('sortArrObj---',sortArrObj)


