import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Produit } from 'src/app/interface/produit';

@Component({
  selector: 'app-list-produit-itm-owl',
  templateUrl: './list-produit-itm-owl.component.html',
  styleUrls: ['./list-produit-itm-owl.component.css']
})
export class ListProduitItmOwlComponent implements OnInit {

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
   
    produits : Produit[] = [
      {id: 1,title:"ggggggggggggggg",imageUrl:"assets/image/a.jpg",description:"",disabled:false,price:200,typeProduit:1,user:1},
      {id: 2,title:"addd",imageUrl:"assets/image/b.jpg",description:"",disabled:false,price:200,typeProduit:1,user:1 },
      {id: 3,title:"ssdddds",imageUrl:"assets/image/z.png" ,description:"",disabled:false,price:200,typeProduit:1,user:1},
      {id: 4,title:"sss",imageUrl:"assets/image/o.jpg" ,description:"",disabled:false,price:200,typeProduit:1,user:1},
      {id: 5,title:"ssssddds",imageUrl:"assets/image/z.png" ,description:"",disabled:false,price:200,typeProduit:1,user:1 },
      {id: 6,title:"sss", imageUrl:"assets/image/z.png",description:"",disabled:false,price:200,typeProduit:1,user:1 },
      {id: 8,title:"sss", imageUrl:"assets/image/z.png" ,description:"",disabled:false,price:200,typeProduit:1,user:1}
    ];

}
