// app.config.ts
// In this file, we do two things before bootstrapping the application:
//
//   1. load config
//  2. "inject" router config with the correct customer routes
import { ApplicationConfig, inject } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Router } from '@angular/router';
import { provideAppInitializer } from '@angular/core';
import { ConfigService } from './config.service';
import { CORE_ROUTES } from './app.routes';
import { loadCustomerRoutes } from './customer-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(CORE_ROUTES), // using the CORE_ROUTES placeholder

    provideAppInitializer(async () => {
      const configService = inject(ConfigService);
      const router = inject(Router);

      await configService.load();

      const customer = configService.config.customer as any;
      const customerRoutes = await loadCustomerRoutes(customer);

      // The magic happens here: replace the placeholder route 'customer' with the actual children
      const next = CORE_ROUTES.map(r =>
        r.path === 'customer' ? { ...r, children: customerRoutes } : r
      );

      router.resetConfig(next);
    }),
  ],
};
