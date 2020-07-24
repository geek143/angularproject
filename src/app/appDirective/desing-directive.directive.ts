import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDesingDirective]'
})
export class DesingDirectiveDirective {

  constructor(
    private el:ElementRef,
    private render: Renderer2
  ) {
    this.render.setStyle(this.el.nativeElement,'backgroundColor','green');
  }

  chColor(color:string)
  {
      this.render.setStyle(this.el.nativeElement,"backgroundColor",color);
  }


}
