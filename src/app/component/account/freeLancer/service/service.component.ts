import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
   saveUsername=false;
 
  constructor() { 
    
  }

  ngOnInit() {
  }



  public onSaveUsernameChanged(value:boolean){
      this.saveUsername = value;
    console.log( value)}
   
}
