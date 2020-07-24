import { Component, OnInit, Renderer2, AfterContentInit, ContentChild, ElementRef, AfterViewInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-ncard',
  templateUrl: './ncard.component.html',
  styles: [
  ]
})
export class NcardComponent implements OnInit, AfterContentInit {

  @ContentChild('nchild') nchild:ElementRef;
  constructor(
    private _desing: DesignUtilityService,
    private render: Renderer2
    ) {
    this._desing.username.subscribe(data =>{
      this.username = data
    })
  }

  username;
  ngOnInit(): void {

  }



  ngAfterContentInit()
  {


  }

  update(val)
  {
     this._desing.username.next(val.value);

  }

  ClickMe()
  {
    var text = this.render.createText("This is my apragraphc");
    this.render.appendChild(this.nchild.nativeElement,text);
  }

}
