import StudyProgress from '../models/Progress.js';
import { calculateNextReview } from '../utils/sm2.js';

export const processReview = async (req, res) => {
  try {
    const { userId, conceptId, quality } = req.body; 
    if (quality === undefined) return res.status(400).json({ error: "Quality score required" });

    let progress = await StudyProgress.findOne({ userId, conceptId });
    if (!progress) progress = { repetitions: 0, easeFactor: 2.5, interval: 0 };

    const newStats = calculateNextReview(quality, progress.repetitions, progress.easeFactor, progress.interval);
    
    const nextReviewDate = new Date();
    nextReviewDate.setDate(nextReviewDate.getDate() + newStats.newInterval);

    const updatedProgress = await StudyProgress.findOneAndUpdate(
      { userId, conceptId },
      { ...newStats, nextReviewDate, userId, conceptId },
      { upsert: true, new: true }
    );

    res.status(200).json({ success: true, data: updatedProgress });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};