import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restocontainer',
  templateUrl: './restocontainer.component.html',
  styleUrls: ['./restocontainer.component.scss']
})
export class RestocontainerComponent implements OnInit {


  title : string = "Resturants Dashboard";
  constructor() { }

  ngOnInit(): void {
  }

}
