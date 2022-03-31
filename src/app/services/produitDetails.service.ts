import { Injectable } from '@angular/core';
import { Produit } from '../interface/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitDetailsService {
  private  selectedProduct? :Produit
constructor() { }

getSelectedProdit(){
  return this.selectedProduct
}
setSelectedProduit(p:Produit ){
  this.selectedProduct=p
}

}
