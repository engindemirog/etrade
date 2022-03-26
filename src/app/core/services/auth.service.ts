import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl:string ="http://localhost:5026/api/auth/";
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel):Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(this.apiUrl+"login",loginModel);
  }

  isAuthenticated(){

  }
}
