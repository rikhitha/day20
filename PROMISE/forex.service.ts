import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForexcalService {

  constructor() { }
  public InrToEur(x:number)
  {
    return x*0.01150;
  }
  public InrToUsd(x:number)
  {
    return x*13.66;
  }
  public EurToInr(x:number)
  {
    return x*86.94;
  }
  public EurToUsd(x:number)
  {
    return x*1.19;
  }
  public UsdToInr(x:number)
  {
    return x*73.34;
  }
  public UsdToEur(x:number)
  {
    return x*0.84;
  }
}
