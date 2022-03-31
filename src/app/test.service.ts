import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
public a=new BehaviorSubject<number>(0);
  constructor() { }

  add(){
    let n :number=  this.a.getValue()
    this.a.next(n+1);
  }
  minaze(){
    let n :number=  this.a.getValue()
    this.a.next(n-1);
  }

  getA(){
    return this.a.asObservable()
  }
}
