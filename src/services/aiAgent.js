import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0.2,
  apiKey: process.env.GEMINI_API_KEY, // <-- Explicitly pass the key we created
});
// Graph Generator Schema
const graphSchema = z.object({
  concepts: z.array(
    z.object({
      title: z.string().describe("The name of the concept"),
      description: z.string().describe("A brief, 1-sentence explanation"),
      prerequisites: z.array(z.string()).describe("Titles of other concepts in this list that must be learned FIRST"),
    })
  ),
});

// Quiz Generator Schema
const quizSchema = z.object({
  questions: z.array(
    z.object({
      questionText: z.string(),
      options: z.array(z.string()),
      correctAnswer: z.string(),
      explanation: z.string(),
    })
  ).length(3),
});

export const generateGraphData = async (topic) => {
  const structuredLlm = llm.withStructuredOutput(graphSchema);
  const prompt = `Act as an expert computer science professor. Break down the topic "${topic}" into a logical learning path of 5 core concepts. Identify the strict prerequisites for each concept to form a directional knowledge graph.`;
  const response = await structuredLlm.invoke(prompt);
  return response.concepts;
};

export const generateConceptQuiz = async (conceptTitle, subject) => {
  const structuredQuizLlm = llm.withStructuredOutput(quizSchema);
  const prompt = `Create a rigorous multiple-choice quiz to test a student's knowledge on the concept of "${conceptTitle}" within the subject of "${subject}". Ensure the incorrect options are plausible distractors.`;
  const response = await structuredQuizLlm.invoke(prompt);
  return response.questions;
};
export const evaluateQuizData = async (topic, questions, userAnswers) => {
  // 1. Tell Gemini exactly how to format the JSON response
  const evaluationSchema = z.object({
    score: z.number().describe("Score out of 100 based on correct answers"),
    encouragement: z.string().describe("A short, encouraging message about their performance"),
    weakAreas: z.array(z.string()).describe("Specific sub-topics they got wrong or struggled with"),
    studySchedule: z.array(z.object({
      day: z.string().describe("e.g., Day 1, Day 2"),
      focus: z.string().describe("What specific concept to study"),
      actionItem: z.string().describe("What they should physically do")
    })).describe("A 3-day customized study plan to fix their weak areas"),
    youtubeSearches: z.array(z.object({
      title: z.string().describe("Title of the video concept"),
      searchQuery: z.string().describe("A highly optimized youtube search string")
    })).describe("2-3 specific youtube search queries")
  });

  // 2. Attach the schema to your LLM (using the llm variable defined in this file!)
  const structuredLlm = llm.withStructuredOutput(evaluationSchema);

  // 3. Feed the student's test data to the AI
  const prompt = `
    You are an expert tutor. The student took a quiz on ${topic}.
    Here are the questions: ${JSON.stringify(questions)}
    Here are the student's answers: ${JSON.stringify(userAnswers)}
    
    Grade the quiz. Identify exactly what they don't understand based on their wrong answers.
    Create a highly personalized 3-day study schedule to fix these specific gaps.
    Provide highly optimized YouTube search queries that will instantly find the best tutorials for their weak spots.
  `;

  return await structuredLlm.invoke(prompt);
};