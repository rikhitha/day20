import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formatcreditcard',
  templateUrl: './formatcreditcard.component.html',
  styleUrls: ['./formatcreditcard.component.css']
})
export class FormatcreditcardComponent implements OnInit {
  cardnum:number=787196831342689;

  constructor() { }

  ngOnInit(): void {
  }

}
