// * Shorthand property names

{
    const arthur1 = {
        name: 'Arthur',
        age: '18',
    };

    const name = 'Arthur';
    const age = '18';

    const arthur2 = {
        name: name,
        age: age,
    };

    const arthur3 = {
        name,
        age,
    };
}