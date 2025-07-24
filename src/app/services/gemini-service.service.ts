import { Injectable } from '@angular/core';
import { GoogleGenAI } from "@google/genai";

@Injectable({
  providedIn: 'root',
})
export class GeminiServiceService {
  private readonly ai = new GoogleGenAI({});
  

}
