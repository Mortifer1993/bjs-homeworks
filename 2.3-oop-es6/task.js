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

// Задача 3

class StudentLog {
    constructor(nameStudent){
        this.nameStudent = nameStudent;
        this.lessons = [];
    }

    getName() {
        return this.nameStudent;
    }

    addGrade(grade, subject) {
        if(!(this.lessons.find(item => item[subject]))){
            this.lessons.push({[subject]:[]})
        }
        let value = this.lessons[this.lessons.findIndex(item => item[subject])][subject];
        if (grade > 0 && grade <= 5){
            value.push(grade)
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        }
        return value.length;
    }

    getAverageBySubject(subject) {
        let indexCurrentValue = this.lessons.findIndex(item => item[subject]);
        let currentValue = this.lessons[indexCurrentValue][subject];
        return currentValue.reduce((sum, current) => sum + current, 0) / currentValue.length || 0;
    }

    getTotalAverage() {
        let totalValue = 0;
        for(let value of this.lessons) {
            for (let arrValues of Object.keys(value)) {
                console.log(arrValues);

                totalValue += this.getAverageBySubject(arrValues);
              }
        }
         return totalValue / this.lessons.length;
    }

}

