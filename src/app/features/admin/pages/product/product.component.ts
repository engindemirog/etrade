import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/core/services/product.service';
import { AddProduct, CartActionTypes } from 'src/app/core/store/cart-actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = []
  isLoading: boolean = true

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private store:Store) { }

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

  addToCart(product){
    this.store.dispatch(new AddProduct(product))
  }

}
