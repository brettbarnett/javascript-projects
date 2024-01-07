// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let spaceShuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
const milesPerKilometer = 0.621;

console.log("Type of spaceShuttleName: " + typeof spaceShuttleName);
console.log("Type of shuttleSpeed: " + typeof shuttleSpeed);
console.log("Type of distanceToMars: " + typeof distanceToMars);
console.log("Type of distanceToMoon: " + typeof distanceToMoon);
console.log("Type of milesPerKilometer: " + typeof milesPerKilometer);

let milesToMars = distanceToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

console.log(spaceShuttleName, "will take", daysToMars, "days to reach Mars.");

let milesToMoon = distanceToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;

console.log(spaceShuttleName, "will take", daysToMoon, "days to reach the Moon.");