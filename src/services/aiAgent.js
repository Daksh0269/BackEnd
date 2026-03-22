import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";

// Initialize Gemini
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0.2, // Low temperature so the AI acts like a strict, logical tutor
  apiKey: process.env.GEMINI_API_KEY, 
});

// ==========================================
// 1. KNOWLEDGE GRAPH GENERATOR
// ==========================================
const graphSchema = z.object({
  concepts: z.array(
    z.object({
      title: z.string().describe("The name of the concept"),
      description: z.string().describe("A brief, 1-sentence explanation"),
      prerequisites: z.array(z.string()).describe("Titles of other concepts in this list that must be learned FIRST"),
    })
  ),
});

export const generateGraphData = async (topic) => {
  const structuredLlm = llm.withStructuredOutput(graphSchema);
  const prompt = `Act as an expert computer science and engineering professor. Break down the topic "${topic}" into a logical learning path of 5 core concepts. Identify the strict prerequisites for each concept to form a directional knowledge graph.`;
  
  const response = await structuredLlm.invoke(prompt);
  return response.concepts;
};

// ==========================================
// 2. DIAGNOSTIC AI ENGINE (Post-Test Analysis)
// ==========================================
export const evaluateQuizData = async (subject, chapter, questions, userAnswers) => {
  // 1. Tell Gemini exactly how to format the Diagnostic Report
  const evaluationSchema = z.object({
    encouragement: z.string().describe("A short, highly motivating message like a Kota faculty member would give."),
    weakAreas: z.array(z.string()).describe("The specific sub-concepts (e.g., 'Moment of Inertia') the student got wrong and needs to revise."),
    studySchedule: z.array(z.object({
      day: z.string().describe("e.g., Day 1, Day 2, Day 3"),
      focus: z.string().describe("The specific sub-concept to study"),
      actionItem: z.string().describe("Exact action: e.g., 'Solve 10 PYQs on this formula'")
    })).describe("A precise 3-day action plan to fix the failed sub-concepts"),
    youtubeSearches: z.array(z.object({
      title: z.string().describe("Title of the video concept"),
      searchQuery: z.string().describe("A highly optimized youtube search string, e.g., 'JEE Advanced Rotational Motion Moment of Inertia tricks'")
    })).describe("2 targeted youtube search queries to help them learn their weak areas")
  });

  const structuredLlm = llm.withStructuredOutput(evaluationSchema);

  // 2. Format the test data so Gemini knows exactly what happened
  const testPerformance = questions.map((q, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === q.correctIndex;
    const isSkipped = userAnswer === undefined;
    
    return {
      questionNumber: index + 1,
      subConceptTested: q.subConcept || "General Concept",
      status: isCorrect ? "Correct" : (isSkipped ? "Skipped" : "Incorrect")
    };
  });

  // 3. Feed the diagnostic data to the AI
  const prompt = `
    You are an elite JEE/NEET faculty member. The student just completed a mock test on ${subject} - ${chapter}.
    
    Here is the exact breakdown of how they performed on specific sub-concepts:
    ${JSON.stringify(testPerformance)}
    
    Analyze this performance. 
    1. Identify the exact sub-concepts they are failing.
    2. Create a highly personalized 3-day study schedule to fix ONLY these specific weak gaps.
    3. Provide highly optimized YouTube search queries that will instantly find the best JEE/NEET tutorials for their weak spots.
  `;

  return await structuredLlm.invoke(prompt);
};
// ... existing imports ...

// ==========================================
// 3. YOUTUBE TRANSCRIPT ANALYZER
// ==========================================
const videoSummarySchema = z.object({
  summary: z.string().describe("A concise, 2-paragraph summary of the entire lecture."),
  keyTakeaways: z.array(z.string()).describe("3 to 5 highly specific bullet points summarizing the core concepts taught."),
  formulas: z.array(z.string()).describe("Any specific mathematical, chemical, or physics formulas/equations mentioned in the text. Return an empty array if none exist.")
});

export const summarizeVideoTranscript = async (transcriptText) => {
  const structuredLlm = llm.withStructuredOutput(videoSummarySchema);
  
  const prompt = `
    You are an elite academic tutor. Analyze the following transcript from an educational YouTube video.
    Extract the core knowledge, summarize the concepts, and explicitly list any formulas, equations, or rules mentioned.
    
    Transcript:
    ${transcriptText}
  `;

  return await structuredLlm.invoke(prompt);
};