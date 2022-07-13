import { Component, OnInit } from '@angular/core';




import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string=""
  password:string=""

  constructor(private auths:AuthServiceService ) { }

  isNew:boolean = true;
  ngOnInit(): void {}

   changeScreen(){
    this.isNew = !this.isNew;
  }
  signIn(){
    console.log(this.username,this.password)
this.auths.sigIn(this.username,this.password)
  }
  
}