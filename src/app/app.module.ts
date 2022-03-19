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
import { Produit_formComponent } from './component/account/shop/produit_form/produit_form.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { Test_imageComponent } from './component/account/shop/test_image/test_image.component';
import { NormaluserprofileComponent } from './component/account/normal_user/normaluserprofile/normaluserprofile.component';
import { Shop_profileComponent } from './component/account/shop/shop_profile/shop_profile.component';
import { FrequentlyUsedComponent } from './component/frequently-used/frequently-used.component';
import { ReviewComponent } from './component/frequently_used/review/review.component';

//owl coursol
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Owl_carouselComponent } from './component/frequently_used/review/owl_carousel/owl_carousel.component';
import { CarousalComponent } from './component/frequently_used/carousal/carousal.component';




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
    Produit_formComponent,
    Test_imageComponent,
    NormaluserprofileComponent,
    Shop_profileComponent,
    FrequentlyUsedComponent,
    ReviewComponent,
    Owl_carouselComponent,
    CarousalComponent
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
