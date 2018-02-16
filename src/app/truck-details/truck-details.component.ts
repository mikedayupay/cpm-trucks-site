import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TruckService } from '../truck.service';
import { Observable } from 'rxjs/Observable';

import { Truck } from '../truck';



@Component({
  selector: 'app-truck-details',
  templateUrl: './truck-details.component.html',
  styleUrls: ['./truck-details.component.css']
})
export class TruckDetailsComponent implements OnInit {

  truckObservable: Observable<Truck>;
  // description: String;

  constructor(private route: ActivatedRoute, private location: Location, 
  private truckService: TruckService) { 
    this.route.params.subscribe(params => {
      console.log(params)
      if (params['id']) {
        this.getTruck(+params['id']);
      }
    });
   }

  ngOnInit() {
  }

  getTruck(id): void {
    this.truckObservable = this.truckService.getTruck(id);
  }

  goBack(): void {
    this.location.back();
  }

}
