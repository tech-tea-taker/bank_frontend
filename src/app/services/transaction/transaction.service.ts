import { TransactionModel } from './../../Model/transactionModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }

  url="http://localhost:9001/transaction";


  sentMoney(model:TransactionModel,id:String){
    const token=localStorage.getItem("customer_token");
    const head=new HttpHeaders({"Authorization":"Bearer "+token})
  return this.http.post(`${this.url}/sent/${id}`,model,{responseType:"text",headers:head});
  }

  geAccountDetails(userid:String){
    const token=localStorage.getItem("customer_token");
    const head=new HttpHeaders({"Authorization":"Bearer "+token})
    return this.http.get(`${this.url}/account/details/${userid}`,{headers:head});
  }

  debitamount(acNo:String,startDate:String,endDate:String){
    const token=localStorage.getItem("customer_token");
    const head=new HttpHeaders({"Authorization":"Bearer "+token})
    return this.http.get(`${this.url}/account/debit/${acNo}/${startDate}/${endDate}`,{headers:head});
  }

  creditamount(acNo:String,startDate:String,endDate:String){
    const token=localStorage.getItem("customer_token");
    const head=new HttpHeaders({"Authorization":"Bearer "+token})
    return this.http.get(`${this.url}/account/credit/${acNo}/${startDate}/${endDate}`,{headers:head});
  }


}
