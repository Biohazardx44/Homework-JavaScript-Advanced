import Horse from "./models/animal/horse.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";
import StarZenskiSarplaninec from "./models/animal/starZenskiSarplaninec.js";
import Farmer from "./models/human/farmer.js";
import Programmer from "./models/human/programmer.js";
import Scammer from "./models/human/scammer.js";

// const horse1 = new Horse('Goce', 7, 'Male');
// console.log(horse1);
// horse1.die();

// const sarplaninec1 = new Sarplaninec('Sarko', 5, 'Male');
// sarplaninec1.bark();
// console.log(sarplaninec1);

//const pudlica1 = new Pudlica('Kiko', 5, undefined);
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.die('crkni');
// pudlica1.bark('gaf gaf gaf');
// pudlica1.comeAlive()

// console.log('bark');
// sarplaninec1.bark()
// console.log('bark ends');

// setTimeout(() => {
//     pudlica1.die()
// }, 10000)

const starZenskiSarplaninec = new StarZenskiSarplaninec('Lajka', 11);
const pudlica2 = new Pudlica('Ace', 8, `Male`);
const farmer1 = new Farmer(`Kole`, 47, `Male`);
const scammer1 = new Scammer(`Rajesh`, 22, `Indian Male`);
const programmer1 = new Programmer(`Kyle`, 28, `Male`);

console.log(starZenskiSarplaninec);
console.log(pudlica2);
console.log(farmer1);
console.log(scammer1);
console.log(programmer1);

console.log(`======================================`);
starZenskiSarplaninec.printSpecs()
console.log(`======================================`);
pudlica2.printSpecs()
console.log(`======================================`);
//Has 3 less carrots
farmer1.eatCarrot()
farmer1.eatCarrot()
farmer1.eatCarrot()
console.log(`======================================`);
scammer1.scamPeople();
console.log(`======================================`);
//RIP Keyboard
programmer1.getAngry();