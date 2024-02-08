const checkFive = require("../checkFive.js");

describe ("checkFive Tests", function() {
    test ("Correctly reports when a number is less than 5", function() {
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");
    });
    test ("Correctly reports when a number is equal to 5", function() {
        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });
    test ("Correctly reports when a number is greater than 5", function() {
        let output = checkFive(7);
        expect(output).toBe("7 is greater than 5.");
    });
});