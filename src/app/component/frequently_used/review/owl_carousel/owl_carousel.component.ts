import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-owl_carousel',
  templateUrl: './owl_carousel.component.html',
  styleUrls: ['./owl_carousel.component.css']
})
export class Owl_carouselComponent implements OnInit {

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
   
    slides = [
      {id: 1,titel:"sss",description:"aghh",delivery_days:45,price:988888.2,hasexpress:true,expressdeliverydayts:12,expressprice:45555555},
      {id: 2,titel:"addd",description:"kljhjgjhjghghjghjgjhgjhghjghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",delivery_days:45,price:988888.2,hasexpress:false,expressdeliverydayts:12,expressprice:45555555 },
      {id: 3,titel:"ssdddds",description:"aghh",delivery_days:45,price:988888.2,hasexpress:true,expressdeliverydayts:12,expressprice:45555555 },
      {id: 4,titel:"sss",description:"aghh",delivery_days:45,price:988888.2,hasexpress:true,expressdeliverydayts:12,expressprice:45555555 },
      {id: 5,titel:"ssssddds",description:"aghh",delivery_days:45,price:988888.2,hasexpress:true,expressdeliverydayts:12,expressprice:45555555 },
      {id: 6,titel:"sss",description:"aghh",delivery_days:45,price:988888.2,hasexpress:true,expressdeliverydayts:12,expressprice:45555555 },
      {id: 6,titel:"sss",description:"aghh",delivery_days:45,price:988888.2,hasexpress:true,expressdeliverydayts:12,expressprice:45555555 }
    ];
}
