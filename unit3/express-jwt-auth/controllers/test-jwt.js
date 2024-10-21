// controllers/test-jwt.js

import { Router } from 'express';
const router = Router();

router.get('/sign-token', (req, res) => {
  res.json({ message: 'You are authorized!' });
});

export default router;