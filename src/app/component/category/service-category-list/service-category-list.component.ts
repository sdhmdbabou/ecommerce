import { Component, OnInit } from '@angular/core';

import { ServiceCategory } from 'src/app/interface/service-category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-service-category-list',
  templateUrl: './service-category-list.component.html',
  styleUrls: ['./service-category-list.component.css']
})
export class ServiceCategoryListComponent implements OnInit {
  categoryservice:ServiceCategory[]=[]

  constructor(private category:CategoryService ) { }

  ngOnInit() {
    this.category.getAllServiceCategory().subscribe((service)=>{
      this.categoryservice=(service as ServiceCategory[])
      console.log(service)
      alert("succesful")
    })

  }

}
