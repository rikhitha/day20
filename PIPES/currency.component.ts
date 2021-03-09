import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  value:number=234;
  inr:String="INR";
  usd:String="USD";
  eur:String="EUR";
  

  constructor() { }

  ngOnInit(): void {
  }

}
