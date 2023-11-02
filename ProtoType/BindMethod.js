const roomObj = {
  roomName:'kingz',
  roomType:'Living',
  tableType:'aquare',
  getData:function(){
    return `room name is ${this.roomName} and the room type is ${this.roomType}, 'table type ${this.tableType}`
  }
}

const KitchenObj = {
  tableType: 'Round table'
}

// const hallObj = {
//   roomType:'Hall Room',
//   tableType: 'Square table'
// }


const roomMethod = roomObj.getData
console.log(roomMethod)

 const bindMehod = roomMethod.bind(KitchenObj)

console.log(bindMehod())

// console.log(roomObj.getData.bind(hallObj)())


// let PrintName = {
//   name: "steve",
//   age: 20,
//   sayHi: function (age) {
//     console.log(this.name + " age is " + age);
//   }
// };

// const newObj = {
//   name:'kingz',
//   age:20
// }

// const printData = PrintName.sayHi(37)

// console.log(printData.bind(newObj)())


// function sum(a) {
//   return (b) => {
//       return (c) => {
//           return a + b + c
//       }
//   }
// }
// console.log(sum(1)(2)(3)) 
