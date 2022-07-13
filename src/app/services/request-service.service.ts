import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class RequestServiceService {

  constructor(private http :HttpClient) {
    
   }
   
get(url:string){
  return this.http.get(url)

}

post(url:string,body:any){
  return this.http.post(
    url,body
  )
}
put(url:string,body:any){
  return this.http.put(url,body)
}
delet(url:string,body:any){
  return this.http.delete(url)
}

}
