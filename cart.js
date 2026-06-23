class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Added: "${book.title}"`);
    }

    borrowBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book && book.available) {
            book.available = false;
            console.log(`Successfully borrowed: "${title}"`);
        } else if (book && !book.available) {
            console.log(`Sorry, "${title}" is already borrowed.`);
        } else {
            console.log(`"${title}" not found in library.`);
        }
    }

    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            book.available = true;
            console.log(`Successfully returned: "${title}"`);
        } else {
            console.log(`"${title}" does not belong to this library.`);
        }
    }

    listAvailableBooks() {
        console.log("--- Available Books ---");
        const available = this.books.filter(b => b.available);
        if (available.length === 0) {
            console.log("No books available.");
        } else {
            available.forEach(b => console.log(`• ${b.title} by ${b.author} (${b.year})`));
        }
    }
}

// Test Run
const myLibrary = new Library();
myLibrary.addBook(new Book("Things Fall Apart", "Chinua Achebe", 1958));
myLibrary.addBook(new Book("Half of a Yellow Sun", "Chimamanda Adichie", 2006));
myLibrary.listAvailableBooks();
myLibrary.borrowBook("Things Fall Apart");
myLibrary.listAvailableBooks();
myLibrary.returnBook("Things Fall Apart");
myLibrary.listAvailableBooks();
