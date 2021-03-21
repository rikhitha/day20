import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datainterface } from '../interfaces/datainterface';
import { Status } from '../interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  dataurl="http://localhost:3000/data";
  statusurl="http://localhost:8000/applicationStatus";

  constructor(private http:HttpClient) { }
  public getdatalist():Observable<Datainterface[]>
  {
    return this.http.get<Datainterface[]>(this.dataurl);
  }
  public putstatus(s:Status):Observable<Status[]>
  {
     return this.http.post<Status[]>(this.statusurl,s);
  }
}
