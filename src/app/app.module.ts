import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';


import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    NgSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
