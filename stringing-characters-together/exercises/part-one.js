let num = 1001.55;
let numStr = String(num);

//Returns 'undefined'.
//console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
//let numStr = String(num);
//console.log(`${numStr} has ${numStr.length} characters`);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
//let decimal = 100.50;
//let decimalStr = String(decimal);
//console.log(`${decimalStr} has ${decimalStr.length - 1} digits`);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (numStr.indexOf('.') > -1)
{
    console.log(`${numStr} contains ${numStr.length - 1} digits`);
}
else
{
    console.log(`${numStr} contains ${numStr.length} digits`);
}
