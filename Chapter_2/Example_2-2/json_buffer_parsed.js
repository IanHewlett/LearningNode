"use strict";

let buf = new Buffer('This is my pretty example');
let json = JSON.stringify(buf);

let buf2 = new Buffer(JSON.parse(json).data);

console.log(buf2.toString());
console.log(buf2.toString('ascii')); //can convert to other encodings if desired
console.log(buf2.toString('utf8', 11, 17));//can specify the start and end place in string conversion