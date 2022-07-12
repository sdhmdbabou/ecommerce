import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from './urls';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  
  getAllServiceCategory(){
    return this.http.get(Urls.serviceCategory_url);
  
}
  
getAllBienCategory(){
  return this.http.get(Urls.bienCategory_url);
}

getBienTypes(idCategory:number){
  return this.http.get(Urls.bienCategoryTypesUrl(idCategory))
}

getServiceTypes(idCategory:number){
  return this.http.get(Urls.serviceCategoryTypesUrl(idCategory))
}


}