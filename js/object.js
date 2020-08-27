// Objects
// One of the data types.
// A collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Literals and properties
const obj1 = {}; // 'object literal'
const obj2 = new Object(); // 'object constructor'
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const arthur = {
    name: 'arthur',
    age: 4
};

print(arthur);

// It's possible, but it's better to avoid doing it.
arthur.hasJob = true;
console.log(arthur.hasJob);

delete arthur.hasJob;
console.log(arthur.hasJob);


// 2. Computed properties
// Key should be always string
console.log(arthur.name);
console.log(arthur['name']);
arthur['hasJob'] = true;
console.log(arthur.hasJob);


function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(arthur, 'name');
printValue(arthur, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('judy', 30);
const person5 = new Person('arthur', 30);
console.log(person4);
console.log(person5);

function makePerson(name, age) {
    return {
        // name: name, 
        // age: age,
        name,
        age,
    }
}

// 4. Constructor function 
function Person(name, age) {
    this.name = name;
    this.age = age;
}