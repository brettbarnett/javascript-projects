// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!
  test("Should ouput Launch! when given a number only divisible by 2", function() {
    expect(launchcode.LaunchOutput(8)).toBe('Launch!');
  });
  test("Should ouput Code! when given a number only divisible by 3", function() {
    expect(launchcode.LaunchOutput(3)).toBe('Code!');
  });
  test("Should ouput Rocks! when given a number only divisible by 5", function() {
    expect(launchcode.LaunchOutput(25)).toBe('Rocks!');
  });
  test("Should ouput LaunchCode! when given a number divisible by 2 and 3", function() {
    expect(launchcode.LaunchOutput(6)).toBe('LaunchCode!');
  });
  test("The value for the organization key should be nonprofit",() => {
    expect(launchcode['organization']).toBe('nonprofit');
  });
  test("The value for the executiveDirector key should be 'Jeff'",() => {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });
  test("The value for the percentageCoolEmployees key should be 100",() => {
    expect(launchcode.percentageCoolEmployee).toBe(100);
  });
  test("The value for the programsOffered key should be ['Web Development', 'Data Analysis', 'LiftOff']",() => {
    expect(launchcode.programsOffered).toContain('Web Development');
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("LiftOff");
  });
});