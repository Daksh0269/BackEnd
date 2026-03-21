import express from 'express';
import QuestionBank from '../models/QuestionBank.js';
const router = express.Router();

router.post('/start', async (req, res) => {
  const { subject, chapter, count } = req.body;

  try {
    // 1. Fetch exactly what the student asked for from the static DB
    const questions = await QuestionBank.aggregate([
      { $match: { subject: subject, chapter: chapter } },
      { $sample: { size: count } } // Grabs 'count' number of random questions
    ]);

    if (questions.length === 0) {
      return res.status(404).json({ success: false, error: "No questions found for this chapter yet!" });
    }

    res.status(200).json({ success: true, data: questions });

  } catch (error) {
    console.error("Error fetching quiz:", error);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

export default router;