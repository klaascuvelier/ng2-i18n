import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { TRANSLATION } from './messages.en';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(
    AppModule,
    {
      providers: [
        {provide:TRANSLATIONS, useValue: TRANSLATION},
        {provide:TRANSLATIONS_FORMAT, useValue:'xlf'},
        {provide:LOCALE_ID, useValue:'en-GB'}
      ]
    }
);
