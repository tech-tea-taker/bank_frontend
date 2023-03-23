import { AccountDetailsModel } from './../Model/AccountDetailsModel';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction/transaction.service';
import { TransactionModel } from '../Model/transactionModel';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})

export class TransactionPageComponent implements OnInit{
  model:TransactionModel=new TransactionModel();
  accountDetailsModel: AccountDetailsModel =new AccountDetailsModel();

  constructor(private service:TransactionService){}

  ngOnInit(): void {
    this.onGetAccoutDetails();
  }

  ontranaction(){
    const userid=localStorage.getItem("user_id");
    if(userid!=null){
  this.service.sentMoney(this.model,userid).subscribe(
    (res:any)=>{
   console.log(res);
    }
  );
    }
  }

  onGetAccoutDetails(){
    const userid=localStorage.getItem("user_id");
    if(userid!=null){
    this.service.geAccountDetails(userid).subscribe(
      (res:any)=>{
         this.accountDetailsModel=res;
         this.model.senderAccountNo=this.accountDetailsModel.account_number;
         this.model.sendertotalBalance=this.accountDetailsModel.totalAmount;
      }
    );
  }
}

}
