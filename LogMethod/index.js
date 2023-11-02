greetings();

var greetings = function(){

console.log('first greerting');

};

greetings();

function greetings(){

console.log('second greeting');

}

greetings();


function parent() {   

 var hoisted = "I'm a variable";   

 function hoisted() {       

   return "I'm a function";   

 }   

 return hoisted();

}

console.log(parent());