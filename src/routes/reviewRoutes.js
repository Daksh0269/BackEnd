import express from 'express';
import { processReview } from '../controllers/reviewController.js';

const router = express.Router();
router.post('/submit', processReview);

export default router;