console.log('///// Main /////');

/**
 * Description: the function execute all the 5 phases of the Boolkaichi Tournament (between the fighters in the given array [fighters], with the weapons in the given array [weapons]) and return an array [podiumWinners] with the winners.
 * @param {array} fighters
 * @param {array} weapons
 * @returns {array}
 */
function executeBoolkaichiTournament(fighters, weapons) {

   // Phase 1: Weapon Selection
   console.log('%cPhase 1: Weapon Selection', styleTitles);

   let fightersWithWeapons = chooseWeapons(fighters, [...weapons]);

   // Phase 2: Training
   console.log('%cPhase 2: Training', styleTitles);

   let trainedFighters = training(fightersWithWeapons);

   // Phase 3: Qualification
   console.log('%cPhase 3: Qualification', styleTitles);

   let qualifiedFighters = qualification(trainedFighters);

   // Phase 4: Combat
   console.log('%cPhase 4: Combat', styleTitles);

   let combatWinners = combat(qualifiedFighters);

   // Phase 5: Awards
   console.log('%cPhase 5: Awards', styleTitles);

   let podiumWinners = awardCeremony(combatWinners);

   return podiumWinners;

};

// Create a debounced version of the [executeBoolkaichiTournament] function with 500ms delay
const debouncedTournament = debounce(() => executeBoolkaichiTournament(fighters, weapons), 500);

// Add keypress event listener on [inputPasswordElem]
fightButtonElem.addEventListener('click', function (e) {

   // console.log('Button clicked');

   // Call debounced version of controls
   debouncedTournament();

});
