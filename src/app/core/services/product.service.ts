import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ProductAddModel from '../models/productAddModel';
import ProductDetailModel from '../models/productDetailModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl:string ="http://localhost:5026/api/Products/";
  //http://localhost:5026/api/Products/getallbycategory/2
  constructor(private httpClient : HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get<Observable<any>>(this.apiUrl+"getall");
  }

  getById(id:number):Observable<ProductDetailModel>{
    return this.httpClient.get<ProductDetailModel>(this.apiUrl+"getbyid/"+id);
  }

  getByCategory(categoryid:number){
    return this.httpClient.get<ProductDetailModel>(this.apiUrl+"getallbycategory/"+categoryid);
  }

  add(product:ProductAddModel){
    return this.httpClient.post(this.apiUrl+"add",product)
  }
}
