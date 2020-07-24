import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryItem } from '../gallery';
import { ActivatedRoute, Params } from '@angular/router';
import { HeaderserService } from 'src/app/appServices/headerser.service';

@Component({
  selector: 'app-galleryitems',
  templateUrl: './galleryitems.component.html',
  styleUrls: ['./galleryitems.component.scss']
})
export class GalleryitemsComponent implements OnInit, OnDestroy {

  selectedItem;
  constructor(
    private gallery: GalleryItem,
    private _activatedRoute: ActivatedRoute,
    private _header: HeaderserService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params
    .subscribe( (param:Params) => {
       this.selectedItem = param['id'];
       this.selectedItem = this.gallery.galleryItems[this.selectedItem -1];
    })

    this._header.headerNav.next(false);
    this._header.gotoLink.next({text:"Back To Link",url:"/gallery"});
  }

  ngOnDestroy()
  {
    this._header.headerNav.next(true);
    this._header.gotoLink.next({text:"",url:""});
  }

}
