import { generateGraphData, generateConceptQuiz, evaluateQuizData } from '../services/aiAgent.js';

export const generateTopicGraph = async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ error: "Please provide a topic" });
    const graphData = await generateGraphData(topic);
    res.status(200).json({ success: true, data: graphData });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate graph data" });
  }
};

export const generateQuiz = async (req, res) => {
  try {
    const { conceptTitle, subject } = req.body;
    if (!conceptTitle || !subject) return res.status(400).json({ error: "Missing conceptTitle or subject" });
    const quizData = await generateConceptQuiz(conceptTitle, subject);
    res.status(200).json({ success: true, data: quizData });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate quiz data" });
  }
};

export const evaluateQuiz = async (req, res) => {
  try {
    const { topic, questions, userAnswers } = req.body;
    
    // Quick safety check
    if (!topic || !questions || !userAnswers) {
        return res.status(400).json({ error: "Missing required quiz data" });
    }

    // Call the service where the LLM actually lives
    const analysis = await evaluateQuizData(topic, questions, userAnswers);

    res.status(200).json({ success: true, data: analysis });
  } catch (error) {
    console.error("AI Evaluation Error:", error);
    res.status(500).json({ success: false, error: "Failed to analyze quiz." });
  }
};