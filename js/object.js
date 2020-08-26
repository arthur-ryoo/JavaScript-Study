// Objects
// One of the data types.
// A collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

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