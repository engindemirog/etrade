import { Action } from "@ngrx/store";
import ProductAddModel from "../models/productAddModel";


export enum CartActionTypes{
  ADD_PRODUCT ="ADD_PRODUCT",
  REMOVE_PRODUCT="REMOVE_PRODUCT"
}

export class AddProduct implements Action{
  readonly type: string = CartActionTypes.ADD_PRODUCT;

  constructor(public payload:ProductAddModel){

  }

}

export class RemoveProduct implements Action{
  readonly type: string = CartActionTypes.REMOVE_PRODUCT;

  constructor(public payload:ProductAddModel){

  }

}

export type CartActions = AddProduct | RemoveProduct
