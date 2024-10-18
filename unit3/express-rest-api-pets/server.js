/* --------------------------------Imports--------------------------------*/
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import chalk from 'chalk';
import logger from 'morgan';
import db from './db/connection.js'; // db = mongoose.connection

/* --------------------------------Express & Mongoose--------------------------------*/

const app = express();
const PORT = process.env.port || 3000;
db.on('connected', () => {
    console.clear();
    console.log(chalk.blue(`Connected to MongoDB ${db.name}.`));

    app.listen(PORT, () => {
        console.log(chalk.green(`The express app is ready on port ${PORT}!`));
    });
});

/* --------------------------------Middleware--------------------------------*/

app.use(express.json());
app.use(logger('dev'));
app.use(express.static('public'));

/* --------------------------------Routes--------------------------------*/
