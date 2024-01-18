//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);
console.log();

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]); //Prints out the second array of the table
console.log();
console.log(table[1][1]); //Prints out the second element of the second array of the table
console.log();

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);
console.log();

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let tableThreeDimensions = ["Brett", "Barnett", ["Tech Support", "LaunchCode Student", ["HTML", "CSS", "JavaScript", "C#", "VB"]]];

console.log("My Three-Dimensional Array");
console.log(tableThreeDimensions);

console.log("First Name: " + tableThreeDimensions[0]);
console.log("Last Name: " + tableThreeDimensions[1]);
console.log("Day Job: " + tableThreeDimensions[2][0]);
console.log("Night Class: " + tableThreeDimensions[2][1]);
console.log("Programming languages used:");
console.log("\t" + tableThreeDimensions[2][2][0]);
console.log("\t" + tableThreeDimensions[2][2][1]);
console.log("\t" + tableThreeDimensions[2][2][2]);
console.log("\t" + tableThreeDimensions[2][2][3]);
console.log("\t" + tableThreeDimensions[2][2][4]);