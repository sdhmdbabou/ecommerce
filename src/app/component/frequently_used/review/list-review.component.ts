import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/interface/review';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class listReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reviews:Review[]=[
    {id:1,ratting:3,message:"goood gogb",date:"20-03-2021",reviewee:0,reviewer:1,reviewer_u:{user:1,
      isMale:false,
      imageUrl:"assets/image/a.jpg",
      phone:"",
      name:"sidi",
      description:"dfssdfsdfsdfdsfdsfdfdsfdsfsdfdsfsd",
      type:"",
      ratting:3,
      id:1,
      info_id:1,
      images:null}}
  ]

}
