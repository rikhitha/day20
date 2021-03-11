import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  public  valban(x:any)
  {
    var bannedcurrency:string[];
    bannedcurrency=["EUR","USD"];
    return bannedcurrency;


  }
  public amount()
  {
    return 100000;
  }
  public accounts()
  {
    var blockedaccounts:number[];
    blockedaccounts=[1234567,987654,23456];
    return blockedaccounts;
  }
}
