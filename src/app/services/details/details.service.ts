import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  url:String="http://localhost:9001/customer/details";

  constructor(private http : HttpClient) { }


  getAll(){
    return this.http.get(`${this.url}/all`);
  }

}
