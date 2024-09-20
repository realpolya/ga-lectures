// import fs from 'fs';

const fs = require('fs');

// write file creates file
fs.writeFile('./hello.txt', 'hello, friend', () => {
    console.log("We did it!");
})