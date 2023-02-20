import Human from "./human.js";

export default class Scammer extends Human {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.hasComputer = true;
        this.hasCompass = false;
    }

    scamPeople(scam = `Hello sir you have virus in your computer.`) {
        console.log(scam);
    }
}