/**
 * Description: function calls the given function [functionToCall] only after time param [delay].
 * @param {function} functionToCall
 * @param {number} delay
 * @returns {function} 
 */
function debounce(functionToCall, delay) {

   // Define variable for timeout
   let timeout;

   return function (...args) { // capture arguments passed to the debounced function

      // Clear the previous timer
      clearTimeout(timeout);

      // Capture context of function
      const context = this;

      // Set a new timeout to call the function
      timeout = setTimeout(() => {

         // Execute the function with the correct context and arguments
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

   // Loop through the array starting from the last index down to the second element
   // (i > 0 ensures we always have at least two elements to swap)
   for (let i = givenArray.length - 1; i > 0; i--) {

      // Generate a random index j between 0 and i (inclusive)
      // [This random index will determine which element we will swap with the current element at index i]
      const j = Math.floor(Math.random() * (i + 1));

      // Swap the elements at index i and index j
      // The destructuring assignment here allows for a clean swap without needing a temporary variable
      [givenArray[i], givenArray[j]] = [givenArray[j], givenArray[i]]; // Swap elements

   };

   // Return the shuffled array to the caller
   return givenArray;

};

/**
 * Description: function generates a random index between two given values (inclusive).
 *
 * @param {number} min - The lower limit (inclusive) for generating the random index.
 * @param {number} max - The upper limit (inclusive) for generating the random index.
 * @returns {number} A random integer index between min and max (both inclusive).
 */
function getRandomIndex(min, max) {

   // Validate that min is less than or equal to max.
   if (min > max) {

      return NaN; // Return NaN if the inputs are invalid.

   }

   // Generate a random number between 0 (inclusive) and 1 (exclusive), scale it to the desired range,
   // and use Math.floor to convert it to an integer within the range of [min, max].
   const result = Math.floor(Math.random() * (max - min + 1)) + min;

   // Return the generated random index.
   return result;

};

/**
 * Description: function randomly assign a unique weapon from given array [weapons] to each fighter in given array [fighter] and return a new result array [fightersWithWeapons]
 * @param {array} fighters
 * @param {array} weapons
 * @returns {array}
 */
function chooseWeapons(fighters, weapons) {

   // Shuffle the fighters array
   const shuffledFighters = shuffleArray(fighters);

   console.log("shuffledFighters", typeof shuffledFighters, shuffledFighters);

   // Create a copy of the weapons array to avoid modifying the original
   const availableWeapons = [...weapons];

   // Initialize an array to store fighters with weapons
   const fightersWithWeapons = [];

   // Iterate over each fighter to assign a weapon
   shuffledFighters.forEach((fighter) => {

      // Create a new object to hold the fighter's details
      let fighterWithWeapon = { ...fighter };

      // console.log("fighterWithWeapon", typeof fighterWithWeapon, fighterWithWeapon);

      // Check if there are available weapons
      if (availableWeapons.length > 0) {

         // Pick a random index for the weapon
         const randomIndex = getRandomIndex(0, availableWeapons.length - 1);

         // Get the random weapon 
         const selectedWeapon = availableWeapons[randomIndex];;

         // Assign the weapon to the fighter
         fighterWithWeapon.weapon = selectedWeapon;

         // Calculate the total power
         fighterWithWeapon.totalPower = fighter.power + selectedWeapon.power;

         // Remove the selected weapon from the available weapons
         availableWeapons.splice(randomIndex, 1);

      } else {

         // If no weapons are available, we can handle it accordingly
         fighterWithWeapon.weapon = null;

         // Only fighter's power
         fighterWithWeapon.totalPower = fighter.power;
      };

      // Push the new fighter object with weapon to the fightersWithWeapons array
      fightersWithWeapons.push(fighterWithWeapon);

      console.log(fighterWithWeapon.name, '(power:', fighterWithWeapon.power, ')',
         'chosed', fighterWithWeapon.weapon.name, '(power:', fighterWithWeapon.weapon.power, ')',
         'increasing its power to:', fighterWithWeapon.totalPower);

   });

   console.log("fightersWithWeapons", typeof fightersWithWeapons, fightersWithWeapons);

   return fightersWithWeapons;

};

/**
 * Description: function multiplies every totalPower value in the given array [fightersWithWeapons] by a random index between 1 and 100, simulating a training effect.
 * @param {array} fightersWithWeapons - An array of fighters objects
 * @returns {array} - A new array containing the updated fighters after training
 */
function training(fightersWithWeapons) {

   console.log("fightersWithWeapons", typeof fightersWithWeapons, fightersWithWeapons);

   // Use map method to iterate over each fighter in the input array.
   let trainedFighters = fightersWithWeapons.map(fighter => {

      // console.log("fighter", typeof fighter, fighter);

      // Pick a random index for the training
      const randomIndex = getRandomIndex(1, 100);

      // Check if the random index is valid (not NaN)
      if (isNaN(randomIndex)) {

         throw new Error("Generated random index is invalid.");

      };

      console.log(fighter.name, '(totalPower:', fighter.totalPower, ')',
         'put', randomIndex, '% of effort in training, increasing its power to:', fighter.totalPower * randomIndex);


      // Add a new property trainedPower to fighter.
      fighter.trainedPower = fighter.totalPower * randomIndex;

      // Return the updated Object [fighter]
      return fighter;

   });

   console.log("trainedFighters", typeof trainedFighters, trainedFighters);

   return trainedFighters;

};

/**
 * Description: function delete from given array [trainedFighters] elements which trainedPower is less than 2000 and add robot fighter if qualified fighters number is odd.
 * @param {array} trainedFighters - An array of fighters objects
 * @returns {array} - A new array containing the updated fighters after training
 */
function qualification(trainedFighters) {

   console.log("trainedFighters", typeof trainedFighters, trainedFighters);

   // Use map method to iterate over each fighter in the input array.
   let qualifiedFighters = trainedFighters.filter(fighter => {

      // console.log("fighter", typeof fighter, fighter);

      // Return the updated Object [fighter]
      if (fighter.trainedPower > 2000) {

         console.log(fighter.name, 'reached a trainedPower of ', fighter.trainedPower, 'which is enough to be qualified for combat phase!');

         return fighter;

      } else {

         console.log(fighter.name, 'reached a trainedPower of ', fighter.trainedPower, 'which is not enough to be qualified for combat phase!');
      }

   });


   console.log("qualifiedFighters", typeof qualifiedFighters, qualifiedFighters);

   return qualifiedFighters;

};