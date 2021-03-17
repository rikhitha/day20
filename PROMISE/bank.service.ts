
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bankclass } from '../classes/bankclass';

@Injectable({
  providedIn: 'root'
})
export class BankserviceService 
{
    countryid!:string; 
    customertype!:string;
    creditcardtype!:string;
    currency!:string;
    country!:string;
    city!:string;
    dburl="http://localhost:8000/data";

  constructor(private http:HttpClient) { }
  getdata()
  {
    return this.http.get<Bankclass[]>(this.dburl)
  }
}
