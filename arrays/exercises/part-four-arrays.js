let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

console.log(`Contents of holdCabinet1:\n${holdCabinet1}`);
console.log();
console.log(`Contents of holdCabinet2:\n${holdCabinet2}`);
console.log();

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.
//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(`Result of using concat:\n${holdCabinet1.concat(holdCabinet2)}`);
console.log();
console.log(`Contents of holdCabinet1:\n${holdCabinet1}`);
console.log();

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(`Slice of holdCabinet1:\n${holdCabinet1.slice(0, 2)}`);
console.log();
console.log(`Contents of holdCabinet1:\n${holdCabinet1}`);
console.log();

console.log(`Slice of holdCabinet2:\n${holdCabinet2.slice(0, 2)}`);
console.log();
console.log(`Contents of holdCabinet2:\n${holdCabinet2}`);
console.log();

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(`Reverse holdCabinet1:\n${holdCabinet1.reverse()}`);
console.log();
console.log(`Sort holdCabinet2:\n${holdCabinet2.sort()}`);
console.log();
console.log(`Contents of holdCabinet1:\n${holdCabinet1}`);
console.log();
console.log(`Contents of holdCabinet2:\n${holdCabinet2}`);
console.log();
//Sort and reverse alter the original arrays