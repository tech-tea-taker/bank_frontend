import { Component, OnInit } from '@angular/core';
import { AccountDetailsModel } from '../Model/AccountDetailsModel';
import { TransactionService } from '../services/transaction/transaction.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit{

  accountDetailsModel: AccountDetailsModel =new AccountDetailsModel();


  constructor(private service:TransactionService){}

  ngOnInit(): void {
    this.onGetAccoutDetails();
  }

  onGetAccoutDetails(){
    const userid=localStorage.getItem("user_id");
    if(userid!=null){
    this.service.geAccountDetails(userid).subscribe(
      (res:any)=>{
         this.accountDetailsModel=res;
      }
    );
  }
}

}
