import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { RequestServiceService } from './request-service.service';

import { Urls } from './urls';

@Injectable({
  providedIn: 'root'
})
export class TokenGetterService {

  
  constructor(private req :RequestServiceService ) { }


  isAuth(){
    var access =localStorage.getItem("access") 

    if(access==null){
      return false

    }

    var jwt = new JwtHelperService()

    var refresh =localStorage.getItem("refresh")

     return  !jwt.isTokenExpired(access) ||  !jwt.isTokenExpired(refresh!)

    
    
  
  
  }
  refresh(){  
    
    var refresh =localStorage.getItem("refresh")
    if(refresh==null){
     
      localStorage.removeItem("access")
      localStorage.removeItem("refresh")

    }
  var access =localStorage.getItem("access") 
  var jwt = new JwtHelperService()
 if(jwt.isTokenExpired(access!)) {
   this.req.post(Urls.refresh_token_url,{'refresh':refresh}).subscribe(
    (data:any)=>{
      localStorage.setItem("access",data['access'])
      localStorage.setItem("refresh",data['refresh'])}
   )
 }

    
  }

}
