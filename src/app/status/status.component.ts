import { loginModel } from 'src/app/Model/login';
import { DetailsService } from './../services/details/details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit{

  model:loginModel[];

  constructor(private service:DetailsService){}
  ngOnInit(): void {
   this.getall();
  }

  getall(){
    this.service.getAll().subscribe(
      (res:any)=>{
        this.model=res;
      }
    );
  }

}
