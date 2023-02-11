export default class Animal {
  static Type = {
    CARNIVORE: `carnivore`,
    HERBIVORE: `herbivore`,
    OMNIVORE: `omnivore`,
  };

  constructor(name, type, age, size) {
    this.name = name;
    /** 
    * @type {Animal.Type}
    */
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }

  eat(input) {
    if (input instanceof Animal) {
      if (this.type === Animal.Type.HERBIVORE) {
        console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`);
      } else if (this.size * 2 < input.size) {
        console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large.`);
      } else if (this.type !== Animal.Type.HERBIVORE) {
        input.isEaten = true;
        console.log(`The animal ${this.name} ate the ${input.name}.`);
      }
    } else {
      console.log(`The animal ${this.name} is eating ${input}.`);
    }
  }
}