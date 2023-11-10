import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
// import { ContentComponent } from './content/content.component';
import {
  AppComponent,
  AppComponentSumat,
  LargestNumber,
} from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    AppComponentSumat,
    LargestNumber,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AppComponentSumat,
    LargestNumber,
  ]
})
export class AppModule { }
