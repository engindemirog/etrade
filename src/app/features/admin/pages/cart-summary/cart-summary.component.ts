import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import ProductAddModel from 'src/app/core/models/productAddModel';
import { RemoveProduct } from 'src/app/core/store/cart-actions';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cart :ProductAddModel[]
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.store.select("cartReducer").subscribe(state=>this.cart = state)
  }

  removeFromCart(product:ProductAddModel){
    this.store.dispatch(new RemoveProduct(product))
  }

}
