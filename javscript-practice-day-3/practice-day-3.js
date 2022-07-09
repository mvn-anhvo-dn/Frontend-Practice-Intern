// ------------------------------ QUESTION 1 ------------------------------------------------
// ES5
var MAX_SIZE = 25 * 1024 * 1024;
var title = 'Hello World';
title = 'Hello ES6'

// to ES6 -->
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6'


// ------------------------------ QUESTION 2 ------------------------------------------------
// ES5
var user = { name: 'David' };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + user.name + ",\n" +
    "want to buy " + card.amount + " " + card.product + " for\n" +
    "a total of " + (card.amount * card.unitprice) + " bucks?";

// to ES6 -->
const user = { name: 'David' };
const card = { amount: 7, product: "Bar", unitprice: 42 };
const message = `Hello ${user.name},\nwant to buy ${card.amount} ${card.product} for\na total of ${card.amount * card.unitprice} bucks?`;

// ------------------------------ QUESTION 3 ------------------------------------------------
// ES5
function foo(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
foo(1, 2, 'hello', true, 7) === 9;

// to ES6 -->
function foo(x, y) {
    const a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
foo(1, 2, 'hello', true, 7) === 9;

// ------------------------------ QUESTION 4 ------------------------------------------------
// ES5
function sum(x, y, z) {
    if (y === undefined) {
        y = 7;
    }
    if (z === undefined) {
        z = 42;
    }
    return x + y + z;
};

// to ES6 -->
function sum(x, y, z) {
    if (y === undefined) {
        y = 7;
    }
    if (z === undefined) {
        z = 42;
    }
    return x + y + z;
};

// ------------------------------ QUESTION 5 ------------------------------------------------
// ES5
var evens = [1, 2, 3, 4, 5, 6];
var odds = evens.map(function (v) { return v + 1; });
var pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
var nums = evens.map(function (v, i) { return v + i; });
var fives = [];
nums.forEach(function (v) {
    if (v % 5 === 0) {
        fives.push(v);
    }
});

// to ES6 -->
const evens = [1, 2, 3, 4, 5, 6];
const odds = evens.map(v => { return v + 1; });
const pairs = evens.map(v => { return { even: v, odd: v + 1 }; });
const nums = evens.map((v, i) => { return v + i; });
const fives = [];
nums.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});

// ------------------------------ QUESTION 6 ------------------------------------------------
// ES5
var Shape = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

// to ES6 -->
const Shape = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

// ------------------------------ QUESTION 7 ------------------------------------------------
// ES5
Utils = {};
Utils.sum = function (x, y) { return x + y };
Utils.pi = 3.141593;

var math = Utils;
console.log("2π = " + math.sum(math.pi, math.pi));

var sum = Utils.sum, pi = Utils.pi;
console.log('2π = ' + sum(pi, pi));

// to ES6 -->
Utils = {};
Utils.sum = (x, y) => { return x + y };
Utils.pi = 3.141593;
const math = Utils;
console.log(`2π = ${math.sum(math.pi, math.pi)}`);
const sum = Utils.sum, pi = Utils.pi;
console.log(`2π = ${sum(pi, pi)}`);

// ------------------------------ QUESTION 8 ------------------------------------------------
// ES5
function showMessAfterTimeout(msg, who, timeout, onDone) {
    setTimeout(function () {
        onDone(msg + ' Hi ' + who + '!');
    }, timeout);
}
showMessAfterTimeout('', 'Foo', 100, function (msg) {
    showMessAfterTimeout(msg, 'Bar', 200, function (msg) {
        console.log('Finish after 300ms:' + msg);
    });
});

// to ES6 -->
function showMessAfterTimeout(msg, who, timeout, onDone) {
    setTimeout(() => {
        onDone(`${msg} Hi ${who}!`);
    }, timeout);
}
showMessAfterTimeout('', 'Foo', 100, msg => {
    showMessAfterTimeout(msg, 'Bar', 200, msg => {
        console.log(`Finish after 300ms:${msg}`);
    });
});
