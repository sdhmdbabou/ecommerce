import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Produit } from 'src/app/interface/produit';

@Component({
  selector: 'app-test_image',
  templateUrl: './test_image.component.html',
  styleUrls: ['./test_image.component.css']
})
export class Test_imageComponent implements OnInit {
  // image
  // urlink:string="assets/image/o.jpg";
  // selectFiles(event : any){
  //   if(event.target.files){

  //     var reader =new FileReader()
  //     reader.readAsDataURL(event.target.files[0])
    
  
  //     reader.onload=(ev:any)=>{
       
  //       this.urlink=ev.currentTarget.result
  //     }
  //   }
  // }

  
  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
   
    produits : Produit[] = []
  
  
  
}



