//La asincronia se puede generar mediante en setTimeout



// function soyAsync(callback) {
//     setTimeout(function(){
//     console.log("2 seconds and run me");
//     callback();
//     }, 2000)
// };

// console.log('starting ..');

// soyAsync(function() {
//     console.log("Después de esto demuestro que Soy el primer Callback")
// });


function hello(name, miCallback) {
    setTimeout(function () {
        console.log('Hello, '+ name);
        miCallback(name);
    }, 800);
}

function byebye(name, anotherCallback) {
    setTimeout(function() {
        console.log('Adios, '+ name); 
        // anotherCallback();
    }, 1500);
}

console.log('starting .. again');
// this is a basic callback. First hello() then byebye()
hello('Peter', function(name) {
    byebye(name, function() {
        console.log('Terminando proceso...');
    });
});



// hello('testing  "Hello" throwing function', function () {});
// byebye('testing "BYEBYE" throwing function', function () {});