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

// 5. in operator: property existence check (key in obj)
console.log('name' in arthur);
console.log('age' in arthur);
console.log('random' in arthur); // return false
console.log(arthur.random); // return undefined

// 6. for..in vs for..of
// for (key in obj)

for (key in arthur) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'arthur', age: '20' };
const user2 = user;

// Old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign(user4, user);
console.log(user4);

// Another example
const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // the last object will overwrite value if the first object has the same key
console.log(mixed.color);
console.log(mixed.size);