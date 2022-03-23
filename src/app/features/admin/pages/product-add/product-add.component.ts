import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private productService:ProductService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["",[Validators.required,Validators.minLength(2)]],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required],
      quantityPerUnit:["",Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
      this.productService.add(this.productAddForm.value).subscribe(data=>{

      })
    }else{
      console.log("form geçersiz")
    }
  }

}
