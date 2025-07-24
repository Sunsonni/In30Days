import { Injectable } from '@angular/core';
import { GoogleGenAI } from "@google/genai";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private readonly ai = new GoogleGenAI({ apiKey: environment.apiKey});

  async main(): Promise<string | undefined> {
  try {
      const response = await this.ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Explain how AI works in a few words",
      });
    return response.text;
  } catch (err) {
    console.error(err);
    return '';
  }
  }
}
