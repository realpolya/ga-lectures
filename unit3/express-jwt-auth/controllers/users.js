import { Router } from 'express';
const router = Router();
import bcrypt from 'bcrypt';
import User from '../models/user.js';

const SALT = 12;

router.post('/sign-up', async (req, res) => {
    
    try {
        
        let user = await User.findOne({ username: req.body.username });
        console.log(user);
        if (user) {
            return res.status(400).json({ error: 'Username taken' });
        }

        user = await User.create({
            username: req.body.username,
            hashedPassword: bcrypt.hashSync(req.body.password, SALT)
        })
        res.status(201).json({ user });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/sign-in', async (req, res) => {

    try {

        let user = await User.findOne({ username: req.body.username });
        let passwordInput = req.body.password;
        if (!user || !bcrypt.compareSync(passwordInput, user.hashedPassword)) {
            return res.status(400).json({ error: 'Invalid login' });
        }

        return res.status(200).json({ message: "You are signed in!"});

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

})

export default router;