import mongoose from 'mongoose';

const videoNoteSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  videoId: { type: String, required: true },
  videoTitle: { type: String, default: "YouTube Lecture" },
  
  // AI Generated Content
  summary: { type: String, required: true },
  keyTakeaways: [{ type: String }],
  formulas: [{ type: String }], // To store any math/physics equations detected
  
}, { timestamps: true });

// Ensure a user doesn't get duplicate notes for the same video
videoNoteSchema.index({ userId: 1, videoId: 1 }, { unique: true });

export default mongoose.model('VideoNote', videoNoteSchema);