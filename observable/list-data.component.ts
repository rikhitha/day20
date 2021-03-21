import { Component, OnInit } from '@angular/core';
import { Datainterface } from 'projects/observable/interfaces/datainterface';
import { DataserviceService } from 'projects/observable/services/dataservice.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

  datalist!:Datainterface[];


  constructor(private dataserv:DataserviceService) { }

 
  

  ngOnInit(): void 
  {
    
    

  }
  getdetails(v:any)
  {
    this.dataserv.getdatalist().pipe(
      map(data=>data.filter(d=>d.currency!=v))
    ).subscribe((val)=>
    {
      this.datalist=val;
    }
    );

  }

}
