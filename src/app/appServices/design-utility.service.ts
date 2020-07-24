import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  products = {
    id : 1,
    name : "Lucky"
  };

  newUsers = [];

  username = new BehaviorSubject<any>("Sukhi Dhiman");
}
