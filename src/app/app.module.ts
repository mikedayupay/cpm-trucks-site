import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
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
import { environment } from './../environments/environment';

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
