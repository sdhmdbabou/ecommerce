import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  value = 0;

  handleMinus() {
 this.value--;
   
      
  }
  handlePlus() {
    this.value++;    
  }

}
