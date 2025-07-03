import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ApplicationConfig } from '@angular/core';

export const applicationConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
