// import fs from 'fs';

const fs = require('fs');

// write file creates file
fs.writeFile('./hello.txt', 'hello, friend', () => {
    console.log("We did it!");
})

const validator = require('validator');

console.log("email test: ", validator.isEmail('realpolya@gmail.com'));
console.log("email test: ", validator.isEmail("love"));

console.log("uppercase test: ", validator.isUppercase('hello'));
console.log("uppercase test: ", validator.isUppercase('WONDER'));
