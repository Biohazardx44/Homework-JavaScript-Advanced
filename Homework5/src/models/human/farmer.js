import Human from "./human.js";

export default class Farmer extends Human {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.isCoveredInDirt = true;
        this.rippedPants = true;
        this.hasShovel = true;

        this.hasCarrots = 67;
        this.hasPotatoes = 44;
    }

    shovelDirt(useShovel = `Dig Dig Dig`) {
        console.log(useShovel);
    }

    eatCarrot(eatingCarrot) {
        super.eatsFood(eatingCarrot);
        this.hasCarrots--;
    }
}