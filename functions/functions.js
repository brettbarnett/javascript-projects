function makeLine(size) {
    return '#'.repeat(size);
}

function makeRectangle(width, height) {
    let rectangle = "";

    for (let x = 0; x < height; x++) {
        rectangle += makeLine(width) + "\n";
    }
    //Remove the newline character from the end of the string
    rectangle = rectangle.substring(0, rectangle.length - 1);

    return rectangle;
}

function makeSquare(size) {
    return makeRectangle(size, size);
}

function makeDownwardStairs(height) {
    let stairs = "";
    for (let x = 0; x < height; x++) {
        stairs += makeLine(x + 1) + "\n";
    }
    stairs = stairs.substring(0, stairs.length - 1);
    return stairs;
}

function makeSpaceLine(numSpaces, numChars) {
    let spaces = ' '.repeat(numSpaces);
    return spaces + makeLine(numChars) + spaces;
}

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = "";

    for (let x = 0; x < height; x++) {
        isoscelesTriangle += makeSpaceLine(height - x - 1, 2 * x + 1) + "\n";
    }

    return isoscelesTriangle.substring(0, isoscelesTriangle.length - 1);
}

function makeDiamond(height) {
    let diamond = "";
    for (let x = 0; x < height; x++) {
        diamond += makeSpaceLine(height - x - 1, 2 * x + 1) + "\n";
    }
    for (let x = height - 1; x >= 0; x--) {
        diamond += makeSpaceLine(height - x - 1, 2 * x + 1) + "\n";
    }
    return diamond.substring(0, diamond.length - 1);
}

//console.log(makeLine(5));
//console.log(makeSquare(5));
//console.log(makeRectangle(5, 3));
//console.log(makeDownwardStairs(5));
//console.log(makeSpaceLine(3, 5));
//console.log(makeIsoscelesTriangle(5));
console.log(makeDiamond(10));