import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent {
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
  
}

