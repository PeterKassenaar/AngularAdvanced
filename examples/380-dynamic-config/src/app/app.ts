// app.ts
import {Component, signal, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ConfigService} from './config.service';
import {JsonPipe} from '@angular/common';
import {AppRuntimeConfig} from './config.types';
import {ExampleComponent} from './components/example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe, ExampleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dynamic-app');
  private configService = inject(ConfigService);
  cfg: AppRuntimeConfig = this.configService.config;
}
