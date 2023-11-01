function otherFunction() {
    willbroke();
}

function willbroke() {
    return 56 + z;
}

// function asyncWillBroke() {
//     setTimeout(function() {
//         return 25 + z;
//     })
// }

function asyncWillBroke(callBack) {
    setTimeout(function() {
        try {
            return 25 + z;
        } catch(errors) {
            console.error('error in the async function');
            // console.error('\nthe error.message===>  ' + errors.message);
            callBack(errors);
        }
        
    })
}


try {
    // otherFunction();
    asyncWillBroke(function (error) {
        console.log('there is an error');
        console.error('\nthe error.message===>  ' + error.message + '\n\n');
        console.log(error);
    });
} catch(err) {
    console.error('something broken ');
    console.error(err); // this one is all the error catched
    console.error('\nthe error.message===>  ' + err.message + '\n'); // this is just where Reference error
    console.log('is ok because is catched');
}

console.log('THE LAST LINE OF CODE ! ! ! ! !');
