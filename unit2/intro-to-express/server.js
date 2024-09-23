/* import express

old version:
const express = require('express') 
*/

import express from "express";
import morgan from "morgan";

// create an express app
const app = express()

app.use(morgan('dev'));

// middleware
app.use((req, res, next) => {
    console.log("Middleware1 logging");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware2");
    next();
});

//console.log(app)

/* TO REACH: localhost:3000

set event listener for server
app.listen(arg1, arg2)
arg1 = port
arg2 = callback function
*/
app.listen(3000, () => {
    console.log("Listening on port 3000!!");
});

// request and response objects
app.get("/", (req, res) => {
    res.send('<h1>Hello world!</h1><br><h2>Wonderful</h2>')
})

// request and response objects
app.get("/home", (req, res) => {
    res.send('<h1 style="color: mediumseagreen; font-size: 3rem; text-decoration: underline; margin: auto; text-align: center;">Home page</h1>');
    console.log("Reached home");
})

app.get("/:item/:name", (req, res) => {
    res.send(`<h1 style="color: mediumseagreen; font-size: 3rem; 
        text-decoration: underline; margin: auto; text-align: center;">
        Number is ${req.params.item}</h1><br><h2>Hello, ${req.params.name}</h2>`)

    console.log(req.params);
})

// ?param=something&param=something
// http://localhost:3000/hello?name=Polya&age=27
app.get("/hello", (req, res) => {

    //accessing query parameters
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Hello, ${name}, you are ${age} years old`);

})
