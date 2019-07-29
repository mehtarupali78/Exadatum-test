import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { Step1Component } from './step1/step1.component';
// import { Step2Component } from './step2/step2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // Step1Component,
    // Step2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
