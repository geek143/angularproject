import { Component, OnInit } from '@angular/core';
import { GalleryItem } from './gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryImages = [];
  constructor(
    private gallery: GalleryItem

  ) { }

  ngOnInit(): void {
    this.galleryImages = this.gallery.galleryItems;
  }

}
