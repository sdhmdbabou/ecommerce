import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Produit } from 'src/app/interface/produit';
import { ProduitDetailsService } from 'src/app/services/produitDetails.service';

@Component({
  selector: 'app-produit-item',
  templateUrl: './produit-item.component.html',
  styleUrls: ['./produit-item.component.css']
})
export class ProduitItemComponent implements OnInit {
  @Input() produit :Produit | null = null;
  constructor(private produitService:ProduitDetailsService,private router:Router) { 
  }

  ngOnInit() {
  }

  details(){
    this.produitService.setSelectedProduit(this.produit!);
    this.router.navigateByUrl('/d-produit-item');


  }

}
