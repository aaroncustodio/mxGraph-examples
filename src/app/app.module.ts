import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesModule } from './examples/examples.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Test1Component } from './exercise/test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
