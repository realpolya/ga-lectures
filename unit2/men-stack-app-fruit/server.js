import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

const app = express();

// connect to mongoDB fruits collection
mongoose.connect(process.env.MONGODB_URI);

// check the connection
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
})

app.listen(3000, () => {
    console.log("Listening at 3000");
});

app.get("/", async (req, res) => {
    res.render("index.ejs");
});


