/**
 * Description: function to delay the execution of a provided function [functionToCall] by a specified amount of time [delay].
 * @param {function} functionToCall - The function to be called.
 * @param {number} delay - The delay in milliseconds before the function is executed.
 * @returns {function} - A debounced version of the input function.
 */
function debounce(functionToCall, delay) {

   // Define a variable to hold the timeout reference.
   let timeout;

   // Return a new function that takes any number of arguments.
   return function (...args) { // capture arguments passed to the debounced function

      // Clear any previously set timeout to reset the delay.
      clearTimeout(timeout);

      // Capture the context (this value) of the original function.
      const context = this;

      // Set a new timeout that will call the original function after the specified delay.
      timeout = setTimeout(() => {

         // Call the function with the correct context and arguments.
         functionToCall.apply(context, args);

      }, delay);

   };

};

/**
 * Description: function shuffle the elements in a given array [givenArray] using Fisher-Yates algorithm.
 * @param {array} givenArray - The array to be shuffled.
 * @returns {any} - The shuffled array.
 */
function shuffleArray(givenArray) {

   // Iterate from the last element of the array to the second element.
   // (i > 0 ensures we always have at least two elements to swap)
   for (let i = givenArray.length - 1; i > 0; i--) {

      // Generate a random index j between 0 and i (inclusive)
      // [This random index will determine which element we will swap with the current element at index i]
      const j = Math.floor(Math.random() * (i + 1));

      // Swap the elements at index i and index j
      // The destructuring assignment here allows for a clean swap without needing a temporary variable
      [givenArray[i], givenArray[j]] = [givenArray[j], givenArray[i]]; // Swap elements

   };

   // Return the shuffled array
   return givenArray;

};

/**
 * Description: function to generate a random integer index between the specified minimum [min] and maximum [max] values (inclusive).
 * @param {number} min - Minimum value for the random index.
 * @param {number} max - Maximum value for the random index.
 * @returns {number} - A randomly generated integer within the specified range.
 */
function getRandomIndex(min, max) {

   // Ensure min is less than or equal to max to prevent invalid ranges.
   if (min > max) {

      return NaN; // Return NaN if the inputs are invalid.

   };

   // Generate a random integer between min and max using Math.random() and Math.floor().
   const result = Math.floor(Math.random() * (max - min + 1)) + min;

   // Return the generated random index.
   return result;

};

/**
 * Description: function randomly assign a unique weapon from given array [weapons] to each fighter in given array [fighter] and return a new result array [fightersWithWeapons]
 * @param {array} fighters - The array of fighters to be assigned weapons.
 * @param {array} weapons - The array of available weapons.
 * @returns {array} - An array of fighter objects with their assigned weapons and total power.
 */
function chooseWeapons(fighters, weapons) {

   // Shuffle the fighters array to ensure random selection
   const shuffledFighters = shuffleArray(fighters);

   // console.log("shuffledFighters", typeof shuffledFighters, shuffledFighters);

   // Create a copy of the weapons array to manipulate without altering the original
   const availableWeapons = [...weapons];

   // Initialize an array to hold fighters that will be assigned weapons.
   const fightersWithWeapons = [];

   // Iterate over each fighter to assign a weapon
   shuffledFighters.forEach((fighter) => {

      // Create a new object to hold fighter details to avoid mutating the original object
      let fighterWithWeapon = { ...fighter };

      // console.log("fighterWithWeapon", typeof fighterWithWeapon, fighterWithWeapon);

      // Check if there are available weapons
      if (availableWeapons.length > 0) {

         // Pick a random index for the weapon
         const randomIndex = getRandomIndex(0, availableWeapons.length - 1);

         // Get that weapon using the random index.
         const selectedWeapon = availableWeapons[randomIndex];;

         // Assign the selected weapon to the fighter
         fighterWithWeapon.weapon = selectedWeapon;

         // Calculate total power by adding the fighter's power and weapon's power.
         fighterWithWeapon.totalPower = fighter.power + selectedWeapon.power;

         // Remove the used weapon from the available array.
         availableWeapons.splice(randomIndex, 1);

      } else {

         // If there are no available weapons left, mark the fighter with no weapon.
         fighterWithWeapon.weapon = null;

         // Total power remains the same.
         fighterWithWeapon.totalPower = fighter.power;
      };

      // Add the new fighter object with weapon to the result array [fightersWithWeapons]
      fightersWithWeapons.push(fighterWithWeapon);

      // Log the details of chosen weapon and calculated total power to the console.
      console.log(`%c${fighterWithWeapon.name} %c(power: %c${fighterWithWeapon.power}%c) chose %c${fighterWithWeapon.weapon.name} %c(power: %c${fighterWithWeapon.weapon.power}%c) increasing its power to: %c${fighterWithWeapon.totalPower}`, styleFighters, styleDefault, stylePowers, styleDefault, styleWeapons, styleDefault, stylePowers, styleDefault, stylePowers);

   });

   // console.log("fightersWithWeapons", typeof fightersWithWeapons, fightersWithWeapons);

   // Return the array of fighters with their assigned weapons.
   return fightersWithWeapons;

};

