import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ForOforComponent } from './for-ofor/for-ofor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MenuService } from './service/menu.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateService } from 'src/update.service';

@NgModule({
  declarations: [AppComponent, ForOforComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [AuthService, MenuService, UpdateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
