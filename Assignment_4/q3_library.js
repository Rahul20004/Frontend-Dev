// q3_library.js
"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} has been issued.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} has been returned.`);
    }
}

const books = [
    new Book("JavaScript Essentials", "Mark", "101"),
    new Book("Python Basics", "John", "102", true),
    new Book("Data Structures", "Rahul", "103")
];

console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b));

function issueByISBN(isbn) {
    const book = books.find(b => b.ISBN === isbn);
    if (book) book.issueBook();
    else console.log("No book found with ISBN", isbn);
}

issueByISBN("103");
