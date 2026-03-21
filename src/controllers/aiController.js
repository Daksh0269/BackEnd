import { generateGraphData, evaluateQuizData } from '../services/aiAgent.js';

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