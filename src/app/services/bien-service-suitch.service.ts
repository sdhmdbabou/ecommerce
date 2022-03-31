import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { Urls } from './urls';
@Injectable()
export class BienServiceSuitchService {
   
   behave=new BehaviorSubject<Boolean>(true)


constructor() {   
}

getObervable(){
    return this.behave.asObservable()
}

setvalue(bienSelected:boolean){
    
    this.behave.next(bienSelected)
    
}

}
