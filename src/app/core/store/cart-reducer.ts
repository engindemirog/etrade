import ProductAddModel from "../models/productAddModel";
import { CartActions, CartActionTypes } from "./cart-actions";

export let initialState : ProductAddModel[]=[];

export function cartReducer(state=initialState,action:CartActions){
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return [...state,action.payload]
    case CartActionTypes.REMOVE_PRODUCT:
      let product = action.payload;
      return state.filter((p)=>p.productName!=product.productName)
    default:
      return state;
  }
}
