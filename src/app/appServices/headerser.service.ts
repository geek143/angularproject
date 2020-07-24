import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderserService {

  constructor() { }

  headerNav = new BehaviorSubject(true);
  contactDetails = new BehaviorSubject(false);
  headerloginBlock = new BehaviorSubject(true);
  gotoLink = new BehaviorSubject({text:"",url:""});
  loggedIn = new BehaviorSubject(false);
}
