
const movies = [
  {
    id: 1,
    name: "Matrix"
  },
  {
    id: 2,
    name: "Star Wars"
  },
  {
    id: 3,
    name: "The wolf of Wall Street"
  }
];

// const series = [
//   {
//     id: 4,
//     name: "South Park"
//   },
//   {
//     id: 5,
//     name: "The Simpsons"
//   },
//   {
//     id: 6,
//     name: "The Big Bang Theory"
//   }
// ];

const get = (property) => (object) => object[property];
// const get = (property) =>{
//   console.log(property)
//   // (object) => object[property];
// } 

const getId = get("id");
console.log(getId)

console.log("movies -->", movies.map(getId));
// console.log("series -->", series.map(getId));

// const Human = function(){
//     return "I am a human";

// }

// Human.prototype.namefun = function (name, any, te){
//   return `My name is ${this.name}`
// }

// Human.prototype.setName = function (){
//   return `My name is ${this.name}`
// }

// const namefun = function (name){
//      return `My name is ${this.name}`
//  }


// Object.setPrototypeOf(Human, namefun)

// namefun.prototype.setName = function(){
//   return `its an empty`
// }


// Object.setPrototypeOf(Human, namefun)

// console.log(Human)

// const copyHuman = new Human()
// const copyHuman1 = Object.create(Human)
// const copyHuman2 = new Object(Human)

// console.log(copyHuman)
// console.log(copyHuman1)
// console.log(copyHuman2)


// ref https://www.digitalocean.com/community/tutorials/understanding-arrow-functions-in-javascript

// const printNumbers = {
//   phrase: 'The current value is:',
//   numbers: [1, 2, 3, 4],

//   loop: function() {
//     console.log(this)
//     this.numbers.forEach ((number) => {
//       console.log(this)
//       // console.log(this.phrase, number)
//     })
//   },
// }

// printNumbers.loop();
