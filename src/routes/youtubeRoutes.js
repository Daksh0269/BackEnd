import express from 'express';
import { getSubtitles } from 'youtube-captions-scraper'; 
import VideoNote from '../models/VideoNote.js';
import { summarizeVideoTranscript } from '../services/aiAgent.js';

const router = express.Router();

router.post('/analyze', async (req, res) => {
  const { userId, videoId, videoTitle } = req.body;

  try {
    console.log(`\n▶️ Starting Analysis for Video ID: ${videoId}`);
    
    let existingNote = await VideoNote.findOne({ userId, videoId });
    if (existingNote) {
      console.log("✅ Found existing notes in database!");
      return res.status(200).json({ success: true, data: existingNote, message: "Loaded from cache" });
    }

    const fallbackLanguages = [
      'en', 'hi', 'te', 'ta', 'mr', 'ur', 'bn', 'gu', 'kn', 'ml', 
      'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ru', 'pt', 'ar', 'id'
    ];
    
    let captions = null;
    let detectedLanguage = 'unknown';

    console.log("🔍 Hunting for subtitles...");
    for (const lang of fallbackLanguages) {
      try {
        const result = await getSubtitles({ videoID: videoId, lang: lang });
        
        // ⚡ THE FIX: Ensure the track actually has text before stopping the search!
        if (result && result.length > 0) {
          captions = result;
          detectedLanguage = lang;
          console.log(`✅ Extracted ${result.length} lines of text in language: [${lang}]`);
          break; 
        }
      } catch (err) {
        // Silently skip to the next language
        continue;
      }
    }

    if (!captions || captions.length === 0) {
      console.log("❌ Could not find any valid text tracks.");
      // Changed to 400 Bad Request to differentiate it from route errors
      return res.status(400).json({ 
        success: false, 
        error: "Could not extract text. The video might not have closed captions enabled." 
      });
    }
    
    const fullText = captions.map(cap => cap.text).join(' ');
    console.log(`📝 Total Transcript Length: ${fullText.length} characters.`);

    const truncatedText = fullText.length > 15000 ? fullText.substring(0, 15000) + "..." : fullText;

    console.log("🧠 Sending transcript to Gemini for translation & summary...");
    const aiNotes = await summarizeVideoTranscript(truncatedText);
    console.log("✅ Gemini successfully generated notes!");

    const newNote = new VideoNote({
      userId,
      videoId,
      videoTitle: videoTitle || "Lecture Video",
      summary: aiNotes.summary,
      keyTakeaways: aiNotes.keyTakeaways,
      formulas: aiNotes.formulas
    });

    await newNote.save();
    console.log("💾 Notes saved to MongoDB!");

    res.status(200).json({ success: true, data: newNote, message: "AI Notes Generated!" });

  } catch (error) {
    // ⚡ If Gemini fails, it will print the exact reason here!
    console.error("❌ Backend Crash Error:", error.message);
    res.status(500).json({ 
      success: false, 
      error: "An unexpected error occurred while analyzing the video." 
    });
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