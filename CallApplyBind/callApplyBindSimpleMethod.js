const nameObj = {
	firstName:'Alos', 
	lastName:'kingz',
	// printName: function(){
	// 	console.log(this.firstName, '----', this.lastName)
	// }
}

const printName =  function(state, city, un){
	console.log(this.firstName, '----', this.lastName, ' the state is ', state, 'from the city', city, un)
}

// console.log(printName.call(nameObj, 'TN','Chennai'))


const nameObj2 = {
	firstName:'Farren', 
	lastName:'Farnley'
}

console.log(printName.call(nameObj2, 'BG','Delhi'))
console.log(printName.apply(nameObj2, ['BG','Delhi','test']))

// const bindObj = printName.bind(nameObj2, 'BG','Delhi','mod')
// console.log(bindObj())



// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + 'I choose you!');
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
