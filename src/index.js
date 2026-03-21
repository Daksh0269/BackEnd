import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config'; 

import aiRoutes from './routes/aiRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js';
import graphRoutes from './routes/graphRoutes.js';
import QuizRoutes from './routes/QuizRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI) 
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api/ai', aiRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/graph', graphRoutes);
app.use('/api/quiz', QuizRoutes);

// Health check
app.get('/ping', (req, res) => res.send('Retention Engine API is live 🚀'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});