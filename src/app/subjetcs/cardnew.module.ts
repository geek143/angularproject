import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NcardComponent } from './ncard/ncard.component';
import { Ncard1Component } from './ncard1/ncard1.component';
import { Ncard2Component } from './ncard2/ncard2.component';
import { Ncard3Component } from './ncard3/ncard3.component';


const cardRoutes: Routes = [
  {path : "", component : NcardComponent},
  {path : "ncard1", component : Ncard1Component},
    {path : "ncard2", component : Ncard2Component},
    {path : "ncard3", component : Ncard3Component},
];

@NgModule({
  declarations: [
    Ncard1Component,
    Ncard2Component,
    Ncard3Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cardRoutes)
  ],
  exports : [
    Ncard1Component,
    Ncard2Component,
    Ncard3Component,
  ]
})
export class CardnewModule {
  constructor() {
    console.log("Card new Module Loaded");
  }
}
