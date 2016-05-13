import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2StartAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthMethods, AuthProviders } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  Angular2StartAppComponent, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://blazing-torch-444.firebaseio.com'),
    firebaseAuthConfig({
      method: AuthMethods.Anonymous,
      provider: AuthProviders.Anonymous
    })
  ]
);
