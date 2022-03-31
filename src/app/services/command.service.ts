import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Command } from '../interface/command';
import { CommandItem } from '../interface/command-item';
import { Produit } from '../interface/produit';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

public counter= new BehaviorSubject<number>(0)
public command= new BehaviorSubject<Command>(
  {id:0,
   date:Date.now().toString(),
   isComplite:false,
   iscanceled:false,
   user:0,
   items:[]
}
)


constructor() { }




cunterOb(){
  return this.counter.asObservable;
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
  this.addToCounter( n-this.getItemNbr(p.id))
let commende=this.command.getValue()
for (var item of commende.items){
  if(item.produit==p.id){
    item.nbr=n
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


}
