import { Component, Input, OnInit } from '@angular/core';
import { ServiceCategory } from 'src/app/interface/service-category';

@Component({
  selector: 'app-category-service',
  templateUrl: './category-service.component.html',
  styleUrls: ['./category-service.component.css']
})
export class CategoryServiceComponent implements OnInit {
@Input() cat_service:ServiceCategory|null=null
  constructor() { }

  ngOnInit() {
  }

}
