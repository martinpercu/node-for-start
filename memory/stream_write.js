const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableString = fs.createReadStream(__dirname + '/textfile.txt');

const Transform = stream.Transform; 
// above this create a transform stream it can read and write

function CapitalAll() {
    Transform.call(this)
}
util.inherits(CapitalAll, Transform);

CapitalAll.prototype._transform = function(chunk, codification, callBack) {
    chunkCapital = chunk.toString().toUpperCase();
    this.push(chunkCapital);
    callBack();
}

let capitalInfo = new CapitalAll;

readableString
    .pipe(capitalInfo)
    .pipe(process.stdout); // here is when we read the transformation.

