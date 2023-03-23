import { Router } from '@angular/router';
import { AccountDetailsModel } from './../Model/AccountDetailsModel';
import { loginModel } from './../Model/login';
import { BankCustomerService } from './../services/bank_customer_details/bank-customer.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bank-approval',
  templateUrl: './bank-approval.component.html',
  styleUrls: ['./bank-approval.component.css']
})
export class BankApprovalComponent implements OnInit{

  model:loginModel[];

  AccountModel: AccountDetailsModel[];
  

  constructor(private service:BankCustomerService,private router:Router){}

  ngOnInit() {
  this.getAll();
  this.getAllAccounts();
  }

getAll(){
  this.service.getAll().subscribe(
    (res:any)=>{
     this.model=res;
    }
  );
}

onApprove(id:String){
  this.service.approval(id).subscribe(
    (res:any)=>{
      this.ngOnInit();
      this.service.createAccount(id).subscribe(
        (resp:any)=>{
          this.service.sentEmail(id).subscribe(
            (data:any)=>{
              console.log(data);
            }
          );
        }
      );
    }
  );
}

onDisapprove(id:String){
  this.service.disapproval(id).subscribe(
    (res:any)=>{
      this.ngOnInit();

    }
  );
}

getAllAccounts(){
 this.service.getAllAccounts().subscribe(
  (res:any)=>{
    this.AccountModel=res;
  }
 );
}

logout(){
localStorage.removeItem("bank_token");
this.router.navigate(["/home"]);
}


}
