import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private service:LoginServiceService,
             private router:Router){}

login(data:NgForm){
 this.service.login(data.value).subscribe(
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
    localStorage.setItem("customer_token",res);
    localStorage.setItem("user_id",data.value["userID"]);
    this.router.navigate(["/main"]);
    }
  }
 );
}

}
