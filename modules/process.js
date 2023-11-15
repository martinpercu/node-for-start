// const process = required('process');

process.on('exit', () => {
    console.log('the process just finished');
    setTimeout(() => {
        console.log('This NOT show because is on exit');
    }, 0);
});

process.on('beforeExit', () => {
    console.log('the process will finish in next step');
});

process.on('uncaughtException', (err, origin) => {
    console.log('\n In the uncaughtException.\nThis catch a forget error.\nBUT\nif there are more than 1 error we cannot know it.');
    console.error('\nWe Forget catch an error');
    console.error('This is the error ===>\n' + err);
    setTimeout(() => {
        console.log('This is in uncaughtException. Should be see it after 3 sec');
    }, 3000);
});


setTimeout(() => {
    console.log('This should be see it after 5 sec');
}, 5000);

functionNotExist();
functionNotExistA();
functionNotExistSD();

setTimeout(() => {
    console.log('This must NOT be see it because if after the functionNotExist()');
}, 0);


console.log('If not get the error this message not appear');


process.on('exit', () => {
    console.log('the proces just finished');
    setTimeout(() => {
        console.log('This is outside event loop==> never show');
    }, 0);
});
