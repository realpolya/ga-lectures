import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import morgan from "morgan";
import User from "./models/user.js";
import authController from "./controllers/auth.js";

// initialize express
const app = express();

// if there is no environment variable, set it to 3000
const PORT = process.env.PORT ? process.env.PORT : "3000"; // ternary statement

// mongoose connect
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// middleware
const middleware = () => {
  app.use(express.static('public')); // CSS file
  // first allows to parse URL-encoded data from forms
  app.use(express.urlencoded({ extended: false }));
  app.use(methodOverride("_method"));
  app.use(morgan('dev'));

  // routes to authenticate
  app.use("/auth", authController);
}
middleware();

// use ejs
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
})

app.get("/", (req, res) => {
  res.render("index");
})