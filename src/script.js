/*Цикл let in выводит ключи масива*/
let browsers = ['chrome', 'firefox', 'edge', 'safari', 'opera'];

for (let browser in browsers) {
	console.log(browser);
}

for (let index in browsers) {
	console.log(browsers[index]);
}
/*-----------------------------------*/

/*Цикл for of выводит значения масива*/
for (let browser of browsers) {
	console.log(browser);
}
console.log(browsers);
/*-----------------------------------*/

/*Objects*/
let firstName ='Bill',
		lastName = 'Gates',
		email = 'billgates@microsoft.com';

let person = {
	firstName,
	lastName,
	email,
	sayHello() {
		console.log(`Hi, my name is ${firstName} ${lastName}`);
	},
	get fullName() {
		return this.firstName + ' ' + this.lastName;
	},
	set fullName(value) {
		this.firstName = value;
	}

};

console.log(person);
person.sayHello();

function createCar(property, value) {
	return {
		[property]: value,
		['_' + property]: value,
		[property.toUpperCase()]: value,
		['get' + property]() {
			return this[property];
		}
	}
}
console.log(createCar('vin', 1));
/*-----------------------------------*/

/*Class. Свойства класса указываются только в конструкторе*/
class Task {
	constructor(title = Task.getDefaultTitle()) {
		this.title = title;
		this._done = false; //личное свойство пишется чере _
		Task.count += 1;
	}

	get done() {
		return this._done === true ? 'Done' : 'In progress';
	}

	set done(value) {
		if(value !== undefined && typeof value === 'boolean') {
			this._done = value
		} else {
			console.error('Error!set property true or false');
		}
	}

	complete() {
		this.done = true;
		console.log(`Task "${this.title}" was done`);
	}

	//Static method
	static getDefaultTitle() {
		return 'Task';
	}
}
Task.count = 0;

let task = new Task('Clean the room');
task.complete();
/*-----------------------------------*/


/*Inharitance (наследование). Классы в ES6 не засоряют глобальное пространство имен*/
class D {
	constructor(title) {
		this._title = title;
		this.done = false;
		D.count += 1;
	}

	complete() {
		this.done = true;
		console.log(`D "${this.title} was done"`);
	}

	get title() {
		return this._title;
	}

	set title(value) {
		this_title = value;
	}

	static getDefaultTitle() {
		return 'D';
	}
}

D.count = 0;

class SubD extends D {
	constructor(title, parent) {
		super(title); //Вызывает конструктор родительского класса, дожна быть первой строкой
		this.parent = parent;
	}

	complete() {
		super.complete(); //Вызывает метод родительского класса, дожна быть первой строкой
		console.log(`SubD "${this.title} was done"`);
	}
}

let d = new D('To learn JavaScript');
let subd = new SubD('To learn ES6', d);

console.log(SubD.getDefaultTitle());
console.log(SubD.count);

d.complete();
subd.complete();
/*-----------------------------------*/

/*Arrow functions (стрелочные функции). Стрелка должна идти после параметра*/
function add(x,y) {
	return x+y;
}
console.log(add(3,7));

let add2 = (x,y) => x+y;
console.log(add2(3,7));

let square = function(x) {
	return x*x;
}
console.log(square(3));

let square2 = (x) => x*x;
console.log(square2(3));

let giveMeAnswer = function() {
	return 42;
}
console.log(giveMeAnswer());

let giveMeAnswer2 = () => 42;
console.log(giveMeAnswer2());

let log = function() {
	console.log('message');
}
log();

let log2 = () => console.log('message2');
log2();

let multiply = function (x, y) {
	let res = x * y;
	return res;
}
console.log(multiply(123, 526));

//Если больше 2х строк ставятся {}
let multiply2 = (x, y) => {
	let res2 = x * y;
	return res2;
}
console.log(multiply2(123, 526));

let getPerson = function() {
	return { name: 'John' };
}
console.log(getPerson());

let getPerson2 = () => ({ name: 'John' });
console.log(getPerson2());

