/* --------------------------------Imports--------------------------------*/

import dotenv from 'dotenv';
dotenv.config();

import chalk from 'chalk';

import mongoose from 'mongoose';

/* --------------------------------Express & Mongoose--------------------------------*/

mongoose.set("returnOriginal", false);

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('disconnected', () => {
    console.log(chalk.bold("Disconnected from MongoDB"));
});
// TODO:
mongoose.connection.on('error', (err) => {
    console.log(chalk.red(`MongoDB connection error: ${err}`));
})

// FIXME:

/* --------------------------------Exports--------------------------------*/

export default mongoose.connection;