import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categorybienOrservice=false
  constructor() { }

  ngOnInit(): void {
  }
  public onSaveUsernameChanged(value:boolean){
    this.categorybienOrservice = value;
  console.log( value)}
 
  
}
