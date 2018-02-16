import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Truck } from './truck';
import { AngularFireList, AngularFireObject } from 'angularfire2/database/interfaces';

@Injectable()
export class TruckService {

  private basePath: string = 'trucks';
  
  trucks = null;
  truck = null;

  
  constructor(private db: AngularFireDatabase) { }
  
  getTrucks(type: string): Observable<Truck[]>{
    
  this.trucks = this.db.list(this.basePath, ref => ref.orderByChild('type').equalTo(type)).valueChanges();
  return this.trucks;
  }

  getTruck(id: number): Observable<Truck> {
    this.truck = this.db.list(this.basePath, ref => ref.orderByChild('id').equalTo(id)).valueChanges();
    return this.truck;
  }

}
