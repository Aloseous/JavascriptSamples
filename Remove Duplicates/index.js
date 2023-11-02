// const arrayObj = [{a:{id:3, "name": "kingz"}}, {b:{id:2, "name": "Alose"}}, {c:{id:1, "name": "Farren"}}, {d:{id:3, "name": "kingz"}}]
const arrayObj = [{id:3, "name": "kingz"}, {id:2, "name": "Farren"}, {id:5, "name": "Alos"},{id:3, "name": "nash"}]


// const filterdList = arrayObj.map(item => item)

const numberList = [2, 4, 4,4,41, 200, 30, 40, 40, 66, 12, 123, 66, 2, 2];

/* const removeDuplicateByFilter = (numList) => {
    const filterList = numList.filter((item, index) => {
        return numList.indexOf(item) === index
    })
    return filterList;
}
const filterMethod = removeDuplicateByFilter(numberList);

console.log(filterMethod); */

const uniqueNumbers = numberList.filter((value, index, self) => self.indexOf(value) !== index);

console.log(uniqueNumbers)

const duplicateItems = numberList.filter((item, index) => {
    return index === numberList.findIndex(i => i === item)
})

console.log('duplicateItems -->',duplicateItems)


// const numList = [10, 20, 10, 2, 30, 20, 10, 1, 20, 10];
// const findNumOfRep = numList.reduce((acc, current) => {
//   if (acc[current]) {
//     acc[current] = acc[current] + 1;
//   } else {
//     acc[current] = 1;
//   }
//   return acc;
// }, {});

// console.log(findNumOfRep);


const ids = arrayObj.map(( {id} ) => id);

console.log('ids -->',ids)


// const tobeFilter  = arrayObj.map(({id}) => id)
// console.log(tobeFilter)
// const filIds = arrayObj.filter(({id}, index) => !ids.includes(id, index + 1)); /* this method removes the first matching element*/

// const tofindDuplicates =  arrayObj.filter((item, index) => arrayObj.indexOf(item.id) !== index);
// console.log('filIds-->',filIds)
// const tofindDuplicates =  arrayObj.filter((item, index) =>{
//     // arrayObj.indexOf(item.id) !== index);
//     console.log(item.id)
//     console.log(arrayObj.indexOf(item.id))
// } )


// const unique = [...new Map(arrayObj.map(item => [item.id, item])).values()]
// console.log(unique)




// const filterItem = arrayObj.filter((item, index) =>  {
//      return index === arrayObj.findIndex(i => item.id == i.id)
//  })

//  const findDuplicate = arrayObj.filter((item, index) =>  {
//     return index === arrayObj.findIndex(i => item.id == i.id)
// })


// console.log(Object.entries(arrayObj).values())

// arrayObj.forEach(item =>{
    // const arrayItem =  Object.keys(item)
//     const filterItem = arrayObj.filter((item, index) =>  {
//         const key = Object.keys(item)
//         // console.log(item[key].id)
//                return index === arrayObj.findIndex((i, ind) => item[key].id == i[key].id)
//          })

// // }) 
// console.log(filterItem)
// // console.log([...arrayObj])

