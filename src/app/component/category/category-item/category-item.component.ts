import { Component,Input ,OnInit } from '@angular/core';
import { BienCategory } from 'src/app/interface/bien-category';


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
@Input() category_bien?:BienCategory
image:string=""
titel:string=""


  constructor() { }

  ngOnInit() {
  }

}
