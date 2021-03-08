import { Component } from '@angular/core';
import {UnitService} from './service/unit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unitconv';
  selectedfrom:String='';
  selectedto:String='';
  valueentered!:number;
  cal1!:number;
  private uservice: UnitService=new UnitService();
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
    if(this.selectedfrom=='CM' && this.selectedto=='M')
    {
       this.cal1=this.uservice.cmTom(this.valueentered);
    }
    else if(this.selectedfrom=='CM' && this.selectedto=='FEET')
    {
      this.cal1=this.uservice.cmTofeet(this.valueentered); 
    }
    else if(this.selectedfrom=='FEET' && this.selectedto=='CM')
    {
      this.cal1=this.uservice.feetTocm(this.valueentered); 
    }
    else if(this.selectedfrom=='FEET' && this.selectedto=='M')
    {
      this.cal1=this.uservice.feetTom(this.valueentered); 
    }
    else if(this.selectedfrom=='M' && this.selectedto=='CM')
    {
      this.cal1=this.uservice.mTocm(this.valueentered); 
    }
    else if(this.selectedfrom=='M' && this.selectedto=='FEET')
    {
      this.cal1=this.uservice.mTofeet(this.valueentered); 
    }
    else
    {
      this.cal1=this.valueentered;
    }
    
  }
}
