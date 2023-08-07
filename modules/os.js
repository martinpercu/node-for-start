const os = require('os');

console.log(os.arch());

console.log(os.platform());

console.log(os.cpus());

console.log(os.cpus().length);

console.log(os.constants);

const SIZE = 1024;
function kb(bytes) { return bytes/SIZE };
function mb(bytes) { return kb(bytes)/SIZE };
function gb(bytes) { return mb(bytes)/SIZE };

console.log(os.freemem()); // this is mem in bytes
console.log(kb(os.freemem())); // this is mem in kb
console.log(mb(os.freemem())); // this is mem in mb
console.log(gb(os.freemem())); // this is mem in gb

console.log(gb(os.totalmem())); // this is mem in gb


console.log(os.homedir());

console.log(os.tmpdir());

console.log(os.hostname());

console.log(os.networkInterfaces());