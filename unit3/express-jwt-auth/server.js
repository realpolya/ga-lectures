/* --------------------------------Imports--------------------------------*/
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import db from './db/connection.js'; // db = mongoose.connection
import chalk from 'chalk';

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