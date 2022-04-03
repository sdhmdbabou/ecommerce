import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Produit } from 'src/app/interface/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produit-itm-owl',
  templateUrl: './list-produit-itm-owl.component.html',
  styleUrls: ['./list-produit-itm-owl.component.css']
})
export class ListProduitItmOwlComponent implements OnInit {

  constructor(private produitService :ProduitService) { }
  produits : Produit[] =[]

  ngOnInit() {
    this.produitService.getAll().subscribe((data)=>{

      this.produits=(data as Produit[])})

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
   
   

}
