async function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hello, '+ name);
            resolve(name);
        }, 800);
    });    
}

async function talk() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('blalbablalbla talking a lot');
            resolve();
            // reject('Broken here')
        }, 400)        
    })
}

async function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Au Revoir, '+ name);
            resolve(name); 
        }, 800);
    })
}

async function main() {
    let name = await hello('Richard');
    await talk();
    await talk();
    talk(); // this one is not async. Will execute without waiting
    talk(); // this one is not async. Will execute without waiting
    talk(); // this one is not async. Will execute without waiting
    await talk();
    await talk();
    await bye(name); // needs to be get at some point ==> let name = (above)
    console.log('End of function here . . .');
}

console.log('Starting here (first intruction) . . .');
main();
console.log('This is the 2nd intruction.');
