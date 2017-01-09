'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*Цикл let in выводит ключи масива*/
var browsers = ['chrome', 'firefox', 'edge', 'safari', 'opera'];

for (var browser in browsers) {
	console.log(browser);
}

for (var index in browsers) {
	console.log(browsers[index]);
}
/*-----------------------------------*/

/*Цикл for of выводит значения масива*/
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = browsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _browser = _step.value;

		console.log(_browser);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

console.log(browsers);
/*-----------------------------------*/

/*Objects*/
var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var person = {
	firstName: firstName,
	lastName: lastName,
	email: email,
	sayHello: function sayHello() {
		console.log('Hi, my name is ' + firstName + ' ' + lastName);
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
	var _ref;

	return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property, function () {
		return this[property];
	}), _ref;
}
console.log(createCar('vin', 1));
/*-----------------------------------*/

/*Class. Свойства класса указываются только в конструкторе*/

var Task = function () {
	function Task() {
		var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

		_classCallCheck(this, Task);

		this.title = title;
		this._done = false; //личное свойство пишется чере _
		Task.count += 1;
	}

	_createClass(Task, [{
		key: 'complete',
		value: function complete() {
			this.done = true;
			console.log('Task "' + this.title + '" was done');
		}

		//Static method

	}, {
		key: 'done',
		get: function get() {
			return this._done === true ? 'Done' : 'In progress';
		},
		set: function set(value) {
			if (value !== undefined && typeof value === 'boolean') {
				this._done = value;
			} else {
				console.error('Error!set property true or false');
			}
		}
	}], [{
		key: 'getDefaultTitle',
		value: function getDefaultTitle() {
			return 'Task';
		}
	}]);

	return Task;
}();

Task.count = 0;

var task = new Task('Clean the room');
task.complete();
/*-----------------------------------*/

/*Inharitance (наследование). Классы в ES6 не засоряют глобальное пространство имен*/

var D = function () {
	function D(title) {
		_classCallCheck(this, D);

		this._title = title;
		this.done = false;
		D.count += 1;
	}

	_createClass(D, [{
		key: 'complete',
		value: function complete() {
			this.done = true;
			console.log('D "' + this.title + ' was done"');
		}
	}, {
		key: 'title',
		get: function get() {
			return this._title;
		},
		set: function set(value) {
			this_title = value;
		}
	}], [{
		key: 'getDefaultTitle',
		value: function getDefaultTitle() {
			return 'D';
		}
	}]);

	return D;
}();

D.count = 0;

var SubD = function (_D) {
	_inherits(SubD, _D);

	function SubD(title, parent) {
		_classCallCheck(this, SubD);

		//Вызывает конструктор родительского класса, дожна быть первой строкой
		var _this = _possibleConstructorReturn(this, (SubD.__proto__ || Object.getPrototypeOf(SubD)).call(this, title));

		_this.parent = parent;
		return _this;
	}

	_createClass(SubD, [{
		key: 'complete',
		value: function complete() {
			_get(SubD.prototype.__proto__ || Object.getPrototypeOf(SubD.prototype), 'complete', this).call(this); //Вызывает метод родительского класса, дожна быть первой строкой
			console.log('SubD "' + this.title + ' was done"');
		}
	}]);

	return SubD;
}(D);

var d = new D('To learn JavaScript');
var subd = new SubD('To learn ES6', d);

console.log(SubD.getDefaultTitle());
console.log(SubD.count);

d.complete();
subd.complete();
/*-----------------------------------*/

/*Arrow functions (стрелочные функции). Стрелка должна идти после параметра*/
function add(x, y) {
	return x + y;
}
console.log(add(3, 7));

var add2 = function add2(x, y) {
	return x + y;
};
console.log(add2(3, 7));

var square = function square(x) {
	return x * x;
};
console.log(square(3));

var square2 = function square2(x) {
	return x * x;
};
console.log(square2(3));

var giveMeAnswer = function giveMeAnswer() {
	return 42;
};
console.log(giveMeAnswer());

var giveMeAnswer2 = function giveMeAnswer2() {
	return 42;
};
console.log(giveMeAnswer2());

var log = function log() {
	console.log('message');
};
log();

var log2 = function log2() {
	return console.log('message2');
};
log2();

var multiply = function multiply(x, y) {
	var res = x * y;
	return res;
};
console.log(multiply(123, 526));

//Если больше 2х строк ставятся {}
var multiply2 = function multiply2(x, y) {
	var res2 = x * y;
	return res2;
};
console.log(multiply2(123, 526));

