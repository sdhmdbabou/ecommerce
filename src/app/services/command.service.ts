import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Command } from '../interface/command';
import { CommandItem } from '../interface/command-item';
import { Produit } from '../interface/produit';
import { Urls } from './urls';


@Injectable({
  providedIn: 'root'
})
export class CommandService {
  static  ShippingCharge=100

private counter= new BehaviorSubject<number>(0)
private command= new BehaviorSubject<Command>(
  {id:0,
   date:Date.now().toString(),
   isComplite:false,
   iscanceled:false,
   user:1,
   items:[]
}
)
private status=new BehaviorSubject<commandStatus>(commandStatus.default)

  

constructor(private http:HttpClient,) { }

getStatusOb(){
  return this.status.asObservable();
}

counterOb(){
  return this.counter.asObservable();
}
commandOb(): Observable<Command>{
  return this.command.asObservable();
}
addToCounter(n:number){
  let c:number=this.counter.getValue()
  this.counter.next(c+n)


}

   getItemNbr(idProduit:number) {
     
     let c=this.command.getValue()
    
     for (var item of c.items){
       if(item.produit==idProduit){
        return item.nbr
       }
       
     }
     return 0
    


   } 
    

  
modufyItem(p:Produit,n:number){
  let nbr = n-this.getItemNbr(p.id)
  this.addToCounter( nbr)
  
let commende=this.command.getValue()
for (var i =0 ; i<commende.items.length; i++){
  if(commende.items[i].produit==p.id){
    

    commende.items[i].nbr=n
    if(n == 0)commende.items.splice(i,1)
    this.command.next(commende)
   return 
  }
} 

 commende.items.push({
  id: 0,
  nbr: n,
  produit: p.id,
  command: 0,
  produitObject:p
  
})

this.command.next(commende)
}

incrument(p:Produit){
  let nbr=this.getItemNbr(p.id)+1
  this.modufyItem(p,nbr)
}
decrument(p:Produit){
  let nbr=this.getItemNbr(p.id)-1
  this.modufyItem(p,nbr)
}

static getTotal(command:Command){
  var total =0;


  for (var item of command.items){
     total+=item.produitObject!.price*item.nbr
  
  }   
  return total

}
static TotalAVT(command:Command){
  var TotalAVT=this.getTotal(command)+this.ShippingCharge
  return TotalAVT

}
 async lanchCommand(){
  this.status.next(commandStatus.lunching);
 const responce= await  this.http.post(Urls.SaveCommand_url,{
   "command":this.command.getValue(),
   'items': this.command.getValue().items
  },{observe: 'response'})  
 responce.subscribe((r )=>{
   if(r.status == 200){
     this.status.next(commandStatus.lunched);
   }
   else{
    this.status.next(commandStatus.default);
   }
  
  
 })


  
}


}

export enum commandStatus {
  lunched,
  lunching,
  default,
}