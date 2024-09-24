//import fs from 'node:fs';

const fs = require('node:fs/promises') //promises

// nested code is processed in the right progression
// callback functions are a way to do asynchronous JS
// fs.readFile('test.txt', 'utf8', (err, data) => {
//     console.log(data);
//     fs.readFile('test2.txt', 'utf8', (err2, data2) => {
//         console.log(data2);
//         fs.readFile('test3.txt', 'utf8', (err3, data3) => {
//             console.log(data3);
//         });
//     });
// });

// const readDataFiles = async () => {
//     const data = await fs.readFile('test.txt', 'utf8');
//     console.log(data);

//     const data2 = await fs.readFile('test2.txt', 'utf8');
//     console.log(data2);

//     const data3 = await fs.readFile('test3.txt', 'utf8');
//     console.log(data3);
// }

const readDataFiles = async () => {
    try {
        const data = await fs.readFile('test555.txt', 'utf8');
        const data2 = await fs.readFile('test2.txt', 'utf8');
        console.log(data);
        console.log(data2);

        const data3 = await fs.readFile('test3.txt', 'utf8');
        console.log(data3);

    } catch (error) {
        
        console.log("We are in error block")
        console.log(error)

    }
}

// SWAPI api call
const makeAPICall = async () => {
    // fetch("https://swapi.dev/api/people/2")
    //   .then((data) => data.json())
    //   .then((res) => console.log(res))
    //   .catch((err) => {})
    //   .finally
  
    const data = await fetch("https://swapi.dev/api/people/2");
    const res = await data.json();
    console.log(res);
};
  
readDataFiles();
makeAPICall();

console.log("Run this asap")

// fs.writeFile("./love.txt", "Here we go", () => {
//     console.log("File is written");
// })


// use of Promise.all
const fetchMultiple = async () => {
    try {

      const firstPromise = fetch("https://swapi.dev/api/people/2");
      const secondPromise = fetch("https://swapi.dev/api/people/1");
      const thirdPromise = fetch("https://swapi.dev/api/people/3");
      const responses = await Promise.all([firstPromise, secondPromise, thirdPromise]);

      const dataArr = await Promise.all(responses.map((res) => {
        return res.json();
      }));

      console.log(dataArr);

    } catch (error) {

      console.log(error);
      
    }
  };
  
fetchMultiple();
  



