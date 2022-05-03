import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initFirebase } from './environments/firebase';
import { firebaseConfig } from './environments/firebaseConfig';
if (environment.production) {
  enableProdMode();
}
initFirebase(firebaseConfig);
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
