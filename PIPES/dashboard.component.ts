import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  age='age calculation';
  in:number=3;
  birth:Date=new Date("1998-12-25");
  name='coxy susan';
  accntnum:number=787564312345;
  constructor(private route:Router) { }
  creditcard()
  {
    this.route.navigate(['formatcreditcard']);
  }
  currency()
  {
    this.route.navigate(['currency']);
  }
  balance()
  {
    this.route.navigate(['balance']);
  }
  

  

  ngOnInit(): void {
  }

}
