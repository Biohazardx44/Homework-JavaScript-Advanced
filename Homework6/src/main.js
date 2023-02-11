import Animal from "./models/animal.js";

console.log(`Test`);

const cow = new Animal('Cow', Animal.Type.HERBIVORE, 12, 200);
const blackPanther = new Animal('Black Panther', Animal.Type.CARNIVORE, 7, 120);
const rat = new Animal(`Rat`, Animal.Type.OMNIVORE, 69, 50)
const cheese = 'Cheese';

cow.eat(blackPanther);
console.log(blackPanther);

blackPanther.eat(cow);
console.log(cow);

rat.eat(blackPanther)
console.log(blackPanther);

rat.eat(cheese);