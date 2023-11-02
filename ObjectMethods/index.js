let animal = {
    eats: true,
    walk() {
        console.log("yeah it is");
      /* this method won't be used by rabbit */
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.walk = function() {
    console.log("Rabbit! Bounce-bounce!");
  };
  
  console.log(rabbit.walk());
// const members = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 1, name: 'Johnny' },
//     { id: 4, name: 'Alice' },
//   ];


//   const unique = [...new Map(members.map(m => [m.id, m])).values()]

//   const uniqueBy = (arr, prop) => {
//     return [...new Map(arr.map((m) => [m[prop], m])).values()];
//   };

//   console.log(uniqueBy(members, 'id'))



// // let recipeMap = new Map([
// //     ['cucumber', 500],
// //     ['tomatoes', 350],
// //     ['onion',    50]
// //   ]);

//   let recipeMap = [
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]


// // console.log(recipeMap.get('cucumber'))

// console.log('Object.entries(obj)', Object.entries(recipeMap))
// console.log('Object.entries(obj)', Object.fromEntries(recipeMap))

//   for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // cucumber, tomatoes, onion
//   }
  
//   // iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
//   }
  
//   // iterate over [key, value] entries
//   for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     console.log(entry); // cucumber,500 (and so on)
//   }