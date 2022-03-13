import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent {
 categorys =["1","2","3"]
 selected : string|null = null


  
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
  changeSuit(ev : any) {
   let v = ev.target.value
   this.selected=v == "null"? null:v
  }
  

  f(){
    console.log(this.selected)
  }
  
  
}

