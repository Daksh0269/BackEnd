import express from 'express';
import Flashcard from '../models/Flashcard.js'; 
import { calculateCustomRevision } from '../utils/sm2.js'; // <-- Fixed Import!

const router = express.Router();

router.post('/submit-batch', async (req, res) => {
  const { reviews } = req.body; 

  try {
    const updatePromises = reviews.map(async (review) => {
      // 1. Check if this exact flashcard already exists for this user
      let card = await Flashcard.findOne({ 
        userId: review.userId, 
        questionText: review.questionText 
      });

      // 2. If it's brand new, initialize it
      if (!card) {
        card = new Flashcard({
          userId: review.userId,
          subject: review.subject,
          chapter: review.chapter,
          subConcept: review.subConcept,
          questionText: review.questionText,
          options: review.options,
          correctIndex: review.correctIndex,
          stepByStepSolution: review.stepByStepSolution,
        });
      }

      // 3. Run YOUR Custom 10-day / 7-day Algorithm
      const { interval, nextReviewDate } = calculateCustomRevision(review.isCorrect);

      // 4. Update the card and save it back to MongoDB
      card.interval = interval;
      card.nextReviewDate = nextReviewDate;
      // If they got it right, maybe upgrade status to Mastered
      card.status = review.isCorrect ? 'Mastered' : 'Reviewing';

      return card.save();
    });

    // Wait for all database updates to finish
    await Promise.all(updatePromises);

    res.status(200).json({ success: true, message: "Spaced repetition scheduled successfully!" });

  } catch (error) {
    console.error("Error saving review batch:", error);
    res.status(500).json({ success: false, error: "Failed to update progress." });
  }
});

// A route to fetch today's due questions
router.get('/due/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Find all cards where nextReviewDate is less than or equal to RIGHT NOW
    const dueCards = await Flashcard.find({
      userId: userId,
      nextReviewDate: { $lte: new Date() }
    });

    res.status(200).json({ success: true, data: dueCards });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch due questions." });
  }
});
// Fetch ALL flashcards for a specific user to populate the Dashboard
router.get('/all/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Fetch all cards and sort them by review date (soonest first)
    const allCards = await Flashcard.find({ userId: userId }).sort({ nextReviewDate: 1 });

    res.status(200).json({ success: true, data: allCards });
  } catch (error) {
    console.error("Error fetching all cards:", error);
    res.status(500).json({ success: false, error: "Failed to fetch student progress." });
  }
});

export default router;