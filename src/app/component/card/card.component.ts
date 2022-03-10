import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = 0;

  handleMinus() {
 this.value--;
   
      
  }
  handlePlus() {
    this.value++;    
  }
}
