import express from 'express';
import { generateTopicGraph, evaluateQuiz } from '../controllers/aiController.js';

const router = express.Router();

// The route that builds your Knowledge Graph
router.post('/generate', generateTopicGraph);

// The route that analyzes the student's performance after the NTA test
router.post('/evaluate-quiz', evaluateQuiz);

export default router;