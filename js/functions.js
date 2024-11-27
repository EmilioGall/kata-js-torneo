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

   // Function to get a random integer up to max (exclusive)
   const getRandomIndex = (max) => Math.floor(Math.random() * max);

   // Iterate over each fighter to assign a weapon
   shuffledFighters.forEach((fighter, i) => {

      // Create a new object to hold the fighter's details
      let fighterWithWeapon = { ...fighter };

      // console.log("fighterWithWeapon", typeof fighterWithWeapon, fighterWithWeapon);

      // Check if there are available weapons
      if (availableWeapons.length > 0) {

         // Pick a random index for the weapon
         const randomIndex = getRandomIndex(availableWeapons.length);

         // Get the random weapon 
         const selectedWeapon = availableWeapons[randomIndex];

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