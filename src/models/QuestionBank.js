import mongoose from 'mongoose';

const questionBankSchema = new mongoose.Schema({
  subject: { type: String, required: true, index: true },   // e.g., "Physics"
  chapter: { type: String, required: true, index: true },   // e.g., "Rotational Motion"
  subConcept: { type: String, required: true },             // e.g., "Moment of Inertia"
  
  q: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctIndex: { type: Number, required: true },
  
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
  examTag: { type: String, default: 'JEE Main' },
  stepByStepSolution: { type: String, required: true }
});

export default mongoose.model('QuestionBank', questionBankSchema);