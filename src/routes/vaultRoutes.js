import express from 'express';
import CuratedVideos from '../models/CuratedVideos.js';

const router = express.Router();

// Fetch all videos from the database
router.get('/', async (req, res) => {
  try {
    const videos = await CuratedVideos.find();
    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    console.error("Vault Error:", error);
    res.status(500).json({ success: false, error: "Failed to fetch video library" });
  }
});

export default router;