var getPerson = function getPerson() {
	return { name: 'John' };
};
console.log(getPerson());

var getPerson2 = function getPerson2() {
	return { name: 'John' };
};
console.log(getPerson2());

// Самовызывающаяся функция
(function () {
	console.log('Immediately invogue function expression(IIFE) - Самовызывающаяся функция');
})();

(function () {
	return console.log('Immediately invogue function expression(IIFE) - Самовызывающаяся функция');
})();
//----------------------//

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;

numbers.forEach(function (num) {
	sum += num;
});
console.log(sum);

numbers.forEach(function (num) {
	return sum += num;
});
console.log(sum);

//map() переберает элементы массива и что-то с ними делает
var sq = numbers.map(function (n) {
	return n * n;
});
console.log(sq);
//----------------------//

var persona = {
	name: 'Bob',
	greet: function greet() {
		console.log('Hello, my name is ' + this.name);
		console.log(this);
	}
};
persona.greet();

var persona2 = {
	nm: 'John',
	greet: function greet() {
		var _this2 = this;

		window.setTimeout(function () {
			console.log('Hello, my name is ' + _this2.nm);
			console.log(_this2);
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

var js = 'JavaScript',
    php = 'PHP',
    python = 'Python',
    ruby = 'Ruby';

console.log(js, php, python, ruby);

var scores = [3, 4, [5, 6]];

var low = scores[0],
    mid = scores[1],
    _scores$ = _slicedToArray(scores[2], 2),
    high = _scores$[0],
    higher = _scores$[1];

function computeScore(_ref2) {
	var _ref3 = _slicedToArray(_ref2, 2),
	    low = _ref3[0],
	    mid = _ref3[1];

	console.log(low, mid);
}
computeScore([3, 4]);

function getScores() {
	return [3, 4, 5];
}

var scores2 = getScores();

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    low2 = _getScores2[0],
    mid2 = _getScores2[1],
    high2 = _getScores2[2];

console.log(low2, mid2, high2);
/*-----------------------------------*/

/*Деструктивное присваивание объектов*/
var per = {
	firstname: 'John',
	lastname: 'Doe'
};

// let firstname = per.firstname;
// let lastname = per.lastname;

// let {firstname, lastname} = per;
//console.log(firstname, lastname);

var _firstname$lastname = { firstname: 'John', lastname: 'Doe' },
    first = _firstname$lastname.firstname,
    last = _firstname$lastname.lastname,
    _firstname$lastname$a = _firstname$lastname.age,
    age = _firstname$lastname$a === undefined ? 25 : _firstname$lastname$a;

console.log(first, last, age);

var user = {
	frstname: 'Dead',
	lstname: 'Shot',
	social: {
		facebook: 'deadshot',
		twitter: 'deshot'
	}
};
var frstname = user.frstname,
    lstname = user.lstname,
    facebook = user.social.facebook;

console.log(frstname, lstname, facebook);

/*-----------------------------------*/

/*Promises*/
function applyForVisa(documents) {
	console.log('Waiting...');
	var promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			Math.random() > 0 ? resolve({}) : reject('Denied in visa...');
			var visa = {};
		}, 2000);
	});
	return promise;
}

function getVisa(visa) {
	console.info('Visa getting');
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			return resolve(visa);
		}, 2000);
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

applyForVisa({}).then(getVisa).then(bookHotel).then(buyTickets).catch(function (error) {
	return console.error(error);
});
/*-----------------------------------*/

/*Symbols. Каждый символ уникален.Не заносятся в уникальный реестр*/
var symbol = Symbol('name');
var symbol2 = Symbol('name');
console.log(symbol === symbol2); // false
/*-----------------------------------*/

/*Symbol.for. Заносятся в уникальный реестрю Не уникален*/
var symbol3 = Symbol.for('name');
var symbol4 = Symbol.for('name');
console.log(symbol3 === symbol4); // true

var us = _defineProperty({
	username: 'r2d2'
}, Symbol('password'), 'c3po');
console.log(us.password);
console.log(Object.keys(us));
/*-----------------------------------*/

/*Iterator*/
var xmen = ['Cyclops', 'Wolverine', 'Rogue'];

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = xmen[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var xman = _step2.value;

		console.log(xman);
	}
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

var iterator = xmen[Symbol.iterator]();

var next = iterator.next();

while (!next.done) {
	console.log(next.value);
	next = iterator.next();
}
/*-----------------------------------*/