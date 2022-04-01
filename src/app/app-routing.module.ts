import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './component/account/account.component';
import { CreataccuntComponent } from './component/account/creataccunt/creataccunt.component';
import { FreeLancerComponent } from './component/account/freeLancer/freeLancer.component';
import { CardComponent } from './component/card/card.component';

import { CategoryComponent } from './component/category/category.component';
import { DProduitItemComponent } from './component/home/d-produit-item/d-produit-item.component';
import { HomeComponent } from './component/home/home.component';
import { FreeLanceresComponent } from './component/shop/freeLanceres/freeLanceres.component';
import { ShopComponent } from './component/shop/shop.component';
import { ShopcardComponent } from './component/shop/shopcard/shopcard.component';

const routes: Routes = [
  {path:'',component:HomeComponent,},
  {path:'category',component:CategoryComponent},
  
  {path:'shop',component:ShopComponent},
  {path:'account',component:AccountComponent},
  {path:'card',component:CardComponent},
  {path:'creataccunt',component:   CreataccuntComponent},
  
  {path:'d-produit-item',component:DProduitItemComponent},
  {path:'freeLancers',component:FreeLanceresComponent},
  {path:'shops',component:ShopcardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
