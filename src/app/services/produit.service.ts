import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Urls } from './urls';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  constructor(private http:HttpClient ) { }


  getAll(){

      return this.http.get(Urls.Produit_url) ;
    
       
  }
}
