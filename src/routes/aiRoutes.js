import express from 'express';
import { generateTopicGraph, generateQuiz, evaluateQuiz } from '../controllers/aiController.js';

const router = express.Router();

router.post('/generate', generateTopicGraph);
router.post('/quiz', generateQuiz);
router.post('/evaluate-quiz', evaluateQuiz); // <-- Your new evaluation route

export default router;