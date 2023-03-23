import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bank_frontend';

  constructor(private bnIdle:BnNgIdleService, private router:Router){}
  ngOnInit(){

    if(localStorage.getItem("bank_token")!=null ){

      //Session Management Implemented -> User will automatically be logged out after 60 seconds of inactivity 

      this.bnIdle.startWatching(300).subscribe((isTimedOut:boolean) =>{
        if(isTimedOut){
          alert("Session Expired");
          localStorage.removeItem("bank_token");
          location.replace("/home");
         
        }
      });
    }
    else if( localStorage.getItem("customer_token")!=null){
      alert("Session Expired");
      localStorage.removeItem("customer_token");
      location.replace("/home");
    }
    else{
      this.bnIdle.stopTimer();
    }
  }




}
