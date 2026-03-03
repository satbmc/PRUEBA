import { GoogleGenAI, Type } from "@google/genai";
import { MarketingSuggestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getMarketingSuggestions(
  businessType: string,
  goal: string,
  targetAudience: string
): Promise<MarketingSuggestion> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Act as an AI Marketing Assistant. Suggest content for a landing page.
    Business Type: ${businessType}
    Goal: ${goal}
    Target Audience: ${targetAudience}
    
    Provide the response in JSON format.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          subtitle: { type: Type.STRING },
          cta: { type: Type.STRING },
          imagePrompt: { type: Type.STRING },
          features: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING }
              },
              required: ["title", "description"]
            }
          }
        },
        required: ["title", "subtitle", "cta", "imagePrompt", "features"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
}
