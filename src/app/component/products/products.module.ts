import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { MachineComponent } from './machine/machine.component';
import { DesktopComponent } from './desktop/desktop.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ColorDirectiveModule } from 'src/app/appModule/color-directive.module';

const proRoutes: Routes = [
  {path : "", component : ProductsComponent},
    {path : "laptop", component : LaptopComponent},
    {path : "desktop", component : DesktopComponent},
    {path : "tv", component : TvComponent},
    {path : "machine", component : MachineComponent}

];

@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    TvComponent,
    MachineComponent,
    DesktopComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),
    ColorDirectiveModule
  ],
  exports : []
})
export class ProductsModule {
  constructor() {
    console.log("Products Module Loaded");
  }
}
