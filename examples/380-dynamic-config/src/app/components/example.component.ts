import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
  imports: [
    JsonPipe
  ]
})
export class ExampleComponent {
  private http = inject(HttpClient);
  private config = inject(ConfigService).config;

  // data coming from dynamic config.service.ts
  apiBaseUrl = this.config.apiBaseUrl;
  featureXEnabled = this.config.featureX;

  data: unknown;

  loadData(): void {
    const url = `${this.apiBaseUrl}/status`;
    this.http.get(url).subscribe(result => {
      this.data = result;
    });
  }
}
