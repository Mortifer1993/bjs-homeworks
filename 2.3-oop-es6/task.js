'use strict'

/// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix(){
        let value = this._state * 1.5;
        this.state = value;
    }

    set state(value) { 
        if (value >= 100) {
            this._state = 100;
        }else if( value <= 0){
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(...rest) {
        super(...rest);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, ...rest) {
        super(...rest);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(...rest) {
        super(...rest);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(...rest) {
        super(...rest);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(...rest) {
        super(...rest);
        this.type = 'detective';
    }
}

// задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(item => item[type] === value) || null;
    }

    giveBookByName(bookName) {
       if (this.books.find(item => item.name === bookName)) {
           let bookDelete = this.books.splice(this.books.findIndex(item => item.name === bookName), 1);
        return bookDelete[0];
       }
       return null;
    }
}

