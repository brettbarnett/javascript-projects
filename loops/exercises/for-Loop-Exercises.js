/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//Part a
console.log("Part A Exercise");
for (let i = 0; i <= 20; i++) {
  console.log(i);
}
console.log();


//Part b
console.log("Part B Exercise");
for (let i = 3; i <= 29; i++) {
  if ((i % 2) !== 0) {
    console.log(i);
  }
}
console.log();

//Part c
console.log("Part C Exercise");
for (let i = 12; i >= -14; i--) {
  if ((i % 2) === 0) {
    console.log(i);
  }
}
console.log();

//Part d
console.log("Part D Exercise");
let highNumber = 50;
let lowNumber = 20;
for (let i = highNumber; i >= lowNumber; i--) {
  if ((i % 3) == 0) {
    console.log(i);
  }
}
console.log();

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 





/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

console.log("Exercise #2");
let launchCode = "LaunchCode";
let exercise2Array = [1, 5, 'LC101', 'blue', 42];
for (let i = 0; i < exercise2Array.length; i++) {
  console.log(exercise2Array[i]);
}
console.log();
for (let i = (launchCode.length - 1); i >= 0; i--) {
  console.log(launchCode[i]);
}
console.log();

console.log("Exercise #3");
let exercise3Array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evensArray = [];
let oddsArray = [];
for (let i = 0; i < exercise3Array.length; i++) {
  if ((exercise3Array[i] % 2) === 0) {
    //This is an even number
    evensArray.push(exercise3Array[i]);
  }
  else {
    //This is an odd number
    oddsArray.push(exercise3Array[i]);
  }
}
console.log(`Numbers being evaluated: ${exercise3Array}`);
console.log("These are the even numbers: ");
for (let i = 0 ; i < evensArray.length; i++) {
  console.log(`\t${evensArray[i]}`);
}
console.log("These are the odd numbers: ");
for (let i = 0 ; i < oddsArray.length; i++) {
  console.log(`\t${oddsArray[i]}`);
}