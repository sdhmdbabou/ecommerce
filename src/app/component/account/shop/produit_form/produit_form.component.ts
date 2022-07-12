import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interface/produit';
import { BienCategory } from 'src/app/interface/bien-category';
import { CategoryService } from 'src/app/services/category.service';
import { TypeBienCategory } from 'src/app/interface/type-bien-category';





@Component({
  selector: 'app-produit',
  templateUrl: './produit_form.component.html',
  styleUrls: ['./produit_form.component.css']
})

export class Produit_formComponent implements OnInit  {
  produit!:Produit


  image:any
  name = "lala"
 cc =  {description: "jkhkjh",
 id: 2,
 imageUrl: "https://firebasestorage.googleapis.com/v0/b/eproject-app.appspot.com/o/tests%2Fnew%2F160825536?alt=media&token=86215261-c203-48ba-8530-c008cc44cb64",
 name: "cars"}
 categorys : BienCategory[] =[

 ]
 types :TypeBienCategory[]=[]

 selected : string|null = null
 selectedCategory?:BienCategory

 selectedType?:TypeBienCategory


  
  urlink:string="assets/image/o.jpg";

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
    // this.categoryService.getAllBienCategory().subscribe((data)=>{
    //   console.log(data)
    //   this.categorys = data as BienCategory[]
    //   console.log(this.categorys)
    // })
    
  }
  selectFiles(event : any){
    if(event.target.files){

      var reader =new FileReader()
      this.image = event.target.files[0]
      reader.readAsDataURL(event.target.files[0])
    
  
      reader.onload=(ev:any)=>{
       
        this.urlink=ev.currentTarget.result
      }
    }
  }
  changeSuit(ev : any) {

    console.log(ev)
   let v = ev.target.value
   this.selected=v == "null"? null:v
   if(v == null) this.types = []
   console.log(v)
  
  //  else this.categoryService.getBienTypes(v.)
  }
  

  submitProduit(){
   
  }
  
  
}

