import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UpperPipe } from './pipes/upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    UpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
