import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppComponentSumat } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentSumat
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent, AppComponentSumat]
})
export class AppModule { }
