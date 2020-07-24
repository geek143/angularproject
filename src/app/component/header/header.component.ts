import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderserService } from 'src/app/appServices/headerser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /*
    Header Property
  */

  gotoLink;
  headerNav;
  contactDetails : boolean = false;
  headerloginBlock;
  loggedIn;

  constructor( private _header:HeaderserService, private router:Router) {
    this._header.contactDetails
    .subscribe(contactDetails => {
      this.contactDetails = contactDetails
    })

    this._header.headerloginBlock
    .subscribe(headerloginBlock => {
      this.headerloginBlock = headerloginBlock
    })

    this._header.gotoLink
    .subscribe(gotoLink => {
      this.gotoLink = gotoLink
    })

    this._header.headerNav
    .subscribe(headerNav => {
      this.headerNav = headerNav
    })

    this._header.loggedIn
    .subscribe(loggedIn => {
      this.loggedIn = loggedIn
    })
  }

  ngOnInit(): void {

  }

  loggedOut()
  {
     this.router.navigate(['login']);
     this._header.loggedIn.next(false);
  }


}
