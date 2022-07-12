import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../interface/produit';
import { StorageService } from './storege.service';



import { Urls } from './urls';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produit!: Produit;
  
  constructor(private http:HttpClient,private storge: StorageService) { }


  getAll(){

      return this.http.get(Urls.Produit_url) ;
    
       
  }
 async addProduit(){
    const resp=this.http.post(Urls.Produit_url,{
      "produit":this.produit,
      
    })

  }
}
