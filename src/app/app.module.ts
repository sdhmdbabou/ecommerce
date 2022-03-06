import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CategoryComponent } from './component/category/category.component';
import { CardComponent } from './component/card/card.component';
import { ShopComponent } from './component/shop/shop.component';
import { AccountComponent } from './component/account/account.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchComponent } from './component/search/search.component';
import { PopularproductsComponent } from './component/home/popularproducts/popularproducts.component';
import { CarouselComponent } from './component/home/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    CardComponent,
    ShopComponent,
    AccountComponent,
    NavbarComponent,
    SearchComponent,
    PopularproductsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
