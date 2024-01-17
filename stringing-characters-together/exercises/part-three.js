//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let languageSlice = language.slice(0, 1) + language.slice(4, 5);
console.log(languageSlice);

//2. Without using slice(), use method chaining to accomplish the same thing.
let languageInitials = language.charAt(0) + language.charAt(4);
console.log(languageInitials);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let phrase = `The abbreviation for ${language} is ${languageInitials}.`;
console.log(phrase);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(phrase.toUpperCase().trim());

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let firstWord = notTitleCase.split(' ')[0];
let secondWord = notTitleCase.split(' ')[1];
firstWordUppercase = firstWord[0].toUpperCase() + firstWord.substring(1);
secondWordUppercase = secondWord[0].toUpperCase() + secondWord.substring(1);
let titleCase = firstWordUppercase + ' ' + secondWordUppercase;
console.log(titleCase);