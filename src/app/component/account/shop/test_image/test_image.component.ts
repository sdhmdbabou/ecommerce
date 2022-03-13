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
      console.log("1")
      console.log(event)
      console.log("2")
       console.log(event.target)
       console.log("3")
       console.log(event.target.files)

       console.log("4")
       console.log(reader)
      reader.onload=(ev:any)=>{
        console.log("5")
        console.log(ev)
        console.log("result")
        console.log(ev.currentTarget.result)
        this.urlink=ev.currentTarget.result
      }
    }
  }

  
  constructor() { }

  ngOnInit() {
  }




}
