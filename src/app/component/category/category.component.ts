import { Component, OnInit } from '@angular/core';
import { BienCategory } from 'src/app/interface/bien-category';
import { ServiceCategory } from 'src/app/interface/service-category';
import { BienServiceSuitchService } from 'src/app/services/bien-service-suitch.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categorysbien:BienCategory[]=[]
  categoryservice:ServiceCategory[]=[]

  constructor(private category:CategoryService ) { }

  ngOnInit(): void {
    this.category.getAllBienCategory().subscribe((bien)=>{
      
      this.categorysbien= (bien as BienCategory[])
      console.log(bien)

    })

   
   
    
  }

}