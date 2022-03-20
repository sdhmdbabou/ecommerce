import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interface/service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-list-service-itme-owl',
  templateUrl: './list-service-itme-owl.component.html',
  styleUrls: ['./list-service-itme-owl.component.css']
})
export class ListServiceItmeOwlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
   
    services:Service []= [
      {id: 1,created:"", expressPrice:188888,expressDeliveryDays:25,hasExpress:true,price:10000,title:"sssdd",deliveryDays:45,description:"sdsjhdsjhdjshjdj",disabled:false,typeService:1,user:1},
      {id: 2,created:"", expressPrice:188888,expressDeliveryDays:25,hasExpress:true,price:10000,title:"sssdd",deliveryDays:45,description:"sdsjhdsjhdjshjdj",disabled:false,typeService:1,user:1},
      {id: 3,created:"", expressPrice:188888,expressDeliveryDays:25,hasExpress:true,price:10000,title:"sssdd",deliveryDays:45,description:"sdsjhdsjhdjshjdj",disabled:false,typeService:1,user:1 },
      {id: 4,created:"", expressPrice:188888,expressDeliveryDays:25,hasExpress:true,price:10000,title:"sssdd",deliveryDays:45,description:"sdsjhdsjhdjshjdj",disabled:false,typeService:1,user:1 },
      {id:5 ,created:"", expressPrice:188888,expressDeliveryDays:25,hasExpress:true,price:10000,title:"sssdd",deliveryDays:45,description:"sdsjhdsjhdjshjdj",disabled:false,typeService:1,user:1 },
      {id: 6, created:"", expressPrice:188888,expressDeliveryDays:25,hasExpress:true,price:10000,title:"sssdd",deliveryDays:45,description:"sdsjhdsjhdjshjdj",disabled:false,typeService:1,user:1},
    
    ];

}
