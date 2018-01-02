import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxCarousel } from 'ngx-carousel/src/ngx-carousel/ngx-carousel.interface';
import { CarouselComponent } from './ngx-carousel/carousel.component';
import { TrucksComponent } from './trucks/trucks.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    TrucksComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    NgSemanticModule,
    NgxCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
