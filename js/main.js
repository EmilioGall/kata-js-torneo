console.log('///// Main /////');

/**
 * Description: the function execute all the 5 phases of the Boolkaichi Tournament (between the fighters in the given array [fighters], with the weapons in the given array [weapons]) and return an array [podiumWinners] with the winners.
 * @param {array} fighters
 * @param {array} weapons
 * @returns {array}
 */
function executeBoolkaichiTournament(fighters, weapons) {

   // Phase 1: Weapon Selection
   console.log('Phase 1: Weapon Selection');

   let fightersWithWeapons = chooseWeapons(fighters, [...weapons]);

   // Phase 2: Training
   console.log('Phase 2: Training');

   let trainedFighters = training(fightersWithWeapons);

   // Phase 3: Qualification
   console.log('Phase 3: Qualification');

   let qualifiedFighters = qualification(trainedFighters);

   // Phase 4: Combat
   console.log('Phase 4: Combat');

   let combatWinners = combat(qualifiedFighters);

   // Phase 5: Awards
   console.log('Phase 5: Awards');

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
