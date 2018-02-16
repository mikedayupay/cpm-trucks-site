import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';
import { StickyModule } from 'ng2-sticky-kit';
import { ClarityModule } from '@clr/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxCarousel } from 'ngx-carousel/src/ngx-carousel/ngx-carousel.interface';
import { CarouselComponent } from './ngx-carousel/carousel.component';
import { TrucksComponent } from './trucks/trucks.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { environment } from './../environments/environment';
import { TruckService } from './truck.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { TruckDetailsComponent } from './truck-details/truck-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    TrucksComponent,
    ContactUsComponent,
    AboutUsComponent,
    TruckDetailsComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FlexLayoutModule,
    NgxCarouselModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StickyModule
  ],
  providers: [ TruckService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
