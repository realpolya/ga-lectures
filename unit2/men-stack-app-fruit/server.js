import express from "express";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.listen(3000, () => {
    console.log("Listening at 3000");
})

app.get("/", async (req, res) => {
    res.render("index.ejs");
})

