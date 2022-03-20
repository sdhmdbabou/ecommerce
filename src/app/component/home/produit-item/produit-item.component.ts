import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/interface/produit';

@Component({
  selector: 'app-produit-item',
  templateUrl: './produit-item.component.html',
  styleUrls: ['./produit-item.component.css']
})
export class ProduitItemComponent implements OnInit {
  @Input() produit :Produit | null = null;
  constructor() { 
  }

  ngOnInit() {
    console.log(this.produit)
  }

}
