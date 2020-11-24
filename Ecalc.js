/*
* The EnergyCalc program implements an application that determines the maximum 
* possible amount of potenital energy stored in an objects molecular bonds.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-11-23 
* Class ECalc.
*/


// Imports readline to allow for user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// speed of light constant
const lightSpeedInVaccum = 2.998 * Math.pow(10, 8);

// input
rl.question('Input object mass (kg) : ', (mass) => {

  //process (Determines energy and kiloton bomb amount)
  var energy = mass * Math.pow(lightSpeedInVaccum, 2);
  var bombsnum = energy / (4 * Math.pow(10, 12));

  // outputs energy amount and kiloton bomb number
  console.log(`Potential energy (J): ${energy}`);
  console.log(`Energy in terms of kiloton nuclear bombs: ${bombsnum}`);

  rl.close();
});
