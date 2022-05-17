import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RootGuard } from './root/services/root.guard';
import { SearchbarComponent } from './shared/components/searchbar/searchbar.component';
import { PubbarComponent } from './shared/components/pubbar/pubbar.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SearchbarComponent,
    PubbarComponent,
    MenuComponent,
    CardComponent,
  ],
  imports: [
    ClickOutsideModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
  ],
  providers: [RootGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
