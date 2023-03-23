import { BankLoginModel } from './../../Model/bankLoginModel';
import { OnlyLogin } from 'src/app/Model/onlylogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankLoginService {

  constructor(private http:HttpClient) { }
  
  url="http://localhost:9002/Admin";

  bankLogin(model:BankLoginModel){
    console.log(model);
    return this.http.post(`${this.url}/login`,model,{responseType:"text"});
  }
}
