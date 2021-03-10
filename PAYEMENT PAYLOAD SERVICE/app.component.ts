import { Component } from '@angular/core';
import customer from './customer.json';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tryjson';
  public countryList:{id:string, cid:string,amount:number,currency:string,from:number,to:number,bankcharge:number}[] =customer;
}
