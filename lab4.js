'use strict';

//номер 1
class Book {
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    show() {
        console.log(`${this.title}, цена: ${this.price}`);
    }
}

//номер 2
class BookWithValidation {
    #price;

    constructor(title, pubYear, price) {
        this.title = title;
        this._pubYear = pubYear;
        this.#price = price;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (value.trim() === '') throw new Error('Название не может быть пустым');
        this._title = value;
    }

    get pubYear() {
        return this._pubYear;
    }

    set pubYear(value) {
        if (value <= 0) throw new Error('Год издания должен быть положительным числом');
        this._pubYear = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value <= 0) throw new Error('Цена должна быть положительным числом');
        this.#price = value;
    }
}

//номер 3
class BookWithCompare extends BookWithValidation {
    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }
}

//номер 4
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    const symbols = Object.getOwnPropertySymbols(obj);
    if (symbols.length > 0) return false;
    return true;
}

//номер 5
function createClassManager(obj) {
    obj.addClass = function(cls) {
        const classes = this.className.split(' ');
        if (!classes.includes(cls)) {
            classes.push(cls);
            this.className = classes.join(' ');
        }
        return this;
    };
    obj.removeClass = function(cls) {
        const classes = this.className.split(' ');
        const index = classes.indexOf(cls);
        if (index !== -1) {
            classes.splice(index, 1);
            this.className = classes.join(' ');
        }
        return this;
    };
    return obj;
}

//номер 6
const jsonObj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: 10001
    }
};

//номер 7
function getSecondsToday() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - startOfDay) / 1000);
}

//номер 8
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}

const allBooks = [
    new Book('Капитанская дочка', 1836, 400),
    new Book('Руслан и Людмила', 1820, 600),
    new Book('Медный всадник', 1833, 550)
];

allBooks.sort((a, b) => a.pubYear - b.pubYear);
allBooks.forEach(book => {
    console.log(`${book.title}, ${book.pubYear} г., цена: ${book.price}`);
});