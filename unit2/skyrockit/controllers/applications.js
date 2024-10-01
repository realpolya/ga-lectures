import express from 'express';
const router = express.Router();

import User from '../models/user.js';

router.get('/', async (req, res) => {

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

// create new applications
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

// individual page for each application
router.get("/:appId", async (req, res) => {
    
    try {
        // look up the user 
        const user = await User.findById(req.session.user._id);

        // look up the application
        const application = user.applications.id(req.params.appId);

        // render the show view
        res.render('applications/show.ejs', { application });

    } catch(err) {
        
        console.log(err);
        res.redirect('/');

    }
    // res.send(`This is the id: ${req.params.appId}`)
})

// route for delete page
router.delete(("/:appId"), async (req, res) => {
    
    try {
        // look up the user 
        const user = await User.findById(req.session.user._id);

        // look up the application and delete
        const deletedApp = user.applications.id(req.params.appId);
        await user.applications.id(req.params.appId).deleteOne();
        console.log(deletedApp);

        // save the object in mongodb
        await user.save();

        // render the show view
        res.render('applications/deleted.ejs', { deletedApp });

    } catch(err) {
        
        console.log(err);
        res.redirect('/');

    }

})

// page for updating the app
router.get("/:appId/edit", async (req, res) => {
    
    try {
        // look up the user 
        const user = await User.findById(req.session.user._id);

        // look up the application
        const application = user.applications.id(req.params.appId);

        // render the show view
        res.render('applications/edit.ejs', { application });

    } catch(err) {
        
        console.log(err);
        res.redirect('/');

    }

});

export default router;