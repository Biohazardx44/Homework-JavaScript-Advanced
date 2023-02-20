import Mammal from "../mammal.js";

export default class Human extends Mammal {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.speaks = true;
        this.eatsFood = true;
        this.hasTail = false;

        this.numberOfLegs = 2;
        this.numberOfArms = 2;
    }

    hitsSmallToe(soundOfHittingSmallToe = 'AAAAAA mame ti e***!!!!') {
        console.log(soundOfHittingSmallToe);
    }

    eatsFood(eatingFood = `NOM NOM NOM`) {
        console.log(eatingFood);
    }
}