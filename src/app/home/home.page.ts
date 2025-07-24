import { Component, inject, signal } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { GeminiService } from '../services/gemini-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton
  ],
})
export class HomePage {
  public currDay = signal<number>(30);
  public story = signal<string | undefined>('');
  private readonly gemini = inject(GeminiService);

  async advanceStory() {
    this.story.set(await this.gemini.main());
  }
}