import StudyProgress from '../models/Progress.js';
import Concept from '../models/Concept.js';
import { generateGraphData, evaluateQuizData, chatWithTutorAgent } from '../services/aiAgent.js';
export const generateTopicGraph = async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ error: "Please provide a topic" });
    
    const graphData = await generateGraphData(topic);
    res.status(200).json({ success: true, data: graphData });
  } catch (error) {
    // This will print the actual error (like "Invalid API Key") to your terminal
    console.error("AI GENERATION ERROR:", error); 
    res.status(500).json({ error: error.message });
  }
};

export const evaluateQuiz = async (req, res) => {
  // We capture the exact context (subject/chapter) so the AI knows what it is grading
  const { subject, chapter, questions, userAnswers } = req.body;

  try {
    // Quick safety check
    if (!subject || !chapter || !questions || !userAnswers) {
        return res.status(400).json({ error: "Missing required quiz data" });
    }

    // Call the service where Gemini actually lives
    const analysis = await evaluateQuizData(subject, chapter, questions, userAnswers);

    res.status(200).json({ success: true, data: analysis });
  } catch (error) {
    console.error("AI Evaluation Error:", error);
    res.status(500).json({ success: false, error: "Failed to analyze quiz." });
  }
};
export const handleTutorChat = async (req, res) => {
  const { userId, message, history } = req.body;

  if (!userId || !message) {
    return res.status(400).json({ error: "Missing userId or message" });
  }

  try {
    // 1. Fetch Weak Areas from MongoDB
    // We assume an easeFactor < 2.5 means the student struggles with it
    const weakProgress = await StudyProgress.find({ 
        userId: userId, 
        easeFactor: { $lt: 2.6 } 
    }).populate('conceptId');

    // Extract the titles of the weak concepts
    const weakAreas = weakProgress
        .map(p => p.conceptId?.title)
        .filter(Boolean); // Remove any nulls

    // 2. Call the AI Agent
    const aiResponse = await chatWithTutorAgent(message, history, weakAreas);

    res.status(200).json({ success: true, reply: aiResponse });
  } catch (error) {
    console.error("AI Chat Error:", error);
    res.status(500).json({ success: false, error: "Failed to communicate with AI Tutor." });
  }
};