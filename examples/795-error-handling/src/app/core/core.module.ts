import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorHandler } from './errors/global-error-handler';
import { HttpLoadingInterceptor } from './errors/http-loading.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      // 1. Process all errors in the application (client-sided errors)
      // If an error occurs, use our own error handler instead of
      // the default Angular ErrorHandler
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      // 2. Interceptor to show loading spinner
      // If an http request is fired, use our own HttpLoadingInterceptor
      // instead of the default HTTP_INTERCEPTOR provided by Angular.
      // Set multi to `true` since the HTTP_INTERCEPTORS injection token
      // can potentially be assigned to several classes.
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
