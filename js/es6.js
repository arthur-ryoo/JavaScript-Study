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