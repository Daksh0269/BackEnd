import mongoose from 'mongoose';

const studyProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Will come from Appwrite later
  conceptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Concept', required: true },
  nextReviewDate: { type: Date, default: Date.now },
  interval: { type: Number, default: 0 },
  easeFactor: { type: Number, default: 2.5 },
  repetitions: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('StudyProgress', studyProgressSchema);