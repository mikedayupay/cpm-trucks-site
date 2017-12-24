import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxCarousel } from 'ngx-carousel/src/ngx-carousel/ngx-carousel.interface';
import { CarouselComponent } from './ngx-carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgSemanticModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
