import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';

import {NgxLightboxModule} from '../../projects/ngx-lightbox/src/lib/ngx-lightbox.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatToolbarModule,

    NgxLightboxModule.forRoot({
      galleryOptions: {
        width: '85%'
      },
      lightboxOptions: {
        closeIconColor: 'red',
        dotColor: 'red'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
