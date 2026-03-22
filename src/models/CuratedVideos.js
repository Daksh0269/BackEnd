import mongoose from 'mongoose';

const curatedVideoSchema = new mongoose.Schema({
  videoId: { type: String, required: true, unique: true }, // YouTube's 11-character ID
  title: { type: String, required: true },
  subject: { type: String, required: true },
  channel: { type: String, required: true },
  notes: { type: String } // Quick AI-generated style notes or formulas
}, { timestamps: true });

export default mongoose.model('CuratedVideo', curatedVideoSchema);