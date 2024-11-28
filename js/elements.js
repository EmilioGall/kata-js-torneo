console.log('///// Elements /////');

// Define constant of fighters array [fighters]
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

console.log("fighters", typeof fighters, fighters);


// Define constant of weapons array [weapons]
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

console.log("weapons", typeof weapons, weapons);


// Define constant of Fight Button
const fightButtonElem = document.querySelector(".btn");

console.log("fightButtonElem", typeof fightButtonElem, fightButtonElem);

///// Define Styles fo Console Logs

const styleDefault = 'color: white; font-family:sans-serif; font-size: 12px;';

const styleTitles = 'background-color: lightgreen; color: green; font-family:sans-serif; font-size: 20px; font-weight: bold; display: block; width: 100%;';

const styleFighters = 'color: darkgoldenrod; font-style: italic; font-family:sans-serif; font-size: 14px;';

const styleWeapons = 'color: darkorange; font-style: italic; font-family:sans-serif; font-size: 14px;';

const stylePowers = 'color: darkseagreen; font-family:sans-serif; font-size: 12px;';

const styleEfforts = 'color: darkorchid; font-family:sans-serif; font-size: 12px;';

const styleFightersQualified = 'color: darkgreen; font-family:sans-serif; font-size: 14px;';

const styleFightersDisqualified = 'color: darkred; text-decoration: line-through; font-family:sans-serif; font-size: 14px;';

const styleRounds = 'background-color: lightgray; color: darkcyan; font-family:sans-serif; font-size: 16px; font-weight: bold;';



