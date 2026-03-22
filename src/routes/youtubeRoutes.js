import express from 'express';
import { YoutubeTranscript } from 'youtube-transcript';
import VideoNote from '../models/VideoNote.js';
import { summarizeVideoTranscript } from '../services/aiAgent.js';

const router = express.Router();

router.post('/track', async (req, res) => {
  const { userId, videoId, videoTitle } = req.body;

  try {
    // 1. Check if we ALREADY summarized this video for this user
    let existingNote = await VideoNote.findOne({ userId, videoId });
    if (existingNote) {
      return res.status(200).json({ success: true, data: existingNote, message: "Loaded from cache" });
    }

    // 2. Fetch the transcript from YouTube
    const transcriptArray = await YoutubeTranscript.fetchTranscript(videoId);
    
    // Combine all the subtitle text into one massive string
    const fullText = transcriptArray.map(t => t.text).join(' ');

    // Prevent token overflow for massively long videos (limit to ~15,000 characters)
    const truncatedText = fullText.length > 15000 ? fullText.substring(0, 15000) + "..." : fullText;

    // 3. Send text to Gemini
    const aiNotes = await summarizeVideoTranscript(truncatedText);

    // 4. Save to Database
    const newNote = new VideoNote({
      userId,
      videoId,
      videoTitle: videoTitle || "Lecture Video",
      summary: aiNotes.summary,
      keyTakeaways: aiNotes.keyTakeaways,
      formulas: aiNotes.formulas
    });

    await newNote.save();

    res.status(200).json({ success: true, data: newNote, message: "AI Notes Generated!" });

  } catch (error) {
    console.error("YouTube Tracker Error:", error.message);
    res.status(500).json({ success: false, error: "Failed to process video. It might not have subtitles available." });
  }
});

// Route to fetch all notes for a user
router.get('/notes/:userId', async (req, res) => {
  try {
    const notes = await VideoNote.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: notes });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch notes" });
  }
});

export default router;