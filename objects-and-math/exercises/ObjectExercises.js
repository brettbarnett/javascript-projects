let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let chimp = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};


// After you have created the other object literals, add the astronautID property to each one.
superChimpOne.astronautID = 1;
salamander.astronautID = 2;
chimp.astronautID = 3;
dog.astronautID = 4;
waterBear.astronautID = 5;

let moveFunction = function() {return Math.floor(Math.random() * 11)};
superChimpOne.move = moveFunction;
salamander.move = moveFunction;
chimp.move = moveFunction;
dog.move = moveFunction;
waterBear.move = moveFunction;

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, chimp, dog, waterBear];

// Print out the relevant information about each animal.
function crewReports(animalObject) {
   return `${animalObject.name} is a ${animalObject.species}. They are ${animalObject.age} years old and ${animalObject.mass} kilograms. Their ID is ${animalObject.astronautID}.`
}

for (let i = 0; i < crew.length; i++) {
   console.log(crewReports(crew[i]));
}

// Start an animal race!

function fitnessTest(animalArray) {
   let resultsArray = [];
   for (let i = 0; i < animalArray.length; i++) {
      let totalStepsTaken = 0;
      let totalTurnsToAchieveResult = 0;
      while (totalStepsTaken < 20) {
         totalTurnsToAchieveResult++;
         totalStepsTaken += animalArray[i].move();
         //console.log(`${animalArray[i].name}: ${totalStepsTaken}`);
      }
      resultsArray.push(`${animalArray[i].name} took ${totalTurnsToAchieveResult} turns to take 20 steps.`);
   }
   return resultsArray;
}

let raceResults = fitnessTest(crew);

for (let i = 0; i < raceResults.length; i++) {
   console.log(raceResults[i]);
}