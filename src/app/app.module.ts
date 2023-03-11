import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateService } from './core/services/translate.service';
import { translateFactory } from './routes/guest/guest.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [// Provider para traducir los textos de los componentes
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
