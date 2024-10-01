import { config } from 'dotenv';
config();
import express, { urlencoded } from 'express';
const app = express();
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import morgan from 'morgan';
import session from 'express-session';

import { isSignedIn } from "./middleware/is-signed-in.js";
import { userToView } from './middleware/user-view.js';

import authController from './controllers/auth.js';
import appController from './controllers/applications.js';

const port = process.env.PORT ? process.env.PORT : '3000';

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.static('public')); // CSS file
app.use(urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// checking if user exists or it its null
app.use(userToView);

app.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect(`/users/${req.session.user._id}/applications`);
  } else {
    res.render('index.ejs');
  }
  // res.render('index.ejs', {
  //   user: req.session.user,
  // });
});

app.use('/auth', authController);

// make sure the person is signed in
app.use(isSignedIn);

// routes for application only for signed in user
app.use('/users/:userId/applications', appController);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});