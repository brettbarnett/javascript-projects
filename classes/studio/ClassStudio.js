//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name = "", mass = 0, scores = []) {
      this.name = name;
      this.mass = mass;
      this.scores = scores;
    }
    addScore(newScore) {
      this.scores.push(newScore);
    }
    average() {
      let total = 0;
      this.scores.forEach((score) => (total += score));
      let average = total / this.scores.length;
      return Math.round(average * 10) / 10; //1 decimal place
    }
    status() {
      let averageScore = this.average();
      if (averageScore >= 90) {
        return "Accepted";
      } else if (averageScore >= 80) {
        return "Reserve";
      } else if (averageScore >= 70) {
        return "Probationary";
      } else {
        return "Rejected";
      }
    }
  }
  
  let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
  let dog = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
  let alligator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
  let animals = [bear, dog, alligator];
  
  //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
  animals.forEach((animal) => {
    console.log(`${animal.name} earned an average test score of ${animal.average()}% and has a status of ${animal.status()}.`);
  });
  
  //Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
  console.log(`${alligator.name} is going to keep trying until he can pass the test`);
  while (alligator.status() !== "Accepted") {
    let testScore = Math.floor(Math.random() * (100 - 80 + 1) + 80);
    alligator.addScore(testScore);
    console.log(`${alligator.name} scored ${testScore} on the last test and now his average is ${alligator.average()}%`);
  }
  