/**
 * Description: function simulates training for each fighter, multiplying their totalPower by a random effort index and adding this new power to the fighter object.
 * @param {array} fightersWithWeapons - An array of fighter objects with their respective weapons.
 * @returns {array} - A new array containing updated fighters with their trained power values.
 */
function training(fightersWithWeapons) {

   // console.log("fightersWithWeapons", typeof fightersWithWeapons, fightersWithWeapons);

   // Use map method to iterate over each fighter in the input array
   let trainedFighters = fightersWithWeapons.map(fighter => {

      // console.log("fighter", typeof fighter, fighter);

      // Generate a random index representing the effort put in during training
      const randomIndex = getRandomIndex(1, 100);

      // Check if the random index is valid (not NaN)
      if (isNaN(randomIndex)) {

         throw new Error("Generated random index is invalid.");

      };

      // Log the effort and new power after training.
      console.log(`%c${fighter.name} %c(power: %c${fighter.totalPower}%c) put %c${randomIndex}% %cof effort in training, increasing its power to: %c${fighter.totalPower * randomIndex}`, styleFighters, styleDefault, stylePowers, styleDefault, styleEfforts, styleDefault, stylePowers);

      // Add a new trainedPower property based on the totalPower modified by randomIndex
      fighter.trainedPower = fighter.totalPower * randomIndex;

      // Return the updated Object [fighter]
      return fighter;

   });

   // console.log("trainedFighters", typeof trainedFighters, trainedFighters);

   // Return the new array of trained fighters
   return trainedFighters;

};

/**
 * Description: function filter out from given array [trainedFighters] elements which trainedPower is less than 2000.
 * @param {array} trainedFighters - The array of trained fighters to be filtered.
 * @returns {array} - A new array containing only the qualified fighters.
 */
function qualification(trainedFighters) {

   // console.log("trainedFighters", typeof trainedFighters, trainedFighters);

   // Use filter to create an array of fighters that have qualified based on the trained power.
   let qualifiedFighters = trainedFighters.filter(fighter => {

      // console.log("fighter", typeof fighter, fighter);

      // Return the updated Object [fighter]
      if (fighter.trainedPower > 2000) {

         // Log that the fighter is qualified.
         console.log(`%c${fighter.name}%c reached a power of %c${fighter.trainedPower}%c which %cis enough to be qualified%c for combat phase!`, styleFighters, styleDefault, stylePowers, styleDefault, styleQualified, styleDefault);

         // Keep the qualified fighter in the array.
         return fighter;

      } else {

         // Log that the fighter did not qualify.
         console.log(`%c${fighter.name}%c reached a power of %c${fighter.trainedPower}%c which %cis NOT enough to be qualified%c for combat phase!`, styleFightersDisqualified, styleDefault, stylePowers, styleDefault, styleDisqualified, styleDefault);

      };

   });

   // console.log("qualifiedFighters", typeof qualifiedFighters, qualifiedFighters);

   // Return the filtered array of qualified fighters.
   return qualifiedFighters;

};

/**
 * Description: function conducts combat between pairs of fighters, determining the winners based on their trained power.
 * @param {array} qualifiedFighters - An array of fighters who have qualified for combat.
 * @returns {array} - An array of winners after the combat.
 */
function combat(qualifiedFighters) {

   // Array to keep track of all the winners
   let winners = [];

   // Set to track losers
   let losers = new Set();

   // Count rounds of combat
   let roundsCount = 1;

   // Continue combat until fewer than two fighters remain.
   while (qualifiedFighters.length > 1) {

      // Check if there is an odd number of qualified fighters.
      if (qualifiedFighters.length % 2 !== 0) {

         // If odd, add a robot fighter to balance the numbers.
         qualifiedFighters.push({ name: "Robot", trainedPower: 4000 });

         console.log('%cAdded Robot fighter for balance.', styleFighters);

      };

      // Array to store winners for the current round.
      let roundWinners = [];

      // Count combats
      let combatsCounter = 1;

      // Log the round count and type (Final, Semifinal, etc.)
      console.log(`%c${qualifiedFighters.length < 5 ? (qualifiedFighters.length < 3 ? 'Final' : 'Semifinal') : `${roundsCount}° Turn`}`, styleTurns);

      // Loop through the fighters in pairs to conduct combat.
      for (let i = 0; i < qualifiedFighters.length; i += 2) {

         const fighterOne = qualifiedFighters[i];

         const fighterTwo = qualifiedFighters[i + 1];

         // Log the current combat matchup.
         console.log(`%cCombat n°${combatsCounter}:%c ${fighterOne.name} %cvs %c${fighterTwo.name}`, styleCombats, styleFighters, styleDefault, styleFighters);

         combatsCounter++;

         // Determine the winner based on trained power
         const winner = fighterOne.trainedPower > fighterTwo.trainedPower ? fighterOne : fighterTwo;

         // Determine the loser based on trained power
         const loser = fighterOne.trainedPower < fighterTwo.trainedPower ? fighterOne : fighterTwo;

         // Store the winner for this round.
         roundWinners.push(winner);

         // Track the loser to prevent them from participating again.
         losers.add(loser);

         // Log the winner's name and their final power.
         console.log(`%c- Winner: %c${winner.name}%c with a final power of: %c${winner.trainedPower}`, styleDefault, styleFighters, styleDefault, stylePowers);

      };

      // console.log("roundWinners", typeof roundWinners, roundWinners);

      // console.log("losers", typeof losers, losers);

      // Update qualifiedFighters for the next round.
      qualifiedFighters = roundWinners;

      roundsCount++;

   };

   // Check if only one fighter remains as the overall winner.
   if (qualifiedFighters.length == 1) {

      // Add the overall winner to the winners array.
      winners.push(qualifiedFighters[0]);

      // console.log("winners", typeof winners, winners);

      // Convert Set to Array for processing.
      losers = [...losers];

      // console.log("losers", typeof losers, losers);

      // Add the last loser for 2nd place consideration.
      winners.push(losers[losers.length - 1]);

      // console.log("winners", typeof winners, winners);

      // Log the current combat matchup.
      console.log(`%cRound for third position`, styleTurns);

      console.log(`%cCombat: %c${losers[losers.length - 2].name}%c vs %c${losers[losers.length - 3].name}`, styleCombats, styleFighters, styleDefault, styleFighters);

      // Determine the winner of the 3rd place match.
      const playoffWinner = losers[losers.length - 2].trainedPower > losers[losers.length - 3].trainedPower ? losers[losers.length - 2] : losers[losers.length - 3];

      // Log the playoff winner's name and their final power.
      console.log(`%c- Winner: %c${playoffWinner.name}%c with a final power of: %c${playoffWinner.trainedPower}`, styleDefault, styleFighters, styleDefault, stylePowers);

      // Add 3rd place winner to the winners array.
      winners.push(playoffWinner);

      // console.log("winners", typeof winners, winners);

   };

   // console.log("winners", typeof winners, winners);

   return winners;

};

/**
 * Description: function finalizes the results by logging the top three fighters based on their performance in the combat phase.
 * @param {array} combatWinners - Array of fighters who won their respective matches.
 */
function awardCeremony(combatWinners) {

   // console.log("combatWinners", typeof combatWinners, combatWinners);

   // Log the winners for the podium
   console.log(`%cPodium Winners:`, styleTurns);

   // Loop through the array of combat winners and log their standings.
   for (let index = combatWinners.length - 1; index >= 0; index--) {

      // Log the winners of each podium position
      console.log(`%c${index + 1}° place: %c${combatWinners[index].name}%c with final power of %c${combatWinners[index].trainedPower}`, styleDefault, styleFighters, styleDefault, stylePowers);

   };

};