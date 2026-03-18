import express from 'express';
import { saveGeneratedGraph } from '../controllers/graphController.js';

const router = express.Router();
router.get('/all', async (req, res) => {
  try {
    const concepts = await Concept.find();
    res.status(200).json({ success: true, data: concepts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
router.post('/save', saveGeneratedGraph);

export default router;