import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
k:number=0
  constructor(private serve:TestService) { }

  ngOnInit(): void {
    this.serve.getA().subscribe((value)=>{
      this.k=value;
    })
  }



}
