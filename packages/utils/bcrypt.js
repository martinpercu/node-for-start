const bcrypt = require('bcrypt');

let password = '123456Pass!!';

bcrypt.hash(password, 5, function(err, hash) {
    console.log(bcrypt.hash);
    console.log(hash);

    bcrypt.compare(password, hash, function(err, result) {
        console.log(err);
        console.log(result);
    });

    bcrypt.compare('WrongPassword', hash, function(err, result) {
        console.log('wrongpassword');
        console.log(result);
    });
})