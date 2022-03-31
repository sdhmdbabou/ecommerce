import { Component, OnInit } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  c?:number
  
  navbarCollapsed=true
  
  constructor(private commandservice:CommandService) { }

  ngOnInit(): void {

    this.commandservice.counter.subscribe((data:number)=>{
      this.c=data

    })
  }
  
  
}
