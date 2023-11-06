const myAddon = require('./build/Release/addon');

console.log('This is what we have in myAddon');
console.log(myAddon);

console.log('\nThis is the function hello() in myAddon');

console.log(myAddon.hello());
