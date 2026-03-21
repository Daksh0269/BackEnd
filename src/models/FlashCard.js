import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  subject: { type: String, required: true }, // e.g., "Physics"
  chapter: { type: String, required: true }, // e.g., "Rotational Motion"
  
  // ⚡ THE MAGIC VARIABLE: Tracks the granular weak point
  subConcept: { type: String, required: true }, // e.g., "Moment of Inertia"
  
  questionText: { type: String, required: true },
  options: [{ type: String }],
  correctIndex: { type: Number, required: true },
  stepByStepSolution: { type: String },

  // Your custom revision tracking
  interval: { type: Number, default: 0 }, 
  nextReviewDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Learning', 'Reviewing', 'Mastered'], default: 'Learning' }
});

export default mongoose.model('Flashcard', flashcardSchema);