import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  constructor(private router:Router){}

  logout(){
  localStorage.removeItem("customer_token");
  this.router.navigateByUrl("/home");
  }

}