// Самовызывающаяся функция
(function() {
	console.log('Immediately invogue function expression(IIFE) - Самовызывающаяся функция');
})();

(() =>	console.log('Immediately invogue function expression(IIFE) - Самовызывающаяся функция'))();
//----------------------//

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach(function(num) {
	sum += num;
});
console.log(sum);

numbers.forEach(num => sum += num);
console.log(sum);

//map() переберает элементы массива и что-то с ними делает
let sq = numbers.map(n => n*n);
console.log(sq);
//----------------------//

let persona = {
	name: 'Bob',
	greet: function() {
		console.log('Hello, my name is ' + this.name);
		console.log(this);
	}
};
persona.greet();

let persona2 = {
	nm: 'John',
	greet: function () {
		window.setTimeout(() => {
			console.log('Hello, my name is ' + this.nm);
			console.log(this);
		}, 1000);
	}
};
persona2.greet();
/*-----------------------------------*/

/*Деструктивное присваивание массивов*/
// let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// let js = languages[0];
// let php = languages[1];
// let python = languages[2];
// let ruby = languages[3];

let [js, php, python, ruby] = ['JavaScript', 'PHP', 'Python', 'Ruby'];
console.log(js, php, python, ruby);

let scores = [3, 4, [5, 6]];
let [low, mid, [high, higher]] = scores;

function computeScore([low, mid]) {
	console.log(low, mid);
}
computeScore([3,4]);

function getScores() {
	return [3, 4, 5];
}

let scores2 = getScores();
let [low2, mid2, high2] = getScores();
console.log(low2, mid2, high2);
/*-----------------------------------*/

/*Деструктивное присваивание объектов*/
let per = {
	firstname: 'John',
	lastname: 'Doe'
}

// let firstname = per.firstname;
// let lastname = per.lastname;

// let {firstname, lastname} = per;
//console.log(firstname, lastname);

let {firstname: first, lastname: last, age = 25} = {firstname: 'John', lastname: 'Doe'};
console.log(first, last, age);

let user = {
	frstname: 'Dead',
	lstname: 'Shot',
	social: {
		facebook: 'deadshot',
		twitter: 'deshot'
	}
}
let {frstname, lstname, social: {facebook}} = user;
console.log(frstname, lstname, facebook);

/*-----------------------------------*/

/*Promises*/
function applyForVisa(documents) {
	console.log('Waiting...');
	let promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			Math.random() > 0 ? resolve({}) : reject('Denied in visa...')
			let visa = {};
		}, 2000);
	});
	return promise;
}

function getVisa(visa) {
	console.info('Visa getting');
	return new Promise(function(resolve, reject) {
			setTimeout(() => resolve(visa), 2000);
	});
}

function bookHotel(visa) {
	console.log(visa);
	console.log('Reserve hotel');
	return Promise.resolve(visa);
}

function buyTickets(booking) {
	console.log('Buy tickets');
	console.log(booking);
}

applyForVisa({})
	.then(getVisa)
	.then(bookHotel)
	.then(buyTickets)
	.catch(error => console.error(error));
/*-----------------------------------*/

/*Symbols. Каждый символ уникален.Не заносятся в уникальный реестр*/
let symbol = Symbol('name');
let symbol2 = Symbol('name');
console.log(symbol === symbol2); // false
/*-----------------------------------*/

/*Symbol.for. Заносятся в уникальный реестрю Не уникален*/
let symbol3 = Symbol.for('name');
let symbol4 = Symbol.for('name');
console.log(symbol3 === symbol4); // true

let us = {
	username: 'r2d2',
	[Symbol('password')]: 'c3po'
}
console.log(us.password);
console.log(Object.keys(us));
/*-----------------------------------*/

/*Iterator*/
let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

for (let xman of xmen) {
	console.log(xman);
}

let iterator = xmen[Symbol.iterator]();

let next = iterator.next();

while (!next.done) {
	console.log(next.value);
	next = iterator.next();
}
/*-----------------------------------*/

