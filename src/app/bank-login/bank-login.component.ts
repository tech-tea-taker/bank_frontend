import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BankLoginService } from './../services/bank_login/bank-login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-login',
  templateUrl: './bank-login.component.html',
  styleUrls: ['./bank-login.component.css']
})
export class BankLoginComponent {
  
  message:String;

  constructor(private service:BankLoginService,
              private router:Router){}


  onBankLogin(data:NgForm){
  
   this.service.bankLogin(data.value).subscribe(
    (res)=>{
      if(res=="user not authenticated"){
        alert(res);
      }
      else if(res=="email or password does not match"){
        alert(res);
      }
      else if(res=="there is an error"){
        alert(res);
      }
      else{
      this.router.navigate(["/bankApproval"]);
      localStorage.setItem("bank_token",res);
      
      }
      
    }
   );

  }

}
