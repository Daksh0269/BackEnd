import mongoose from 'mongoose';

const watchHistorySchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  videoId: { type: String, required: true },
  title: { type: String, required: true },
  subject: { type: String, required: true },
  watchedAt: { type: Date, default: Date.now }
});

// Ensure they don't get duplicate entries if they watch it twice
watchHistorySchema.index({ userId: 1, videoId: 1 }, { unique: true });

export default mongoose.model('WatchHistory', watchHistorySchema); 