import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './component/account/account.component';
import { CardComponent } from './component/card/card.component';
import { CategoryComponent } from './component/category/category.component';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'category',component:CategoryComponent},
  {path:'card',component: CardComponent},
  {path:'shop',component:ShopComponent},
  {path:'account',component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
