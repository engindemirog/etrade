import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl:string ="http://localhost:5026/api/Products/getall";

  constructor(private httpClient : HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get<Observable<any>>(this.apiUrl);
  }
}
