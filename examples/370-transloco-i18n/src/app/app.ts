import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  // Import TranslocoDirective to use it in the template for structural translation
  imports: [RouterOutlet, TranslocoDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // TranslocoService is injected to handle language switching logic
  private translocoService = inject(TranslocoService);
  protected readonly title = signal('transloco-app');

  // This method sets the application language to the specified language code
  setLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
