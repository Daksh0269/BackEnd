import express from 'express';
import { generateTopicGraph, evaluateQuiz } from '../controllers/aiController.js';

const router = express.Router();


router.post('/generate', generateTopicGraph);


router.post('/evaluate-quiz', evaluateQuiz);

router.post('/chat', handleTutorChat);

export default router;