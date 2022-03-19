import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popularproducts',
  templateUrl: './popularproducts.component.html',
  styleUrls: ['./popularproducts.component.css']
})
export class PopularproductsComponent implements OnInit {

  products= []

  constructor() { }

  ngOnInit(): void {
  }

}
