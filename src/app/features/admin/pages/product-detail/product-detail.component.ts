import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductDetailModel from 'src/app/core/models/productDetailModel';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:ProductDetailModel

  constructor(private activatedRoute:ActivatedRoute
    , private productService:ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getById(params["id"]).subscribe(data=>{
        this.product = data;
      })
    })
  }

}
