import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customerclass } from '../classes/customerclass';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  cusid!:number;
  cuscuscid!:string;
  cusamount!:number;
  cuscurrency!:string;
  cusfrom!:number;
  custo!:number;
  cusbankcharge!:number;
  cusdburl="http://localhost:3000/customer";


  constructor(private http:HttpClient) { }

  cusgetdata()
  {
    return this.http.get<Customerclass []>(this.cusdburl)
  }
}
