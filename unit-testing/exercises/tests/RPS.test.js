const rockPaperScissors = require("../RPS.js");

describe("Rock Paper Scissors Test", function() {
    test("Should correctly identify a tie", function() {
        let playerOne = "rock";
        let playerTwo = "rock";
        let result = rockPaperScissors(playerOne, playerTwo);
        expect(result).toBe("TIE!");
    });
    test("Should correctly identify player 2 as the winner", function() {
        let playerOne = "rock";
        let playerTwo = "paper";
        let result = rockPaperScissors(playerOne, playerTwo);
        expect(result).toBe("Player 2 wins!");
    });
    test("Should correctly identify player 1 as the winner", function() {
        let playerOne = "scissors";
        let playerTwo = "paper";
        let result = rockPaperScissors(playerOne, playerTwo);
        expect(result).toBe("Player 1 wins!");
    });
    test("Should correctly identify player 2 as the winner", function() {
        let playerOne = "scissors";
        let playerTwo = "rock";
        let result = rockPaperScissors(playerOne, playerTwo);
        expect(result).toBe("Player 2 wins!");
    });
    test("Should correctly identify no winner", function() {
        let playerOne = "scissors";
        let playerTwo = "";
        let result = rockPaperScissors(playerOne, playerTwo);
        expect(result).toBe("Nobody is a winner!");
    });
    test("Should correctly identify no winner", function() {
        let playerOne = "scissors";
        let playerTwo = "chicken";
        let result = rockPaperScissors(playerOne, playerTwo);
        expect(result).toBe("Nobody is a winner!");
    });
});