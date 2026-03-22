import express from 'express';
import { getSubtitles } from 'youtube-captions-scraper'; // ⚡ Using the modern library
import VideoNote from '../models/VideoNote.js';
import { summarizeVideoTranscript } from '../services/aiAgent.js';

const router = express.Router();

// ⚡ Changed to /analyze to bypass AdBlockers
router.post('/analyze', async (req, res) => {
  const { userId, videoId, videoTitle } = req.body;

  try {
    let existingNote = await VideoNote.findOne({ userId, videoId });
    if (existingNote) {
      return res.status(200).json({ success: true, data: existingNote, message: "Loaded from cache" });
    }

    // Use the fallback loop for maximum compatibility
    const fallbackLanguages = ['en', 'hi', 'te', 'ta', 'mr', 'es', 'fr'];
    let captions = null;

    for (const lang of fallbackLanguages) {
      try {
        const result = await getSubtitles({ videoID: videoId, lang: lang });
        if (result && result.length > 0) {
          captions = result;
          break; 
        }
      } catch (err) { continue; }
    }

    if (!captions) return res.status(400).json({ success: false, error: "No captions found." });
    
    const fullText = captions.map(cap => cap.text).join(' ');
    const truncatedText = fullText.length > 15000 ? fullText.substring(0, 15000) + "..." : fullText;

    const aiNotes = await summarizeVideoTranscript(truncatedText);

    const newNote = new VideoNote({
      userId, videoId, videoTitle: videoTitle || "Lecture Video",
      summary: aiNotes.summary, keyTakeaways: aiNotes.keyTakeaways, formulas: aiNotes.formulas
    });

    await newNote.save();
    res.status(200).json({ success: true, data: newNote, message: "AI Notes Generated!" });

  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to process video." });
  }
});

router.get('/notes/:userId', async (req, res) => {
  try {
    const notes = await VideoNote.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: notes });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch notes" });
  }
});

export default router;