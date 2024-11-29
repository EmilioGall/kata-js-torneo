console.log('///// Main /////');

/**
 * Description: the function execute all the 5 phases of the Boolkaichi Tournament (between the fighters in the given array [fighters], with the weapons in the given array [weapons]).
 * @param {array} fighters - The array of fighters participating in the tournament
 * @param {array} weapons - The array of weapons available for selection by fighters
 */
function executeBoolkaichiTournament(fighters, weapons) {

   // Phase 1: Weapon Selection
   console.log('%cPhase 1: Weapon Selection', styleTitles);

   // Call the function to choose weapons
   let fightersWithWeapons = chooseWeapons(fighters, [...weapons]);

   console.log(' ');

   // Phase 2: Training
   console.log('%cPhase 2: Training', styleTitles);

   // Call the training function
   let trainedFighters = training(fightersWithWeapons);

   console.log(' ');

   // Phase 3: Qualification
   console.log('%cPhase 3: Qualification', styleTitles);

   // Call the qualification function
   let qualifiedFighters = qualification(trainedFighters);

   console.log(' ');

   // Phase 4: Combat
   console.log('%cPhase 4: Combat', styleTitles);

   // Call the combat function
   let combatWinners = combat(qualifiedFighters);

   console.log(' ');
   
   // Phase 5: Awards
   console.log('%cPhase 5: Awards', styleTitles);

   // Call the award ceremony function
   awardCeremony(combatWinners);

   console.log(' ');
   console.log(' ');
   console.log(' ');

};

// Create a debounced version of the [executeBoolkaichiTournament] function with 500ms delay
const debouncedTournament = debounce(() => executeBoolkaichiTournament(fighters, weapons), 500);

// Add keypress event listener on [inputPasswordElem]
fightButtonElem.addEventListener('click', function (e) {

   // console.log('Button clicked');

   // Call debounced version of controls
   debouncedTournament();

});
