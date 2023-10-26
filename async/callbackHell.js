function hello(name, myCallback) {
    setTimeout(function () {
        console.log('Hello, '+ name);
        myCallback(name);
    }, 800);
}

function talk(callbackTalk) {
    setTimeout(function() {
        console.log('blalbablalbla talking a lot');
        callbackTalk();
    }, 400)
}

function byebye(name) {
    setTimeout(function() {
        console.log('Au Revoir ByeBye, '+ name); 
    }, 800);
}

function talking(name, times, callback) {
    if (times > 0) {
        talk(function () {
            talking(name, --times, callback)
        })
    } else {
        callback(name);
    }    
}

// -- down a classic callBackHell
console.log('starting callbackhell');
hello('Peter', function(name) {
    talk(function () {
        talk(function () {
            talk(function () {
                byebye(name, function() {
                    console.log('Finishing process...');
                });
            });     
        });               
    });
});


// -- down a classic solution (check new funtion "talking")
console.log('starting no HELL.. again');
hello('Peter', function(name) {
    talking(name, 4, byebye);
})

