import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { GalleryitemsComponent } from './component/gallery/galleryitems/galleryitems.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RestocontainerComponent } from './resto/restocontainer/restocontainer.component';
import { AddrestioComponent } from './resto/addrestio/addrestio.component';
import { UpdaterestoComponent } from './resto/updateresto/updateresto.component';
import { LoginrestoComponent } from './resto/loginresto/loginresto.component';
import { RegrestoComponent } from './resto/regresto/regresto.component';
import { ListrestoComponent } from './resto/listresto/listresto.component';

const routes: Routes = [
  {path : "", redirectTo : "login", pathMatch : "full"},
  {path : "home", component : HomeComponent},
  {path : "login", component : LoginComponent},
  {path : "about", component : AboutComponent},
  {
    path : "products",
    loadChildren: () => import('./component/products/products.module').then(m => m.ProductsModule),
    data:{preload:false}
  },
  {path : "contact", component : ContactComponent},
  {path : "gallery", component : GalleryComponent},
  {path : "gallery/:id", component : GalleryitemsComponent},
  {
    path : "card",
    loadChildren: () => import('./subjetcs/cardnew.module').then(m => m.CardnewModule),
    data:{preload:false}
  },
  {path : "resturants", component : RestocontainerComponent, children : [
    {path : "", redirectTo : "addresto", pathMatch : "full"},
    {path : "addresto", component : AddrestioComponent},
    {path : "updateresto/:id", component : UpdaterestoComponent},
    {path : "login", component : LoginrestoComponent},
    {path : "register", component : RegrestoComponent},
    {path : "list", component : ListrestoComponent}
  ]},
  {path : "**", component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy : PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
