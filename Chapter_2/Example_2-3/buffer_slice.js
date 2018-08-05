var buf1 = new Buffer('this is the way we build our buffer');
var lnth = buf1.length;

//create new buffer as slice of old
var buf2 = buf1.slice(19,lnth);
console.log(buf2.toString());//build our buffer

//modify second buffer
buf2.fill('*',0,5);
console.log(buf2.toString());//***** our buffer

//show impact on first buffer
console.log(buf1.toString());//this is the way we ***** our buffer

if(buf1.equals(buf2)) console.log('buffers are equal');
if(!buf1.equals(buf2)) console.log('buffers are not equal');

var buf1 = new Buffer('this is a new buffer with a string');

//copy buffer
var buf2 = new Buffer(10);
buf1.copy(buf2);

console.log(buf2.toString());//this is a

var buf1 = new Buffer('1 is number one');
var buf2 = new Buffer('2 is number two');

var buf3 = new Buffer(buf1.length);
buf1.copy(buf3);

console.log(buf1.compare(buf2));//-1
console.log(buf2.compare(buf1));//1
console.log(buf1.compare(buf3));//0