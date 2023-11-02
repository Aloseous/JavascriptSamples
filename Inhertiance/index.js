function Person (name, age) {
  this.name = name;
  this.age = age;
}

const personObj = new Person("Kingsly", 35)

Person.prototype.greet = function(){
  return `${this.name} says Hello..`
}


function Warrior (name, level, weapon) {
  Person.call(this, name, level)
  this.weapon = weapon;
}

function Healer (name, level, spell){
  Person.call(this, name, level);
  this.spell = spell;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

// hero1.attack();
Object.setPrototypeOf(Warrior.prototype, Person.prototype);
Object.setPrototypeOf(Healer.prototype, Person.prototype);
console.log('first', hero1.attack())
console.log('first', hero1.greet())

