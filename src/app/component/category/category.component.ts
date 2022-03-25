import { Component, OnInit } from '@angular/core';
import { BienCategory } from 'src/app/interface/bien-category';
import { ServiceCategory } from 'src/app/interface/service-category';
import { BienServiceSuitchService } from 'src/app/services/bien-service-suitch.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
   
    
  }

  categorysbien:BienCategory[]=[
    {id:1,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:2,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:3,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:4,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:5,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:6,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:7,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:8,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:9,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:10,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:11,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:12,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""}
  ]
  categoryservice:ServiceCategory[]=[
    {id:1,imageUrl:"assets/image/z.png",name:"hfdhdjh",description:""},
    {id:2,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:3,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:4,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:5,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:6,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:7,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:8,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:9,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:10,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:11,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""},
    {id:12,imageUrl:"assets/image/o.jpg",name:"hfdhdjh",description:""}
  ]
}
