import { Component, OnInit } from '@angular/core';
import { Command } from 'src/app/interface/command';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  value = 0;
command!:Command
  constructor(private commandservice:CommandService) { }

  ngOnInit(): void {
    this.commandservice.commandOb().subscribe((data)=>{
      this.command=data
    })
    // , this.value = this.commandservice.getItemNbr(this.command!.items[this.value].produit)
  }


  handleMinus() {
 this.value--;
   
      
  }
  handlePlus() {
    this.value++;    
  }

}
