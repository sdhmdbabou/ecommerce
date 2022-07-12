import { Component, OnInit } from '@angular/core';
import { Command } from 'src/app/interface/command';
import { CommandService, commandStatus } from 'src/app/services/command.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
total=0
totalAVT=0
ShippingCharge=CommandService.ShippingCharge
isLunch=false

submitText="lunche"
state=commandStatus.default
 

command?:Command
  constructor(private commandservice:CommandService) { }



  ngOnInit(): void {
    this.commandservice.commandOb().subscribe((data)=>{
      this.command=data
      this.total= CommandService.getTotal(data);
      this.totalAVT=CommandService.TotalAVT(data)
    })

this.commandservice.getStatusOb().subscribe((state)=>{
  this.state=state
  if(state==commandStatus.lunching){
    this.submitText="loding..."
  }
  else if(state==commandStatus.lunched){
    this.submitText="complited"
  }
  else if(state==commandStatus.default){
    this.submitText="lunche"
  }
});
  
   
    
  }
  lunch (){
    if(this.state==commandStatus.default){
    this.commandservice.lanchCommand();

    }
    
    
    
  }


  



}
