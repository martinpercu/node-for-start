
console.time('All')

let short_time = 10000000;
let medium_time = 30000000;
let long_time = 80000000;

let adding = 0;
console.time('1st Round');
for (let i = 0; i < short_time; i++) {
    adding += 1;
}
console.timeEnd('1st Round');

let adding_2 = 0;
console.time('2nd Round');
for (let i = 0; i < long_time; i++) {
    adding_2 += 10000;
}
console.timeEnd('2nd Round');

console.time('ASYNC process');
asynFuntion()
    .then(() => {
        console.timeEnd('ASYNC process');
    });

console.timeEnd('All');

function asynFuntion() {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            adding_X = 0;
            for (let i = 0; i < medium_time; i++) {
                adding_X += 1;
            };
            console.log('Finished the ASYNC process');
            resolve();
        })
    } )
}

