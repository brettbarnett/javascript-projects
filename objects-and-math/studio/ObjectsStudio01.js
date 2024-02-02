// Code your selectRandomEntry function here:
function selectRandomEntry(array) {
  //Will return an int between 0 and the (array.length - 1);
  let randomItem = Math.floor(Math.random() * array.length);
  return array[randomItem];
}

// Code your buildCrewArray function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

function buildCrewArray(randomIdsArray, candidatesArray) {
  let randomIds = [];
  while(randomIds.length < 3) {
    let randomId = selectRandomEntry(randomIdsArray);
    if (!randomIds.includes(randomId)) {
      randomIds.push(randomId);
    }
  }
  console.log(randomIds);
  let candidateNames = [];
  for (let i = 0; i < randomIds.length; i++) {
    let candidate = getCandidate(randomIds[i], candidatesArray);
    candidateNames.push(candidate.name);
  }
  return `${candidateNames[0]}, ${candidateNames[1]}, and ${candidateNames[2]} are going to space!`;
}

function getCandidate(astronautID, candidatesArray) {
  for (let i = 0; i < candidatesArray.length; i++) {
    if (candidatesArray[i].astronautID === astronautID){
      return candidatesArray[i];
    }
  }
}

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let crew = buildCrewArray(idNumbers, animals);
console.log(crew);

// Code your template literal and console.log statements:
