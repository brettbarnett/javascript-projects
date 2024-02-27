// create an array variable containing the names
let webLanguages = ["HTML", "CSS", "JavaScript", "PHP"];

console.log("Programming Languages For The Web: ");
// write a for loop that prints each name on a different line
for (let i = 0; i < webLanguages.length; i++) {
    console.log(`\t${webLanguages[i]}`);
}

console.log(`The maximum integer that can be represented by JavaScript is ${Number.MAX_VALUE}`);

//Infinite(Nearly) Loop
// for (let i = 0; i < Number.MAX_VALUE; i++) {
//     console.log(`Iteration ${i}`);
// }

let value = 1;
let total = 1;
for (let i = 0; i < 64; i++)
{
    console.log(`Iteration ${i}: ${value}\tTotal: ${total}`);   
    value = value + value;
    total = total + value;
}

console.log(total + 1);