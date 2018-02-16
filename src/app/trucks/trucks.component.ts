import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { TruckService } from '../truck.service';

import { Truck } from '../truck';


@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {

  trucksObservable: Observable<Truck[]>;
  title: string;

  constructor(private route: ActivatedRoute, private truckService: TruckService) 
  {
    this.route.params.subscribe(params => {
      console.log(params)
      if (params['type']) {
        this.getTrucks(params['type']);
        this.title = params['type'] + "-duty models";
      }
    });
  }

  ngOnInit() {}

  getTrucks(type) : void {
    this.trucksObservable =  this.truckService.getTrucks(type);
  }
}
