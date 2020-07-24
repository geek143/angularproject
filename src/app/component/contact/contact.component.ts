import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderserService } from 'src/app/appServices/headerser.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor( private _header:HeaderserService) { }

  ngOnInit(): void {
    this._header.contactDetails.next(true);
    this._header.headerloginBlock.next(false);
  }

  ngOnDestroy()
  {
    this._header.contactDetails.next(false);
    this._header.headerloginBlock.next(true);
  }

}
