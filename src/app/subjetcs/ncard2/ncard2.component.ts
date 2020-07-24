import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ncard2',
  templateUrl: './ncard2.component.html',
  styles: [
  ]
})
export class Ncard2Component implements OnInit {

  @Input() myValue : string;
  constructor() {

  }

  // ngOnChanges(changes:SimpleChanges)
  // {
  //   console.log("ngOnChanges Called " + changes.myValue.previousValue);
  // }

  ngOnInit(): void {

  }

  // ngDoCheck()
  // {
  //   console.log("ngDoCheck Called");
  // }

  // ngAfterContentInit()
  // {
  //   console.log("ngAfterContentInit Called");
  // }

  // ngAfterContentChecked(){
  //   console.log("ngAfterContentChecked Called");
  // }

  // ngOnDestroy()
  // {
  //   console.log("ngOnDestroy Called");
  // }

}
