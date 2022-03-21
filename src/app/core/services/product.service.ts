import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ProductDetailModel from '../models/productDetailModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl:string ="http://localhost:5026/api/Products/";

  constructor(private httpClient : HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get<Observable<any>>(this.apiUrl+"getall");
  }

  getById(id:number):Observable<ProductDetailModel>{
    return this.httpClient.get<ProductDetailModel>(this.apiUrl+"getbyid/"+id);
  }
}
