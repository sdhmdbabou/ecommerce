import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CommandService } from 'src/app/services/command.service';
import { TokenGetterService } from 'src/app/services/token-getter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  c?:number
  isloggin:boolean=false
  navbarCollapsed=true
  
  
  constructor(private commandservice:CommandService, private tokenG :TokenGetterService,private authser:AuthServiceService) { }

  ngOnInit(): void {
this.tokenG.islogginAsOb().subscribe((data:boolean)=>{
  this.isloggin=data
})
    
    this.commandservice.counterOb().subscribe((data:number)=>{
      this.c=data

    })
  }
  logout(){
    return this.authser.signout()
  }
  
}
