console.log('say log');
console.info('say info');
console.error('say error');
console.warn('say warn');

var tableA = [
    {
        a: 3,
        b: 'RE',        
    },
    {
        a: 56,
        b: 'Sol'
    }
]

console.log(tableA);
console.table(tableA);

console.group('Talking Group');
console.log('hello');
console.log('hello John');
console.group('bla group');
console.log('Bla bla bla talking');
console.log('Bla bla bla talking');
console.log('Bla bla bla talking');
console.log('Bla bla bla talking');
console.groupEnd();
console.log('bye bye John');
console.log('bye bye');
console.groupEnd('\n');

console.log('\nSomething else\n\n\n')


function functionA() {
    console.group('function A');
    console.log('this is function A');
    console.log('this is  A');
    console.log('this is also A ');
    functionB();
    console.log('COME BACK to function A !!!');
    console.groupEnd('function A');
}

function functionB() {
    console.group('function B');
    console.log('Now is function B!!');
    console.log('FUNction  B');
    console.log('FUNction  B');
    console.groupEnd('function B');
}

console.log('start again checking the functions A & B')
functionA();


console.count('counting==> ')
console.count('XX counting==> ')
console.count('XX counting==> ')
console.count('counting==> ')
console.count('counting==> ')
console.countReset('counting==> ')
console.count('counting==> ')
console.count('counting==> ')
console.count('counting==> ')
console.count('counting==> ')
console.count('XX counting==> ')
console.count('XX counting==> ')
console.count('counting==> ')
console.count('counting==> ')
