import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryListModel } from '../models/categoryListModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl:string ="http://localhost:5026/api/Categories/getall";

  constructor(private httpClient : HttpClient) { }

  getAll():Observable<CategoryListModel[]>{
    return this.httpClient.get<CategoryListModel[]>(this.apiUrl);
  }
}
