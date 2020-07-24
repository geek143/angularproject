import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-ncard1',
  templateUrl: './ncard1.component.html',
  styles: [
  ]
})
export class Ncard1Component implements OnInit {

  username;
  constructor(private _desing: DesignUtilityService) {
    this._desing.username.subscribe(data =>{
      this.username = data
    })
  }

  ngOnInit(): void {
  }

  update(val)
  {
     this._desing.username.next(val.value);
  }

}
