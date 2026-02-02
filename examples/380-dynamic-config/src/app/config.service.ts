import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AppRuntimeConfig } from './config.types';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private _config!: AppRuntimeConfig;
  private http = inject(HttpClient);

  // getter for private variable
  get config(): AppRuntimeConfig {
    if (!this._config) {
      throw new Error('Config not loaded yet');
    }
    return this._config;
  }

  async load(): Promise<void> {
    // cache-bust so that you don't 'accidentally' get old config from cache when redeploying
    const url = `assets/config.json?v=${Date.now()}`;
    this._config = await firstValueFrom(this.http.get<AppRuntimeConfig>(url));
  }
}
