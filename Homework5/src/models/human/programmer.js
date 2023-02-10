import Human from "./human.js";

export default class Programmer extends Human {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.hasGlasses = true;
        this.hasComputer = true;

        this.hasBrokenKeyboards = 7;
    }

    getAngry(angry) {
        super.hitsSmallToe(angry)
        this.hasBrokenKeyboards--;
    }
}