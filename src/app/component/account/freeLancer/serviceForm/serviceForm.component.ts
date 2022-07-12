import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BienCategory } from 'src/app/interface/bien-category';
import { Service } from 'src/app/interface/service';
import { ServiceCategory } from 'src/app/interface/service-category';
import {  TypeServiceCategory } from 'src/app/interface/type-service-category';
import { CategoryService } from 'src/app/services/category.service';
import { Urls } from 'src/app/services/urls';

@Component({
  selector: 'app-service',
  templateUrl: './serviceForm.component.html',
  styleUrls: ['./serviceForm.component.css']
})
export class ServiceFormComponent implements OnInit {
  
  
   saveUsername=false;
 a:ServiceCategory={
   description:"",
   id:0,
   imageUrl:"",
   name:"hhh"

 }
 service:Service = {
   price:0,
title:"s",
deliveryDays:2,
expressPrice:1,
created:"",
description:"sd",
disabled:false,
expressDeliveryDays:1,
hasExpress:false,
id:0,
typeService:1,
user:1


  
 }

 categories:ServiceCategory[] = []
 types:TypeServiceCategory[] = []
  constructor(private categoryService:CategoryService, private http:HttpClient) { 
    
  }

  ngOnInit() {
    this.categoryService.getAllServiceCategory().subscribe((data)=>{
      this.categories = data as ServiceCategory[]
      console.log(data)
    })

  }



  public onSaveUsernameChanged(value:boolean){
      this.saveUsername = value;
    console.log( value)}


    changeSuit(ev : any) {

      console.log(ev)
     let v = ev.target.value
    
     console.log(v as BienCategory)
     this.types= []
     if(v != null){
       this.categoryService.getServiceTypes(v).subscribe((data)=>{
         console.log(data)
         this.types = data as TypeServiceCategory[]
       })
     }
     
   



    //  else this.categoryService.getBienTypes(v.)
    }
    submitService(f:Service){
      this.http.post(Urls.Service_url,f).subscribe((data)=>{
        console.log("r",data)
      })
      console.log( "result",f)


    }
   
   
}
