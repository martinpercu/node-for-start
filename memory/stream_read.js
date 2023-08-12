const fs = require('fs');

let data = '';

let readableString = fs.createReadStream(__dirname + '/textfile.txt');
readableString.setEncoding('UTF8');

readableString.on('data', function(chunk) {
    console.log(chunk);
    console.log(chunk.toString()); // no need because setEncoding to UTF8.
    // If file is too big ====>
    data += chunk; 
    // Then with the next readableString.on('end') we can read all the chunks added in data.
    // This above is useful for REALLY BIG files. Otherwise just read the chunk.
    // (the chunk size depends on the memory system)
})

readableString.on('end', function() {
    console.log(data);
})

