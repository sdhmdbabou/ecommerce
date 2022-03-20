import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './serviceForm.component.html',
  styleUrls: ['./serviceForm.component.css']
})
export class ServiceFormComponent implements OnInit {
   saveUsername=false;
 
  constructor() { 
    
  }

  ngOnInit() {
  }



  public onSaveUsernameChanged(value:boolean){
      this.saveUsername = value;
    console.log( value)}
   
}
