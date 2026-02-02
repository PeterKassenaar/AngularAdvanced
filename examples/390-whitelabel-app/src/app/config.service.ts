//config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AppRuntimeConfig } from './config.types';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private _config!: AppRuntimeConfig;

  get config(): AppRuntimeConfig {
    if (!this._config) throw new Error('Config not loaded yet');
    return this._config;
  }

  constructor(private http: HttpClient) {}

  async load(): Promise<void> {
    const url = `assets/config.json?v=${Date.now()}`;
    this._config = await firstValueFrom(this.http.get<AppRuntimeConfig>(url));
  }
}
