const fs = require('fs');

function read(path, cb) {
    fs.readFile(path, (error, data) => {
        // already read
        console.log(data.toString());
    })
}

function write(path, content, cb) {
    fs.writeFile(path, content, (error) => {
        if (error) {
            console.log('error here Cannot write it', error);
        } else {
            console.log('Write ok');
        }
    })
}

function deleteFile(path, cb) {
    fs.unlink(path, (error) => {
        if (error) {
            console.log('Error. CANNOT delete file', error);
        } else {
            console.log('Delete file ok');
        }
    })
}


read(__dirname + '/fileTest.txt');
deleteFile(__dirname + '/fileTest-2.txt', console.log());
write(__dirname + '/fileTest-2.txt', 'Hello I\'m a new file \n\nGOOOOl', console.log());
