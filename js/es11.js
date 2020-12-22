
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