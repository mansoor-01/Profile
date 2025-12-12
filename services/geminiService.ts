import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MessageRole } from "../types";

// Initialize Gemini Client
// Note: API Key is accessed via process.env.API_KEY as per strict guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the virtual assistant for Mansoor Ahmed, a Multidimensional Professional.
Your goal is to answer visitor questions about Mansoor's professional background, education, and skills based on his CV.

Key Info about Mansoor Ahmed:
- **Professional Identity**: Multidimensional Professional bridging Business Analytics, Supply Chain Operations, and Strategic Economics.
- **Current Role**: MSc Student in Economics and Business Administration (Business Analytics) at Norwegian School of Economics NHH (Bergen, Norway).
- **Previous Education**: BBA from Haaga-Helia UAS (Finland), B.Com from University of Karachi.
- **Key Skills**: SAP S/4HANA, Power BI, Python, MS Excel, ERP Software, Google Colab, Decision Modeling, Supply Chain Management, Economic Strategy.
- **Languages**: English (Fluent), Finnish (Conversational).

**Work Experience Highlights**:
1. **Quality and Lead at Valmet Automotive (Finland)**: Managed quality reports, implemented SAP to log inspections (20% data accuracy improvement), reduced defects by 8% annually.
2. **Independent Entrepreneur (Taxi Service)**: Managed operations, finances, and customer service for a private transport business in Helsinki.
3. **Export Officer at Pak Petrochemical**: Processed ERP orders, managed documentation (Incoterms), increased exports by 13%.
4. **Marketing Officer at Sheraton Hotels**: Boosted revenue by 12% and loyalty sign-ups by 20%.

**Personal Interests & Hobbies**:
- Cycling
- Gardening
- Fishing
- Long walks in the forest (Nature lover)

**Contact Info**:
- Email: mansoor_07@hotmail.com
- Phone: +358449862363
- Location: Bergen, Norway
- LinkedIn: linkedin.com/in/mansoor-a-32962811/

Tone: Professional, nature-loving, calm, and helpful.
Format: Keep answers concise (under 3 sentences) unless asked for elaboration.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): void => {
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async function* (message: string): AsyncGenerator<string, void, unknown> {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
     throw new Error("Failed to initialize chat session.");
  }

  try {
    const responseStream = await chatSession.sendMessageStream({ message });

    for await (const chunk of responseStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I'm currently recalibrating my data models. Please try again in a moment.";
  }
};