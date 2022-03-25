import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ProductService } from 'src/app/core/services/product.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers:[ConfirmationService,MessageService]
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", [Validators.required, Validators.minLength(2)]],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required],
      quantityPerUnit: ["", Validators.required]
    })
  }

  add() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        if (this.productAddForm.valid) {
          this.productService.add(this.productAddForm.value).subscribe(data => {
            this.messageService.add({severity:'success', summary: 'Başarılı!', detail: 'Ürün eklendi'});
          })
        } else {
            this.messageService.add({severity:'error', summary: 'Hata!', detail: 'Form geçersiz'});
        }
      }
    });

  }

}
