import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestServiceService } from './request-service.service';

import { Urls } from './urls';

@Injectable({
  providedIn: 'root'
})
export class TokenGetterService {
isloggin :BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false)
  
  constructor(private req :RequestServiceService ) {

   }


  isAuth :boolean= false;


  isAuthenticated(){
    var access =localStorage.getItem("access") 

    if(access==null){
      this.isAuth = false
this.isloggin.next(this.isAuth)
      return this.isAuth 

    }

    var jwt = new JwtHelperService()

    var refresh =localStorage.getItem("refresh")

     this.isAuth =   !jwt.isTokenExpired(access) ||  !jwt.isTokenExpired(refresh!)
     this.isloggin.next(this.isAuth)

    return this.isAuth
    
    
  
  
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
      this.setToken(data['access'],data['refresh'])
    
    }
   )
 }

    
  }


  setToken(access:string ,refresh:string){
    localStorage.setItem("access",access)
    localStorage.setItem("refresh",refresh)
    this.isAuthenticated()
  }

  islogginAsOb(){
    return this.isloggin.asObservable()

  }
}
