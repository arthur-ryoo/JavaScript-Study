'use strict';

// Array

// 1. Delcaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// b. for of
for (const fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));