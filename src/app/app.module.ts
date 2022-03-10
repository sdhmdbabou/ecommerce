import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CategoryComponent } from './component/category/category.component';

import { ShopComponent } from './component/shop/shop.component';
import { AccountComponent } from './component/account/account.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchComponent } from './component/search/search.component';
import { PopularproductsComponent } from './component/home/popularproducts/popularproducts.component';
import { CarouselComponent } from './component/home/carousel/carousel.component';
import { ProductItemComponent } from './component/home/popularproducts/product-item/product-item.component';
import { CardproductsComponent } from './component/home/cardproducts/cardproducts.component';
import { ShopcardComponent } from './component/shop/shopcard/shopcard.component';
import { CardComponent } from './component/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
  
    ShopComponent,
    AccountComponent,
    NavbarComponent,
    SearchComponent,
    PopularproductsComponent,
    CarouselComponent,
    ProductItemComponent,
    CardproductsComponent,
    ShopcardComponent,
    CardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
