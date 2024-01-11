// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 20000;
let crewStatus = true;
let computerStatus = 'green';

let fuelCheckResult = false;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelCheckResult = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelCheckResult = false;
}

//console.log("fuelCheckResult = ", fuelCheckResult);

if (fuelCheckResult && crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

//console.log("launchReady = ", launchReady);

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}