// * Shorthand property names

{
    const arthur1 = {
        name: 'Arthur',
        age: '18',
    };

    const name = 'Arthur';
    const age = '18';

    // bad
    const arthur2 = {
        name: name,
        age: age,
    };
    // good 
    const arthur3 = {
        name,
        age,
    };
}

// * Destruncturing Assignment

{
    // object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // bad
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // good
    {
        const { name, level } = student;
        console.log(name, level);

        // Assigning new name
        const { name: studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }

    // array
    const animals = ['dog', 'cat'];

    // bad
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // good
    {
        const [first, second] = animals;
        console.log(first, second);
    }

}


// * Spread syntax
// If you change the value of the original array, the copied arrays will have the changed value as well.
{
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, { key: 'key3' }];
    console.log(arrayCopy2);

    // object copy 
    const obj3 = { ...obj1 };
    console.log(obj3);

    // array concatenation
    const fruits1 = ['a', 'b'];
    const fruits2 = ['c', 'd'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = { dog1: 'puppy' };
    const dog2 = { dog2: 'dog' };
    const dog = { ...dog1, ...dog2 };
    console.log(dog);
}

// * Default parameters

{
    // bad
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage(); // default message
    }

    // good
    {
        function printMessage(message = 'default message') {
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
}

// Ternary operator

{
    const isCat = true;

    // bad
    {
        let component;
        if (isCat) {
            component = 'cat';
        } else {
            component = 'dog';
        }
        console.log(component);
    }

    // good
    const component = isCat ? 'cat' : 'dog';
    console.log(component);
    console.log(isCat ? 'cat' : 'dog');
}