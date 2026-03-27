import express from 'express';
import jwt from 'jsonwebtoken';
import { register, login, getMe, updateProfile } from '../controllers/authController.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'sahirasta_secret_heritage_key';

// Middleware to verify token
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, getMe);
router.put('/profile', auth, updateProfile);

export default router;
