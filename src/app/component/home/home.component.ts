import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { NcardComponent } from 'src/app/subjetcs/ncard/ncard.component';
import { DesingDirectiveDirective } from 'src/app/appDirective/desing-directive.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("box") box:ElementRef;
  @ViewChild(NcardComponent) myChild:NcardComponent;
  @ViewChild(DesingDirectiveDirective) myDir:DesingDirectiveDirective;

  myText : any = Object;
  constructor(
    private _design: DesignUtilityService,
    private render: Renderer2
    ) {

    }
  username;
  ngOnInit(): void {
     this.myText =  this._design.products;
     this._design.username
     .subscribe(data => {
       this.username = data;
     });

  }

  ngAfterViewInit()
  {
    console.log(this.box);
    // this.render.setAttribute(this.box.nativeElement,'title','asdsaasdasd');

  }

  changeValue()
  {
     this.myChild.username = "Aman";
  }

  onAlert()
  {
     this.myChild.ClickMe();
  }

  changeColor(val)
  {
    this.myDir.chColor(val);
  }

  changeColor1(val)
  {
    this.myDir.chColor(val);
  }

}
