import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtinterceptor } from './interceptor/jwtinterceptor.interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: jwtinterceptor, multi: true },

    // provideHttpClient(
    //   withInterceptors([
    //     { provide: HTTP_INTERCEPTORS, useClass: jwtinterceptor, multi: true }
    //   ])
    // )
  ]
};
