import { Component, Input, OnInit } from '@angular/core';
import { Command } from 'src/app/interface/command';
import { CommandItem } from 'src/app/interface/command-item';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent implements OnInit {
  @Input()  item!:CommandItem

 value = 0;
  constructor(private commandService:CommandService) { }

  ngOnInit() {
    this.value = this.item.nbr;
    

  }
 

  handleMinus() {
 this.commandService.decrument(this.item.produitObject!);
 this.value--;
   
      
  }
  handlePlus() {
    this.commandService.incrument(this.item.produitObject!);
    this.value++;
   
  }

}
