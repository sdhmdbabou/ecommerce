import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private b:TestService) { }

  ngOnInit(): void {
  }
  add(){
    this.b.add();
  }
  minuis(){
    this.b.minaze();
  }

}
