import { Component } from '@angular/core';
import {ForexcalService} from './service/forexcal.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forexDay20';
  selectedfrom:String='';
  selectedto:String='';
  amountentered!:number;
  cal1!:number;
  private fservice: ForexcalService=new ForexcalService();
  from(event:any)
  {
    this.selectedfrom=event.target.value;
  }
  to(event:any)
  {
    this.selectedto=event.target.value;
  }
  cal()
    {
    if(this.selectedfrom=='INR' && this.selectedto=='EUR')
    {
       this.cal1=this.fservice.InrToEur(this.amountentered);
    }
    else if(this.selectedfrom=='INR' && this.selectedto=='USD')
    {
      this.cal1=this.fservice.InrToUsd(this.amountentered); 
    }
    else if(this.selectedfrom=='EUR' && this.selectedto=='INR')
    {
      this.cal1=this.fservice.EurToInr(this.amountentered); 
    }
    else if(this.selectedfrom=='EUR' && this.selectedto=='USD')
    {
      this.cal1=this.fservice.EurToUsd(this.amountentered); 
    }
    else if(this.selectedfrom=='USD' && this.selectedto=='INR')
    {
      this.cal1=this.fservice.UsdToInr(this.amountentered); 
    }
    else if(this.selectedfrom=='USD' && this.selectedto=='EUR')
    {
      this.cal1=this.fservice.UsdToEur(this.amountentered); 
    }
    else
    {
      this.cal1=this.amountentered;
    }
    
  }
  
  
 }
  
  


