import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginModel } from 'src/app/Model/login';
import { OnlyLogin } from 'src/app/Model/onlylogin';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  private url:String="http://localhost:9001/customer"

  registration(model: loginModel){
    return this.http.post(`${this.url}/register`,model,{responseType:"text"});
  }

  login(model:OnlyLogin){
    return this.http.post(`${this.url}/login`,model,{responseType:"text"});
  }
}
