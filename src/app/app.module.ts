import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CategoryComponent } from './component/category/category.component';
//reactive forme
import { ReactiveFormsModule } from '@angular/forms';
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
import { CarditemComponent } from './component/card/carditem/carditem.component';
import { LoginComponent } from './component/account/login/login.component';
import { CreataccuntComponent } from './component/account/creataccunt/creataccunt.component';
import { FreeLancerComponent } from './component/account/freeLancer/freeLancer.component';
import { Normal_userComponent } from './component/account/normal_user/normal_user.component';
import { ServiceComponent } from './component/account/freeLancer/service/service.component';
import { ProduitComponent } from './component/account/shop/produit/produit.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { Test_imageComponent } from './component/account/shop/test_image/test_image.component';
import { NormaluserprofileComponent } from './component/account/normal_user/normaluserprofile/normaluserprofile.component';


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
    CarditemComponent,
    LoginComponent,
    CreataccuntComponent,
    FreeLancerComponent,
    ShopComponent,
    Normal_userComponent,
    ServiceComponent,
    ProduitComponent,
    Test_imageComponent,
    NormaluserprofileComponent,
    
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
