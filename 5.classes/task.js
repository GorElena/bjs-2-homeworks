// Задача 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
	this.name = name;
	this.releaseDate = releaseDate;
	this.pagesCount = pagesCount;
	this.state = 100;
	this.type = null;
	}

	get state() {
		return this._state;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	fix() {
	this.state = this.state * 1.5;
	return this.state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(...args) {
		super(...args);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author,...args) {
		super(...args);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "fantastic";
	}
}


class DetectiveBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "detective";
	}
}


//  Задача 2

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
		const item = this.books.find((book) => book[type] === value);
		if (!item) {
			return null;
		}

		return item;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1)[0];
			}
		}

		return null;
	}
}

// Пример использования:

const sherlock = new PrintEditionItem(
 "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
 2019,
 1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100



// Пример использования:
const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15


// Пример использования:
const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3