import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { BuyproductComponent } from './component/buyproduct/buyproduct.component';
import { LoginComponent } from './component/login/login.component';
import { CardComponent } from './component/card/card.component';
import { ChildComponent } from './component/child/child.component';
import { DesignUtilityService } from './appServices/design-utility.service';
import { ParentComponent } from './practice/parent/parent.component';
import { NewChildComponent } from './practice/new-child/new-child.component';
import { FilterPipe } from './pipe/filter.pipe';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HeaderComponent } from './component/header/header.component';
import { HeaderserService } from './appServices/headerser.service';
import { GalleryitemsComponent } from './component/gallery/galleryitems/galleryitems.component';
import { GalleryItem } from '../app/component/gallery/gallery';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { NcardComponent } from './subjetcs/ncard/ncard.component';
import { ColorDirectiveModule } from './appModule/color-directive.module';
import { AddrestioComponent } from './resto/addrestio/addrestio.component';
import { UpdaterestoComponent } from './resto/updateresto/updateresto.component';
import { LoginrestoComponent } from './resto/loginresto/loginresto.component';
import { RegrestoComponent } from './resto/regresto/regresto.component';
import { ListrestoComponent } from './resto/listresto/listresto.component';
import { RestocontainerComponent } from './resto/restocontainer/restocontainer.component';
import { RestoService } from './resto/resto.service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo1Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CardComponent,
    BuyproductComponent,
    ChildComponent,
    ParentComponent,
    NewChildComponent,
    FilterPipe,
    GalleryComponent,
    HeaderComponent,
    GalleryitemsComponent,
    LoginComponent,
    PageNotFoundComponent,
    NcardComponent,
    AddrestioComponent,
    UpdaterestoComponent,
    LoginrestoComponent,
    RegrestoComponent,
    ListrestoComponent,
    RestocontainerComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColorDirectiveModule,
    BsDropdownModule.forRoot(),
    NgxPaginationModule,
    OrderModule

  ],
  providers: [DesignUtilityService, HeaderserService, GalleryItem,RestoService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
  constructor() {
    console.log("App Module Loaded");
  }
}
