import express from 'express';
import watchHistory from '../models/watchHistory';

const router = express.Router();

// 1. Mark a video as watched
router.post('/mark-watched', async (req, res) => {
  const { userId, videoId, title, subject } = req.body;

  try {
    // Upsert: Update if it exists, create if it doesn't
    const record = await WatchHistory.findOneAndUpdate(
      { userId, videoId },
      { title, subject, watchedAt: Date.now() },
      { upsert: true, new: true }
    );
    res.status(200).json({ success: true, data: record });
  } catch (error) {
    console.error("Tracking Error:", error);
    res.status(500).json({ success: false, error: "Failed to track video" });
  }
});

// 2. Get a user's entire watch history
router.get('/:userId', async (req, res) => {
  try {
    const history = await WatchHistory.find({ userId: req.params.userId });
    res.status(200).json({ success: true, data: history });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch history" });
  }
});

export default router;