//example--1
const {readFile}= require('fs');

console.log('started a fisrt task');

//Check file path
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    console.log(err);

    console.log(result);
    console.log('completed first task');
});
console.log('started next task');
// readfile is async and event loop will offload this

example--2
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);

console.log('third');

// example---3
setInterval(() => {
    console.log('hello world');
}, 2000);
console.log('I will run first');
//process stays alive unless kill process ctrl+c
// unexpected error

//example---4
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('request event');
    res.end('hello world !')
})
server.listen(5000,()=>{
    console.log('server is running on port 5000');
})