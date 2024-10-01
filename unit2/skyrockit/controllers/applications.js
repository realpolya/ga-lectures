import express from 'express';
const router = express.Router();

import User from '../models/user.js';

router.get('/', (req, res) => {
    // res.send('Hello applications index route')
    try {
        res.render('applications/index.ejs');
    } catch (err) {
        console.error(err);
    }
})

export default router;