console.log('///// Elements /////');

///// Define styles for various console log outputs with different colors and formats

const styleDefault = 'color: white; font-family:sans-serif; font-size: 12px;';
const styleTitles = 'padding: 5px 300px 5px 50px; background-color: lightgreen; color: green; font-family:sans-serif; font-size: 20px; font-weight: bold; display: block; width: 100%;';
const styleFighters = 'color: darkgoldenrod; font-style: italic; font-family:sans-serif; font-size: 14px;';
const styleWeapons = 'color: darkorange; font-style: italic; font-family:sans-serif; font-size: 12px;';
const stylePowers = 'color: darkseagreen; font-family:sans-serif; font-size: 12px;';
const styleEfforts = 'color: cornflowerblue; font-family:sans-serif; font-size: 12px;';
const styleQualified = 'color: green; font-family:sans-serif; font-size: 12px; font-weight: bold;';
const styleDisqualified = 'color: red; font-family:sans-serif; font-size: 12px; font-weight: bold;';
const styleFightersDisqualified = 'color: darkred; text-decoration: line-through; font-family:sans-serif; font-size: 14px;';
const styleTurns = 'padding: 5px 20px; color: cyan; background-color: darkcyan; font-family:sans-serif; font-size: 16px; font-weight: bold;';
const styleCombats = 'color: darkcyan; font-family:sans-serif; font-size: 16px; font-weight: bold;';

// Define an array of fighter objects, each containing a name and power level
const fighters = [
   {
      name: 'Freezer',
      power: 8000
   },
   {
      name: 'Vegeta',
      power: 8500
   },
   {
      name: 'Crilin',
      power: 500
   },
   {
      name: 'Mr Satan',
      power: 50
   },
   {
      name: 'Junior',
      power: 6000
   },
   {
      name: 'Goku',
      power: 9001
   },
   {
      name: 'Tensing',
      power: 450
   },
   {
      name: 'Videl',
      power: 300
   },
   {
      name: 'Bulma',
      power: 20
   },
   {
      name: 'C-18',
      power: 7800
   },
   {
      name: 'Gohan',
      power: 8900
   },
   {
      name: 'Trunks',
      power: 1250
   }
];

console.log('%cFighters', styleCombats);

// Log the details of fighters
fighters.forEach(fighter => {

   console.log(`%c${fighter.name}%c with a personal power of: %c${fighter.power}`, styleFighters, styleDefault, stylePowers);

});

// console.log("fighters", typeof fighters, fighters);

// Define an array of weapon objects, each with a name and power level
const weapons = [
   {
      name: "Ventaglio della Musa",
      power: 15
   },
   {
      name: "Scouter",
      power: 30
   },
   {
      name: "Bastone Roshi",
      power: 60
   },
   {
      name: "Fagioli Magici",
      power: 70
   },
   {
      name: "Katana di Yajirobei",
      power: 85
   },
   {
      name: "Spada del Dragone Azzurro",
      power: 115
   },
   {
      name: "Armatura Saiyan",
      power: 145
   },
   {
      name: "Cannone da braccio",
      power: 170
   },
   {
      name: "Nuvola d'oro",
      power: 200
   },
   {
      name: "Bastone Nyoi",
      power: 220
   },
   {
      name: "Spada Z",
      power: 235
   },
   {
      name: "Orecchini Potara",
      power: 250
   }
];

console.log('%cWeapons', styleCombats);

// Log the details of weapons
weapons.forEach(weapon => {

   console.log(`%c${weapon.name}%c with a intrinsic power of: %c${weapon.power}`, styleFighters, styleDefault, stylePowers);

});

// console.log("weapons", typeof weapons, weapons);


// Define a constant for the Fight button element in the HTML
const fightButtonElem = document.querySelector(".btn");

// console.log("fightButtonElem", typeof fightButtonElem, fightButtonElem);