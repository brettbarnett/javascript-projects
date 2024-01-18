let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); //Turns a string into an array
console.log();
console.log(str.split('e'));//Uses 'e' as a separator when creating the array
console.log();
console.log(str.split(' '));//The same as above but instead splits on each empty space
console.log();
console.log(str.split(''));//Each character becomes an array item
console.log();

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());//Joins all of the array elements into a string, leaving the comma between each element
console.log();
console.log(arr.join('a'));//Same as above but uses 'a' as the separator
console.log();
console.log(arr.join(' '));//Puts an empty space between each element
console.log();
console.log(arr.join(''));//Joins all characters together without a separator
console.log();


//3) Do split or join change the original string/array?
console.log(str);//No change to the original string
console.log();
console.log(arr);//No change to the original array
console.log();

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoHoldArray = cargoHold.split(',');
let cargoHoldStringSortedCapitalized = cargoHoldArray.sort().join(',').toUpperCase();
console.log(cargoHoldStringSortedCapitalized);