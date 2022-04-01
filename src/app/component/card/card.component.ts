import { Component, OnInit } from '@angular/core';
import { Command } from 'src/app/interface/command';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
total=0
totalAVT=0
ShippingCharge=CommandService.ShippingCharge
 

command?:Command
  constructor(private commandservice:CommandService) { }



  ngOnInit(): void {
    this.commandservice.commandOb().subscribe((data)=>{
      this.command=data
      this.total= CommandService.getTotal(data);
      this.totalAVT=CommandService.TotalAVT(data)
    })


   
   
     
  }

  



}
