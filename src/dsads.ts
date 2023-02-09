// // // attacjes to window object if not using strict mode

// // console.log(this);

// // // here this is undefined inside regular functions.
// // // Becauae we are in strict mode. otherwise it would be the window object
// // const calcAge = function (birthYear) {
// // 	console.log(2037 - birthYear);
// // 	console.log(this);
// // };

// // // this refers to the window object in the context of arrow functions. a
// // // ka the global scope window is
// // const calcAgeArrow = (birthYear) => {
// // 	console.log(2037 - birthYear);
// // 	console.log(this);
// // };

// // calcAgeArrow(1980);

// // const jonas = {
// // 	firstName: 'Jonas',
// // 	year: 19981,

// // 	calcAge: function () {
// // 		console.log(this);
// // 		console.log(2037 - this.year);
// // 	},

// // 	greet: () => console.log(`hey ${this.firstName}`),
// // };

// //
// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
// 	name: 'James',
// 	age: 30,
// };
// const friend = me; // this creates a variable called friend and stores
// // the reference of the object which is stored in the heap and stpres that reference inside of itself

// friend.age = 27;
// console.log(friend);
// console.log(me);

// // const is only immutable for primitive values and not for reference valies.

// // object copy

// const jessica2 = {
// 	firstName: 'jessica',
// 	lastName: 'Williams',
// 	age: 27,
// 	family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2); // is only first level copy
// jessicaCopy.lastName = 'Davis';
// console.log('Before marriage', jessica2);
// console.log('After marriage:', jessicaCopy);
// jessicaCopy.family.push('Marry');
// jessicaCopy.family.push('John');

// console.log('Before marriage', jessica2);
// console.log('After marriage:', jessicaCopy);

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Anelo Tanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'brusha', 'Garlic', 'bread', 'salad'],
	mainMenu: ['pissa', 'pasta', 'rissato'],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
};

// old way of doing it pre es6
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a);
console.log(b);
console.log(c);

const [x, y, z] = arr; // this is array or object destructuing

console.log(x);
console.log(y);
console.log(z);

let [main, , secondary] = restaurant.categories; // holes
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, main] = restaurant.order(2, 0);
