
// * Optional chaining (ES11)

{
    const person1 = {
        name: 'Arthur',
        job: {
            title: 'Software Developer',
            manager: {
                name: 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Judy',
    };

    // good
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }
}

// * Nullish coalescing operator (ES11)

{
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
        const name = 'Arthur';
        const userName = name || 'Guest';
        console.log(userName); // Arthur
    }

    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName); // Guest
    }

    // bad
    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName); // Guest
    }

    {
        const num = 0;
        const message = num || 'undefined';
        console.log(message); // undefined
    }

    // good
    // If the name doesn't have any values, use 'Guest'
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        // If the num doesn't have a number, use 'undefined'
        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }
}