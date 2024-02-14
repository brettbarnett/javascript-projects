// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbnNumber, totalPages, totalCheckouts, discarded = false) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbnNumber = isbnNumber;
        this.totalPages = totalPages;
        this.totalCheckouts = totalCheckouts;
        this.discarded = discarded;
    }
    disposeBook() {
        this.discarded = true;
    }
    checkoutBook() {
        console.log(`Somebody is checking out ${this.title}`);
        this.totalCheckouts = this.totalCheckouts + 1;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbnNumber, totalPages, totalCheckouts, discarded = false) {
        super(title, author, copyrightDate, isbnNumber, totalPages, totalCheckouts, discarded = false);
    }
    disposeManual() {
        let currentYear = new Date().getFullYear();
        if ((currentYear - this.copyrightDate) >= 5) {
            //console.log(`Current Year: ${currentYear}`);
            //console.log(`This book is ${currentYear - this.copyrightDate} years old`);
            console.log(`${this.title} is at leat 5 years old so it can be disposed.`);
            this.disposeBook();
        }
        else {
            console.log(`${this.title} is too new to throw away!`);
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbnNumber, totalPages, totalCheckouts, discarded = false) {
        super(title, author, copyrightDate, isbnNumber, totalPages, totalCheckouts, discarded = false);
    }
    disposeNovel() {
        if (this.totalCheckouts > 100) {
            console.log(`${this.title} has gotten enough use. It can be thrown away.`);
            this.disposeBook();
        }
        else {
            console.log(`You can't throw away ${this.title}! Somebody else might want to read it.`);
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, false);
let shuttleBuildingManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, false);
//console.log(prideAndPrejudice);
//console.log(shuttleBuildingManual);

// Code exercises 4 & 5 here:
shuttleBuildingManual.disposeManual();
if (shuttleBuildingManual.discarded) {
    console.log("Shuttle Building Manual has been disposed");
}

for (let i = 0; i < 5; i++) {
    prideAndPrejudice.checkoutBook();
}
console.log("Price and Prejudice has been checked out " + prideAndPrejudice.totalCheckouts + " times");