import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import morgan from "morgan";

// initialize express
const app = express();

// if there is no environment variable, set it to 3000
const PORT = process.env.PORT ? process.env.PORT : "3000"; // ternary statement

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });

// middleware
// first allows to parse URL-encoded data from forms
app.use(express.static('public')); // CSS file
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`The express app is ready on port ${PORT}!`);
})