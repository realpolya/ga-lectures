import express from 'express';
const router = express.Router();

import User from '../models/user.js';

router.get('/', async (req, res) => {
    // res.send('Hello applications index route')
    console.log(req.locals)
    try {
        //current user
        const user = await User.findById(req.session.user._id);
        // array of objects
        const applications = user.applications; // or Array.from?
        

        res.render('applications/index.ejs', { applications }) // how to get the user object

    } catch (err) {
        console.error(err);
    }
});

router.get('/new', (req, res) => {
    res.render('applications/new.ejs');
});

router.post('/', async (req, res) => {
    
    try {
        //look up the user
        const user = await User.findById(req.session.user._id);

        //push req.body to the applications array
        user.applications.push(req.body);

        //save changes to the database
        await user.save();

        //redirect to the applications view
        res.redirect(`/users/${user._id}/applications`);

    } catch (err) {
        
        console.log(err);
        res.redirect('/');

    }

})

export default router;