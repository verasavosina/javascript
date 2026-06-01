console.log('ЗАДАНИЕ 1');

class Book {
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    show() {
        console.log(`Название: "${this.title}", Цена: ${this.price} руб.`);
    }
}

const book1 = new Book('Война и мир', 1869, 500);
book1.show();

console.log('\nЗАДАНИЕ 2');

class BookWithGettersSetters {
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
        if (typeof value !== 'string' || value.trim() === '') {
            console.error('Ошибка: title не может быть пустой строкой!');
            return;
        }
        this._title = value;
    }

    get pubYear() {
        return this._pubYear;
    }

    set pubYear(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.error('Ошибка: pubYear должно быть положительным числом!');
            return;
        }
        this._pubYear = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.error('Ошибка: price должно быть положительным числом!');
            return;
        }
        this.#price = value;
    }

    show() {
        console.log(`Название: "${this.title}", Год: ${this.pubYear}, Цена: ${this.price} руб.`);
    }
}

const book2 = new BookWithGettersSetters('Преступление и наказание', 1866, 450);
book2.show();

console.log('\nПопытка изменить title на пустую строку:');
book2.title = '';
console.log('\nПопытка изменить pubYear на отрицательное число:');
book2.pubYear = -100;
console.log('\nПопытка изменить price на отрицательное число:');
book2.price = -50;
console.log('\nКорректное изменение:');
book2.title = 'Идиот';
book2.pubYear = 1868;
book2.price = 600;
book2.show();

console.log('\nЗАДАНИЕ 3');

class BookWithCompare {
    #price;

    constructor(title, pubYear, price) {
        this.title = title;
        this._pubYear = pubYear;
        this.#price = price;
    }

    get title() { return this._title; }
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.error('Ошибка: title не может быть пустой строкой!');
            return;
        }
        this._title = value;
    }

    get pubYear() { return this._pubYear; }
    set pubYear(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.error('Ошибка: pubYear должно быть положительным числом!');
            return;
        }
        this._pubYear = value;
    }

    get price() { return this.#price; }
    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.error('Ошибка: price должно быть положительным числом!');
            return;
        }
        this.#price = value;
    }

    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }

    show() {
        console.log(`Название: "${this.title}", Год: ${this.pubYear}, Цена: ${this.price} руб.`);
    }
}

const books = [
    new BookWithCompare('Три товарища', 1936, 700),
    new BookWithCompare('Мастер и Маргарита', 1966, 550),
    new BookWithCompare('Собачье сердце', 1925, 400)
];

console.log('Исходный порядок книг:');
books.forEach(book => console.log(`  ${book.pubYear} - ${book.title}`));

books.sort(BookWithCompare.compare);

console.log('\nОтсортировано по году публикации:');
books.forEach(book => console.log(`  ${book.pubYear} - ${book.title}`));

console.log('\nЗАДАНИЕ 4');

function isEmpty(obj) {
    for (let key of Object.getOwnPropertyNames(obj)) {
        return false;
    }
    for (let sym of Object.getOwnPropertySymbols(obj)) {
        return false;
    }
    return true;
}

const obj4a = {};
const obj4b = { [Symbol()]: true };
const obj4c = Object.defineProperty({}, 'name', { value: 'John' });

console.log(`isEmpty({}) = ${isEmpty(obj4a)}`);  
console.log(`isEmpty({[Symbol()]: true}) = ${isEmpty(obj4b)}`);
console.log(`isEmpty(property 'name') = ${isEmpty(obj4c)}`); 

console.log('\nЗАДАНИЕ 5');

let obj5 = {
    className: 'open menu'
};

obj5.addClass = function(cls) {
    const classes = this.className ? this.className.split(' ') : [];
    if (!classes.includes(cls)) {
        classes.push(cls);
        this.className = classes.join(' ');
    }
    return this;
};

obj5.removeClass = function(cls) {
    const classes = this.className ? this.className.split(' ') : [];
    const index = classes.indexOf(cls);
    if (index !== -1) {
        classes.splice(index, 1);
        this.className = classes.join(' ');
    }
    return this;
};

console.log('Исходный объект:', obj5);
obj5.addClass('menu').addClass('new').addClass('open');
console.log('После addClass("menu"), addClass("new"), addClass("open"):', obj5.className);
obj5.removeClass('open').removeClass('menu');
console.log('После removeClass("open"), removeClass("menu"):', obj5.className);

console.log('\nЗАДАНИЕ 6');

const obj6 = {
    name: 'Книга',
    author: {
        firstName: 'Лев',
        lastName: 'Толстой'
    },
    year: 1869
};

const jsonString = JSON.stringify(obj6, null, 2);
console.log('JSON строка:');
console.log(jsonString);

const obj6_2 = JSON.parse(jsonString);

console.log('\nРавенство объектов:', JSON.stringify(obj6) === JSON.stringify(obj6_2));

console.log('\nЗАДАНИЕ 7');

function getSecondsToday() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - startOfDay) / 1000);
}

console.log(`Секунд с начала сегодняшнего дня: ${getSecondsToday()}`);

console.log('\nЗАДАНИЕ 8');

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}

const testDate = new Date(2024, 4, 25); 
console.log(`formatDate(25.05.2024) = ${formatDate(testDate)}`);
console.log(`formatDate(текущая дата) = ${formatDate(new Date())}`);
