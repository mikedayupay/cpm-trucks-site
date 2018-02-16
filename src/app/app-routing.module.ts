import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TrucksComponent} from './trucks/trucks.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TruckDetailsComponent } from './truck-details/truck-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent }, 
  { path: 'trucks/:type', component: TrucksComponent },
  { path: 'truck-detail/:id', component: TruckDetailsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
