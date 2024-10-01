import express from 'express';
const router = express.Router();

import User from '../models/user.js';

router.get('/', (req, res) => {
    // res.send('Hello applications index route')
    console.log(req.locals)
    try {
        res.render('applications/index.ejs') // how to get the user object
    } catch (err) {
        console.error(err);
    }
})

export default router;