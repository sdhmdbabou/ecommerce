import { Component, OnInit } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/interface/produit';
import { ProduitDetailsService } from 'src/app/services/produitDetails.service';

@Component({
  selector: 'app-d-produit-item',
  templateUrl: './d-produit-item.component.html',
  styleUrls: ['./d-produit-item.component.css']
})
export class DProduitItemComponent implements OnInit {

produit? :Produit
value = 0;

  constructor( private actRoute: ActivatedRoute,private commandservice:CommandService,private produitService:ProduitDetailsService) { 
    
  }

  
  ngOnInit() {
    // this.actRoute.paramMap.subscribe((params) => {
    //   this.product_id = params.get('id')!;
    // })
    this.produit = this.produitService.getSelectedProdit()
    console.log(this.produit!.id);
    this.value = this.commandservice.getItemNbr(this.produit!.id)


    

  }
  modufyItem(){
    return this.commandservice.modufyItem(this.produit!,this.value);
  }


  handleMinus() {
 this.value--;
   
      
  }
  handlePlus() {
    this.value++;    
  }
 

}
