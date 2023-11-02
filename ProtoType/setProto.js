// const human = {
//     isAlive:true
// };

// const animal = {
//     run:true,
// }

// const birds = {
//     fly:false,
// }



// Object.setPrototypeOf(animal, human)
// // Object.setPrototypeOf(animal, birds)


// console.log('result -- >', animal.run, animal.isAlive, animal.fly)

const car = {
    doors:4,
    airBags:2,

    get carDoor(){
        return this.door
    },

    set carDoor(door){
        this.doors = door;
    }   
};

const audiCar = {}
Object.setPrototypeOf(audiCar, car)
audiCar.door = 5;

console.log('audiCar -- >',audiCar, car)


