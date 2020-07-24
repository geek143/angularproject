import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(private router: Router, private _desing:DesignUtilityService) {
  }
  prodcuts = [
    {
      id : 1,
      name : "Tv"
    },
    {
      id : 2,
      name : "Desktop"
    },
    {
      id : 3,
      name : "Machine"
    },{
      id : 4,
      name : "Laptop"
    }
  ]

  showMe : boolean = false;

  onChange()
  {
    this.showMe = !this.showMe
  }
  ngOnInit(): void {

  }

}
