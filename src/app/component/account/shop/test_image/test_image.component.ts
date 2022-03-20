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
   
    produits : Produit[] = [
      {id: 1,title:"sss",imageUrl:"assets/image/a.jpg",description:"",disabled:false,price:200,typeProduit:1,user:1},
      {id: 2,title:"addd",imageUrl:"assets/image/b.jpg",description:"",disabled:false,price:200,typeProduit:1,user:1 },
      {id: 3,title:"ssdddds",imageUrl:"assets/image/z.png" ,description:"",disabled:false,price:200,typeProduit:1,user:1},
      {id: 4,title:"sss",imageUrl:"assets/image/o.jpg" ,description:"",disabled:false,price:200,typeProduit:1,user:1},
      {id: 5,title:"ssssddds",imageUrl:"assets/image/z.png" ,description:"",disabled:false,price:200,typeProduit:1,user:1 },
      {id: 6,title:"sss", imageUrl:"assets/image/z.png",description:"",disabled:false,price:200,typeProduit:1,user:1 },
      {id: 8,title:"sss", imageUrl:"assets/image/z.png" ,description:"",disabled:false,price:200,typeProduit:1,user:1}
    ];
  
  
  
}



