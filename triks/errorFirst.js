function asyncAnyFunction(callback) {
    setTimeout(function () {
        try {
            let a = 23 + p;
            callback(null, a);
        } catch (e) {
            callback(e);
        } 
    }, 1200)
}

asyncAnyFunction(function (err, info) {
    if (err) {
        console.error('We have an error');
        console.error(err);
        // throw err;
        return false;        
    }
    console.log('All is OK. My info/data is ===> ', info);    
})

// above works fine!

// down will broke because is an async function (setTimeout)

try {
    asyncAnyFunction(function (err, info) {
        if (err) {
            throw err;    
        }
        console.log('All is OK. My info/data is ===> ', info);    
    })
} catch (e) {
    console.error ('we just captched the error');
    console.error(e);
}

// important!  ===> throw err NOT WORK with asynchronious functions

