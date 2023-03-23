import { loginModel } from './../../Model/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankCustomerService {

  constructor(private http:HttpClient) { }

  url="http://localhost:9002"

  approval(id:String ){
    const tkn= localStorage.getItem('bank_token');
    if(tkn!=null){
    const head=new HttpHeaders({Authorization:"Bearer "+tkn});
    return this.http.get(`${this.url}/customer/approval/${id}`,{responseType:"text",headers:head});
    }
    else{
     return this.http.get(`${this.url}/customer/error`,{responseType:"text"});
    }
  }

  disapproval(id:String ){
    const tkn= localStorage.getItem('bank_token');
    if(tkn!=null){
    const head=new HttpHeaders({Authorization:"Bearer "+tkn});
    return this.http.get(`${this.url}/customer/disapproval/${id}`,{responseType:"text",headers:head});
    }
    else{
     return this.http.get(`${this.url}/customer/error`,{responseType:"text"});
    }
  }

  getAll(){
    const tkn= localStorage.getItem('bank_token');
    if(tkn!=null){
    const head=new HttpHeaders({Authorization:"Bearer "+tkn});
  return this.http.get(`${this.url}/customer/all`,{headers:head});
    }
    else{
      return this.http.get(`${this.url}/customer/error`,{responseType:"text"});
    }
  }

  createAccount(id:String){
    const tkn= localStorage.getItem('bank_token');
    if(tkn!=null){
    const head=new HttpHeaders({Authorization:"Bearer "+tkn});
  return this.http.get(`${this.url}/customer/account/details/create/${id}`,{headers:head, responseType:"text"});
    }
    else{
      return this.http.get(`${this.url}/customer/error`,{responseType:"text"});
    }
  }

  getAllAccounts(){
    const tkn= localStorage.getItem('bank_token');
    if(tkn!=null){
    const head=new HttpHeaders({Authorization:"Bearer "+tkn});
  return this.http.get(`${this.url}/customer/account/details/allaccounts`,{headers:head});
    }
    else{
      return this.http.get(`${this.url}/customer/error`,{responseType:"text"});
    }
  }

  sentEmail(id:String){
    const tkn= localStorage.getItem('bank_token');
    if(tkn!=null){
    const head=new HttpHeaders({Authorization:"Bearer "+tkn});
  return this.http.get(`${this.url}/email/sent/${id}`,{headers:head,responseType:"text"});
    }
    else{
      return this.http.get(`${this.url}/customer/error`,{responseType:"text"});
    }
  }
  }
  

