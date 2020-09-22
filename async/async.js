//async & await
// clear style of using promise

// 1. async
async function fetchUser() {
    // do network request in 10 secs...
    return 'arthur';
}

const user = fetchUser();
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    throw 'error';
    return 'Apple'
}

async function getBanana() {
    await delay(3000);
    return 'Banana'
}

async function pickFruits() {
    try {
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`
    } catch (error) {
        console.log(error);
    }

}

pickFruits().then(console.log);