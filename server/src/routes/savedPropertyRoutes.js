import express from 'express';
import { toggleSavedProperty, getSavedProperties } from '../controllers/savedPropertyController.js';

const router = express.Router();

router.post('/toggle', toggleSavedProperty);
router.get('/user/:userId', getSavedProperties);

export default router;
