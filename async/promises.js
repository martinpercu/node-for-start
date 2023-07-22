function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hello, '+ name);
            resolve(name);
        }, 800);
    });    
}

function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('blalbablalbla talking a lot');
            // resolve(name);
            reject('Broken here')
        }, 400)        
    })
}

function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Au Revoir, '+ name);
            resolve(name); 
        }, 800);
    })
}

// ---

console.log('startinthe the.....');

hello('Martin')
    // .then((name) => {
    //     return bye(name)
    // })
    .then(talk)
    .then(talk)
    .then(talk)
    .then(talk)
    .then(bye) // is the same as above but super clean
    .then(() => {
        setTimeout(() => {
            console.log('Finished the process')
        }, 1000)
    })
    .catch(error => {
        console.error('some issue somewhere');
        console.error(error);
        // or
        console.log(error);
    })



