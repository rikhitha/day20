import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Bankclass } from 'projects/forex/classes/bankclass';
import { Customerclass } from 'projects/forex/classes/customerclass';
import { BankserviceService } from 'projects/forex/service/bankservice.service';
import { CustomerserviceService } from 'projects/forex/service/customerservice.service';
import { ForexcalService } from 'projects/forex/service/forexcal.service';
import { UnitService } from 'projects/forex/service/unit.service';


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

  uselectedfrom:String='';
  uselectedto:String='';
  uvalueentered!:number;
  ucal1!:number;


  countryid!:string;
  cid!:string; 
  customertype!:string;
  creditcardtype!:string;
  currency!:string;
  country!:string;
  city!:string;
  dburl="http://localhost:3000/data";
  con:Bankclass[]=[];


  cusid!:number;
  cuscuscid!:string;
  cusamount!:number;
  cuscurrency!:string;
  cusfrom!:number;
  custo!:number;
  cusbankcharge!:number;
  cusdburl="http://localhost:8000/customer";
  cuscon:Customerclass []=[];
  cuscur!:string;


  constructor(private cusserv:CustomerserviceService,private serv:BankserviceService,private http:HttpClient)
  {
    
    
  }
  cgetjsondata()
  {
    this.cusserv.cusgetdata().toPromise().then((data)=>
    {
      this.cuscon=data;
    })
  }


  getjsondata()
  {
    this.serv.getdata().toPromise().then((data)=>
    {
       this.con=data;
    })
  }
  
  
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
  private uservice:UnitService=new UnitService();
  ufrom(event:any)
  {
    this.uselectedfrom=event.target.value;
  }
  uto(event:any)
  {
    this.uselectedto=event.target.value;
  }
  ucal()
    {
    if(this.uselectedfrom=='CM' && this.uselectedto=='M')
    {
       this.ucal1=this.uservice.cmTom(this.uvalueentered);
    }
    else if(this.uselectedfrom=='CM' && this.uselectedto=='FEET')
    {
      this.ucal1=this.uservice.cmTofeet(this.uvalueentered); 
    }
    else if(this.uselectedfrom=='FEET' && this.uselectedto=='CM')
    {
      this.ucal1=this.uservice.feetTocm(this.uvalueentered); 
    }
    else if(this.uselectedfrom=='FEET' && this.uselectedto=='M')
    {
      this.ucal1=this.uservice.feetTom(this.uvalueentered); 
    }
    else if(this.uselectedfrom=='M' && this.uselectedto=='CM')
    {
      this.ucal1=this.uservice.mTocm(this.uvalueentered); 
    }
    else if(this.uselectedfrom=='M' && this.uselectedto=='FEET')
    {
      this.ucal1=this.uservice.mTofeet(this.uvalueentered); 
    }
    else
    {
      this.ucal1=this.uvalueentered;
    }
    
  
  
 }
}
  
  


