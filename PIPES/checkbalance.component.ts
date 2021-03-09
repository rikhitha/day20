import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit {
  accntnum:number=987654321;

  constructor() { }

  ngOnInit(): void {
  }

}
