import mongoose from 'mongoose';

const conceptSchema = new mongoose.Schema({
  title: { type: String, required: true },  
  description: { type: String }, 
  subject: { type: String, required: true },
  prerequisites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Concept' }],
}, { timestamps: true });

export default mongoose.model('Concept', conceptSchema);