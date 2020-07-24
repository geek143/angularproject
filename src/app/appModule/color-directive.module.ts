import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesingDirectiveDirective } from '../appDirective/desing-directive.directive';

@NgModule({
  declarations: [
    DesingDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    DesingDirectiveDirective
  ]
})
export class ColorDirectiveModule { }
