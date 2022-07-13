import { Injectable } from '@angular/core';
import { RequestServiceService } from './request-service.service';
import { Urls } from './urls';
@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {

  constructor(private  request :RequestServiceService) { }
  sigIn(username:string,password:string){
   this.request.post(Urls.getToken_url,{"username":username,"password":password}).subscribe(
    (data:any)=>{
      localStorage.setItem("access",data['access'])
      localStorage.setItem("refresh",data['refresh'])
      console.log(data)

    }
   )

  }
}
