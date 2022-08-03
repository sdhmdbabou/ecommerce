import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { AccountComponent } from './component/account/account.component';
import { CreataccuntComponent } from './component/account/creataccunt/creataccunt.component';
import { FreeLancerComponent } from './component/account/freeLancer/freeLancer.component';
import { LoginComponent } from './component/account/login/login.component';
import { CardComponent } from './component/card/card.component';
import { BienCategryListComponent } from './component/category/Bien-categry-list/Bien-categry-list.component';

import { CategoryComponent } from './component/category/category.component';
import { ServiceCategoryListComponent } from './component/category/service-category-list/service-category-list.component';
import { DProduitItemComponent } from './component/home/d-produit-item/d-produit-item.component';
import { HomeComponent } from './component/home/home.component';
import { FreeLanceresComponent } from './component/shop/freeLanceres/freeLanceres.component';
import { ShopComponent } from './component/shop/shop.component';
import { ShopcardComponent } from './component/shop/shopcard/shopcard.component';
import { UnauthenticationGuard } from './unauthentication.guard';



const routes: Routes = [
   {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivate:[UnauthenticationGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthenticationGuard]},
  {path:'category',component:CategoryComponent,canActivate:[AuthenticationGuard]},
  
  {path:'shop',component:ShopComponent,canActivate:[AuthenticationGuard]},
  {path:'account',component:AccountComponent,canActivate:[AuthenticationGuard]},
  {path:'card',component:CardComponent,canActivate:[AuthenticationGuard]},
  {path:'creataccunt',component:   CreataccuntComponent,canActivate:[AuthenticationGuard]},
  
  {path:'d-produit-item',component:DProduitItemComponent,canActivate:[AuthenticationGuard]},
  {path:'freeLancers',component:FreeLanceresComponent,canActivate:[AuthenticationGuard]},
  {path:'shops',component:ShopcardComponent,canActivate:[AuthenticationGuard]},
  {path:'biencategory',component:BienCategryListComponent,canActivate:[AuthenticationGuard]},
  {path:'servicecategory',component:ServiceCategoryListComponent,canActivate:[AuthenticationGuard]},

  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
