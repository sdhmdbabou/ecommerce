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


import { CarouselComponent } from './component/home/carousel/carousel.component';


import { ShopcardComponent } from './component/shop/shopcard/shopcard.component';
import { CardComponent } from './component/card/card.component';
import { CarditemComponent } from './component/card/carditem/carditem.component';
import { LoginComponent } from './component/account/login/login.component';
import { CreataccuntComponent } from './component/account/creataccunt/creataccunt.component';
import { FreeLancerComponent } from './component/account/freeLancer/freeLancer.component';
import { Normal_userComponent } from './component/account/normal_user/normal_user.component';
import {  ServiceFormComponent } from './component/account/freeLancer/serviceForm/serviceForm.component';
import { Produit_formComponent } from './component/account/shop/produit_form/produit_form.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { Test_imageComponent } from './component/account/shop/test_image/test_image.component';
import { NormaluserprofileComponent } from './component/account/normal_user/normaluserprofile/normaluserprofile.component';
import { Shop_profileComponent } from './component/account/shop/shop_profile/shop_profile.component';
import { FrequentlyUsedComponent } from './component/frequently-used/frequently-used.component';
import { listReviewComponent } from './component/frequently_used/review/list-review.component';

//owl coursol
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarousalComponent } from './component/frequently_used/carousal/carousal.component';
import { ProduitItemComponent } from './component/home/produit-item/produit-item.component';
import { ListProduitItmOwlComponent } from './component/home/list-produit-itm-owl/list-produit-itm-owl.component';
import { ServiceItmeComponent } from './component/account/freeLancer/service-itme/service-itme.component';
import { ListServiceItmeOwlComponent } from './component/account/freeLancer/list-service-itme-owl/list-service-itme-owl.component';
import { ReviewComponent } from './component/frequently_used/review/review/review.component';
import { CategoryItemComponent } from './component/category/category-item/category-item.component';
import { CategoryServiceComponent } from './component/category/category-service/category-service.component';
import { DProduitItemComponent } from './component/home/d-produit-item/d-produit-item.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { TestService } from './test.service';
import { ProduitDetailsService } from './services/produitDetails.service';
import { CardEmptyComponent } from './component/card/cardEmpty/cardEmpty.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ProduitItemComponent,
    ShopComponent,
    AccountComponent,
    NavbarComponent,
    SearchComponent,
    CategoryItemComponent,
    DProduitItemComponent ,
    
    CarouselComponent,
    CategoryServiceComponent,
    
    ListProduitItmOwlComponent,
    ServiceItmeComponent,
    ListServiceItmeOwlComponent,
    ReviewComponent,

    ShopcardComponent,
    CardComponent,
    CarditemComponent,
    LoginComponent,
    CreataccuntComponent,
    FreeLancerComponent,
    ShopComponent,
    Normal_userComponent,
    ServiceFormComponent,
    Produit_formComponent,
    Test_imageComponent,
    NormaluserprofileComponent,
    Shop_profileComponent,
    FrequentlyUsedComponent,
    listReviewComponent,
    
    CarousalComponent,
    Test1Component,
    Test2Component,
    FreeLancerComponent ,
    CardEmptyComponent
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    CarouselModule,
    BrowserAnimationsModule,
    
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
