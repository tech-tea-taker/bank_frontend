import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { loginModel } from '../Model/login';
import { LoginServiceService } from '../services/login/login-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   model:loginModel=new loginModel();

  constructor(private service:LoginServiceService){}

  Registration(data:NgForm){
  this.service.registration(data.value).subscribe(
    (res)=>{
      console.log(res);
    }
  );
  console.log(data.value);
  }

}
