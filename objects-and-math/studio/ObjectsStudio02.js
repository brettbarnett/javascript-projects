// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  let circumference = Math.round(2 * Math.PI * radius);
  return circumference;
}
console.log(orbitCircumference(2000));

// Code your missionDuration function here:
function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000) {
  let time = (orbitsCompleted*orbitCircumference(orbitRadius))/orbitalSpeed;
  let hoursToComplete = Math.round((time * 100) / 100);
  orbitalSpeed = Math.round(orbitalSpeed);
  return hoursToComplete;
  //return `The mission will travel ${orbitalSpeed}km around the plant, and it will take ${hoursToComplete} hours to complete`;
}
console.log(missionDuration(5, 2000, 28000));

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array) {
  //Will return an int between 0 and the (array.length - 1);
  let randomItem = Math.floor(Math.random() * array.length);
  return array[randomItem];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate) {
  let duration = missionDuration(3, 2000, 28000);
  console.log("duration: " + duration);
  let oxygenUsed = Math.round(candidate.o2Used(duration) * 1000) / 1000;
  return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed}kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 let randomCandidate = selectRandomEntry(crew);
 console.log(oxygenExpended(randomCandidate));