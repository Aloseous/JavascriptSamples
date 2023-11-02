const person = {
    name: 'Alice',
    greet: function() {
      return `Hello, my name is ${this.name}.`;
    }
  };
  
  const greeting = person.greet(); // Call the greet method to get the greeting
  console.log(greeting);


// function User(name, age){
//     this.name = name
//     this.age = age
// }


// User.prototype.greet = function() {
//     return `Hello ${this.name}, your age is ${this.age}.`;
// }

// const userObj = new User("kingz", 38);
// console.log(userObj.greet());


String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  };
  
  const str = 'hello';
  console.log(str.reverse()); // Outputs 'olleh'