import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test_image',
  templateUrl: './test_image.component.html',
  styleUrls: ['./test_image.component.css']
})
export class Test_imageComponent implements OnInit {
  urlink:string="assets/image/o.jpg";
  selectFiles(event : any){
    if(event.target.files){

      var reader =new FileReader()
      reader.readAsDataURL(event.target.files[0])
    
  
      reader.onload=(ev:any)=>{
       
        this.urlink=ev.currentTarget.result
      }
    }
  }

  
  constructor() { }

  ngOnInit() {
  }




}
