import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServiceService } from './request-service.service';
import { Urls } from './urls';
@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {

  constructor(private  request :RequestServiceService,private route:Router) { }
  sigIn(username:string,password:string){
   this.request.post(Urls.getToken_url,{"username":username,"password":password}).subscribe(
    (data:any)=>{
      localStorage.setItem("access",data['access'])
      localStorage.setItem("refresh",data['refresh'])
// navigate
this.route.navigateByUrl('/home')
      console.log(data)

    },
 (err)=>{
console.log(err)
 }
     
   )

  }


  // signout 
  signout(){
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    this.route.navigateByUrl('/login')

  }
  // delete token from storage and navogate to /
}
