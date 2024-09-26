import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
//import { Fruit } from "./models/fruit.js";
import Fruit from "./models/fruit.js"; // default export
import favicon from "serve-favicon";

// initialize express
const app = express();


// host CSS file
app.use(favicon('public/favi.png'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


// use ejs
app.set('view engine', 'ejs');

// connect to mongoDB fruits collection
mongoose.connect(process.env.MONGODB_URI);

// check the connection
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
})

app.listen(3000, () => {
    console.log("Listening at 3000");
});

// get fruits/new
app.get("/", async (req, res) => {
    res.render("index");
});

app.get("/fruits", async (req, res) => {
    const allFruits = await Fruit.find();
    console.log(allFruits);
    res.render("fruits/list", { allFruits })    
})

app.get("/fruits/new", (req, res) => {
    res.render("fruits/new");
})

app.post("/fruits", async (req, res) => {
    // console.log(req.body);
    if(req.body.ripe === "on") {
        req.body.ripe = true;
    } else {
        req.body.ripe = false;
    }

    await Fruit.create(req.body);

    res.redirect("fruits");
});

