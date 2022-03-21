import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = []
  isLoading: boolean = true

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params["categoryid"]) {
        this.productService.getByCategory(params["categoryid"]).subscribe(data => {
          this.isLoading = true
          this.products = data;
          this.isLoading = false
        })
      } else {
        this.productService.getAll().subscribe(data => {
          this.isLoading = true
          this.products = data;
          this.isLoading = false
        })
      }
    })


  }

}
